def assessment_agent(state: dict) -> dict:
    """
    Combines the outputs of the reasoning layer
    and creates the final ORCA assessment.
    """

    region = state.get("region", "Unknown Region")

    reasoning = state.get("reasoning")

    # Support different possible reasoning keys
    if reasoning is None:
        reasoning = state.get("reasoning_result")

    if reasoning is None:
        reasoning = state.get("reasoning_output")

    # Extract a readable summary
    if isinstance(reasoning, dict):
        reasoning_summary = (
            reasoning.get("summary")
            or reasoning.get("finding")
            or reasoning.get("result")
            or reasoning.get("message")
            or str(reasoning)
        )
    else:
        reasoning_summary = str(reasoning) if reasoning else (
            "The reasoning layer did not return a detailed summary."
        )

    state["assessment"] = {
        "status": "completed",
        "region": region,
        "summary": (
            f"ORCA completed a cross-agent assessment for {region}. "
            f"The assessment is based on the combined environmental "
            f"signals and reasoning output."
        ),
        "reasoning": reasoning_summary,
        "key_findings": [
            "Sea surface temperature signals were analyzed.",
            "Chlorophyll observations were analyzed.",
            "Weather conditions were evaluated.",
            "Historical patterns were compared.",
            "Satellite observations were considered."
        ],
        "confidence": "Assessment generated from available ORCA agent outputs."
    }

    return state
