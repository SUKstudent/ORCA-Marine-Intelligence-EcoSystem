import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pt-28">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                AI-Powered Marine Intelligence
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Understand the
                <span className="block text-cyan-400">
                  Ocean Through AI.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                ORCA brings together marine, satellite, weather and
                historical information, allowing collaborative AI agents
                to analyse multiple signals and generate an
                evidence-based ecosystem assessment.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/dashboard"
                  className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore ORCA
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-slate-300 transition hover:border-cyan-400/50 hover:text-white"
                >
                  How It Works
                </Link>

              </div>

              {/* Small stats */}
              <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-800 pt-8">

                <Stat value="05" label="AI Agents" />
                <Stat value="01" label="Unified Assessment" />
                <Stat value="∞" label="Marine Signals" />

              </div>

            </div>

            {/* RIGHT — ORCA VISUAL */}
            <div className="relative">

              <div className="relative mx-auto aspect-square max-w-lg">

                {/* Outer rings */}
                <div className="absolute inset-8 rounded-full border border-cyan-400/10" />
                <div className="absolute inset-16 rounded-full border border-cyan-400/10" />
                <div className="absolute inset-24 rounded-full border border-cyan-400/10" />

                {/* Main orb */}
                <div className="absolute inset-28 rounded-full border border-cyan-300/30 bg-cyan-400/5 shadow-[0_0_100px_rgba(34,211,238,0.12)]">

                  <div className="flex h-full items-center justify-center">

                    <div className="text-center">

                      <div className="text-6xl font-bold tracking-widest text-cyan-300">
                        ORCA
                      </div>

                      <div className="mt-3 text-xs uppercase tracking-[0.35em] text-slate-500">
                        Marine Intelligence
                      </div>

                    </div>

                  </div>

                </div>

                {/* Data nodes */}
                <DataNode
                  position="left-2 top-28"
                  title="SST"
                  value="+1.6°C"
                />

                <DataNode
                  position="right-0 top-20"
                  title="CHL"
                  value="+38%"
                />

                <DataNode
                  position="left-10 bottom-28"
                  title="WIND"
                  value="Strong"
                />

                <DataNode
                  position="right-6 bottom-24"
                  title="HISTORY"
                  value="Anomaly"
                />

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* WHAT ORCA DOES */}
      <section className="border-y border-slate-800 bg-slate-950/60">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The ORCA Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From scattered data to
              <span className="text-cyan-400"> meaningful insight.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Marine conditions cannot be understood from a single
              measurement. ORCA combines multiple sources and lets
              specialized agents analyse them before producing a
              unified assessment.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-4">

            <Feature
              number="01"
              title="Collect"
              text="Bring together marine, satellite, weather and historical data."
            />

            <Feature
              number="02"
              title="Analyse"
              text="Specialized AI agents examine individual environmental signals."
            />

            <Feature
              number="03"
              title="Reason"
              text="Agent findings are combined to identify relationships and patterns."
            />

            <Feature
              number="04"
              title="Assess"
              text="ORCA generates an evidence-based marine ecosystem assessment."
            />

          </div>

        </div>

      </section>


      {/* AGENT PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Collaborative Intelligence
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Multiple agents. One assessment.
            </h2>

          </div>

          <Link
            to="/agents"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Explore agents →
          </Link>

        </div>


        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">

          <AgentCard
            icon="🌡"
            title="SST Agent"
            description="Sea surface temperature"
          />

          <AgentCard
            icon="🌿"
            title="Chlorophyll Agent"
            description="Marine productivity"
          />

          <AgentCard
            icon="◈"
            title="Weather Agent"
            description="Wind & conditions"
          />

          <AgentCard
            icon="◉"
            title="Satellite Agent"
            description="Earth observation"
          />

          <AgentCard
            icon="◷"
            title="Historical Agent"
            description="Past patterns"
          />

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="border-t border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Explore the Intelligence Layer
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">
            See how ORCA turns environmental signals into insight.
          </h2>

          <Link
            to="/dashboard"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Open Dashboard →
          </Link>

        </div>

      </section>

    </main>
  )
}


/* ---------- COMPONENTS ---------- */

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </div>
  )
}


function DataNode({ position, title, value }) {
  return (
    <div
      className={`absolute ${position} rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur`}
    >
      <div className="text-[10px] font-semibold tracking-widest text-slate-500">
        {title}
      </div>

      <div className="mt-1 text-sm font-semibold text-cyan-300">
        {value}
      </div>
    </div>
  )
}


function Feature({ number, title, text }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">

      <div className="flex items-center justify-between">

        <span className="text-sm font-semibold text-cyan-400">
          {number}
        </span>

        <span className="text-slate-700 transition group-hover:text-cyan-400">
          ↗
        </span>

      </div>

      <h3 className="mt-7 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </div>
  )
}


function AgentCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-400/30">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-xl">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>

    </div>
  )
}


export default Home