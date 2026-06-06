import type { Config } from 'tailwindcss';

/**
 * Nouri Design System — Tailwind Configuration
 * ─────────────────────────────────────────────
 * This is the single source of truth for all brand tokens.
 * Every colour, font, shadow, and radius used in the app
 * must be defined here — never use raw hex values in components.
 *
 * FE-01 · Design System · Phase 1
 */
const config: Config = {
  // Tell Tailwind which files to scan for class usage (no unused CSS in prod)
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── Brand Colour Palette ───────────────────────────────────────────
      // Usage: bg-nouri-black, text-nouri-red, border-nouri-gray-mid, etc.
      colors: {
        nouri: {
          black:      '#111111', // Primary dark: backgrounds, headings, dark buttons
          red:        '#d32f2f', // Accent red: prices, badges, "Add to Order" hover
          'red-dark': '#b71c1c', // Deeper red: hover state for red buttons
          'red-light':'#A64444', // Muted red: "CHEF'S SPECIAL" badge, subtle accents
          gray:       '#f9f9f9', // Near-white: menu card backgrounds, subtle fills
          'gray-mid': '#666666', // Mid-gray: secondary body text, placeholders
        },
      },

      // ─── Typography Scale ────────────────────────────────────────────────
      // CSS variables are injected by next/font in app/layout.tsx.
      // Usage: font-sans (body), font-display (headings/logo), font-serif (accents)
      fontFamily: {
        sans:    ['var(--font-inter)',         'Inter',           'sans-serif'], // Body copy everywhere
        display: ['var(--font-space-grotesk)', 'Space Grotesk',  'sans-serif'], // Display headings, logo, badge
        serif:   ['var(--font-playfair)',      'Playfair Display','serif'],      // Accent / editorial headings
      },

      // ─── Border Radius Tokens ────────────────────────────────────────────
      // Usage: rounded-4xl (panels, cart), rounded-5xl (menu cards)
      borderRadius: {
        '4xl': '2rem',   // Large panels: login card, cart sidebar
        '5xl': '2.5rem', // Extra-large cards: menu item cards
      },

      // ─── Shadow Tokens ───────────────────────────────────────────────────
      // Usage: shadow-float (floating CTA buttons), shadow-cart (cart sidebar)
      boxShadow: {
        float: '0 10px 30px rgba(211,47,47,0.4)', // Red glow: floating cart / CTA buttons
        cart:  '-5px 0 30px rgba(0,0,0,0.1)',     // Soft left shadow: cart slide-over panel
      },
    },
  },
  plugins: [],
};

export default config;
