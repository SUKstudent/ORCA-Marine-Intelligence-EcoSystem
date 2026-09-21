def chlorophyll_agent(state: dict) -> dict:
    # Chlorophyll-a agent
    state["chlorophyll"] = {
        "status": "ready",
        "value": None,
        "unit": "mg/m³",
        "evidence": "Chlorophyll-a data source will be connected here."
    }
    return state
