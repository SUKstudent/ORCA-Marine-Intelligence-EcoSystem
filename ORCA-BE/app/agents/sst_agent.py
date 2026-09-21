import os
from datetime import datetime, timedelta

import copernicusmarine
import numpy as np
from dotenv import load_dotenv

load_dotenv()


# Approximate bounding boxes for the regions supported by ORCA.
# Format: (min_longitude, max_longitude, min_latitude, max_latitude)
REGIONS = {
    "Arabian Sea": (55.0, 75.0, 5.0, 25.0),
    "Bay of Bengal": (80.0, 100.0, 5.0, 25.0),
    "Indian Ocean": (40.0, 100.0, -30.0, 25.0),
    "Pacific": (120.0, -80.0, -40.0, 40.0),
    "Atlantic": (-80.0, 20.0, -40.0, 40.0),
    "Mediterranean": (-6.0, 37.0, 30.0, 46.0),
    "Arctic": (-180.0, 180.0, 66.0, 90.0),
    "Southern Ocean": (-180.0, 180.0, -70.0, -40.0),
}


DATASET_ID = "cmems_mod_glo_phy-thetao_anfc_0.083deg_P1D-m"


def get_region_bounds(region: str):
    return REGIONS.get(
        region,
        REGIONS["Arabian Sea"]
    )


def get_sst_data(region: str) -> float:
    """
    Fetch the latest available sea-surface temperature
    for the selected region from Copernicus Marine.
    """

    username = os.getenv("COPERNICUS_USERNAME")
    password = os.getenv("COPERNICUS_PASSWORD")

    if not username or not password:
        raise RuntimeError(
            "Copernicus credentials are missing. "
            "Set COPERNICUS_USERNAME and COPERNICUS_PASSWORD."
        )

    (
        min_lon,
        max_lon,
        min_lat,
        max_lat
    ) = get_region_bounds(region)

    # Use a recent date window so the latest available
    # dataset point can be retrieved.
    end_date = datetime.utcnow()
    start_date = end_date - timedelta(days=3)

    result = copernicusmarine.subset(
        username=username,
        password=password,
        dataset_id=DATASET_ID,
        variables=["thetao"],
        minimum_longitude=min_lon,
        maximum_longitude=max_lon,
        minimum_latitude=min_lat,
        maximum_latitude=max_lat,
        minimum_depth=0,
        maximum_depth=1,
        start_datetime=start_date.strftime("%Y-%m-%dT00:00:00"),
        end_datetime=end_date.strftime("%Y-%m-%dT00:00:00"),
        file_format="netcdf",
        output_filename=f"orca_sst_{region.replace(' ', '_')}.nc",
        disable_progress_bar=True,
    )

    # The subset call returns information about the generated file.
    file_path = result.file_path

    import xarray as xr

    dataset = xr.open_dataset(file_path)

    try:
        temperature = dataset["thetao"]

        # Select the surface layer and calculate
        # the mean SST over the requested region.
        value = float(
            temperature.mean(skipna=True).values
        )

        if not np.isfinite(value):
            raise ValueError("SST dataset returned no valid values.")

        return round(value, 2)

    finally:
        dataset.close()


def sst_agent(state: dict) -> dict:
    """
    ORCA SST Agent.

    Fetches actual SST data for the selected region
    and adds the result to the shared agent state.
    """

    region = state.get("region", "Arabian Sea")

    try:
        current_sst = get_sst_data(region)

        state["sst"] = {
            "status": "analyzed",
            "value": current_sst,
            "unit": "°C",
            "region": region,
            "evidence": "Copernicus Marine thetao dataset",
        }

    except Exception as error:
        state["sst"] = {
            "status": "error",
            "value": None,
            "unit": "°C",
            "region": region,
            "evidence": str(error),
        }

    return state
