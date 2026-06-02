'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/admin', icon: '📊' },
  { label: 'Orders', href: '/admin/orders', icon: '🧾' },
  { label: 'Menu', href: '/admin/menu', icon: '🍽️' },
  { label: 'Tables & QR', href: '/admin/tables', icon: '📱' },
  { label: 'Reports', href: '/admin/reports', icon: '📈' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-nouri-black hidden md:flex flex-col z-40">
        <div className="px-8 py-8 border-b border-white/10">
          <Link href="/" className="font-display font-bold text-white text-2xl tracking-tight">
            nouri
          </Link>
          <p className="text-gray-500 text-xs mt-1 font-medium">Admin Panel</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-150',
                isActive(item.href)
                  ? 'bg-nouri-red text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              )}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-8 py-6 border-t border-white/10">
          <Link
            href="/login"
            className="text-gray-500 text-xs font-medium hover:text-white transition-colors"
          >
            ← Sign out
          </Link>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-nouri-black z-40 flex items-center justify-between px-5">
        <span className="font-display font-bold text-white text-xl">nouri admin</span>
        <div className="flex gap-4">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'text-lg transition-opacity',
                isActive(item.href) ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              )}
              title={item.label}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      {/* Spacer for mobile top bar */}
      <div className="md:hidden h-14" />
    </>
  );
}
