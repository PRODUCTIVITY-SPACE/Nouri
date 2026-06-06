# Nouri Frontend Build Plan

> Stitch designs → Next.js 15 implementation roadmap

## Agent Prompts (use via `@prompt` in Amazon Q chat)
| Prompt | Purpose |
|---|---|
| `@nouri-tailwind-setup` | Step 1 — wire design tokens into Tailwind + root layout |
| `@nouri-state-types` | Step 2 — types, Zustand store, utils, WS hook |
| `@nouri-ui-components` | Step 3 — shared primitive components |
| `@nouri-customer-pages` | Step 4 — all customer-facing pages |
| `@nouri-admin-pages` | Step 5 — admin dashboard + kitchen board |

---

## Step-by-Step Build Order

### Step 1 — Foundation
Run `@nouri-tailwind-setup`

Files to update:
- `frontend/tailwind.config.ts` — full design token palette
- `frontend/app/layout.tsx` — Google Fonts (Montserrat + Inter + Material Symbols), body classes
- `frontend/app/globals.css` — `.material-symbols-outlined` font-variation-settings

### Step 2 — Types & State
Run `@nouri-state-types`

Files to update/create:
- `frontend/lib/types.ts`
- `frontend/lib/store/cart.ts`
- `frontend/lib/utils/format.ts`
- `frontend/lib/hooks/useOrderStatus.ts`

### Step 3 — UI Primitives
Run `@nouri-ui-components`

Files to create:
- `frontend/components/ui/Button.tsx`
- `frontend/components/ui/Badge.tsx`
- `frontend/components/ui/StatusBadge.tsx`
- `frontend/components/ui/Card.tsx`
- `frontend/components/ui/Input.tsx`
- `frontend/components/ui/LanguageSwitcher.tsx`
- `frontend/components/ui/index.ts`

### Step 4 — Layout Shell
Files to create manually or via `@nouri-customer-pages`:
- `frontend/components/layout/TopBar.tsx`
- `frontend/components/layout/BottomNav.tsx`
- `frontend/components/layout/AdminSideNav.tsx`
- `frontend/components/layout/AdminTopBar.tsx`
- `frontend/app/(customer)/layout.tsx` — update
- `frontend/app/(admin)/layout.tsx` — update

### Step 5 — Customer Pages
Run `@nouri-customer-pages`

| Page | Stitch Source | Route |
|---|---|---|
| Home | `customer_home_nouri/code.html` | `/` |
| Menu | `menu_nouri/code.html` | `/menu` |
| Checkout | `checkout_nouri/code.html` | `/checkout` |
| Tracking | `track_order_nouri/code.html` | `/track/[orderId]` |

Mobile variants to merge in: `customer_home_mobile`, `menu_mobile`, `checkout_mobile`, `track_order_mobile`

### Step 6 — Admin Pages
Run `@nouri-admin-pages`

| Page | Stitch Source | Route |
|---|---|---|
| Dashboard | `admin_dashboard_nouri/code.html` | `/admin` |
| Live Orders | `live_orders_nouri_admin/code.html` | `/admin/orders` |
| Menu Mgmt | `menu_management_nouri_admin/code.html` | `/admin/menu` |
| Tables/QR | `table_qr_management_nouri_admin/code.html` | `/admin/tables` |
| Kitchen Board | `live_kitchen_board_dark_mode/code.html` | `/admin/orders` (dark variant) |

---

## Design Sources
All screens: `stitch_nouri_digital_ordering_platform/`
Light token spec: `nouri_digital/DESIGN.md`
Dark token spec: `nouri_dark/DESIGN.md`

## Rules Files (auto-loaded)
- `.amazonq/rules/nouri-project.md` — project-wide conventions
- `frontend/.amazonq/rules/frontend.md` — frontend-specific rules
