'use client';

import { useEffect, useRef, useState } from 'react';
import type { OrderStatus } from '@/lib/types';

interface OrderStatusData {
  status: OrderStatus;
  estimatedMinutes?: number;
  loading: boolean;
}

export function useOrderStatus(orderId: string | null): OrderStatusData {
  const [status, setStatus] = useState<OrderStatus>('received');
  const [estimatedMinutes, setEstimatedMinutes] = useState<number | undefined>();
  const [loading, setLoading] = useState(true);
  const wsRef = useRef<WebSocket | null>(null);
  const retryRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const retryDelay = useRef(1000);

  useEffect(() => {
    if (!orderId) return;

    const connect = () => {
      const wsUrl = `${process.env.NEXT_PUBLIC_WS_URL ?? 'ws://localhost:8000'}/ws/orders/${orderId}/`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        retryDelay.current = 1000;
        setLoading(false);
      };

      ws.onmessage = (e) => {
        try {
          const data = JSON.parse(e.data);
          if (data.status) setStatus(data.status);
          if (data.estimated_minutes !== undefined) setEstimatedMinutes(data.estimated_minutes);
        } catch {}
      };

      ws.onclose = () => {
        retryRef.current = setTimeout(() => {
          retryDelay.current = Math.min(retryDelay.current * 2, 30000);
          connect();
        }, retryDelay.current);
      };
    };

    connect();

    return () => {
      wsRef.current?.close();
      if (retryRef.current) clearTimeout(retryRef.current);
    };
  }, [orderId]);

  return { status, estimatedMinutes, loading };
}
