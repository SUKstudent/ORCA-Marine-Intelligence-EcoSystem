import { useState } from "react"
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"

const regions = {
  "Arabian Sea": {
    position: [16.5, 64.5],
    zoom: 5,
  },
  "Bay of Bengal": {
    position: [14, 88],
    zoom: 5,
  },
  "Indian Ocean": {
    position: [-10, 75],
    zoom: 4,
  },
  "Pacific Ocean": {
    position: [0, -150],
    zoom: 3,
  },
  "Atlantic Ocean": {
    position: [10, -35],
    zoom: 3,
  },
  "Mediterranean Sea": {
    position: [35, 18],
    zoom: 5,
  },
  "Arctic Ocean": {
    position: [82, 0],
    zoom: 3,
  },
  "Southern Ocean": {
    position: [-60, 20],
    zoom: 3,
  },
}

function MarineMap() {
  const [region, setRegion] = useState("Arabian Sea")
  const [layer, setLayer] = useState("Overview")

  const selectedRegion = regions[region]

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-10 text-white lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              ORCA Geospatial Intelligence
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Marine Map
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              Explore marine regions and prepare environmental observation
              layers for ORCA analysis.
            </p>
          </div>

          {/* STATUS */}
          <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">
              MAP SYSTEM READY
            </span>
          </div>

        </div>


        {/* CONTROLS */}
        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">

          <div className="grid gap-5 md:grid-cols-3">

            {/* REGION */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Marine Region
              </label>

              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-medium text-white outline-none transition focus:border-cyan-400"
              >
                {Object.keys(regions).map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </div>


            {/* LAYER */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Observation Layer
              </label>

              <select
                value={layer}
                onChange={(e) => setLayer(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-medium text-white outline-none transition focus:border-cyan-400"
              >
                <option>Overview</option>
                <option>Sea Surface Temperature</option>
                <option>Chlorophyll</option>
                <option>Wind</option>
                <option>Satellite</option>
              </select>
            </div>


            {/* STATUS */}
            <div>

              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Data Status
              </label>

              <div className="flex h-[46px] items-center rounded-xl border border-slate-700 bg-slate-950 px-4">

                <span className="mr-2 h-2 w-2 rounded-full bg-slate-600" />

                <span className="text-sm text-slate-500">
                  Awaiting observation data
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* MAP */}
        <section className="relative mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">

          <div className="relative h-[620px]">

            <MapContainer
              center={selectedRegion.position}
              zoom={selectedRegion.zoom}
              scrollWheelZoom={true}
              className="h-full w-full"
            >

              {/* OPEN STREET MAP */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />


              {/* SELECTED REGION */}
              <CircleMarker
                center={selectedRegion.position}
                radius={12}
                pathOptions={{
                  color: "#22d3ee",
                  fillColor: "#22d3ee",
                  fillOpacity: 0.35,
                  weight: 2,
                }}
              >

                <Popup>
                  <div className="text-sm">

                    <strong>{region}</strong>

                    <br />

                    Observation layer:
                    <br />

                    <strong>{layer}</strong>

                    <br />

                    <span>
                      Data integration pending
                    </span>

                  </div>
                </Popup>

              </CircleMarker>


              <MapController
                position={selectedRegion.position}
                zoom={selectedRegion.zoom}
              />

            </MapContainer>


            {/* MAP TOP BAR */}
            <div className="pointer-events-none absolute left-4 right-4 top-4 z-[500]">

              <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-700/80 bg-slate-950/90 p-4 shadow-xl backdrop-blur-md sm:flex-row sm:items-center">

                <div>

                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Active Region
                  </p>

                  <p className="mt-1 font-semibold text-cyan-300">
                    {region}
                  </p>

                </div>


                <div className="text-left sm:text-right">

                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Layer
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {layer}
                  </p>

                </div>

              </div>

            </div>


            {/* LEGEND */}
            <div className="absolute bottom-5 left-5 z-[500] w-52 rounded-xl border border-slate-700/80 bg-slate-950/90 p-4 shadow-xl backdrop-blur-md">

              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Map Legend
              </p>

              <div className="mt-4 space-y-3">

                <LegendItem
                  symbol="●"
                  label="Selected region"
                />

                <LegendItem
                  symbol="—"
                  label="Observation layer"
                />

                <LegendItem
                  symbol="○"
                  label="Data unavailable"
                />

              </div>

            </div>


            {/* DATA STATUS PANEL */}
            <div className="absolute bottom-5 right-5 z-[500] hidden w-64 rounded-xl border border-slate-700/80 bg-slate-950/90 p-4 shadow-xl backdrop-blur-md sm:block">

              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Observation Status
              </p>

              <div className="mt-4 space-y-3">

                <StatusRow label="Region" value={region} />

                <StatusRow label="Layer" value={layer} />

                <StatusRow
                  label="Satellite data"
                  value="Pending"
                />

                <StatusRow
                  label="Environmental data"
                  value="Pending"
                />

              </div>

            </div>

          </div>

        </section>


        {/* INFORMATION CARDS */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">

          <InfoCard
            icon="🌡"
            title="Sea Surface Temperature"
            description="Temperature observations will be visualized here when the SST dataset is connected."
          />

          <InfoCard
            icon="🌿"
            title="Chlorophyll"
            description="Ocean productivity indicators will appear here from marine observation data."
          />

          <InfoCard
            icon="🛰"
            title="Satellite Observation"
            description="Satellite-derived environmental information will be integrated into this layer."
          />

        </section>


        {/* NOTE */}
        <div className="py-10 text-center">

          <p className="text-xs text-slate-600">
            ORCA — Marine Ecosystem Intelligence • Geospatial Observation Layer
          </p>

        </div>

      </div>

    </main>
  )
}


/* ---------------- MAP CONTROLLER ---------------- */

function MapController({ position, zoom }) {
  const map = useMap()

  map.setView(position, zoom)

  return null
}


/* ---------------- COMPONENTS ---------------- */

function LegendItem({ symbol, label }) {
  return (
    <div className="flex items-center gap-3">

      <span className="w-5 text-center text-cyan-400">
        {symbol}
      </span>

      <span className="text-xs text-slate-500">
        {label}
      </span>

    </div>
  )
}


function StatusRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-2">

      <span className="text-xs text-slate-500">
        {label}
      </span>

      <span className="max-w-[130px] truncate text-xs font-medium text-slate-400">
        {value}
      </span>

    </div>
  )
}


function InfoCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-400/20">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-lg">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  )
}


export default MarineMap