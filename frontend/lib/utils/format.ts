// Shared formatting helpers

export const formatCurrency = (amount: number, currency = 'USD'): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);

export const formatOrderType = (type: string): string =>
  ({ 'dine-in': 'Dine In', takeaway: 'Takeaway', delivery: 'Delivery' })[type] ?? type;
