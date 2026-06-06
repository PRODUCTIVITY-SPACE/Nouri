import { clsx } from 'clsx';
import type { OrderStatus } from '@/lib/types';
import { getStatusColor, getStatusLabel } from '@/lib/utils/format';

interface StatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold',
        getStatusColor(status),
        className
      )}
    >
      {getStatusLabel(status)}
    </span>
  );
}
