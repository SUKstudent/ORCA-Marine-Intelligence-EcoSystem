import { useState } from "react"
import { Link } from "react-router-dom"

function Dashboard() {
  const [region, setRegion] = useState("Arabian Sea")
  const [running, setRunning] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)

  const handleRunAnalysis = () => {
    setRunning(true)

    setTimeout(() => {
      setRunning(false)
      setAnalyzed(true)
    }, 1800)
  }

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-10 text-white lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              ORCA Intelligence Console
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Marine Ecosystem Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              Explore marine conditions across the world and generate
              evidence-based ecosystem assessments.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-300">
              SYSTEM ONLINE
            </span>
          </div>

        </div>


        {/* REGION + ANALYSIS CONTROL */}
        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div className="w-full lg:max-w-md">

              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Select Marine Region
              </label>

              <select
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value)
                  setAnalyzed(false)
                }}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-medium text-white outline-none transition focus:border-cyan-400"
              >
                <option>Arabian Sea</option>
                <option>Bay of Bengal</option>
                <option>Indian Ocean</option>
                <option>Pacific Ocean</option>
                <option>Atlantic Ocean</option>
                <option>Mediterranean Sea</option>
                <option>Arctic Ocean</option>
                <option>Southern Ocean</option>
              </select>

            </div>


            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">

              <span className="text-xs text-slate-500">
                {analyzed ? "Analysis completed" : "Ready for analysis"}
              </span>

              <button
                onClick={handleRunAnalysis}
                disabled={running}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {running ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
                    Running ORCA...
                  </>
                ) : (
                  <>
                    <span>▶</span>
                    Run ORCA Analysis
                  </>
                )}

              </button>

            </div>

          </div>

        </section>


        {/* METRICS */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <MetricCard
            icon="🌡"
            label="Sea Surface Temperature"
            value="—"
            description="Awaiting analysis"
          />

          <MetricCard
            icon="🌿"
            label="Chlorophyll"
            value="—"
            description="Awaiting analysis"
          />

          <MetricCard
            icon="💨"
            label="Wind Condition"
            value="—"
            description="Awaiting analysis"
          />

          <MetricCard
            icon="🛰"
            label="Satellite Observation"
            value="—"
            description="Awaiting analysis"
          />

        </section>


        {/* MAIN CONTENT */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* MAP */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-lg font-semibold">
                  Marine Observation Map
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Selected region: {region}
                </p>
              </div>

              <Link
                to="/map"
                className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                Open Map
              </Link>

            </div>


            {/* MAP PREVIEW */}
            <div className="relative mt-5 flex h-[350px] items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-[#061426]">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(34,211,238,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-3xl">
                  🌊
                </div>

                <p className="mt-4 font-semibold text-cyan-300">
                  {region}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Observation layer ready
                </p>

              </div>


              <MapLabel position="left-5 top-5" text="SST" />
              <MapLabel position="right-5 top-10" text="CHL" />
              <MapLabel position="left-10 bottom-8" text="WIND" />
              <MapLabel position="right-8 bottom-6" text="SAT" />

            </div>

          </div>


          {/* ASSESSMENT */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">

            <div className="flex items-start justify-between gap-4">

              <div>
                <h2 className="text-lg font-semibold">
                  Ecosystem Assessment
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  ORCA reasoning output
                </p>
              </div>

              <span className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-400">
                {analyzed ? "Generated" : "Not Analyzed"}
              </span>

            </div>


            <div className="mt-8 flex justify-center">

              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-slate-700 bg-slate-950">

                <div className="text-center">

                  <p className="text-4xl font-bold text-slate-300">
                    —
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-slate-500">
                    {analyzed ? "Assessment" : "Awaiting"}
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-8 space-y-4">

              <AssessmentRow label="Temperature" />
              <AssessmentRow label="Chlorophyll" />
              <AssessmentRow label="Weather" />
              <AssessmentRow label="Historical Pattern" />

            </div>


            <Link
              to="/reasoning"
              className="mt-7 block w-full rounded-xl border border-slate-700 py-3 text-center text-sm font-semibold text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              View ORCA Reasoning →
            </Link>

          </div>

        </section>


        {/* AGENT ACTIVITY */}
        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">

          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-lg font-semibold">
                Intelligence Pipeline
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Specialized agents analyse independent environmental signals
              </p>
            </div>

            <Link
              to="/agents"
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300"
            >
              View all agents →
            </Link>

          </div>


          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            <AgentStatus icon="🌡" name="SST Agent" />
            <AgentStatus icon="🌿" name="Chlorophyll Agent" />
            <AgentStatus icon="💨" name="Weather Agent" />
            <AgentStatus icon="🛰" name="Satellite Agent" />
            <AgentStatus icon="◷" name="Historical Agent" />

          </div>

        </section>


        {/* EVIDENCE / INSIGHT */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              ORCA Insight
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              Run an analysis to generate ecosystem insights.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              ORCA will combine environmental observations and
              cross-agent findings to build an evidence-based
              assessment of the selected marine region.
            </p>

          </div>


          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Evidence Layer
            </p>

            <div className="mt-4 space-y-3">

              <Evidence text="Environmental observations will appear here." />
              <Evidence text="Historical comparisons will appear here." />
              <Evidence text="Cross-agent evidence will appear here." />

            </div>

          </div>

        </section>


        {/* FOOTER NOTE */}
        <div className="py-10 text-center">

          <p className="text-xs text-slate-600">
            ORCA — Marine Ecosystem Intelligence
          </p>

        </div>

      </div>

    </main>
  )
}


/* ---------------- COMPONENTS ---------------- */

function MetricCard({ icon, label, value, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-400/20">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-lg">
        {icon}
      </div>

      <p className="mt-5 text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-300">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>

    </div>
  )
}


function MapLabel({ position, text }) {
  return (
    <div
      className={`absolute ${position} rounded-lg border border-slate-700 bg-slate-950/90 px-3 py-2 backdrop-blur`}
    >
      <p className="text-[9px] font-semibold uppercase tracking-widest text-slate-500">
        {text}
      </p>

      <p className="mt-1 text-[10px] text-slate-600">
        No data
      </p>

    </div>
  )
}


function AssessmentRow({ label }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-3">

      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-xs text-slate-600">
        Pending
      </span>

    </div>
  )
}


function AgentStatus({ icon, name }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4">

      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
        {icon}
      </div>

      <div>

        <p className="text-sm font-medium">
          {name}
        </p>

        <div className="mt-1 flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />

          <span className="text-[10px] text-slate-600">
            Awaiting data
          </span>

        </div>

      </div>

    </div>
  )
}


function Evidence({ text }) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3">

      <span className="text-slate-600">
        ○
      </span>

      <p className="text-sm text-slate-500">
        {text}
      </p>

    </div>
  )
}


export default Dashboard