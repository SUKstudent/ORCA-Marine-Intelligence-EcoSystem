const signals = [
  {
    name: "Sea Surface Temperature",
    short: "SST",
    value: "—",
    unit: "°C",
    status: "Awaiting data",
    description: "Temperature signal and deviation from historical baseline.",
  },
  {
    name: "Chlorophyll",
    short: "CHL",
    value: "—",
    unit: "mg/m³",
    status: "Awaiting data",
    description: "Marine productivity signal from ocean colour observations.",
  },
  {
    name: "Weather Conditions",
    short: "WX",
    value: "—",
    unit: "",
    status: "Awaiting data",
    description: "Wind and environmental conditions affecting the region.",
  },
  {
    name: "Historical Pattern",
    short: "HIS",
    value: "—",
    unit: "",
    status: "Awaiting data",
    description: "Current conditions compared with historical observations.",
  },
]

function Analysis() {
  return (
    <Page
      title="Marine Analysis"
      subtitle="Environmental signals analysed by the ORCA intelligence layer"
    >
      {/* Header */}
      <section className="mb-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Signal Analysis
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Understand the signals behind the assessment
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              ORCA analyses multiple environmental signals independently
              before combining them into a broader marine ecosystem assessment.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Analysis State
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-600" />
              <span className="text-sm font-medium text-slate-400">
                Awaiting ORCA run
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Cards */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Environmental Signals
            </p>
          </div>

          <span className="text-xs text-slate-600">
            4 signal groups
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {signals.map((signal) => (
            <SignalCard
              key={signal.name}
              signal={signal}
            />
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        {/* Current vs Historical */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Comparison
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Current vs Historical
              </h3>
            </div>

            <span className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-500">
              Baseline
            </span>
          </div>

          <div className="mt-8 space-y-5">
            <ComparisonRow
              label="Sea Surface Temperature"
              current="—"
              historical="—"
            />

            <ComparisonRow
              label="Chlorophyll"
              current="—"
              historical="—"
            />

            <ComparisonRow
              label="Weather Pattern"
              current="—"
              historical="—"
            />
          </div>

          <div className="mt-7 rounded-xl border border-dashed border-slate-800 bg-slate-950/60 p-4">
            <p className="text-xs leading-5 text-slate-600">
              Historical comparison will be populated when ORCA receives
              analysis data.
            </p>
          </div>
        </div>

        {/* Signal Summary */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Signal Summary
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            What is changing?
          </h3>

          <div className="mt-7 space-y-4">
            <SummaryItem
              label="Temperature"
              value="No analysis yet"
            />

            <SummaryItem
              label="Productivity"
              value="No analysis yet"
            />

            <SummaryItem
              label="Weather"
              value="No analysis yet"
            />

            <SummaryItem
              label="Historical deviation"
              value="No analysis yet"
            />
          </div>
        </div>
      </section>

      {/* Evidence Layer */}
      <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Evidence Layer
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              Observations supporting the analysis
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              ORCA will connect each conclusion to the environmental signals
              and observations that contributed to it.
            </p>
          </div>

          <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-600">
            Evidence pending
          </span>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <EvidenceCard
            number="01"
            title="Observation"
            text="Raw environmental observations enter the analysis layer."
          />

          <EvidenceCard
            number="02"
            title="Signal"
            text="Agents identify meaningful changes or deviations."
          />

          <EvidenceCard
            number="03"
            title="Evidence"
            text="Relevant findings are passed to the reasoning layer."
          />
        </div>
      </section>

      {/* Analysis Pipeline */}
      <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Analysis Pipeline
        </p>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
          <PipelineStep label="Raw Data" />
          <Arrow />

          <PipelineStep label="Signal Analysis" />
          <Arrow />

          <PipelineStep label="Agent Findings" />
          <Arrow />

          <PipelineStep
            label="ORCA Reasoning"
            active
          />
        </div>
      </section>
    </Page>
  )
}

function SignalCard({ signal }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:border-slate-700 hover:bg-slate-900">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-xs font-bold text-cyan-400">
          {signal.short}
        </div>

        <span className="rounded-full border border-slate-800 bg-slate-950 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
          {signal.status}
        </span>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {signal.name}
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            {signal.description}
          </p>
        </div>

        <div className="shrink-0 text-right">
          <span className="text-3xl font-bold text-slate-600">
            {signal.value}
          </span>

          {signal.unit && (
            <span className="ml-1 text-xs text-slate-600">
              {signal.unit}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 h-1 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-0 rounded-full bg-cyan-400" />
      </div>
    </div>
  )
}

function ComparisonRow({ label, current, historical }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <div className="flex items-center gap-6 text-sm">
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider text-slate-600">
            Current
          </p>
          <p className="mt-1 font-medium text-slate-500">
            {current}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider text-slate-600">
            Historical
          </p>
          <p className="mt-1 font-medium text-slate-500">
            {historical}
          </p>
        </div>
      </div>
    </div>
  )
}

function SummaryItem({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-xs font-medium text-slate-600">
        {value}
      </span>
    </div>
  )
}

function EvidenceCard({ number, title, text }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">
      <span className="text-xs font-bold text-cyan-400">
        {number}
      </span>

      <h3 className="mt-4 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  )
}

function PipelineStep({ label, active }) {
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

export default Analysis