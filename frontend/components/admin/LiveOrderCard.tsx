'use client';

import { clsx } from 'clsx';

interface OrderItem {
  name: string;
  done: boolean;
}

interface LiveOrderCardProps {
  tableLabel: string;
  timeLabel: string;
  urgent?: boolean;
  items: OrderItem[];
  onReady: () => void;
  actionLabel?: string;
}

export function LiveOrderCard({ tableLabel, timeLabel, urgent, items, onReady, actionLabel = 'Ready' }: LiveOrderCardProps) {
  return (
    <div
      className={clsx(
        'bg-surface-container-lowest shadow-sm rounded-r-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md border-l-4',
        urgent ? 'border-tertiary' : 'border-outline-variant'
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <span className="font-label-md text-label-md text-on-surface">{tableLabel}</span>
        <span className={clsx('text-[10px] font-bold', urgent ? 'text-tertiary' : 'text-on-surface-variant animate-pulse')}>
          {timeLabel}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {items.map((item) => (
          <div key={item.name} className="flex justify-between font-body-md">
            <span className={item.done ? '' : 'text-primary font-semibold'}>{item.name}</span>
            <span className={clsx('material-symbols-outlined text-lg', item.done ? 'text-outline' : 'text-primary')}>
              {item.done ? 'check_circle' : 'sync'}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={onReady}
          className="flex-1 py-2 bg-primary text-on-primary rounded-lg font-label-md text-sm active:scale-95 transition-transform"
        >
          {actionLabel}
        </button>
        <button className="px-3 py-2 bg-surface-container-high rounded-lg">
          <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
        </button>
      </div>
    </div>
  );
}
