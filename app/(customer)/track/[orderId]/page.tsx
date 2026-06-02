import Navbar from '@/components/layout/Navbar';
import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: { orderId: string } }): Metadata {
  return { title: `Tracking Order #${params.orderId}` };
}

const DINE_IN_STEPS = [
  { key: 'received', label: 'Order Received', description: 'Your order is confirmed and sent to the kitchen.', icon: '✓' },
  { key: 'preparing', label: 'Being Prepared', description: 'Our chefs are preparing your meal.', icon: '👨‍🍳' },
  { key: 'ready', label: 'Ready to Serve', description: 'Your order is ready — waiter has been notified.', icon: '🔔' },
  { key: 'served', label: 'Served', description: 'Enjoy your meal! Bon appétit.', icon: '🍽️' },
];

const TAKEAWAY_STEPS = [
  { key: 'received', label: 'Order Received', description: 'Your order is confirmed.', icon: '✓' },
  { key: 'preparing', label: 'Being Prepared', description: 'Your food is being prepared.', icon: '👨‍🍳' },
  { key: 'ready', label: 'Ready for Collection', description: 'Please proceed to the counter.', icon: '🛍️' },
];

export default function TrackOrderPage({
  params,
  searchParams,
}: {
  params: { orderId: string };
  searchParams: { type?: string };
}) {
  const orderType = searchParams.type ?? 'dine-in';
  const steps = orderType === 'takeaway' ? TAKEAWAY_STEPS : DINE_IN_STEPS;
  const currentStep = 1; // Driven by WebSocket in Phase 3

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Navbar theme="light" />
      </div>

      <div className="page-header">
        <h1 className="font-display font-bold text-nouri-black text-5xl">Order Tracking</h1>
        <p className="text-gray-500 mt-2 font-medium">Order #{params.orderId}</p>
      </div>

      <div className="max-w-lg mx-auto px-6 pb-24">
        {/* Progress steps */}
        <div className="relative">
          {/* Background line */}
          <div className="absolute left-7 top-7 bottom-7 w-0.5 bg-gray-100" />
          {/* Active progress line */}
          <div
            className="absolute left-7 top-7 w-0.5 bg-nouri-red transition-all duration-700"
            style={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />

          <ul className="space-y-10">
            {steps.map((step, index) => {
              const isDone = index <= currentStep;
              const isCurrent = index === currentStep;

              return (
                <li key={step.key} className="flex items-start gap-6 relative">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xl flex-shrink-0 z-10 transition-all duration-500
                      ${isDone
                        ? 'bg-nouri-red text-white shadow-float'
                        : 'bg-gray-100 text-gray-300'
                      }`}
                  >
                    {step.icon}
                  </div>

                  <div className="pt-3">
                    <p className={`font-bold text-lg flex items-center gap-2 ${isDone ? 'text-nouri-black' : 'text-gray-300'}`}>
                      {step.label}
                      {isCurrent && (
                        <span className="text-xs font-semibold text-nouri-red bg-red-50 px-2 py-0.5 rounded-full animate-pulse">
                          In Progress
                        </span>
                      )}
                    </p>
                    <p className={`text-sm mt-1 leading-relaxed ${isDone ? 'text-gray-500' : 'text-gray-300'}`}>
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Real-time notice */}
        <div className="mt-14 bg-nouri-gray rounded-3xl p-6 text-center">
          <p className="text-nouri-black font-semibold text-sm mb-1">Real-time updates</p>
          <p className="text-gray-400 text-sm">
            Live WebSocket push notifications — integrated in Phase 3 with Django Channels.
          </p>
        </div>

        {/* Delivery map placeholder */}
        {orderType === 'delivery' && (
          <div className="mt-5 bg-nouri-gray rounded-3xl p-6 text-center">
            <p className="text-nouri-black font-semibold text-sm mb-1">Live Delivery Map</p>
            <p className="text-gray-400 text-sm">
              Google Maps live tracking — integrated in Phase 5.
            </p>
            <div className="mt-4 h-40 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              🗺️ Map placeholder
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
