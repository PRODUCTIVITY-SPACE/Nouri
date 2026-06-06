import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
}

const variants = {
  default: 'bg-surface-container-lowest rounded-2xl border border-outline-variant',
  elevated: 'bg-surface-container-lowest rounded-2xl shadow-md',
  outlined: 'bg-surface rounded-2xl border border-outline-variant',
};

export function Card({ variant = 'default', className, children, ...props }: CardProps) {
  return (
    <div className={clsx(variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
