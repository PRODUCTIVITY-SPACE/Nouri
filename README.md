# Nouri — Digital Restaurant Ordering Platform

> Scan. Order. Enjoy. QR-code-powered ordering for hotels and restaurants.

## What is Nouri?

Nouri is a full-stack, real-time ordering platform. A guest scans a QR code on their table, browses a live menu, places an order, and tracks it in real time — all from their phone, no app download required. The restaurant owner manages everything from a single admin dashboard.

## Monorepo Structure

```
nouri/
├── frontend/          Next.js 15 — Customer app + Admin panel
├── backend/           Django + DRF + Channels — REST API + WebSocket
├── docs/              Architecture, API reference, setup guides
├── devops/            Docker, Nginx, CI/CD configs
└── .github/workflows/ GitHub Actions pipelines
```

## Quick Start

```bash
# Copy environment files
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env

# Start everything with Docker
docker-compose -f docker-compose.dev.yml up --build
```

- Customer app: http://localhost:3000
- Admin panel:  http://localhost:3000/admin
- Django API:   http://localhost:8000/api/
- API docs:     http://localhost:8000/api/schema/

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, Zustand |
| Backend API | Django 5, Django REST Framework |
| Real-time | Django Channels, WebSockets, Redis |
| Database | PostgreSQL 16 |
| Auth | JWT (djangorestframework-simplejwt) |
| Images | Cloudinary (Africa CDN) |
| Payments | M-Pesa Daraja · Airtel Money · Pesapal · Stripe (intl) · Cash |
| Notifications | Web Push · Africa's Talking SMS · WhatsApp Business API |
| Deployment | Docker, Nginx, Gunicorn/Daphne |
| Hosting | DigitalOcean (Bangalore) or AWS (Cape Town) |

## Development Phases

| Phase | Scope | Status |
|---|---|---|
| 1 | Frontend scaffold + UI | ✅ Done |
| 2 | Django backend + live menu from DB | 🔄 Next |
| 3 | QR codes + real-time WebSocket orders | ⏳ Planned |
| 4 | Payments + full admin CMS | ⏳ Planned |
| 5 | Delivery maps + push notifications | ⏳ Planned |

See [docs/product/PROJECT.md](docs/product/PROJECT.md) for the full product definition.

## Contributing

See [docs/setup/](docs/setup/) for environment setup guides.
Branch strategy: `main` (production) ← `develop` ← `feature/*`
