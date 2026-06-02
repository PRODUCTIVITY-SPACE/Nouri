// useOrderStatus — subscribes to real-time order updates via WebSocket
// Phase 3: replace polling stub with Django Channels WebSocket

import { useEffect, useState } from 'react';
import type { OrderStatus } from '@/lib/types';

export function useOrderStatus(orderId: string | null): OrderStatus | null {
  const [status, setStatus] = useState<OrderStatus | null>(null);

  useEffect(() => {
    if (!orderId) return;
    // Phase 3: connect to ws://.../ and update status on message
    // const unsubscribe = subscribeToOrder(orderId, (order) => setStatus(order.status));
    // return unsubscribe;
  }, [orderId]);

  return status;
}
