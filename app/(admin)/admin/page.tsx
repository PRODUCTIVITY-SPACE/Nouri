import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Dashboard' };

const STATS = [
  { label: 'Orders Today', value: '24', change: '+12% vs yesterday', positive: true },
  { label: 'Active Tables', value: '8 / 12', change: '3 occupied now', positive: true },
  { label: "Today's Revenue", value: '$1,240', change: '+8% vs yesterday', positive: true },
  { label: 'Avg. Prep Time', value: '14 min', change: '−2 min improvement', positive: true },
];

const RECENT_ORDERS = [
  { id: 'ORD-024', location: 'Table 4', type: 'Dine In', status: 'Preparing', total: '$64.00', time: '2 min ago' },
  { id: 'ORD-023', location: 'Counter', type: 'Takeaway', status: 'Ready', total: '$28.00', time: '8 min ago' },
  { id: 'ORD-022', location: 'Table 7', type: 'Dine In', status: 'Served', total: '$112.50', time: '15 min ago' },
  { id: 'ORD-021', location: 'Delivery', type: 'Delivery', status: 'On the way', total: '$39.00', time: '22 min ago' },
  { id: 'ORD-020', location: 'Table 2', type: 'Dine In', status: 'Received', total: '$88.00', time: '28 min ago' },
];

const STATUS_COLORS: Record<string, string> = {
  Received: 'bg-blue-100 text-blue-700',
  Preparing: 'bg-yellow-100 text-yellow-700',
  Ready: 'bg-green-100 text-green-700',
  'On the way': 'bg-purple-100 text-purple-700',
  Served: 'bg-gray-100 text-gray-500',
  Delivered: 'bg-green-100 text-green-700',
};

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="font-display font-bold text-3xl text-nouri-black">Dashboard</h1>
        <p className="text-gray-400 mt-1 text-sm">Monday, June 2, 2026</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {STATS.map((stat) => (
          <div key={stat.label} className="admin-card">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
              {stat.label}
            </p>
            <p className="font-display font-bold text-3xl mt-3 text-nouri-black">{stat.value}</p>
            <p className={`text-xs font-semibold mt-2 ${stat.positive ? 'text-green-600' : 'text-red-500'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Recent orders table */}
      <div className="admin-card overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display font-bold text-xl text-nouri-black">Recent Orders</h2>
          <a
            href="/admin/orders"
            className="text-nouri-red text-sm font-semibold hover:underline"
          >
            View all →
          </a>
        </div>

        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="text-gray-400 font-semibold border-b border-gray-100 text-left">
              {['Order', 'Location', 'Type', 'Status', 'Total', 'Time'].map((h) => (
                <th key={h} className="pb-3 pr-4 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RECENT_ORDERS.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 pr-4 font-bold text-nouri-black">{order.id}</td>
                <td className="py-4 pr-4 text-gray-600">{order.location}</td>
                <td className="py-4 pr-4 text-gray-600">{order.type}</td>
                <td className="py-4 pr-4">
                  <span className={`status-badge ${STATUS_COLORS[order.status] ?? 'bg-gray-100 text-gray-500'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 pr-4 font-bold text-nouri-black">{order.total}</td>
                <td className="py-4 text-gray-400">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
