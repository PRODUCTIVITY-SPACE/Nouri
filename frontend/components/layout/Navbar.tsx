'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore, getCartItemCount } from '@/lib/store/cart';

interface NavbarProps {
  theme?: 'home' | 'light';
}

export default function Navbar({ theme = 'light' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'SW'>('EN');

  const items = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const itemCount = getCartItemCount(items);

  const isHome = theme === 'home';

  // Escape key down listener and body overflow lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-16 md:py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Nouri Home">
          <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-nouri-black">
            nouri<span className="text-nouri-red group-hover:animate-ping inline-block">.</span>
          </span>
        </Link>

        {/* Middle Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <Link
            href="/"
            className={`transition-colors duration-200 text-sm ${
              isHome
                ? 'text-neutral-800 md:text-neutral-200 hover:text-nouri-red md:hover:text-white'
                : 'text-neutral-600 hover:text-nouri-black'
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`transition-colors duration-200 text-sm ${
              isHome
                ? 'text-neutral-800 md:text-neutral-200 hover:text-nouri-red md:hover:text-white'
                : 'text-neutral-600 hover:text-nouri-black'
            }`}
          >
            Menu
          </Link>
          <Link
            href="/track"
            className={`transition-colors duration-200 text-sm ${
              isHome
                ? 'text-neutral-800 md:text-neutral-200 hover:text-nouri-red md:hover:text-white'
                : 'text-neutral-600 hover:text-nouri-black'
            }`}
          >
            Track Order
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Language Toggle (Desktop) */}
          <div className={`hidden md:flex relative items-center p-0.5 rounded-full border transition-all duration-300 ${
            isHome
              ? 'border-gray-200 md:border-neutral-800 bg-white md:bg-neutral-950/70'
              : 'border-gray-200 bg-white'
          }`}>
            <button
              onClick={() => setLang('EN')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                lang === 'EN'
                  ? 'bg-nouri-red text-white shadow-sm'
                  : isHome
                    ? 'text-nouri-black md:text-gray-400 hover:text-white'
                    : 'text-nouri-gray-mid hover:text-nouri-black'
              }`}
              aria-label="Switch language to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('SW')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                lang === 'SW'
                  ? 'bg-nouri-red text-white shadow-sm'
                  : isHome
                    ? 'text-nouri-black md:text-gray-400 hover:text-white'
                    : 'text-nouri-gray-mid hover:text-nouri-black'
              }`}
              aria-label="Switch language to Swahili"
            >
              SW
            </button>
          </div>

          {/* Cart Icon Button (Always visible) */}
          <button
            onClick={toggleCart}
            className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
              isHome
                ? 'bg-gray-100 md:bg-neutral-900 text-nouri-black md:text-white hover:bg-gray-200 md:hover:bg-neutral-800'
                : 'bg-gray-100 text-nouri-black hover:bg-gray-200'
            }`}
            aria-label="Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-nouri-red text-[10px] font-bold text-white shadow-float animate-pulse">
                {itemCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`p-2 font-display text-2xl md:hidden transition-colors duration-200 active:scale-90 ${
              isHome ? 'text-nouri-black' : 'text-nouri-black'
            }`}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#111111] z-[100] flex flex-col justify-between p-6 animate-fadeIn">
          {/* Header row in overlay */}
          <div className="flex items-center justify-between w-full">
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              nouri<span className="text-nouri-red">.</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-3 text-3xl text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col items-center gap-8 text-center my-auto">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold text-white hover:text-nouri-red transition-all duration-200 active:scale-95"
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold text-white hover:text-nouri-red transition-all duration-200 active:scale-95"
            >
              Menu
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold text-white hover:text-nouri-red transition-all duration-200 active:scale-95"
            >
              My Cart
            </Link>
            <Link
              href="/track"
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold text-white hover:text-nouri-red transition-all duration-200 active:scale-95"
            >
              Track Order
            </Link>
          </div>

          {/* Bottom language toggle in overlay */}
          <div className="flex flex-col items-center gap-4 pb-8">
            <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Language / Lugha</span>
            <div className="flex relative items-center p-0.5 rounded-full border border-neutral-800 bg-neutral-900/50">
              <button
                onClick={() => setLang('EN')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                  lang === 'EN' ? 'bg-nouri-red text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
                aria-label="Switch language to English"
              >
                English
              </button>
              <button
                onClick={() => setLang('SW')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                  lang === 'SW' ? 'bg-nouri-red text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
                aria-label="Switch language to Swahili"
              >
                Kiswahili
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
