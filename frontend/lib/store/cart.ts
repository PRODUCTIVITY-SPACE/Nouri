'use client';

// Zustand cart store — persists to localStorage across page navigation
// Phase 1: client-only  |  Phase 3: synced with server session

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, OrderType } from '@/lib/types';

interface CartState {
  items: CartItem[];
  orderType: OrderType | null;
  tableNumber: number | null;
  deliveryAddress: string | null;
  isCartOpen: boolean;
}

interface CartActions {
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (menuItemId: string) => void;
  updateQuantity: (menuItemId: string, quantity: number) => void;
  clearCart: () => void;
  setOrderType: (type: OrderType) => void;
  setTableNumber: (num: number) => void;
  setDeliveryAddress: (address: string) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set) => ({
      items: [], orderType: null, tableNumber: null, deliveryAddress: null, isCartOpen: false,

      addItem: (newItem) => set((s) => {
        const existing = s.items.find((i) => i.menuItemId === newItem.menuItemId);
        return existing
          ? { items: s.items.map((i) => i.menuItemId === newItem.menuItemId ? { ...i, quantity: i.quantity + 1 } : i) }
          : { items: [...s.items, { ...newItem, quantity: 1 }] };
      }),
      removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.menuItemId !== id) })),
      updateQuantity: (id, qty) => set((s) => ({
        items: qty <= 0 ? s.items.filter((i) => i.menuItemId !== id) : s.items.map((i) => i.menuItemId === id ? { ...i, quantity: qty } : i),
      })),
      clearCart: () => set({ items: [], orderType: null, tableNumber: null, deliveryAddress: null }),
      setOrderType: (type) => set({ orderType: type }),
      setTableNumber: (num) => set({ tableNumber: num }),
      setDeliveryAddress: (addr) => set({ deliveryAddress: addr }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((s) => ({ isCartOpen: !s.isCartOpen })),
    }),
    { name: 'nouri-cart', partialize: (s) => ({ items: s.items, orderType: s.orderType, tableNumber: s.tableNumber, deliveryAddress: s.deliveryAddress }) }
  )
);

export const getCartTotal = (items: CartItem[]) => items.reduce((sum, i) => sum + i.price * i.quantity, 0);
export const getCartItemCount = (items: CartItem[]) => items.reduce((sum, i) => sum + i.quantity, 0);
