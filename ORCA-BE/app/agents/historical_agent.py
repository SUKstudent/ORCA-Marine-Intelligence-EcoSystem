def historical_agent(state: dict) -> dict:
    # Historical marine-condition agent
    state["historical"] = {
        "status": "ready",
        "trend": None,
        "evidence": "Historical marine data will be connected here."
    }
    return state
