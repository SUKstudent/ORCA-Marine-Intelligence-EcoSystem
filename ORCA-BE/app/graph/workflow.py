from app.agents.sst_agent import sst_agent
from app.agents.chlorophyll_agent import chlorophyll_agent
from app.agents.weather_agent import weather_agent
from app.agents.historical_agent import historical_agent
from app.agents.satellite_agent import satellite_agent
from app.agents.reasoning_agent import reasoning_agent

def run_orca(region: str) -> dict:
    state = {"region": region}

    # Six-agent pipeline:
    # 1. SST
    # 2. Chlorophyll
    # 3. Weather
    # 4. Historical
    # 5. Satellite
    # 6. Reasoning
    for agent in (
        sst_agent,
        chlorophyll_agent,
        weather_agent,
        historical_agent,
        satellite_agent,
        reasoning_agent,
    ):
        state = agent(state)

    return state
