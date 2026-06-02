import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Orders' };

type OrderStatus = 'Received' | 'Preparing' | 'Ready' | 'Served' | 'On the way' | 'Delivered';

interface MockOrder {
  id: string;
  location: string;
  type: string;
  status: OrderStatus;
  items: string[];
  total: string;
  time: string;
}

const MOCK_ORDERS: MockOrder[] = [
  { id: 'ORD-024', location: 'Table 4', type: 'Dine In', status: 'Received', items: ['Zen Poké', 'Dragon Roll', 'Matcha Latte'], total: '$47.50', time: '1 min ago' },
  { id: 'ORD-023', location: 'Table 9', type: 'Dine In', status: 'Preparing', items: ['Sashimi Deluxe', 'Spicy Ramen', 'Mochi Trio'], total: '$61.00', time: '6 min ago' },
  { id: 'ORD-022', location: 'Counter', type: 'Takeaway', status: 'Ready', items: ['Tempura Set', 'Yuzu Tart'], total: '$30.00', time: '11 min ago' },
  { id: 'ORD-021', location: '12 Main St', type: 'Delivery', status: 'On the way', items: ['Wagyu Roll x2', 'Sakura Tea'], total: '$67.00', time: '18 min ago' },
  { id: 'ORD-020', location: 'Table 2', type: 'Dine In', status: 'Served', items: ['Morning Bento x2', 'Acai Power Bowl'], total: '$44.00', time: '25 min ago' },
];

const STATUS_COLORS: Record<OrderStatus, string> = {
  Received: 'bg-blue-100 text-blue-700',
  Preparing: 'bg-yellow-100 text-yellow-700',
  Ready: 'bg-green-100 text-green-700',
  Served: 'bg-gray-100 text-gray-500',
  'On the way': 'bg-purple-100 text-purple-700',
  Delivered: 'bg-green-100 text-green-700',
};

const STATUS_NEXT: Record<OrderStatus, string | null> = {
  Received: 'Mark Preparing',
  Preparing: 'Mark Ready',
  Ready: 'Mark Served',
  Served: null,
  'On the way': 'Mark Delivered',
  Delivered: null,
};

export default function AdminOrdersPage() {
  const active = MOCK_ORDERS.filter((o) => o.status !== 'Served' && o.status !== 'Delivered');
  const completed = MOCK_ORDERS.filter((o) => o.status === 'Served' || o.status === 'Delivered');

  return (
    <div>
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="font-display font-bold text-3xl text-nouri-black">Orders</h1>
          <p className="text-gray-400 mt-1 text-sm">
            {active.length} active · {completed.length} completed today
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full font-semibold">
            Live — WebSocket Phase 3
          </span>
        </div>
      </div>

      {/* Active orders */}
      <h2 className="font-display font-bold text-lg text-nouri-black mb-4">Active Orders</h2>
      <div className="grid gap-4 mb-10 md:grid-cols-2 xl:grid-cols-3">
        {active.map((order) => (
          <div key={order.id} className="admin-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bold text-nouri-black">{order.id}</p>
                <p className="text-gray-500 text-sm">{order.location} · {order.type}</p>
              </div>
              <span className={`status-badge ${STATUS_COLORS[order.status]}`}>
                {order.status}
              </span>
            </div>

            <ul className="space-y-1 mb-4">
              {order.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <span className="font-bold text-nouri-black">{order.total}</span>
              <span className="text-gray-400 text-xs">{order.time}</span>
            </div>

            {STATUS_NEXT[order.status] && (
              <button className="w-full mt-4 py-2.5 bg-nouri-black text-white rounded-xl text-sm font-bold
                                 hover:bg-nouri-red transition-colors duration-200">
                {STATUS_NEXT[order.status]}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Completed orders */}
      <h2 className="font-display font-bold text-lg text-nouri-black mb-4">Completed Today</h2>
      <div className="admin-card overflow-x-auto">
        <table className="w-full text-sm min-w-[500px]">
          <thead>
            <tr className="text-gray-400 font-semibold border-b border-gray-100 text-left">
              {['Order', 'Location', 'Total', 'Status', 'Time'].map((h) => (
                <th key={h} className="pb-3 pr-6 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {completed.map((order) => (
              <tr key={order.id} className="border-b border-gray-50">
                <td className="py-3 pr-6 font-bold text-nouri-black">{order.id}</td>
                <td className="py-3 pr-6 text-gray-500">{order.location}</td>
                <td className="py-3 pr-6 font-bold">{order.total}</td>
                <td className="py-3 pr-6">
                  <span className={`status-badge ${STATUS_COLORS[order.status]}`}>{order.status}</span>
                </td>
                <td className="py-3 text-gray-400">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
