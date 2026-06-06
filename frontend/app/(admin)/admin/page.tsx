'use client';

import { StatsCard } from '@/components/admin/StatsCard';
import { RevenueChart } from '@/components/admin/RevenueChart';
import { ActivityFeed } from '@/components/admin/ActivityFeed';
import { LiveOrderCard } from '@/components/admin/LiveOrderCard';
import Link from 'next/link';

const LIVE_ORDERS = [
  {
    tableLabel: 'Table 04', timeLabel: '04:12 MINS', urgent: false,
    items: [{ name: '2x Chapati Madondo', done: true }, { name: '1x Grilled Tilapia', done: false }],
    actionLabel: 'Ready',
  },
  {
    tableLabel: 'Table 11', timeLabel: '08:45 MINS', urgent: false,
    items: [{ name: '3x Samosa Platter', done: true }, { name: '1x Mango Lassi', done: true }],
    actionLabel: 'Served',
  },
  {
    tableLabel: 'Delivery #882', timeLabel: 'RIDER NEARBY', urgent: true,
    items: [{ name: 'Family Sharing Feast', done: false }],
    actionLabel: 'Dispatch',
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="px-container-margin-mobile md:px-container-margin-desktop max-w-[1440px] mx-auto py-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display text-headline-lg text-on-surface">Today&apos;s Snapshot</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Monitoring real-time kitchen performance and revenue.</p>
        </div>
        <div className="flex gap-3">
          <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            {new Date().toLocaleDateString('en-KE', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="px-4 py-2 bg-tertiary-container text-on-tertiary-container rounded-full font-label-md text-label-md flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">bolt</span>
            12 Live Active Orders
          </span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard icon="shopping_cart" iconBg="bg-primary-fixed text-on-primary-fixed" label="Total Orders" value="142" trend="+12%" barPercent={75} />
        <StatsCard icon="payments" iconBg="bg-secondary-fixed text-on-secondary-fixed" label="Revenue (KES)" value="84,250" trend="+8.4%" sub="Target: 100,000 KES" />
        <StatsCard icon="table_restaurant" iconBg="bg-tertiary-fixed text-on-tertiary-fixed" label="Active Tables" value="18 / 24" />
      </div>

      {/* Charts + activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2"><RevenueChart /></div>
        <ActivityFeed />
      </div>

      {/* Live order queue */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-headline-md text-on-surface flex items-center gap-3">
            Live Order Queue
            <span className="px-2 py-0.5 bg-primary text-on-primary text-label-sm text-label-sm rounded-full">12</span>
          </h3>
          <Link href="/admin/orders" className="text-primary font-label-md text-label-md hover:underline">
            Manage Kitchen Display
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {LIVE_ORDERS.map((order) => (
            <LiveOrderCard key={order.tableLabel} {...order} onReady={() => {}} />
          ))}

          {/* Add manual order */}
          <div className="bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer min-h-[160px]">
            <span className="material-symbols-outlined text-3xl mb-2 text-outline">add_circle</span>
            <span className="font-label-md text-label-md text-outline">Manually Add Order</span>
          </div>
        </div>
      </section>
    </div>
  );
}
