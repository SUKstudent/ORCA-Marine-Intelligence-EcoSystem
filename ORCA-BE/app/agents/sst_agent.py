def sst_agent(state: dict) -> dict:
    # Sea Surface Temperature agent
    state["sst"] = {
        "status": "ready",
        "value": None,
        "unit": "°C",
        "evidence": "SST data source will be connected here."
    }
    return state
