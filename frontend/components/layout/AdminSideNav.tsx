'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const navItems = [
  { href: '/admin', icon: 'dashboard', label: 'Dashboard', exact: true },
  { href: '/admin/menu', icon: 'restaurant_menu', label: 'Menu Management' },
  { href: '/admin/orders', icon: 'outdoor_grill', label: 'Live Orders', live: true },
  { href: '/admin/tables', icon: 'table_restaurant', label: 'Tables & QR' },
  { href: '/admin/reports', icon: 'bar_chart', label: 'Reports' },
];

export function AdminSideNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full z-40 hidden md:flex flex-col pt-20 w-64 bg-surface-container border-r border-outline-variant">
      <div className="px-6 py-4 mb-2">
        <h2 className="font-headline-md text-headline-md font-bold text-primary">Nouri Admin</h2>
        <p className="font-label-md text-label-md text-on-surface-variant">Kitchen Management</p>
      </div>

      <nav className="flex-1 space-y-1 px-2">
        {navItems.map(({ href, icon, label, exact, live }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative',
                isActive
                  ? 'bg-primary-container text-on-primary-container translate-x-1'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              )}
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-label-md text-label-md">{label}</span>
              {live && (
                <span className="absolute right-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <button className="w-full bg-primary text-on-primary py-3 rounded-xl flex items-center justify-center gap-2 font-label-md shadow-sm active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[18px]">radio_button_checked</span>
          Live Status
        </button>
      </div>
    </aside>
  );
}
