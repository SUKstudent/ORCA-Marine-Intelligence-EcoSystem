def satellite_agent(state: dict) -> dict:
    # Satellite/remote-sensing agent
    state["satellite"] = {
        "status": "ready",
        "observation": None,
        "evidence": "Satellite data source will be connected here."
    }
    return state
