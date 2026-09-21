import { useState } from "react"

const demoData = {
  region: "Arabian Sea",

  assessment: {
    status: "WATCH",
    score: 68,
    summary:
      "Marine ecosystem conditions require monitoring because multiple environmental signals show moderate changes.",
  },

  signals: {
    sst: {
      value: 28.4,
      unit: "°C",
      status: "Moderate",
      description:
        "Sea surface temperature is slightly elevated compared with the historical baseline.",
    },

    chlorophyll: {
      value: 1.8,
      unit: "mg/m³",
      status: "Normal",
      description:
        "Chlorophyll concentration indicates a normal marine productivity signal.",
    },

    weather: {
      value: 18,
      unit: "km/h",
      status: "Moderate",
      description:
        "Wind conditions are moderate and may influence surface-water mixing.",
    },

    historical: {
      value: "+4.2%",
      unit: "",
      status: "Changing",
      description:
        "Current conditions show a measurable deviation from historical observations.",
    },

    satellite: {
      value: "Normal",
      unit: "",
      status: "Available",
      description:
        "Satellite observations do not indicate a major abnormality in the selected region.",
    },
  },

  why:
    "The WATCH assessment is mainly influenced by elevated sea surface temperature and deviation from historical conditions. Weather conditions may also contribute to changes in surface-water behaviour. Chlorophyll and satellite signals remain comparatively stable.",

  recommendation:
    "Continue monitoring the region and compare upcoming observations with the historical baseline.",

  agents: [
    "SST Agent",
    "Chlorophyll Agent",
    "Weather Agent",
    "Historical Agent",
    "Satellite Agent",
    "Reasoning Agent",
  ],
}

