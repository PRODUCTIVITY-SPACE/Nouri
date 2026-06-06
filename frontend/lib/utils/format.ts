import type { OrderStatus } from '@/lib/types';

export const formatKES = (amount: number): string =>
  `KES ${amount.toLocaleString('en-KE')}`;

export const formatTime = (dateStr: string): string =>
  new Date(dateStr).toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' });

export const formatOrderType = (type: string): string =>
  ({ 'dine-in': 'Dine In', takeaway: 'Takeaway', delivery: 'Delivery' })[type] ?? type;

export const getStatusColor = (status: OrderStatus): string => ({
  received: 'bg-surface-container text-on-surface-variant',
  preparing: 'bg-primary-container text-on-primary-container animate-status-pulse',
  ready: 'bg-[#4CAF50]/20 text-[#4CAF50]',
  served: 'bg-surface-container-high text-outline',
})[status];

export const getStatusLabel = (status: OrderStatus): string => ({
  received: 'Order Received',
  preparing: 'Being Prepared',
  ready: 'Ready for Pickup',
  served: 'Served',
})[status];
