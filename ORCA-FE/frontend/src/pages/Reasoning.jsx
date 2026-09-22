import { useEffect, useState } from "react"

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000"

const AGENTS = [
  { name: "SST Agent", short: "SST", key: "sst" },
  { name: "Chlorophyll Agent", short: "CHL", key: "chlorophyll" },
  { name: "Weather Agent", short: "WX", key: "weather" },
  { name: "Historical Agent", short: "HIS", key: "historical" },
  { name: "Satellite Agent", short: "SAT", key: "satellite" },
]

function Reasoning() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    runAnalysis()
  }, [])

  async function runAnalysis() {
    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/assess?region=Arabian%20Sea`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const result = await response.json()
      setData(result)
    } catch (err) {
      console.error(err)
      setError(
        "Unable to connect to the ORCA analysis engine. Check the backend URL and API."
      )
    } finally {
      setLoading(false)
    }
  }

  const assessment = data?.assessment
  const evidence = data?.evidence

  function getAgentValue(key) {
    if (!data) return null

    return (
      data[key] ||
      data[`${key}_result`] ||
      data[`${key}Result`] ||
      null
    )
  }

  function formatFinding(value) {
    if (value === null || value === undefined) {
      return "Awaiting analysis"
    }

    if (typeof value === "string") {
      return value
    }

    if (typeof value === "number" || typeof value === "boolean") {
      return String(value)
    }

    if (typeof value === "object") {
      if (value.summary) return value.summary
      if (value.finding) return value.finding
      if (value.result) return value.result
      if (value.message) return value.message

      return Object.entries(value)
        .slice(0, 2)
        .map(([key, val]) => `${key}: ${formatValue(val)}`)
        .join(" • ")
    }

    return String(value)
  }

  function formatValue(value) {
    if (typeof value === "object") {
      return JSON.stringify(value)
    }

    return String(value)
  }

  const agentFindings = AGENTS.map((agent) => {
    const value = getAgentValue(agent.key)

    return {
      ...agent,
      finding: formatFinding(value),
      status: value ? "Analyzed" : "Pending",
    }
  })

  const evidenceItems = evidence?.items || []

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
              ORCA brings together specialized environmental signals and
              evaluates them as a combined evidence set.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Reasoning State
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  loading
                    ? "animate-pulse bg-yellow-400"
                    : error
                    ? "bg-red-400"
                    : "bg-cyan-400"
                }`}
              />

              <span className="text-sm font-medium text-slate-400">
                {loading
                  ? "Running ORCA analysis..."
                  : error
                  ? "Analysis failed"
                  : "Analysis completed"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Error */}
      {error && (
        <div className="mb-8 rounded-xl border border-red-400/20 bg-red-400/5 p-5">
          <p className="text-sm font-medium text-red-300">{error}</p>

          <button
            onClick={runAnalysis}
            className="mt-4 rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-400/20"
          >
            Retry ORCA Analysis
          </button>
        </div>
      )}

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
            5 → 1 → 1 → 1
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

                  <p className="mt-1 truncate text-xs text-slate-500">
                    {agent.finding}
                  </p>
                </div>

                <span
                  className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-wider ${
                    agent.status === "Analyzed"
                      ? "border-cyan-400/20 text-cyan-400"
                      : "border-slate-800 text-slate-600"
                  }`}
                >
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
                <ReasoningStep number="01" text="Collect agent findings" />
                <ReasoningStep number="02" text="Cross-check signals" />
                <ReasoningStep number="03" text="Evaluate evidence" />
                <ReasoningStep number="04" text="Generate assessment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence + Assessment */}
      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        {/* Evidence Matrix */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Evidence Matrix
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Signal relationships
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Evidence collected from the specialized ORCA agents and connected
            to the final assessment.
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

            {evidenceItems.length > 0 && (
              <div className="mt-5 border-t border-slate-800 pt-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Evidence Sources
                </p>

                {evidenceItems.map((item, index) => (
                  <div
                    key={index}
                    className="mb-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2"
                  >
                    <p className="text-xs font-semibold text-cyan-400">
                      {item.source || `Evidence ${index + 1}`}
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      {formatFinding(item.data)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Assessment */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            ORCA Assessment
          </p>

          {assessment ? (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Assessment Complete
                  </span>

                  <span className="rounded-full border border-cyan-400/20 px-2 py-1 text-[9px] uppercase text-cyan-400">
                    {assessment.status || "Completed"}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {assessment.summary || "ORCA assessment generated"}
                </h3>

                {assessment.region && (
                  <p className="mt-2 text-xs text-slate-500">
                    Region: {assessment.region}
                  </p>
                )}
              </div>

              {assessment.key_findings?.length > 0 && (
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Key Findings
                  </p>

                  <div className="space-y-2">
                    {assessment.key_findings.map((finding, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3"
                      >
                        <p className="text-xs leading-5 text-slate-400">
                          <span className="mr-2 text-cyan-400">
                            0{index + 1}
                          </span>
                          {finding}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {assessment.confidence && (
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Confidence
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {assessment.confidence}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-slate-800 bg-slate-950/70 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
                <span className="text-2xl text-slate-700">
                  {loading ? "..." : "?"}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-500">
                {loading
                  ? "Generating assessment..."
                  : "Assessment unavailable"}
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                {loading
                  ? "ORCA is combining findings from the specialized agents."
                  : "Run an ORCA analysis to generate the assessment."}
              </p>
            </div>
          )}
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
              Every assessment can be traced back to observations and agent
              findings that contributed to the reasoning process.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-cyan-400">
              ✓
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-300">
                Evidence first
              </p>

              <p className="mt-0.5 text-[11px] text-slate-600">
                {assessment
                  ? "Assessment linked to evidence"
                  : "Waiting for analysis"}
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
          <FlowBox label="Reasoning" />
          <Arrow />
          <FlowBox label="Assessment" active />
          <Arrow />
          <FlowBox label="Evidence" active />
        </div>
      </section>
    </Page>
  )
}

function ReasoningStep({ number, text }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2.5">
      <span className="text-[10px] font-bold text-cyan-400">{number}</span>

      <span className="text-xs text-slate-400">{text}</span>
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
      <span className="text-xs font-semibold text-slate-300">{left}</span>

      <span className="text-[10px] text-slate-600">{relation}</span>

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
  return <span className="hidden text-slate-700 md:block">→</span>
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

        <p className="mt-2 text-slate-500">{subtitle}</p>

        <div className="mt-10">{children}</div>
      </div>
    </main>
  )
}

export default Reasoning
