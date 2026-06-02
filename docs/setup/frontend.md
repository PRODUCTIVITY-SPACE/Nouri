# Frontend Setup Guide

## Prerequisites
- Node.js 20+
- npm 10+

## Local Setup

```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local — set NEXT_PUBLIC_API_URL=http://localhost:8000/api
npm run dev
```

Visit http://localhost:3000

## Environment Variables
See `frontend/.env.example`.

## Key Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |

## Folder Conventions
- `app/(customer)/` — all guest-facing pages
- `app/(admin)/` — all admin panel pages
- `components/` — one folder per domain (`menu/`, `cart/`, `admin/`, etc.)
- `lib/api/` — all API call functions (swap mock → real in Phase 2)
- `lib/store/` — Zustand stores
