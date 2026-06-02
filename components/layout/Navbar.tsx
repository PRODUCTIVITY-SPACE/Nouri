'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCartStore, getCartItemCount } from '@/lib/store/cart';

type NavTheme = 'home' | 'light' | 'dark';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Track Order', href: '/track' },
];

export default function Navbar({ theme = 'light' }: { theme?: NavTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, items } = useCartStore();
  const count = getCartItemCount(items);

  const linkClass =
    theme === 'dark'
      ? 'text-white hover:text-nouri-red'
      : 'text-nouri-black hover:text-nouri-red';

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-7">
        <Link
          href="/"
          className="font-display font-bold text-2xl text-nouri-black tracking-tight z-10"
        >
          nouri
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-12 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${linkClass} font-semibold text-sm tracking-wide transition-colors duration-200`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Cart button */}
          <button
            onClick={toggleCart}
            aria-label="Open cart"
            className="relative bg-nouri-red text-white p-3 rounded-full shadow-float
                       hover:bg-nouri-red-dark transition-colors duration-200"
          >
            <CartIcon />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-nouri-red text-[10px] font-black
                               w-5 h-5 rounded-full flex items-center justify-center border-2 border-nouri-red">
                {count > 9 ? '9+' : count}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            className="md:hidden text-nouri-black text-3xl p-1 leading-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-nouri-black z-[999] flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-7 right-6 text-white text-4xl leading-none"
          >
            ✕
          </button>
          {[...NAV_LINKS, { label: 'My Cart', href: '/cart' }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white font-bold text-3xl hover:text-nouri-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
