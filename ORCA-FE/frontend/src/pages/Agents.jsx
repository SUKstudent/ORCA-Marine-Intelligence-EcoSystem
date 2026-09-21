const agents = [
  {
    name: "SST Agent",
    short: "SST",
    description: "Analyses sea surface temperature and identifies temperature anomalies.",
    source: "Ocean temperature data",
  },
  {
    name: "Chlorophyll Agent",
    short: "CHL",
    description: "Analyses chlorophyll signals to understand marine productivity.",
    source: "Ocean colour data",
  },
  {
    name: "Weather Agent",
    short: "WX",
    description: "Analyses wind, weather conditions and environmental factors.",
    source: "Weather data",
  },
  {
    name: "Historical Agent",
    short: "HIS",
    description: "Compares current conditions with historical patterns and baselines.",
    source: "Historical observations",
  },
  {
    name: "Satellite Agent",
    short: "SAT",
    description: "Analyses satellite observations and extracts relevant spatial signals.",
    source: "Satellite imagery",
  },
  {
    name: "Reasoning Agent",
    short: "ORCA",
    description: "Combines findings from all agents and produces an evidence-based assessment.",
    source: "Agent findings",
    reasoning: true,
  },
]

function Agents() {
  return (
    <Page
      title="AI Agents"
      subtitle="Collaborative intelligence layer of ORCA"
    >
      {/* Header */}
      <section className="mb-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Multi-Agent Network
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Specialized agents working together
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              ORCA divides marine intelligence into specialized analysis tasks
              before combining the findings through a central reasoning layer.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Network Status
              </p>
              <p className="mt-0.5 text-sm text-slate-400">
                Ready for analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Cards */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Specialized Agents
            </p>
          </div>

          <span className="text-xs text-slate-600">
            {agents.length} agents
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent, index) => (
            <AgentCard
              key={agent.name}
              agent={agent}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Collaboration Flow */}
      <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Agent Collaboration
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              From observations to ecosystem intelligence
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            Current execution state
          </p>
        </div>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="flex min-w-[850px] items-center">
            {agents.map((agent, index) => (
              <div key={agent.name} className="flex items-center">
                <div
                  className={`flex min-w-[120px] flex-col items-center rounded-xl border px-4 py-4 text-center ${
                    agent.reasoning
                      ? "border-cyan-400/30 bg-cyan-400/10"
                      : "border-slate-800 bg-slate-950"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-[10px] font-bold ${
                      agent.reasoning
                        ? "bg-cyan-400 text-slate-950"
                        : "bg-slate-800 text-cyan-400"
                    }`}
                  >
                    {agent.short}
                  </div>

                  <p className="mt-3 text-xs font-medium text-slate-300">
                    {agent.name}
                  </p>

                  <span className="mt-1 text-[10px] uppercase tracking-wider text-slate-600">
                    Ready
                  </span>
                </div>

                {index < agents.length - 1 && (
                  <div className="mx-2 flex items-center">
                    <div className="h-px w-8 bg-slate-700" />
                    <span className="text-cyan-500">›</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Info */}
      <section className="mt-6 grid gap-5 md:grid-cols-3">
        <InfoCard
          title="Independent Analysis"
          text="Each specialized agent examines a specific environmental signal."
        />

        <InfoCard
          title="Collaborative Reasoning"
          text="The reasoning layer combines findings instead of relying on one signal alone."
        />

        <InfoCard
          title="Evidence-Based Output"
          text="ORCA presents the observations and reasoning behind its assessment."
        />
      </section>
    </Page>
  )
}

function AgentCard({ agent, index }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
        agent.reasoning
          ? "border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-900 hover:border-cyan-400/50"
          : "border-slate-800 bg-slate-900/70 hover:border-slate-700 hover:bg-slate-900"
      }`}
    >
      {/* Top accent */}
      <div
        className={`absolute left-0 top-0 h-0.5 w-full ${
          agent.reasoning ? "bg-cyan-400" : "bg-slate-700"
        }`}
      />

      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-xs font-bold ${
            agent.reasoning
              ? "bg-cyan-400 text-slate-950"
              : "bg-slate-800 text-cyan-400"
          }`}
        >
          {agent.short}
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
            Ready
          </span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-white">
            {agent.name}
          </h3>

          {agent.reasoning && (
            <span className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-cyan-400">
              Core
            </span>
          )}
        </div>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
          {agent.description}
        </p>
      </div>

      <div className="mt-6 border-t border-slate-800 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
            Data Layer
          </span>

          <span className="text-xs text-slate-500">
            {agent.source}
          </span>
        </div>
      </div>
    </div>
  )
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
      <div className="mb-3 h-1.5 w-8 rounded-full bg-cyan-400/60" />

      <h3 className="text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  )
}

function Page({ title, subtitle, children }) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
          ORCA
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          {subtitle}
        </p>

        <div className="mt-10">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Agents