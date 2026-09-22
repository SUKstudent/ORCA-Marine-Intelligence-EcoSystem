def evidence_agent(state: dict) -> dict:
    """
    Collects evidence from the five environmental agents
    and links it to the ORCA assessment.
    """

    evidence_items = []

    sources = [
        ("SST Agent", "sst"),
        ("Chlorophyll Agent", "chlorophyll"),
        ("Weather Agent", "weather"),
        ("Historical Agent", "historical"),
        ("Satellite Agent", "satellite"),
    ]

    for source_name, state_key in sources:

        if state_key in state:

            evidence_items.append({
                "source": source_name,
                "data": state[state_key]
            })

    state["evidence"] = {
        "status": "completed",
        "region": state.get("region"),
        "evidence_count": len(evidence_items),
        "items": evidence_items
    }

    return state
