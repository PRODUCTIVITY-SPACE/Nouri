'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PaymentOption } from '@/components/cart/PaymentOption';
import { OrderSummary } from '@/components/cart/OrderSummary';
import { useCartStore } from '@/lib/store/cart';
import type { PaymentMethod } from '@/lib/types';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mpesa');
  const [phone, setPhone] = useState('');
  const [splitActive, setSplitActive] = useState(false);
  const { items, clearCart } = useCartStore();
  const router = useRouter();

  const handleConfirm = () => {
    // Phase 2: POST to /api/orders/ then redirect to tracking
    clearCart();
    router.push('/track/demo-order-id');
  };

  return (
    <main className="px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Payment column */}
        <div className="lg:col-span-7 space-y-8">
          <section>
            <h2 className="font-display text-headline-md mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">payments</span>
              Payment Method
            </h2>

            <div className="space-y-4">
              <PaymentOption
                id="mpesa" selected={paymentMethod} onSelect={setPaymentMethod}
                icon="smartphone" iconBg="bg-[#4CAF50]"
                label="M-Pesa STK Push" sublabel="Instant payment via SIM toolkit"
              >
                <div className="flex flex-col gap-stack-sm">
                  <label className="text-label-sm text-label-sm font-semibold text-on-surface-variant">
                    M-Pesa Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center bg-surface-container-high px-4 rounded-lg border border-outline-variant font-label-md text-on-surface">
                      +254
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="712 345 678"
                      className="flex-1 bg-surface px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                  </div>
                </div>
              </PaymentOption>

              <PaymentOption
                id="airtel" selected={paymentMethod} onSelect={setPaymentMethod}
                icon="cell_tower" iconBg="bg-red-600"
                label="Airtel Money" sublabel="Pay via Airtel wallet"
              />

              <PaymentOption
                id="cash" selected={paymentMethod} onSelect={setPaymentMethod}
                icon="payments" iconBg="bg-on-surface-variant"
                label="Pay Cash at Counter" sublabel="Pay in person at the restaurant"
              />
            </div>
          </section>

          {/* Split bill + receipt options */}
          <section className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">groups</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Split Bill</p>
                  <p className="text-label-sm text-label-sm text-on-surface-variant">Divide total with friends</p>
                </div>
              </div>
              <button
                onClick={() => setSplitActive((v) => !v)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${splitActive ? 'bg-primary' : 'bg-outline-variant'}`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-sm ${splitActive ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>

            <div className="p-6 border border-outline-variant rounded-xl bg-surface">
              <h3 className="font-label-md text-label-md text-on-surface mb-4">Digital Receipt Options</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 p-3 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">mail</span>
                  <span className="font-label-sm text-label-sm">Email Receipt</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-3 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">picture_as_pdf</span>
                  <span className="font-label-sm text-label-sm">Download PDF</span>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Order summary column */}
        <div className="lg:col-span-5">
          <OrderSummary
            items={items}
            onConfirm={handleConfirm}
            paymentLabel={`Confirm & Pay`}
          />
        </div>
      </div>
    </main>
  );
}
