import React from 'react';

const stages = [
  { name: 'Sourcing', value: 62, color: 'from-sky-400/80 to-sky-500/50' },
  { name: 'Qualification', value: 38, color: 'from-violet-400/80 to-violet-500/50' },
  { name: 'Negotiation', value: 24, color: 'from-amber-400/80 to-amber-500/50' },
  { name: 'Awarded', value: 14, color: 'from-emerald-400/80 to-emerald-500/50' },
];

export default function PipelineChart() {
  const maxValue = Math.max(...stages.map(s => s.value));
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-medium">Sourcing pipeline</h3>
        <span className="text-xs text-white/60">Last 30 days</span>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stages.map((s) => (
          <div key={s.name} className="flex flex-col">
            <div className="h-40 w-full rounded-xl bg-white/5 border border-white/10 p-2 flex items-end">
              <div
                className={`w-full rounded-lg bg-gradient-to-t ${s.color} shadow-inner`}
                style={{ height: `${(s.value / maxValue) * 100}%` }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-white/80">{s.name}</span>
              <span className="text-sm font-medium text-white">{s.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-white/60">
        Visual overview of request flow from discovery to awarding suppliers.
      </div>
    </section>
  );
}
