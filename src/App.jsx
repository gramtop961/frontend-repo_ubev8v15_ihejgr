import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import KpiCards from './components/KpiCards.jsx';
import PipelineChart from './components/PipelineChart.jsx';
import SupplierTable from './components/SupplierTable.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500" />
            <span className="text-sm font-medium text-white/80">Orbit Sourcing</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Dashboard</a>
            <a href="#" className="hover:text-white">Suppliers</a>
            <a href="#" className="hover:text-white">RFQs</a>
            <a href="#" className="hover:text-white">Settings</a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <HeroSection />
        <KpiCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <PipelineChart />
          </div>
          <div className="lg:col-span-2">
            <SupplierTable />
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-4 pb-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Orbit Sourcing — Modern B2B Procurement
        </footer>
      </main>
    </div>
  );
}
