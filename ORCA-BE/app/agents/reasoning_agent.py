def reasoning_agent(state: dict) -> dict:
    """
    Reasoning Agent:
    Combines outputs from all 5 marine-data agents
    and creates the final ORCA analysis.
    """

    # Demo values — later replace with real agent data
    sst = 28.4
    chlorophyll = 1.8
    wind_speed = 18
    historical_change = 4.2
    satellite_status = "Normal"

    # Simple demo reasoning
    findings = []

    if 24 <= sst <= 30:
        findings.append("Sea surface temperature is within the normal range.")
    else:
        findings.append("Sea surface temperature shows an unusual condition.")

    if 0.5 <= chlorophyll <= 3.0:
        findings.append("Chlorophyll concentration is within the expected range.")
    else:
        findings.append("Chlorophyll concentration requires attention.")

    if wind_speed < 30:
        findings.append("Current wind conditions are moderate.")
    else:
        findings.append("Strong wind conditions are detected.")

    if abs(historical_change) <= 5:
        findings.append("Historical variation is relatively small.")
    else:
        findings.append("Historical data shows a significant deviation.")

    # Demo overall assessment
    overall_status = "WATCH"

    why = (
        "The ecosystem is placed under WATCH because the current conditions "
        "are mostly within the expected range, but historical variation "
        "indicates that continued monitoring is useful."
    )

    recommendation = (
        "Continue monitoring sea temperature, chlorophyll concentration, "
        "weather conditions and historical trends for further changes."
    )

    state["analysis"] = {
        "overall_status": overall_status,

        "summary": (
            "The marine ecosystem is currently showing mostly stable "
            "conditions with some variation that should be monitored."
        ),

        "indicators": {
            "sea_surface_temperature": {
                "value": sst,
                "unit": "°C",
                "status": "Normal"
            },
            "chlorophyll": {
                "value": chlorophyll,
                "unit": "mg/m³",
                "status": "Normal"
            },
            "wind_speed": {
                "value": wind_speed,
                "unit": "km/h",
                "status": "Normal"
            },
            "historical_change": {
                "value": historical_change,
                "unit": "%",
                "status": "Watch"
            },
            "satellite": {
                "value": satellite_status,
                "status": "Normal"
            }
        },

        "key_findings": findings,

        "why": why,

        "recommendation": recommendation,

        "agents_used": [
            "SST Agent",
            "Chlorophyll Agent",
            "Weather Agent",
            "Historical Agent",
            "Satellite Agent",
            "Reasoning Agent"
        ]
    }

    return state
