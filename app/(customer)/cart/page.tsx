'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import { useCartStore, getCartTotal } from '@/lib/store/cart';

export default function CartPage() {
  const { items, updateQuantity, removeItem, orderType, tableNumber } = useCartStore();
  const total = getCartTotal(items);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Navbar theme="light" />
      </div>

      <div className="page-header">
        <h1 className="font-display font-bold text-nouri-black text-5xl">Your Order</h1>
        {orderType && (
          <p className="text-gray-500 mt-2 capitalize font-medium">
            {orderType.replace('-', ' ')}
            {orderType === 'dine-in' && tableNumber ? ` — Table ${tableNumber}` : ''}
          </p>
        )}
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-32">
        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-6xl mb-6">🛒</p>
            <h2 className="font-display text-2xl font-bold mb-3 text-nouri-black">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-10">Head to the menu and add some items.</p>
            <Link href="/menu" className="btn-primary">
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            <ul className="space-y-4 mb-8">
              {items.map((item) => (
                <li
                  key={item.menuItemId}
                  className="flex items-center gap-5 bg-nouri-gray rounded-3xl p-5"
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white flex-shrink-0 shadow-sm">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-nouri-black truncate">{item.name}</p>
                    <p className="text-nouri-red font-bold text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => updateQuantity(item.menuItemId, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border-2 border-gray-200 font-bold text-lg leading-none
                                 hover:border-nouri-red hover:text-nouri-red transition-colors"
                    >
                      −
                    </button>
                    <span className="w-5 text-center font-bold text-nouri-black">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.menuItemId, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border-2 border-gray-200 font-bold text-lg leading-none
                                 hover:border-nouri-red hover:text-nouri-red transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.menuItemId)}
                      className="ml-1 text-gray-300 hover:text-red-500 transition-colors text-xl leading-none"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Order summary */}
            <div className="bg-nouri-gray rounded-4xl p-8">
              <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 mb-5">
                <span>Service fee</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between text-xl font-black border-t border-gray-200 pt-5 mb-8">
                <span>Total</span>
                <span className="text-nouri-red">${total.toFixed(2)}</span>
              </div>

              <button className="w-full btn-primary text-center">
                Proceed to Payment
              </button>
              <p className="text-center text-gray-400 text-xs mt-3">
                Stripe payment integration — Phase 4
              </p>

              <Link
                href="/menu"
                className="block text-center text-gray-400 text-sm mt-5 hover:text-nouri-black transition-colors"
              >
                ← Add more items
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
