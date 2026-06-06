'use client';

import { clsx } from 'clsx';
import type { PaymentMethod } from '@/lib/types';

interface PaymentOptionProps {
  id: PaymentMethod;
  selected: PaymentMethod;
  onSelect: (id: PaymentMethod) => void;
  icon: string;
  iconBg: string;
  label: string;
  sublabel: string;
  children?: React.ReactNode;
}

export function PaymentOption({ id, selected, onSelect, icon, iconBg, label, sublabel, children }: PaymentOptionProps) {
  const isSelected = selected === id;

  return (
    <div>
      <label
        className={clsx(
          'flex items-center justify-between p-5 border-2 rounded-xl cursor-pointer transition-all',
          isSelected
            ? 'border-primary bg-primary-container/10'
            : 'border-outline-variant hover:bg-surface-container-low'
        )}
      >
        <div className="flex items-center gap-4">
          <div className={clsx('w-12 h-12 rounded-lg flex items-center justify-center', iconBg)}>
            <span className="material-symbols-outlined text-white">{icon}</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface">{label}</p>
            <p className="text-label-sm text-label-sm text-on-surface-variant">{sublabel}</p>
          </div>
        </div>
        <div
          className={clsx('w-6 h-6 border-2 rounded-full flex items-center justify-center flex-shrink-0', isSelected ? 'border-primary' : 'border-outline-variant')}
          onClick={() => onSelect(id)}
        >
          {isSelected && <div className="w-3 h-3 bg-primary rounded-full" />}
        </div>
      </label>

      {isSelected && children && (
        <div className="mt-4 px-2">{children}</div>
      )}
    </div>
  );
}
