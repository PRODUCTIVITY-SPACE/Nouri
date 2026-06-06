import Image from 'next/image';
import { formatKES } from '@/lib/utils/format';
import type { CartItem } from '@/lib/types';

interface OrderSummaryProps {
  items: CartItem[];
  onConfirm: () => void;
  paymentLabel?: string;
}

export function OrderSummary({ items, onConfirm, paymentLabel = 'Confirm & Pay' }: OrderSummaryProps) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const serviceCharge = subtotal * 0.05;
  const total = subtotal + serviceCharge;
  const nouriPoints = Math.floor(total / 100) * 15;

  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-surface-container-high rounded-2xl p-6 shadow-sm border border-outline-variant/30">
        <h2 className="font-display text-headline-md mb-6">Order Summary</h2>

        <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
          {items.map((item) => (
            <div key={item.menuItemId} className="flex gap-4 items-start pb-4 border-b border-outline-variant/30">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                <Image src={item.imageUrl} alt={item.name} fill unoptimized className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-label-md text-label-md text-on-surface">{item.name}</h4>
                  <p className="font-label-md text-label-md text-on-surface">{formatKES(item.price * item.quantity)}</p>
                </div>
                <p className="text-label-sm text-label-sm text-on-surface-variant">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2 border-t border-outline pt-4">
          <div className="flex justify-between text-body-md text-on-surface-variant">
            <span>Subtotal</span><span>{formatKES(subtotal)}</span>
          </div>
          <div className="flex justify-between text-body-md text-on-surface-variant">
            <span>Service Charge (5%)</span><span>{formatKES(serviceCharge)}</span>
          </div>
          <div className="flex justify-between font-display text-headline-md text-primary mt-4 pt-4 border-t border-outline-variant">
            <span>Total</span>
            <span className="text-tertiary">{formatKES(total)}</span>
          </div>
        </div>
      </div>

      <div className="bg-primary-container/20 border border-primary-fixed rounded-xl p-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">eco</span>
        <p className="text-label-sm text-label-sm text-on-primary-container">
          You&apos;re earning <strong>{nouriPoints} Nouri Points</strong> with this order!
        </p>
      </div>

      <button
        onClick={onConfirm}
        className="w-full bg-primary-container py-4 rounded-xl text-on-primary-container font-display text-headline-md shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3"
      >
        <span className="material-symbols-outlined">lock</span>
        {paymentLabel} {formatKES(total)}
      </button>

      <p className="text-center text-label-sm text-label-sm text-on-surface-variant px-8">
        By clicking confirm, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
