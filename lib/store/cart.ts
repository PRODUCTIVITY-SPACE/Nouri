'use client';

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

export type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      orderType: null,
      tableNumber: null,
      deliveryAddress: null,
      isCartOpen: false,

      addItem: (newItem) =>
        set((state) => {
          const existing = state.items.find((i) => i.menuItemId === newItem.menuItemId);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.menuItemId === newItem.menuItemId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { ...newItem, quantity: 1 }] };
        }),

      removeItem: (menuItemId) =>
        set((state) => ({
          items: state.items.filter((i) => i.menuItemId !== menuItemId),
        })),

      updateQuantity: (menuItemId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((i) => i.menuItemId !== menuItemId) };
          }
          return {
            items: state.items.map((i) =>
              i.menuItemId === menuItemId ? { ...i, quantity } : i
            ),
          };
        }),

      clearCart: () =>
        set({ items: [], orderType: null, tableNumber: null, deliveryAddress: null }),

      setOrderType: (type) => set({ orderType: type }),
      setTableNumber: (num) => set({ tableNumber: num }),
      setDeliveryAddress: (address) => set({ deliveryAddress: address }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    }),
    {
      name: 'nouri-cart',
      partialize: (state) => ({
        items: state.items,
        orderType: state.orderType,
        tableNumber: state.tableNumber,
        deliveryAddress: state.deliveryAddress,
      }),
    }
  )
);

export const getCartTotal = (items: CartItem[]): number =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const getCartItemCount = (items: CartItem[]): number =>
  items.reduce((sum, item) => sum + item.quantity, 0);
