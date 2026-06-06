'use client';

import { useState } from 'react';
import Link from 'next/link';

type OrderType = 'dine_in' | 'takeaway' | 'delivery';

export default function OrderTypeSelector() {
  const [selectedType, setSelectedType] = useState<OrderType>('dine_in');
  const [tableNumber, setTableNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
      <h3 className="font-display text-lg font-bold text-nouri-black mb-4">
        How would you like to order?
      </h3>

      {/* Grid of Options */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {/* Dine In */}
        <button
          type="button"
          onClick={() => setSelectedType('dine_in')}
          className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 ${
            selectedType === 'dine_in'
              ? 'border-nouri-red bg-red-50/30 text-nouri-red scale-[1.02]'
              : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200 hover:text-nouri-black'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
          <span className="text-xs font-bold block">Dine In</span>
        </button>

        {/* Takeaway */}
        <button
          type="button"
          onClick={() => setSelectedType('takeaway')}
          className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 ${
            selectedType === 'takeaway'
              ? 'border-nouri-red bg-red-50/30 text-nouri-red scale-[1.02]'
              : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200 hover:text-nouri-black'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="text-xs font-bold block">Takeaway</span>
        </button>

        {/* Delivery */}
        <button
          type="button"
          onClick={() => setSelectedType('delivery')}
          className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 ${
            selectedType === 'delivery'
              ? 'border-nouri-red bg-red-50/30 text-nouri-red scale-[1.02]'
              : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200 hover:text-nouri-black'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 4.613 4.5h14.774a1.125 1.125 0 0 1 1.12 1.243l-1.264 12a1.125 1.125 0 0 1-1.12 1.243m-7.5 0h7.5m-13.5-6h16.5M7.5 12h9m-9-3h9m-9-3h9"
            />
          </svg>
          <span className="text-xs font-bold block">Delivery</span>
        </button>
      </div>

      {/* Dynamic Sub-forms */}
      <div className="min-h-[70px] flex items-center justify-center mb-6">
        {selectedType === 'dine_in' && (
          <div className="w-full animate-fadeIn">
            <label htmlFor="table-number" className="sr-only">Table Number</label>
            <input
              id="table-number"
              type="text"
              placeholder="Table Number (e.g. 4)"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-nouri-red transition-all"
            />
            <p className="text-[10px] text-gray-400 mt-1.5 ml-1">
              Table will be pre-filled automatically when scanning a table QR code.
            </p>
          </div>
        )}

        {selectedType === 'takeaway' && (
          <div className="w-full text-center py-2 px-4 bg-gray-50 rounded-xl border border-gray-100 animate-fadeIn">
            <p className="text-xs font-semibold text-nouri-gray-mid">
              ⚡ Prepared Fresh & Packed in <span className="text-nouri-red">15–20 mins</span>.
            </p>
            <p className="text-[10px] text-gray-400 mt-1">
              Pick up at the main counter when notified.
            </p>
          </div>
        )}

        {selectedType === 'delivery' && (
          <div className="w-full animate-fadeIn">
            <label htmlFor="delivery-address" className="sr-only">Delivery Address</label>
            <input
              id="delivery-address"
              type="text"
              placeholder="Enter Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-nouri-red transition-all"
            />
            <p className="text-[10px] text-gray-400 mt-1.5 ml-1">
              Currently delivering within a 5km radius of the kitchen.
            </p>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <Link href="/menu">
        <button
          type="button"
          className="w-full bg-nouri-black hover:bg-neutral-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group"
        >
          <span>Browse Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
