const ACTIVITIES = [
  { dot: 'bg-primary shadow-[0_0_8px_rgba(133,83,0,0.5)]', title: 'Order #4292 - Swahili Fish Curry', sub: 'Sent to kitchen • Just now' },
  { dot: 'bg-[#4CAF50]', title: 'Payment Received - KES 2,450', sub: 'via M-Pesa • 12 mins ago' },
  { dot: 'bg-tertiary', title: 'Stock Alert - Beef Pilau', sub: 'Low inventory (5 units) • 45 mins ago' },
  { dot: 'bg-outline-variant', title: 'Shift Changed - Head Chef', sub: 'Karanja logged in • 1h ago' },
];

export function ActivityFeed() {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6">
      <h3 className="font-display text-headline-md text-on-surface mb-6">Recent Activity</h3>
      <div className="space-y-6">
        {ACTIVITIES.map(({ dot, title, sub }) => (
          <div key={title} className="flex gap-4 items-start">
            <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
            <div>
              <p className="font-label-md text-label-md text-on-surface">{title}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{sub}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 py-3 text-primary font-label-md text-label-md hover:bg-surface-container-high rounded-lg transition-colors border border-primary/20">
        View All Activity
      </button>
    </div>
  );
}
