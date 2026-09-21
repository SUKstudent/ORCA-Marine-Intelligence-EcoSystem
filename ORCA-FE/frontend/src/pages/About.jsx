function About() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white md:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <section>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            ORCA
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Marine Ecosystem Intelligence
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            ORCA combines multiple marine and environmental signals through
            specialized AI agents and collaborative reasoning to produce
            evidence-based ecosystem assessments.
          </p>
        </section>

        {/* What is ORCA */}
        <section className="mt-12 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-900 p-7 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                What is ORCA?
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Turning fragmented observations into marine intelligence
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Marine conditions are influenced by multiple interacting
                environmental signals. ORCA separates these signals into
                specialized analysis tasks and then brings the findings
                together through a reasoning layer.
              </p>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
              <span className="text-xl font-bold text-cyan-400">
                ORCA
              </span>
            </div>

          </div>
        </section>

        {/* Problem / Approach */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">

          <Section
            number="01"
            title="The Problem"
            text="Marine information is distributed across different datasets, satellite observations and environmental measurements. Understanding the ecosystem requires looking at these signals together."
          />

          <Section
            number="02"
            title="Our Approach"
            text="ORCA assigns different analysis tasks to specialized agents. Each agent examines a particular signal before its findings are passed to the reasoning layer."
          />

          <Section
            number="03"
            title="Collaborative Intelligence"
            text="Instead of relying on a single analysis, ORCA brings together findings from multiple agents and evaluates their relationships before forming an assessment."
          />

          <Section
            number="04"
            title="Evidence-Based Output"
            text="The observations and agent findings remain visible so that the reasoning behind an assessment can be inspected rather than hidden behind a black-box response."
          />

        </section>

        {/* How it works */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            How ORCA Works
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            From environmental data to assessment
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">

            <Step
              number="01"
              title="Collect"
              text="Marine, satellite, weather and historical observations enter the system."
            />

            <Step
              number="02"
              title="Analyse"
              text="Specialized agents examine individual environmental signals."
            />

            <Step
              number="03"
              title="Reason"
              text="The reasoning layer cross-checks findings and their relationships."
            />

            <Step
              number="04"
              title="Assess"
              text="ORCA produces an evidence-based marine ecosystem assessment."
            />

          </div>
        </section>

        {/* Architecture */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Intelligence Architecture
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            Collaborative agent pipeline
          </h2>

          <div className="mt-7 flex flex-col gap-3 md:flex-row md:items-center">

            <ArchitectureBox text="Environmental Data" />

            <Arrow />

            <ArchitectureBox text="Specialized Agents" />

            <Arrow />

            <ArchitectureBox text="Agent Findings" />

            <Arrow />

            <ArchitectureBox
              text="Reasoning Agent"
              active
            />

            <Arrow />

            <ArchitectureBox
              text="ORCA Assessment"
              active
            />

          </div>
        </section>

        {/* Prototype vs Future */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Current Prototype
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              Intelligence layer
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              The prototype demonstrates how publicly available marine,
              satellite, weather and historical data can be analysed through
              a collaborative multi-agent workflow.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Future Scope
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              Real-world marine monitoring
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              ORCA can later integrate real-time buoy, sensor, weather and
              satellite data to support continuous marine ecosystem
              monitoring and assessment.
            </p>

          </div>

        </section>

        {/* Technology */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-7 md:p-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Technology
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                Built as a software intelligence platform
              </h2>
            </div>

            <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-500">
              Software Only
            </span>

          </div>

          <div className="mt-7 flex flex-wrap gap-3">

            {[
              "React",
              "Vite",
              "Tailwind CSS",
              "FastAPI",
              "Python",
              "LangGraph",
              "Gemini",
              "Leaflet",
              "Recharts",
              "Pandas",
              "NumPy",
              "GeoPandas",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-400"
              >
                {tech}
              </span>
            ))}

          </div>
        </section>

        {/* Team */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-center md:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Project
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Blue Nexus
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            ORCA – Marine Ecosystem Intelligence
          </p>

          <div className="mx-auto mt-6 h-px max-w-xs bg-slate-800" />

          <p className="mt-5 text-xs text-slate-600">
            Project Expo 2026
          </p>

        </section>

      </div>
    </main>
  )
}

function Section({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition hover:border-slate-700">

      <span className="text-xs font-bold text-cyan-400">
        {number}
      </span>

      <h2 className="mt-4 text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-slate-500">
        {text}
      </p>

    </div>
  )
}

function Step({ number, title, text }) {
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

function ArchitectureBox({ text, active }) {
  return (
    <div
      className={`flex flex-1 items-center justify-center rounded-xl border px-4 py-3 text-center text-xs font-medium ${
        active
          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
          : "border-slate-800 bg-slate-950 text-slate-500"
      }`}
    >
      {text}
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

export default About