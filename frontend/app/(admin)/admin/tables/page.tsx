'use client';

import { useState } from 'react';

interface TableRow {
  id: string;
  zone: string;
  status: 'active' | 'inactive' | 'occupied';
}

const TABLES: TableRow[] = [
  { id: 'Table 01', zone: 'Main Hall', status: 'active' },
  { id: 'Table 02', zone: 'Main Hall', status: 'active' },
  { id: 'Table 03', zone: 'Terrace', status: 'inactive' },
  { id: 'Table 04', zone: 'Terrace', status: 'active' },
  { id: 'VIP 01', zone: 'Private Lounge', status: 'occupied' },
];

const STATUS_STYLES = {
  active: 'bg-secondary-container text-on-secondary-container',
  inactive: 'bg-surface-container-high text-on-surface-variant',
  occupied: 'bg-primary-fixed text-on-primary-fixed-variant animate-status-pulse',
};

const STATUS_DOT = {
  active: 'bg-green-500',
  inactive: 'bg-outline',
  occupied: 'bg-primary',
};

export default function TablesQRPage() {
  const [selected, setSelected] = useState('Table 01');

  return (
    <div className="px-container-margin-mobile md:px-container-margin-desktop max-w-[1440px] mx-auto py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-lg mb-stack-lg">
        <div>
          <h1 className="font-display text-headline-lg text-on-surface">QR Code Management</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage physical table identifiers and generate branded digital menus.</p>
        </div>
        <div className="flex gap-stack-md">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[20px]">download</span>
            Bulk Download (ZIP)
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add New Table
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Table inventory */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
            <h3 className="font-label-md text-label-md text-on-surface">Active Inventory</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input className="pl-10 pr-4 py-1.5 border border-outline-variant rounded-full bg-surface text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Search tables..." type="text" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  {['Table #', 'Zone', 'Status', 'Actions'].map((h) => (
                    <th key={h} className={`px-6 py-3 font-label-md text-label-md text-on-surface-variant ${h === 'Actions' ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {TABLES.map((table) => (
                  <tr key={table.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-body-md text-on-surface font-semibold">{table.id}</td>
                    <td className="px-6 py-4 font-body-md text-on-surface-variant">{table.zone}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[table.status]}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[table.status]}`} />
                        {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className={`flex justify-end gap-2 ${table.status === 'inactive' ? 'opacity-50 pointer-events-none' : ''}`}>
                        <button
                          onClick={() => setSelected(table.id)}
                          className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
                        >
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                          <span className="material-symbols-outlined">refresh</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Showing {TABLES.length} of 24 tables</span>
            <div className="flex gap-2">
              <button className="p-1 border border-outline-variant rounded hover:bg-surface-container transition-colors opacity-30" disabled>
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="p-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* QR preview + stats */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          {/* QR Preview card */}
          <div className="bg-surface-container rounded-xl border border-outline-variant p-6 shadow-sm">
            <h3 className="font-display text-headline-md text-on-surface mb-6">Live Preview</h3>
            <div className="bg-white rounded-2xl p-8 aspect-square flex flex-col items-center justify-center shadow-lg border border-outline-variant/30">
              <div className="flex items-center gap-2 self-start mb-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Nouri Premium</span>
              </div>
              {/* QR placeholder */}
              <div className="w-40 h-40 rounded-xl p-3 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, #855300 0%, #9b4500 100%)' }}>
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative">
                  <span className="font-display text-primary/10 text-[80px] select-none">N</span>
                  <div className="absolute w-10 h-10 bg-white rounded-lg shadow-md border-2 border-primary flex items-center justify-center">
                    <span className="font-bold text-primary text-lg">N</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-display text-headline-md text-on-surface">{selected}</h4>
                <p className="text-on-surface-variant font-label-sm text-label-sm mt-1">Scan to order &amp; pay</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">palette</span>
                  <span className="font-label-md text-label-md">Branding Color</span>
                </div>
                <div className="flex gap-2">
                  {['bg-primary', 'bg-tertiary', 'bg-[#4CAF50]'].map((c) => (
                    <div key={c} className={`w-5 h-5 rounded-full ${c} cursor-pointer ring-2 ring-offset-1 ring-transparent first:ring-primary`} />
                  ))}
                </div>
              </div>
              <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-transform">
                <span className="material-symbols-outlined">download</span>
                Download SVG (Branded)
              </button>
            </div>
          </div>

          {/* Monthly scans stats */}
          <div className="bg-primary-fixed text-on-primary-fixed-variant rounded-xl p-6 shadow-sm border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined">analytics</span>
              <h4 className="font-label-md text-label-md">Monthly Scans</h4>
            </div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold tracking-tight">12.4k</div>
              <div className="flex items-center text-green-700 bg-green-100 px-2 py-0.5 rounded text-xs font-bold">
                <span className="material-symbols-outlined text-xs">trending_up</span>14%
              </div>
            </div>
            <div className="mt-4 w-full h-1.5 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[65%]" />
            </div>
            <p className="text-[11px] mt-2 opacity-80 uppercase tracking-wider font-bold">Limit: 20k scans/mo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
