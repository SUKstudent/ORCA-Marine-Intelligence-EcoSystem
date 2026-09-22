from app.agents.sst_agent import sst_agent
from app.agents.chlorophyll_agent import chlorophyll_agent
from app.agents.weather_agent import weather_agent
from app.agents.historical_agent import historical_agent
from app.agents.satellite_agent import satellite_agent
from app.agents.reasoning_agent import reasoning_agent
from app.agents.assessment_agent import assessment_agent
from app.agents.evidence_agent import evidence_agent

def assessment_agent(state: dict) -> dict:
    """
    Assessment stage:
    Combines the reasoning output with all agent findings
    and creates a structured assessment.
    """

    reasoning = state.get("reasoning", state.get("reasoning_result", ""))

    state["assessment"] = {
        "status": "completed",
        "region": state.get("region"),
        "summary": (
            "The assessment combines SST, chlorophyll, weather, "
            "historical and satellite observations with the reasoning output."
        ),
        "reasoning_input": reasoning,
        "key_findings": [
            "Sea surface temperature observations analyzed",
            "Chlorophyll observations analyzed",
            "Weather conditions analyzed",
            "Historical patterns analyzed",
            "Satellite observations analyzed"
        ],
        "confidence": "Based on available agent outputs"
    }

    return state


def evidence_agent(state: dict) -> dict:
    """
    Evidence stage:
    Collects the outputs produced by the analytical agents
    and connects them with the final assessment.
    """

    evidence = []

    agent_names = [
        ("SST", "sst"),
        ("Chlorophyll", "chlorophyll"),
        ("Weather", "weather"),
        ("Historical", "historical"),
        ("Satellite", "satellite")
    ]

    for name, key in agent_names:
        if key in state:
            evidence.append({
                "source": name,
                "data": state[key]
            })

    state["evidence"] = {
        "status": "completed",
        "region": state.get("region"),
        "items": evidence,
        "evidence_count": len(evidence)
    }

    return state


def run_orca(region: str) -> dict:

    state = {
        "region": region
    }

    # -----------------------------------------
    # 1. ENVIRONMENTAL AGENTS
    # -----------------------------------------

    state = sst_agent(state)

    state = chlorophyll_agent(state)

    state = weather_agent(state)

    state = historical_agent(state)

    state = satellite_agent(state)

    # -----------------------------------------
    # 2. REASONING AGENT
    # -----------------------------------------

    state = reasoning_agent(state)

    # -----------------------------------------
    # 3. ASSESSMENT AGENT
    # -----------------------------------------

    state = assessment_agent(state)

    # -----------------------------------------
    # 4. EVIDENCE AGENT
    # -----------------------------------------

    state = evidence_agent(state)

    # -----------------------------------------
    # FINAL ORCA STATE
    # -----------------------------------------

    return state
