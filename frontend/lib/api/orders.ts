// Orders API — wraps Django REST + WebSocket endpoints

import type { Order, CartItem, OrderType } from '@/lib/types';

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';
const WS  = process.env.NEXT_PUBLIC_WS_URL  ?? 'ws://localhost:8000/ws';

export async function placeOrder(payload: {
  orderType: OrderType;
  tableNumber?: number;
  deliveryAddress?: string;
  items: CartItem[];
}): Promise<Order> {
  // Phase 3: POST /api/orders/
  throw new Error('Not implemented — connect Django API in Phase 3');
}

export function subscribeToOrder(orderId: string, onUpdate: (order: Order) => void): () => void {
  // Phase 3: WebSocket connection via Django Channels
  // const ws = new WebSocket(`${WS}/orders/${orderId}/`);
  // ws.onmessage = (e) => onUpdate(JSON.parse(e.data));
  // return () => ws.close();
  return () => {};
}
