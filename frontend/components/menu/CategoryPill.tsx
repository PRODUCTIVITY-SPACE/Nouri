'use client';

import { clsx } from 'clsx';

interface CategoryPillProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

export function CategoryPill({ label, active, onClick }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex-shrink-0 px-6 py-2 rounded-full font-label-md text-label-md transition-colors',
        active
          ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
      )}
    >
      {label}
    </button>
  );
}
