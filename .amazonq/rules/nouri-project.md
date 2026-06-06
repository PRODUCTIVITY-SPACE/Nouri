# Nouri Project Rules

## Stack
- Next.js 15, TypeScript, Tailwind CSS v3, Zustand
- App Router with route groups: `(customer)` and `(admin)`
- Django + DRF + Channels backend (Phase 2+)

## Design System (Nouri Digital — Light)
All tokens come from `stitch_nouri_digital_ordering_platform/nouri_digital/DESIGN.md`.

### Colors (extend tailwind, do NOT use arbitrary values for these)
```
primary: #855300          on-primary: #ffffff
primary-container: #f59e0b  on-primary-container: #613b00
tertiary: #9b4500          tertiary-container: #ff9657
secondary: #555f6f         secondary-container: #d6e0f3
background: #fff8f4        on-surface: #221a12
surface: #fff8f4           on-surface-variant: #534434
surface-container: #fbebdd surface-container-low: #fff1e5
surface-container-high: #f5e6d7  surface-container-highest: #f0e0d1
outline: #867461           outline-variant: #d8c3ad
mpesa-green: #4CAF50       (only for payment triggers)
```

### Typography
- Headlines: `font-['Montserrat']`
- Body/Labels: `font-['Inter']`
- Load both from Google Fonts in root layout

### Spacing baseline = 8px
- stack-sm: 4px  stack-md: 12px  stack-lg: 24px
- container-margin-mobile: 16px  container-margin-desktop: 40px

### Border radius
- Buttons/inputs: `rounded-lg` (8px)
- Cards: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- Pills: `rounded-full`

## Component Rules
- Food cards: 4:3 image ratio, price in `text-tertiary`
- Primary CTA: `bg-primary-container text-on-primary-container`, full-width on mobile
- M-Pesa button: `bg-[#4CAF50] text-white` ONLY for payment
- Status badges: received=gray, preparing=saffron+pulse, ready=green, served=soft-gray
- Admin tables: Inter 14px, alternating rows, urgent orders get `border-l-4 border-tertiary`
- Bottom nav: mobile only (`md:hidden`), fixed bottom
- Side nav: desktop only (`hidden md:flex`), fixed left, w-64

## File Conventions
- Customer pages: `frontend/app/(customer)/`
- Admin pages: `frontend/app/(admin)/admin/`
- Shared UI components: `frontend/components/ui/`
- Customer components: `frontend/components/home/`, `menu/`, `cart/`, `tracking/`
- Admin components: `frontend/components/admin/`
- Layout components (Header, BottomNav, SideNav): `frontend/components/layout/`

## Code Style
- All components are Server Components by default; add `'use client'` only when using hooks/events
- Use Zustand store at `lib/store/cart.ts` for cart state
- Currency format: `KES X,XXX` — use `lib/utils/format.ts`
- No `<img>` — use Next.js `<Image>` with `unoptimized` for external URLs
- No inline styles unless absolutely required by animation
- Tailwind only — no CSS modules, no styled-components
