interface StatsCardProps {
  icon: string;
  iconBg: string;
  label: string;
  value: string;
  trend?: string;
  sub?: string;
  barPercent?: number;
}

export function StatsCard({ icon, iconBg, label, value, trend, sub, barPercent }: StatsCardProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${iconBg}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {trend && (
          <span className="text-tertiary font-label-md text-label-md flex items-center">
            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
            {trend}
          </span>
        )}
      </div>
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{label}</p>
      <p className="font-display text-display-lg mt-1">{value}</p>
      {sub && <p className="font-label-sm text-label-sm text-outline mt-2">{sub}</p>}
      {barPercent !== undefined && (
        <div className="mt-4 h-1 w-full bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: `${barPercent}%` }} />
        </div>
      )}
    </div>
  );
}
