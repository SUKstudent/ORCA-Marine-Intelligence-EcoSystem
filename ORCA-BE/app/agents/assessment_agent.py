def assessment_agent(state: dict) -> dict:
    """
    Assessment Agent:
    Takes the Reasoning Agent output and creates
    a structured ORCA assessment.
    """

    analysis = state.get("analysis", {})

    if not analysis:
        state["assessment"] = {
            "status": "unavailable",
            "region": state.get("region", "Unknown"),
            "summary": "Reasoning analysis is not available.",
            "key_findings": [],
            "confidence": "Low"
        }
        return state

    state["assessment"] = {
        "status": "completed",
        "region": state.get("region", "Unknown"),

        "summary": analysis.get(
            "summary",
            "ORCA completed the ecosystem assessment."
        ),

        "overall_status": analysis.get(
            "overall_status",
            "WATCH"
        ),

        "key_findings": analysis.get(
            "key_findings",
            []
        ),

        "why": analysis.get(
            "why",
            ""
        ),

        "recommendation": analysis.get(
            "recommendation",
            ""
        ),

        "indicators": analysis.get(
            "indicators",
            {}
        ),

        "confidence": "Based on 5 environmental data agents and the Reasoning Agent."
    }

    return state
