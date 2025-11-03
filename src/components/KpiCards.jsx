import React from 'react';
import { TrendingUp, Package, Users, Shield } from 'lucide-react';

const Stat = ({ icon: Icon, label, value, delta, tone = 'emerald' }) => {
  const toneMap = {
    emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    sky: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    violet: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  };
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 flex flex-col gap-4 hover:bg-white/10 transition-colors">
      <div className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs ${toneMap[tone]}`}>
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-3xl font-semibold text-white">{value}</div>
          <div className="text-xs text-white/60 mt-1">vs previous period</div>
        </div>
        {delta && (
          <div className="text-xs font-medium text-emerald-400">{delta}
          </div>
        )}
      </div>
    </div>
  );
};

export default function KpiCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat icon={TrendingUp} label="RFQs this week" value="128" delta="+12%" tone="emerald" />
      <Stat icon={Package} label="Active SKUs" value="5,342" delta="+3%" tone="sky" />
      <Stat icon={Users} label="Verified suppliers" value="842" delta="+2%" tone="amber" />
      <Stat icon={Shield} label="Compliance passed" value="97%" delta="+1%" tone="violet" />
    </section>
  );
}
