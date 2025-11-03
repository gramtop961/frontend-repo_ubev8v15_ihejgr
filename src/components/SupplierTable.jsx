import React from 'react';
import { CheckCircle, XCircle, Clock, Star, ArrowUpRight } from 'lucide-react';

const suppliers = [
  { name: 'Apex Manufacturing Co.', category: 'Precision Parts', score: 92, status: 'Approved', lead: '14 days' },
  { name: 'Nova Plastics Ltd.', category: 'Injection Molding', score: 86, status: 'Review', lead: '21 days' },
  { name: 'BluePeak Metals', category: 'Metal Fabrication', score: 78, status: 'Approved', lead: '18 days' },
  { name: 'Quantum Electronics', category: 'PCB Assembly', score: 73, status: 'Pending', lead: '30 days' },
];

const StatusPill = ({ status }) => {
  const map = {
    Approved: { icon: CheckCircle, cls: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
    Review: { icon: Clock, cls: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
    Pending: { icon: XCircle, cls: 'text-sky-400 bg-sky-400/10 border-sky-400/20' },
  };
  const Icon = map[status]?.icon || Clock;
  const cls = map[status]?.cls || 'text-white bg-white/10 border-white/20';
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs ${cls}`}>
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
};

export default function SupplierTable() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-medium">Top suppliers</h3>
        <button className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300">
          View all
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-white/60">
              <th className="py-2 pr-4 font-normal">Supplier</th>
              <th className="py-2 pr-4 font-normal">Category</th>
              <th className="py-2 pr-4 font-normal">Quality score</th>
              <th className="py-2 pr-4 font-normal">Lead time</th>
              <th className="py-2 pr-4 font-normal">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {suppliers.map((s) => (
              <tr key={s.name} className="text-white/90">
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                      <Star className="h-4 w-4 text-amber-300" />
                    </div>
                    <div className="min-w-[180px]">
                      <div className="font-medium text-white">{s.name}</div>
                      <div className="text-xs text-white/60">Preferred</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 pr-4 text-white/80">{s.category}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 rounded bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500" style={{ width: `${s.score}%` }} />
                    </div>
                    <span className="tabular-nums">{s.score}</span>
                  </div>
                </td>
                <td className="py-3 pr-4 text-white/80">{s.lead}</td>
                <td className="py-3 pr-4">
                  <StatusPill status={s.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
