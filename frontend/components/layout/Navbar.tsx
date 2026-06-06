'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  theme?: 'home' | 'default';
}

export default function Navbar({ theme = 'default' }: NavbarProps) {
  const [lang, setLang] = useState<'EN' | 'SW'>('EN');
  const isHome = theme === 'home';

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-16 md:py-8">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-nouri-black transition-colors duration-300">
          nouri<span className="text-nouri-red group-hover:animate-ping inline-block">.</span>
        </span>
      </Link>

      {/* Right Actions */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Language Toggle */}
        <div className={`relative flex items-center p-0.5 rounded-full border transition-all duration-300 ${
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
          >
            SW
          </button>
        </div>

        {/* Cart Trigger */}
        <Link
          href="/cart"
          className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
            isHome
              ? 'bg-gray-100 md:bg-neutral-900 text-nouri-black md:text-white hover:bg-gray-200 md:hover:bg-neutral-800'
              : 'bg-gray-100 text-nouri-black hover:bg-gray-200'
          }`}
          aria-label="View Shopping Cart"
        >
          {/* Shopping Cart SVG */}
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
          {/* Active Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-nouri-red text-[10px] font-bold text-white shadow-float">
            0
          </span>
        </Link>
      </div>
    </nav>
  );
}
