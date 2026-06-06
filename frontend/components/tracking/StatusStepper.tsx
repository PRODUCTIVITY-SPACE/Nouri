'use client';

import { clsx } from 'clsx';
import type { OrderStatus } from '@/lib/types';

const STEPS: { id: OrderStatus; icon: string; label: string }[] = [
  { id: 'received', icon: 'check', label: 'Order\nReceived' },
  { id: 'preparing', icon: 'restaurant', label: 'Being\nPrepared' },
  { id: 'ready', icon: 'shopping_bag', label: 'Ready for\nPickup' },
  { id: 'served', icon: 'local_shipping', label: 'Served /\nArriving' },
];

const STATUS_ORDER: OrderStatus[] = ['received', 'preparing', 'ready', 'served'];

interface StatusStepperProps {
  status: OrderStatus;
}

export function StatusStepper({ status }: StatusStepperProps) {
  const currentIdx = STATUS_ORDER.indexOf(status);

  return (
    <div className="relative px-2">
      {/* Background track */}
      <div className="absolute top-5 left-0 w-full h-1 bg-surface-container-highest z-0" />
      {/* Active track */}
      <div
        className="absolute top-5 left-0 h-1 z-0 transition-all duration-700"
        style={{
          width: `${(currentIdx / (STEPS.length - 1)) * 100}%`,
          background: 'linear-gradient(90deg, #4CAF50 0%, #e5e7eb 100%)',
        }}
      />

      <div className="relative z-10 flex justify-between">
        {STEPS.map(({ id, icon, label }, idx) => {
          const done = idx < currentIdx;
          const active = idx === currentIdx;
          const upcoming = idx > currentIdx;

          return (
            <div key={id} className={clsx('flex flex-col items-center gap-2', upcoming && 'opacity-40')}>
              <div
                className={clsx(
                  'w-10 h-10 rounded-full flex items-center justify-center',
                  done && 'bg-[#4CAF50] text-white',
                  active && 'bg-primary-container text-on-primary-container ring-4 ring-white animate-status-pulse',
                  upcoming && 'bg-surface-container-highest text-on-surface-variant'
                )}
              >
                <span className="material-symbols-outlined">{done ? 'check' : icon}</span>
              </div>
              <span
                className={clsx(
                  'font-label-sm text-label-sm text-center whitespace-pre-line',
                  active ? 'text-primary font-bold' : 'text-on-surface-variant'
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
