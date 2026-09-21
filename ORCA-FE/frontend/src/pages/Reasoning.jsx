const agentFindings = [
  {
    name: "SST Agent",
    short: "SST",
    finding: "Awaiting temperature analysis",
    status: "Pending",
  },
  {
    name: "Chlorophyll Agent",
    short: "CHL",
    finding: "Awaiting productivity analysis",
    status: "Pending",
  },
  {
    name: "Weather Agent",
    short: "WX",
    finding: "Awaiting weather analysis",
    status: "Pending",
  },
  {
    name: "Historical Agent",
    short: "HIS",
    finding: "Awaiting historical comparison",
    status: "Pending",
  },
  {
    name: "Satellite Agent",
    short: "SAT",
    finding: "Awaiting satellite analysis",
    status: "Pending",
  },
]

function Reasoning() {
  return (
    <Page
      title="ORCA Reasoning"
      subtitle="Collaborative reasoning across environmental signals"
    >
      {/* Header */}
      <section className="mb-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Intelligence Core
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              From individual findings to one assessment
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              ORCA does not rely on a single environmental signal. The
              reasoning layer brings together findings from specialized agents
              and evaluates them as a combined evidence set.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Reasoning State
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-600" />

              <span className="text-sm font-medium text-slate-400">
                Awaiting agent findings
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reasoning Flow */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Reasoning Pipeline
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              How ORCA reaches a conclusion
            </h2>
          </div>

          <span className="hidden rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-600 md:block">
            5 → 1
          </span>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_80px_1fr] lg:items-center">
          {/* Agent Findings */}
          <div className="space-y-3">
            {agentFindings.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-[10px] font-bold text-cyan-400">
                  {agent.short}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">
                    {agent.name}
                  </p>

                  <p className="mt-1 truncate text-xs text-slate-600">
                    {agent.finding}
                  </p>
                </div>

                <span className="rounded-full border border-slate-800 px-2 py-1 text-[9px] uppercase tracking-wider text-slate-600">
                  {agent.status}
                </span>
              </div>
            ))}
          </div>

          {/* Connector */}
          <div className="hidden flex-col items-center justify-center lg:flex">
            <div className="h-px w-full bg-slate-700" />

            <div className="my-2 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
              →
            </div>

            <div className="h-px w-full bg-slate-700" />
          </div>

          {/* Reasoning Core */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-6">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/5 blur-2xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400 text-sm font-bold text-slate-950">
                  ORCA
                </div>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
                  Core
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                Reasoning Agent
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Cross-checks findings, identifies relationships between
                signals, and builds an evidence-based marine assessment.
              </p>

              <div className="mt-6 space-y-2">
                <ReasoningStep
                  number="01"
                  text="Collect agent findings"
                />

                <ReasoningStep
                  number="02"
                  text="Cross-check signals"
                />

                <ReasoningStep
                  number="03"
                  text="Evaluate evidence"
                />

                <ReasoningStep
                  number="04"
                  text="Generate assessment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Matrix */}
      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Evidence Matrix
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Signal relationships
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            The reasoning layer can compare multiple observations instead of
            treating every signal independently.
          </p>

          <div className="mt-6 space-y-3">
            <EvidenceRow
              left="SST"
              relation="compared with"
              right="Historical"
            />

            <EvidenceRow
              left="Chlorophyll"
              relation="cross-checked with"
              right="SST"
            />

            <EvidenceRow
              left="Weather"
              relation="evaluated with"
              right="Satellite"
            />

            <EvidenceRow
              left="All findings"
              relation="combined into"
              right="Assessment"
              active
            />
          </div>
        </div>

        {/* Assessment */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            ORCA Assessment
          </p>

          <div className="mt-6 rounded-xl border border-dashed border-slate-800 bg-slate-950/70 p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
              <span className="text-2xl text-slate-700">?</span>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-500">
              Assessment unavailable
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Run an ORCA analysis to provide agent findings to the reasoning
              layer.
            </p>
          </div>
        </div>
      </section>

      {/* Explainability */}
      <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Explainable Intelligence
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              Why did ORCA reach this conclusion?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Every assessment can be traced back to the observations and
              agent findings that contributed to the reasoning process.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-cyan-400">
              ?
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-300">
                Evidence first
              </p>

              <p className="mt-0.5 text-[11px] text-slate-600">
                No assessment yet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Flow */}
      <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          ORCA Intelligence Loop
        </p>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
          <FlowBox label="Environmental Data" />

          <Arrow />

          <FlowBox label="Specialized Agents" />

          <Arrow />

          <FlowBox label="Cross-Agent Evidence" />

          <Arrow />

          <FlowBox
            label="ORCA Assessment"
            active
          />
        </div>
      </section>
    </Page>
  )
}

function ReasoningStep({ number, text }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2.5">
      <span className="text-[10px] font-bold text-cyan-400">
        {number}
      </span>

      <span className="text-xs text-slate-400">
        {text}
      </span>
    </div>
  )
}

function EvidenceRow({ left, relation, right, active }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 ${
        active
          ? "border-cyan-400/20 bg-cyan-400/5"
          : "border-slate-800 bg-slate-950/60"
      }`}
    >
      <span className="text-xs font-semibold text-slate-300">
        {left}
      </span>

      <span className="text-[10px] text-slate-600">
        {relation}
      </span>

      <span
        className={`text-xs font-semibold ${
          active ? "text-cyan-400" : "text-slate-400"
        }`}
      >
        {right}
      </span>
    </div>
  )
}

function FlowBox({ label, active }) {
  return (
    <div
      className={`flex flex-1 items-center justify-center rounded-xl border px-4 py-3 text-center text-xs font-medium ${
        active
          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
          : "border-slate-800 bg-slate-950 text-slate-500"
      }`}
    >
      {label}
    </div>
  )
}

function Arrow() {
  return (
    <span className="hidden text-slate-700 md:block">
      →
    </span>
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

export default Reasoning