def reasoning_agent(state: dict) -> dict:
    # Final reasoning agent combines the five specialist agents.
    state["reasoning"] = {
        "status": "ready",
        "assessment": "Awaiting real marine data from specialist agents.",
        "evidence": [
            state.get("sst", {}).get("evidence"),
            state.get("chlorophyll", {}).get("evidence"),
            state.get("weather", {}).get("evidence"),
            state.get("historical", {}).get("evidence"),
            state.get("satellite", {}).get("evidence"),
        ]
    }
    return state
