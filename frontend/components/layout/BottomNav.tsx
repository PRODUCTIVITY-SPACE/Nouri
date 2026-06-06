'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { useCartStore, getCartItemCount } from '@/lib/store/cart';

const navItems = [
  { href: '/', icon: 'home', label: 'Home' },
  { href: '/menu', icon: 'menu_book', label: 'Menu' },
  { href: '/cart', icon: 'shopping_cart', label: 'Cart' },
  { href: '/track', icon: 'local_shipping', label: 'Tracking' },
];

export function BottomNav() {
  const pathname = usePathname();
  const items = useCartStore((s) => s.items);
  const cartCount = getCartItemCount(items);

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface-container-highest shadow-lg rounded-t-xl">
      {navItems.map(({ href, icon, label }) => {
        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex flex-col items-center justify-center transition-all',
              isActive
                ? 'bg-primary-container text-on-primary-container rounded-full px-5 py-1 scale-110'
                : 'text-on-surface-variant hover:text-primary'
            )}
          >
            <div className="relative">
              <span className="material-symbols-outlined">{icon}</span>
              {icon === 'shopping_cart' && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-tertiary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-label-sm text-label-sm">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
