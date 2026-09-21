def weather_agent(state: dict) -> dict:
    # Weather agent
    state["weather"] = {
        "status": "ready",
        "temperature": None,
        "wind_speed": None,
        "evidence": "Weather API will be connected here."
    }
    return state
