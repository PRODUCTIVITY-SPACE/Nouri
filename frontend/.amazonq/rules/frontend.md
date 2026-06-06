# Nouri Frontend Rules

## Tailwind Config
The tailwind config at `tailwind.config.ts` MUST be updated to include all Nouri design tokens before any component work. All color/font/spacing tokens from DESIGN.md are the source of truth.

## Dark Mode
- Dark mode tokens exist (nouri_dark DESIGN.md) — use `dark:` variants for admin screens
- Admin sidebar and kitchen board use dark palette: `bg-[#17130a]` base

## Route Structure
```
app/
  (customer)/
    page.tsx          → Customer Home (table selection, order type)
    menu/page.tsx     → Menu browse + category filter
    cart/page.tsx     → Cart review
    checkout/page.tsx → Payment selection (create this)
    track/[orderId]/page.tsx → Order tracking
  (admin)/
    login/page.tsx    → Admin login
    admin/
      page.tsx        → Dashboard (stats + live orders)
      menu/page.tsx   → Menu management
      orders/page.tsx → Live orders / kitchen board
      tables/page.tsx → QR & table management
      reports/page.tsx → Analytics
```

## Component Architecture
Each page composes from small components:
- `components/layout/TopBar.tsx`
- `components/layout/BottomNav.tsx`
- `components/layout/AdminSideNav.tsx`
- `components/ui/Badge.tsx`, `Button.tsx`, `Card.tsx`, `StatusBadge.tsx`
- `components/menu/MenuCard.tsx`, `CategoryPill.tsx`
- `components/cart/CartItem.tsx`
- `components/home/OrderTypeSelector.tsx`, `HeroSection.tsx`
- `components/tracking/StatusStepper.tsx`
- `components/admin/OrderCard.tsx`, `StatsCard.tsx`, `RevenueChart.tsx`

## Stitch HTML → Next.js Conversion Rules
1. Replace `class=` with `className=`
2. Replace `<img src=...>` with `<Image src=... alt=... fill unoptimized />`
3. Extract JS interactions into `useState`/`useEffect` hooks with `'use client'`
4. Remove inline `<script>` and `<style>` tags — move to Tailwind or globals.css
5. Replace CDN Tailwind config with the project tailwind.config.ts tokens
6. Use Next.js `<Link>` for navigation, not `<a href>`
7. Material Symbols font loaded in root layout — use `<span className="material-symbols-outlined">`
