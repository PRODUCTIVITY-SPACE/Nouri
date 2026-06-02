'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { clsx } from 'clsx';
import { useCartStore } from '@/lib/store/cart';
import type { OrderType } from '@/lib/types';

const OPTIONS: { type: OrderType; label: string; description: string; icon: string }[] = [
  { type: 'dine-in',   label: 'Dine In',   description: 'Order to your table', icon: '🍽️' },
  { type: 'takeaway',  label: 'Takeaway',  description: 'Pick up at counter',  icon: '🛍️' },
  { type: 'delivery',  label: 'Delivery',  description: 'Delivered to you',    icon: '🚴' },
];

export default function OrderTypeSelector() {
  const [selected, setSelected] = useState<OrderType | null>(null);
  const { setOrderType } = useCartStore();
  const router = useRouter();

  const handleStart = () => {
    if (!selected) return;
    setOrderType(selected);
    router.push('/menu');
  };

  return (
    <div className="mt-10">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
        How would you like to order?
      </p>

      <div className="flex gap-3 flex-wrap">
        {OPTIONS.map(({ type, label, description, icon }) => (
          <button
            key={type}
            onClick={() => setSelected(type)}
            className={clsx(
              'flex flex-col items-start gap-1 px-5 py-4 rounded-3xl border-2 text-left',
              'transition-all duration-200 min-w-[130px]',
              selected === type
                ? 'border-nouri-black bg-nouri-black text-white shadow-xl scale-105'
                : 'border-gray-200 bg-white hover:border-gray-400 hover:shadow-md'
            )}
          >
            <span className="text-2xl">{icon}</span>
            <span className="font-bold text-sm">{label}</span>
            <span
              className={clsx(
                'text-xs',
                selected === type ? 'text-gray-300' : 'text-gray-400'
              )}
            >
              {description}
            </span>
          </button>
        ))}
      </div>

      <div
        className={clsx(
          'transition-all duration-300 overflow-hidden',
          selected ? 'max-h-24 opacity-100 mt-8' : 'max-h-0 opacity-0'
        )}
      >
        <button onClick={handleStart} className="btn-primary">
          Start Ordering →
        </button>
      </div>
    </div>
  );
}
