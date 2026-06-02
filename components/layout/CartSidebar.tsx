'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore, getCartTotal } from '@/lib/store/cart';

export default function CartSidebar() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem } = useCartStore();
  const total = getCartTotal(items);

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998]"
          onClick={closeCart}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-cart z-[999]
                    flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
          <h2 className="font-display text-2xl font-bold text-nouri-black">Your Order</h2>
          <button
            onClick={closeCart}
            className="text-3xl text-gray-300 hover:text-nouri-black transition-colors leading-none"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 text-center">
              <span className="text-5xl mb-4">🛒</span>
              <p className="font-semibold">Your cart is empty</p>
              <p className="text-sm mt-1">Add items from the menu to get started.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.menuItemId}
                  className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0"
                >
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-nouri-gray flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-nouri-black truncate">{item.name}</p>
                    <p className="text-nouri-red font-bold text-sm mt-0.5">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => updateQuantity(item.menuItemId, item.quantity - 1)}
                      className="w-7 h-7 rounded-full border border-gray-200 font-bold text-base leading-none
                                 hover:bg-nouri-red hover:text-white hover:border-nouri-red transition-all"
                    >
                      −
                    </button>
                    <span className="w-4 text-center text-sm font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.menuItemId, item.quantity + 1)}
                      className="w-7 h-7 rounded-full border border-gray-200 font-bold text-base leading-none
                                 hover:bg-nouri-red hover:text-white hover:border-nouri-red transition-all"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.menuItemId)}
                      className="ml-1 text-gray-300 hover:text-red-500 transition-colors text-lg leading-none"
                      aria-label={`Remove ${item.name}`}
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-6 border-t border-gray-100">
            <div className="flex justify-between items-center font-bold text-lg mb-5 text-nouri-black">
              <span>Total</span>
              <span className="text-nouri-red">${total.toFixed(2)}</span>
            </div>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full bg-nouri-black text-white text-center py-4 rounded-2xl
                         font-bold text-sm hover:bg-nouri-red transition-colors duration-200"
            >
              Review & Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
