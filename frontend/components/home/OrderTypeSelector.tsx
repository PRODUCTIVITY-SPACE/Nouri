'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store/cart';
import type { OrderType } from '@/lib/types';

const types: { id: OrderType; icon: string; label: string }[] = [
  { id: 'dine-in', icon: 'restaurant', label: 'Dine In' },
  { id: 'takeaway', icon: 'shopping_bag', label: 'Takeaway' },
  { id: 'delivery', icon: 'local_shipping', label: 'Delivery' },
];

export function OrderTypeSelector() {
  const [selected, setSelected] = useState<OrderType>('dine-in');
  const [tableNo, setTableNo] = useState('');
  const [address, setAddress] = useState('');
  const { setOrderType, setTableNumber, setDeliveryAddress } = useCartStore();
  const router = useRouter();

  const handleExplore = () => {
    setOrderType(selected);
    if (selected === 'dine-in' && tableNo) setTableNumber(Number(tableNo));
    if (selected === 'delivery' && address) setDeliveryAddress(address);
    router.push('/menu');
  };

  return (
    <section className="px-container-margin-mobile md:px-container-margin-desktop -mt-8 relative z-10">
      <div className="glass-card rounded-xl p-6 border border-outline-variant shadow-lg flex flex-col gap-stack-lg max-w-2xl">
        <div className="flex flex-col gap-stack-md">
          <p className="font-label-md text-label-md text-on-surface-variant">Choose your experience</p>
          <div className="grid grid-cols-3 gap-2 bg-surface-container-low p-1 rounded-xl">
            {types.map(({ id, icon, label }) => (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`flex flex-col items-center gap-1 py-3 rounded-lg transition-all ${
                  selected === id
                    ? 'bg-primary-container text-on-primary-container shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <span className="material-symbols-outlined">{icon}</span>
                <span className="font-label-sm text-label-sm">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          {selected !== 'delivery' ? (
            <div className="flex flex-col gap-stack-sm">
              <label className="font-label-md text-label-md text-on-surface-variant">
                {selected === 'takeaway' ? 'Preferred Pickup Time' : 'Table Number'}
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                  {selected === 'takeaway' ? 'schedule' : 'table_restaurant'}
                </span>
                <input
                  type={selected === 'takeaway' ? 'time' : 'number'}
                  value={tableNo}
                  onChange={(e) => setTableNo(e.target.value)}
                  placeholder={selected === 'takeaway' ? '' : 'Enter number (e.g., 12)'}
                  className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body-md text-body-md"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-stack-sm">
              <label className="font-label-md text-label-md text-on-surface-variant">Delivery Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">location_on</span>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your area or street"
                  className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body-md text-body-md"
                />
              </div>
            </div>
          )}
        </div>

        <button
          onClick={handleExplore}
          className="w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-4 rounded-xl shadow-md hover:brightness-95 active:scale-95 duration-150 transition-all flex items-center justify-center gap-3"
        >
          Explore Menu
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
