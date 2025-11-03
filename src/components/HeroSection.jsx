import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 shadow-2xl">
      <div className="h-[520px] w-full">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for glass morphic feel (does not block the 3D scene) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
        <div className="max-w-3xl text-white/90">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs sm:text-sm border border-white/15 text-white">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Sourcing Intelligence
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            A beautiful B2B Sourcing Dashboard
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80">
            Discover, evaluate, and manage suppliers with a modern, glass‑morphic interface powered by real‑time insights.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type="text"
                placeholder="Search suppliers, categories, or RFQs"
                className="w-full pl-10 pr-4 h-12 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/60 backdrop-blur outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
            </div>
            <button className="inline-flex items-center justify-center gap-2 h-12 rounded-xl px-5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium transition-colors">
              Explore Marketplace
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
