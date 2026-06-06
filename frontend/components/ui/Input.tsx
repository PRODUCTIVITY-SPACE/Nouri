import { clsx } from 'clsx';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string; // Material Symbol name
}

export function Input({ label, icon, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-stack-sm">
      {label && (
        <label htmlFor={id} className="font-label-md text-label-md text-on-surface-variant">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={clsx(
            'w-full bg-surface border border-outline-variant rounded-lg py-3 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body-md text-body-md text-on-surface',
            icon ? 'pl-12' : 'pl-4',
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}
