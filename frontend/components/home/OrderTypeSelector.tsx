'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store/cart';
import type { OrderType } from '@/lib/types';

const OPTIONS = [
  { type: 'dine-in', label: 'Dine In', description: 'Order to your table', icon: '🍽️' },
  { type: 'takeaway', label: 'Takeaway', description: 'Pick up at counter', icon: '🛍️' },
  { type: 'delivery', label: 'Delivery', description: 'Delivered to you', icon: '🚴' },
] as const;

export default function OrderTypeSelector() {
  const router = useRouter();
  const {
    orderType,
    setOrderType,
    tableNumber,
    setTableNumber,
    deliveryAddress,
    setDeliveryAddress,
  } = useCartStore();

  const [selected, setSelected] = useState<OrderType | null>(null);
  const [tableInput, setTableInput] = useState<string>('');
  const [addressInput, setAddressInput] = useState<string>('');
  const [isHydrated, setIsHydrated] = useState(false);

  // Pre-select saved order type from Zustand store after hydration to avoid SSR mismatch
  useEffect(() => {
    setIsHydrated(true);
    if (orderType) {
      setSelected(orderType);
    }
    if (tableNumber) {
      setTableInput(tableNumber.toString());
    }
    if (deliveryAddress) {
      setAddressInput(deliveryAddress);
    }
  }, [orderType, tableNumber, deliveryAddress]);

  const handleSelect = (type: OrderType) => {
    // Toggle behavior: de-select if clicked again
    setSelected((prev) => (prev === type ? null : type));
  };

  const handleStartOrdering = () => {
    if (!selected) return;

    // Persist to Zustand store
    setOrderType(selected);
    if (selected === 'dine-in' && tableInput) {
      setTableNumber(parseInt(tableInput, 10));
    }
    if (selected === 'delivery' && addressInput) {
      setDeliveryAddress(addressInput);
    }

    // Navigate to menu page
    router.push('/menu');
  };

  if (!isHydrated) {
    // Return skeleton or matching layout during SSR to avoid hydration mismatch
    return (
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
        <h4 className="text-[10px] font-display font-extrabold tracking-widest text-neutral-400 uppercase mb-4">
          HOW WOULD YOU LIKE TO ORDER?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OPTIONS.map((opt) => (
            <div
              key={opt.type}
              className="flex flex-col items-center justify-center p-5 rounded-2xl border border-neutral-100 bg-white text-center h-28"
            >
              <span className="text-2xl mb-1">{opt.icon}</span>
              <span className="font-display font-bold text-sm text-neutral-800">{opt.label}</span>
              <span className="text-[10px] text-neutral-400 leading-tight">{opt.description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
      <h4 className="text-[10px] font-display font-extrabold tracking-widest text-neutral-400 uppercase mb-4">
        HOW WOULD YOU LIKE TO ORDER?
      </h4>

      {/* Grid of Options - responsive stack on mobile, row on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {OPTIONS.map((opt) => {
          const isSelected = selected === opt.type;
          return (
            <button
              key={opt.type}
              type="button"
              onClick={() => handleSelect(opt.type)}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-300 min-h-[112px] focus:outline-none focus:ring-2 focus:ring-nouri-red/50 ${
                isSelected
                  ? 'border-nouri-black bg-nouri-black text-white scale-105 shadow-md'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:shadow-md hover:border-neutral-300 hover:scale-[1.02]'
              }`}
              aria-label={`Select ${opt.label}`}
              aria-pressed={isSelected}
            >
              <span className="text-2xl mb-1 transition-transform duration-300 hover:scale-110">
                {opt.icon}
              </span>
              <span className="font-display font-bold text-sm leading-tight">
                {opt.label}
              </span>
              <span
                className={`text-[10px] leading-tight mt-1 transition-colors duration-300 ${
                  isSelected ? 'text-neutral-300' : 'text-neutral-400'
                }`}
              >
                {opt.description}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sub-inputs matching selection */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          selected && selected !== 'takeaway' ? 'max-h-28 opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
        }`}
      >
        {selected === 'dine-in' && (
          <div className="animate-fadeIn">
            <label htmlFor="table-number" className="block text-[10px] font-bold text-neutral-400 tracking-wider mb-1.5 uppercase">
              Table Number
            </label>
            <input
              id="table-number"
              type="number"
              placeholder="e.g. 4"
              value={tableInput}
              onChange={(e) => setTableInput(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-nouri-black focus:outline-none focus:border-nouri-red transition-all"
              min="1"
            />
            <p className="text-[9px] text-neutral-400 mt-1">
              Table number will be automatically registered from QR code scan
            </p>
          </div>
        )}

        {selected === 'delivery' && (
          <div className="animate-fadeIn">
            <label htmlFor="delivery-address" className="block text-[10px] font-bold text-neutral-400 tracking-wider mb-1.5 uppercase">
              Delivery Address
            </label>
            <input
              id="delivery-address"
              type="text"
              placeholder="Enter your street address"
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-nouri-black focus:outline-none focus:border-nouri-red transition-all"
            />
            <p className="text-[9px] text-neutral-400 mt-1">
              Delivery available within 5km of restaurant kitchen
            </p>
          </div>
        )}
      </div>

      {/* Tappable Start Ordering Button with smooth reveal transition */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          selected ? 'max-h-20 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={handleStartOrdering}
          className="w-full bg-nouri-red hover:bg-nouri-red-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-nouri-red/25 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group min-h-[48px]"
        >
          <span>Start Ordering</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
