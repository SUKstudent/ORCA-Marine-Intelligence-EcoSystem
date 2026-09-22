def evidence_agent(state: dict) -> dict:
    """
    Evidence Agent:
    Extracts supporting evidence from the
    Reasoning Agent's analysis.
    """

    analysis = state.get("analysis", {})
    indicators = analysis.get("indicators", {})

    evidence_items = []

    for name, data in indicators.items():

        if isinstance(data, dict):

            evidence_items.append({
                "source": name.replace("_", " ").title(),
                "value": data.get("value"),
                "unit": data.get("unit", ""),
                "status": data.get("status", "")
            })

        else:

            evidence_items.append({
                "source": name.replace("_", " ").title(),
                "value": data,
                "unit": "",
                "status": ""
            })

    state["evidence"] = {
        "status": "completed",
        "region": state.get("region", "Unknown"),
        "evidence_count": len(evidence_items),
        "items": evidence_items
    }

    return state