function Analysis() {
  const [region, setRegion] = useState("Arabian Sea")
  const [data, setData] = useState(demoData)
  const [loading, setLoading] = useState(false)

  const runAnalysis = async () => {
    setLoading(true)

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"

      const response = await fetch(
        `${API_URL}/api/assess?region=${encodeURIComponent(region)}`,
        {
          method: "POST",
        }
      )

      if (!response.ok) {
        throw new Error("Backend unavailable")
      }

      const result = await response.json()

      setData({
        ...demoData,
        ...result,
      })
    } catch (error) {
      console.log("Backend not connected. Showing demo data.")
      setData({
        ...demoData,
        region,
      })
    }

    setLoading(false)
  }

  const signalList = [
    {
      name: "Sea Surface Temperature",
      short: "SST",
      data: data.signals.sst,
    },
    {
      name: "Chlorophyll",
      short: "CHL",
      data: data.signals.chlorophyll,
    },
    {
      name: "Weather Conditions",
      short: "WX",
      data: data.signals.weather,
    },
    {
      name: "Historical Pattern",
      short: "HIS",
      data: data.signals.historical,
    },
    {
      name: "Satellite Observation",
      short: "SAT",
      data: data.signals.satellite,
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            ORCA
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Marine Analysis
          </h1>

          <p className="mt-3 text-slate-500">
            Environmental signals analysed by the ORCA intelligence layer.
          </p>
        </div>

        {/* RUN ANALYSIS */}
        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Analysis Engine
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                Analyse Marine Region
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Run the ORCA multi-agent analysis pipeline.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Enter marine region"
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
              />

              <button
                onClick={runAnalysis}
                disabled={loading}
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300 disabled:opacity-50"
              >
                {loading ? "Analysing..." : "Run Analysis"}
              </button>

            </div>
          </div>
        </section>

        {/* OVERALL ASSESSMENT */}
        <section className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 md:p-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                ORCA Assessment
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {data.assessment.status}
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                {data.assessment.summary}
              </p>

              <p className="mt-4 text-sm text-slate-500">
                Region:{" "}
                <span className="text-slate-300">
                  {data.region}
                </span>
              </p>
            </div>

            <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border-4 border-cyan-400/30 bg-slate-950">

              <span className="text-4xl font-bold text-cyan-400">
                {data.assessment.score}
              </span>

              <span className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
                ORCA Score
              </span>

            </div>

          </div>
        </section>

        {/* SIGNALS */}
        <section className="mt-10">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Environmental Signals
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Marine indicators
              </h2>
            </div>

            <span className="text-xs text-slate-600">
              {signalList.length} signals
            </span>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {signalList.map((signal) => (
              <SignalCard
                key={signal.name}
                name={signal.name}
                short={signal.short}
                data={signal.data}
              />
            ))}

          </div>
        </section>

        {/* CURRENT VS HISTORICAL */}
        <section className="mt-8 grid gap-5 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Comparison
            </p>

            <h2 className="mt-2 text-xl font-semibold">
              Current vs Historical
            </h2>

            <div className="mt-7 space-y-5">

              <Comparison
                label="Sea Surface Temperature"
                current="28.4 °C"
                historical="27.3 °C"
              />

              <Comparison
                label="Chlorophyll"
                current="1.8 mg/m³"
                historical="1.7 mg/m³"
              />

              <Comparison
                label="Weather"
                current="18 km/h"
                historical="14 km/h"
              />

            </div>

          </div>

          {/* SUMMARY */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Signal Summary
            </p>

            <h2 className="mt-2 text-xl font-semibold">
              What is changing?
            </h2>

            <div className="mt-7 space-y-4">

              <Summary
                label="Temperature"
                value="Slightly elevated"
              />

              <Summary
                label="Productivity"
                value="Within normal range"
              />

              <Summary
                label="Weather"
                value="Moderate wind"
              />

              <Summary
                label="Historical deviation"
                value="+4.2%"
              />

              <Summary
                label="Satellite"
                value="No major anomaly"
              />

            </div>

          </div>

        </section>

        {/* WHY ORCA */}
        <section className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 md:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            WHY — Reasoning Agent
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Why did ORCA reach this assessment?
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            {data.why}
          </p>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-5">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Recommendation
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              {data.recommendation}
            </p>

          </div>

        </section>

        {/* AGENTS */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Agent Evidence
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            ORCA Multi-Agent Intelligence
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Five specialist agents analyse the environment before the
            Reasoning Agent produces the final assessment.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">

            {data.agents.map((agent, index) => (
              <div
                key={agent}
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
              >

                <span className="text-xs font-bold text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 font-semibold text-white">
                  {agent}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {agentDescription(agent)}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* PIPELINE */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            ORCA Intelligence Pipeline
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-5">

            <Pipeline label="Marine Data" />

            <Pipeline label="5 Agents" />

            <Pipeline label="LangGraph" />

            <Pipeline label="Reasoning Agent" />

            <Pipeline
              label="ORCA Assessment"
              active
            />

          </div>

        </section>

      </div>
    </main>
  )
}

/* SIGNAL CARD */

function SignalCard({ name, short, data }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-slate-700">

      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-xs font-bold text-cyan-400">
          {short}
        </div>

        <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase text-cyan-400">
          {data.status}
        </span>

      </div>

      <div className="mt-6">

        <h3 className="text-lg font-semibold">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {data.description}
        </p>

      </div>

      <div className="mt-6">

        <span className="text-3xl font-bold">
          {data.value}
        </span>

        {data.unit && (
          <span className="ml-2 text-xs text-slate-500">
            {data.unit}
          </span>
        )}

      </div>

      <div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-800">

        <div className="h-full w-2/3 rounded-full bg-cyan-400" />

      </div>

    </div>
  )
}

/* COMPARISON */

function Comparison({ label, current, historical }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-4">

      <span className="text-sm text-slate-400">
        {label}
      </span>

      <div className="flex gap-6 text-right">

        <div>
          <p className="text-[10px] uppercase text-slate-600">
            Current
          </p>

          <p className="mt-1 text-sm font-medium text-cyan-400">
            {current}
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase text-slate-600">
            Historical
          </p>

          <p className="mt-1 text-sm font-medium text-slate-400">
            {historical}
          </p>
        </div>

      </div>

    </div>
  )
}

/* SUMMARY */

function Summary({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4">

      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-xs font-medium text-cyan-400">
        {value}
      </span>

    </div>
  )
}

/* PIPELINE */

function Pipeline({ label, active }) {
  return (
    <div
      className={`rounded-xl border px-4 py-4 text-center text-xs font-medium ${
        active
          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
          : "border-slate-800 bg-slate-950 text-slate-500"
      }`}
    >
      {label}
    </div>
  )
}

/* AGENT DESCRIPTION */

function agentDescription(agent) {
  if (agent === "SST Agent")
    return "Analyses sea surface temperature and temperature deviations."

  if (agent === "Chlorophyll Agent")
    return "Analyses chlorophyll concentration and marine productivity."

  if (agent === "Weather Agent")
    return "Analyses wind and environmental conditions."

  if (agent === "Historical Agent")
    return "Compares current conditions with historical observations."

  if (agent === "Satellite Agent")
    return "Analyses satellite observations and environmental anomalies."

  if (agent === "Reasoning Agent")
    return "Combines evidence from all agents and produces the ORCA assessment."

  return "Provides environmental intelligence to ORCA."
}

export default Analysis
