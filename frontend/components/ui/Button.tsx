import { clsx } from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'mpesa';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const variants = {
  primary: 'bg-primary-container text-on-primary-container hover:brightness-95',
  secondary: 'border border-primary text-primary hover:bg-surface-container-low',
  ghost: 'text-primary hover:bg-surface-container-low',
  mpesa: 'bg-[#4CAF50] text-white hover:bg-[#43A047]',
};

const sizes = {
  sm: 'px-4 py-2 text-label-sm',
  md: 'px-6 py-3 text-label-md',
  lg: 'px-8 py-4 text-headline-md',
};

export function Button({ variant = 'primary', size = 'md', fullWidth, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-lg font-semibold transition-all duration-150 active:scale-95 flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
