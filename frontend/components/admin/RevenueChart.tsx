const BARS = [
  { label: '08:00', value: 12, height: 'h-24' },
  { label: '10:00', value: 22, height: 'h-40' },
  { label: '12:00', value: 34, height: 'h-48' },
  { label: '14:00', value: 16, height: 'h-32' },
  { label: '16:00', value: 14, height: 'h-28' },
  { label: '18:00', value: 26, height: 'h-44' },
];

export function RevenueChart() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-display text-headline-md text-on-surface">Revenue Trends</h3>
        <select className="bg-surface border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant focus:ring-primary px-3 py-1.5 outline-none">
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      <div className="flex items-end justify-between gap-4 px-2 h-[200px]">
        {BARS.map(({ label, value, height }) => (
          <div key={label} className="flex flex-col items-center gap-2 flex-1 group">
            <div className={`w-full bg-primary-fixed group-hover:bg-primary transition-colors rounded-t-lg ${height} relative`}>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {value}k
              </div>
            </div>
            <span className="font-label-sm text-label-sm text-outline">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
