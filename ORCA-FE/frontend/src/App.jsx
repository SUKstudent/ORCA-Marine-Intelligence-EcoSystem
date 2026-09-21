import { useState } from "react"
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import MarineMap from "./pages/MarineMap"
import Agents from "./pages/Agents"
import Analysis from "./pages/Analysis"
import Reasoning from "./pages/Reasoning"
import About from "./pages/About"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Map", path: "/map" },
    { name: "Agents", path: "/agents" },
    { name: "Analysis", path: "/analysis" },
    { name: "Reasoning", path: "/reasoning" },
    { name: "About", path: "/about" },
  ]

  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#020617]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >

            {/* ORCA SYMBOL */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.08)]">

              <svg
                viewBox="0 0 48 48"
                className="h-7 w-7 text-cyan-400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >

                {/* Orca body */}
                <path
                  d="M7 27C9 18 17 11 26 11C35 11 41 17 41 25C41 34 34 40 25 40C16 40 10 35 7 27Z"
                  fill="currentColor"
                  opacity="0.95"
                />

                {/* White belly / wave */}
                <path
                  d="M10 28C15 26 20 27 24 30C28 33 33 32 38 28C36 35 31 38 25 38C18 38 13 34 10 28Z"
                  fill="#020617"
                  opacity="0.9"
                />

                {/* Fin */}
                <path
                  d="M25 13C27 7 31 5 35 8C32 12 29 15 26 17"
                  fill="currentColor"
                />

                {/* Eye */}
                <circle
                  cx="31"
                  cy="20"
                  r="2"
                  fill="#020617"
                />

              </svg>

            </div>


            {/* BRAND TEXT */}
            <div className="leading-none">

              <div className="text-xl font-bold tracking-wide text-white">
                ORCA
              </div>

              <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.28em] text-slate-500">
                Marine Intelligence
              </div>

            </div>

          </Link>


          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 md:flex">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

          </div>


          {/* DASHBOARD BUTTON */}
          <Link
            to="/dashboard"
            className="hidden rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/15 md:block"
          >
            Launch ORCA
          </Link>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400 md:hidden"
            aria-label="Toggle menu"
          >

            {menuOpen ? (

              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  d="M6 6L18 18M6 18L18 6"
                />
              </svg>

            ) : (

              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  d="M4 7H20M4 12H20M4 17H20"
                />
              </svg>

            )}

          </button>

        </div>


        {/* MOBILE NAVIGATION */}
        {menuOpen && (

          <div className="border-t border-slate-800 bg-[#020617] px-6 py-4 md:hidden">

            <div className="flex flex-col gap-1">

              {navItems.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

              ))}

              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
              >
                Launch ORCA
              </Link>

            </div>

          </div>

        )}

      </nav>


      {/* PAGE ROUTES */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/map" element={<MarineMap />} />

        <Route path="/agents" element={<Agents />} />

        <Route path="/analysis" element={<Analysis />} />

        <Route path="/reasoning" element={<Reasoning />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App