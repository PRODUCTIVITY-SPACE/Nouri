'use client';

import { useState } from 'react';

type ColStatus = 'received' | 'preparing' | 'ready' | 'served';

const COLUMNS: { id: ColStatus; label: string; icon: string; countBg: string }[] = [
  { id: 'received', label: 'Received', icon: 'inbox', countBg: 'bg-surface-container-highest text-on-surface' },
  { id: 'preparing', label: 'In Prep', icon: 'skillet', countBg: 'bg-primary-container text-on-primary-container' },
  { id: 'ready', label: 'Ready', icon: 'notifications_active', countBg: 'bg-[#4CAF50] text-white' },
  { id: 'served', label: 'Served', icon: 'done_all', countBg: 'bg-surface-container-highest text-on-surface' },
];

const INITIAL_ORDERS = [
  { id: '#NOR-2042', status: 'received' as ColStatus, table: 'TABLE 12', tableIcon: 'restaurant', urgent: true, timeAgo: '12m ago', items: [{ name: '2x Pilau Beef', note: 'Hot' }, { name: '1x Kachumbari', note: 'Extra Lemon' }], action: 'START PREP' },
  { id: '#NOR-2045', status: 'received' as ColStatus, table: 'TAKEAWAY', tableIcon: 'shopping_bag', urgent: false, timeAgo: '4m ago', items: [{ name: '1x Nyama Choma', note: 'Well Done' }], action: 'START PREP' },
  { id: '#NOR-2038', status: 'preparing' as ColStatus, table: 'TABLE 05', tableIcon: 'restaurant', urgent: false, timeAgo: 'Now', items: [{ name: '3x Fish Curry', note: 'Mild' }, { name: '3x Ugali', note: 'Large' }], action: 'MARK READY', progress: 66 },
  { id: '#NOR-2035', status: 'ready' as ColStatus, table: 'TABLE 02', tableIcon: 'room_service', urgent: false, timeAgo: 'Ready', items: [{ name: '1x Chicken Stew', note: '' }], action: 'SERVE ORDER' },
  { id: '#NOR-2030', status: 'served' as ColStatus, table: 'Table 08', tableIcon: 'done', urgent: false, timeAgo: '20m ago', items: [], action: '' },
  { id: '#NOR-2029', status: 'served' as ColStatus, table: 'Takeaway', tableIcon: 'done', urgent: false, timeAgo: '25m ago', items: [], action: '' },
];

const ACTION_TRANSITIONS: Record<string, ColStatus> = {
  'START PREP': 'preparing',
  'MARK READY': 'ready',
  'SERVE ORDER': 'served',
};

export default function LiveOrdersPage() {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [filter, setFilter] = useState('All Orders');

  const advance = (id: string, action: string) => {
    const next = ACTION_TRANSITIONS[action];
    if (!next) return;
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: next } : o));
  };

  return (
    <div className="px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-[1440px] mx-auto flex flex-col h-[calc(100vh-64px)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display text-headline-lg text-on-surface">Live Kitchen Board</h1>
          <p className="text-on-surface-variant font-body-md text-body-md">Real-time order synchronization across all stations.</p>
        </div>
        <div className="flex bg-surface-container-high p-1 rounded-full">
          {['All Orders', 'Dine-in', 'Takeaway'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 font-label-md text-label-md rounded-full transition-all ${filter === f ? 'bg-surface text-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 overflow-hidden">
        {COLUMNS.map(({ id, label, icon, countBg }) => {
          const colOrders = orders.filter((o) => o.status === id);
          return (
            <div key={id} className="flex flex-col h-full bg-surface-container-low rounded-2xl border border-outline-variant p-4">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline">{icon}</span>
                  <h3 className="font-display text-[18px] font-bold text-on-surface">{label}</h3>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm ${countBg}`}>{colOrders.length}</span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-1 no-scrollbar">
                {colOrders.map((order) => (
                  <div
                    key={order.id}
                    className={`bg-surface rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow border ${
                      order.urgent ? 'border-l-4 border-error' : id === 'preparing' ? 'border-2 border-primary-container' : id === 'ready' ? 'border-2 border-[#4CAF50]' : 'border-outline-variant'
                    } ${id === 'served' ? 'opacity-70 grayscale' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-label-md text-label-md text-on-surface-variant">{order.id}</span>
                      <span className={`font-label-sm text-label-sm font-bold ${order.urgent ? 'text-error' : id === 'preparing' ? 'text-primary-container flex items-center gap-1' : 'text-on-surface-variant'}`}>
                        {id === 'preparing' && <span className="w-2 h-2 rounded-full bg-primary-container animate-ping inline-block mr-1" />}
                        {order.urgent ? `${order.timeAgo} ⚠` : order.timeAgo}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-md text-[12px] font-bold">{order.table}</span>
                      <span className="material-symbols-outlined text-on-surface-variant">{order.tableIcon}</span>
                    </div>

                    {order.items.length > 0 && (
                      <>
                        {id === 'preparing' && order.progress && (
                          <div className="w-full bg-surface-container-high h-2 rounded-full mb-3 overflow-hidden">
                            <div className="bg-primary-container h-full transition-all duration-1000" style={{ width: `${order.progress}%` }} />
                          </div>
                        )}
                        <ul className="space-y-2 mb-4">
                          {order.items.map((item) => (
                            <li key={item.name} className={`flex justify-between items-center text-on-surface ${id === 'served' ? 'line-through text-on-surface-variant' : ''}`}>
                              <span className="font-bold">{item.name}</span>
                              {item.note && <span className="text-[14px] text-on-surface-variant">{item.note}</span>}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {order.action && id !== 'served' && (
                      <button
                        onClick={() => advance(order.id, order.action)}
                        className={`w-full py-3 font-label-md text-label-md rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 ${
                          id === 'ready' ? 'bg-[#4CAF50] text-white' : 'bg-primary-container text-on-primary-container'
                        }`}
                      >
                        <span className="material-symbols-outlined">{id === 'ready' ? 'done_all' : id === 'preparing' ? 'check_circle' : 'play_arrow'}</span>
                        {order.action}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
