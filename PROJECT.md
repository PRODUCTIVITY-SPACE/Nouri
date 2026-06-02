# Nouri — Project Definition Document

**Version:** 1.0  
**Date:** June 2026  
**Status:** Pre-Development (UI Prototype Complete)  
**Prepared by:** Nouri Team

---

## Table of Contents

1. [Elevator Pitch](#1-elevator-pitch)
2. [Problem Statement](#2-problem-statement)
3. [Solution Overview](#3-solution-overview)
4. [Current State](#4-current-state)
5. [Target Product](#5-target-product)
6. [User Roles](#6-user-roles)
7. [Full Feature Scope](#7-full-feature-scope)
8. [User Flows](#8-user-flows)
9. [Technical Architecture](#9-technical-architecture)
10. [Database Schema](#10-database-schema)
11. [API Endpoints](#11-api-endpoints)
12. [Development Roadmap](#12-development-roadmap)
13. [What We Have vs. What We Are Building](#13-what-we-have-vs-what-we-are-building)
14. [Out of Scope (v1)](#14-out-of-scope-v1)

---

## 1. Elevator Pitch

> **"Nouri is a QR-code-powered digital ordering platform built for hotels and restaurants. A guest scans a table QR code, browses a live menu, places an order, and tracks it in real time — all from their phone, no app download required. The restaurant owner manages everything — menu, orders, staff, and history — from a single admin dashboard."**

We are replacing the outdated combination of paper menus, verbal orders, and disconnected POS systems with a seamless, real-time digital experience that reduces wait times, increases order accuracy, and gives restaurant owners full visibility and control over their operation.

---

## 2. Problem Statement

### For Guests
- Physical menus are slow to browse, unhygienic, and outdated the moment a price changes.
- Flagging a waiter to place or modify an order is frustrating, especially during peak hours.
- There is no transparency into where your order is in the preparation process.
- Delivery and takeaway customers have no real-time status updates.

### For Restaurant & Hotel Owners
- Menu updates require reprinting physical menus — expensive and slow.
- Staff spend significant time taking and relaying orders instead of delivering experiences.
- No single view of all active orders, their status, and their history.
- No data on popular items, peak hours, or revenue trends.

### The Market Gap
Most existing solutions are either too expensive for small-to-medium restaurants, require hardware investment (tablets at every table), or offer only one piece of the puzzle (just QR menus, or just POS). **Nouri** solves the full ordering lifecycle from guest discovery to kitchen preparation to delivery — entirely through a browser, with zero hardware requirements.

---

## 3. Solution Overview

Nouri platform has two sides:

### Side A — The Customer-Facing Web App
A mobile-first web application that guests access by scanning a QR code on their table. No app download. No account required. The guest sees a live, categorised menu, selects items, chooses their order type (Dine In, Takeaway, or Delivery), pays, and tracks their order in real time.

### Side B — The Chef/Admin CMS Panel
A protected web dashboard for restaurant owners and staff. The owner manages the full menu (add/edit/remove items, upload photos, set availability). The kitchen receives and manages live orders, marks progress, and notifies guests automatically. The owner can review order history, filter by date range, and print reports.

---

## 4. Current State

The project currently has a **fully designed, static HTML/CSS/JavaScript prototype** that establishes the visual identity, branding, and basic UI structure of the customer-facing app.

### What Exists Today

| File | Purpose | Status |
|------|---------|--------|
| `index.html` | Landing / Home page with hero section and navigation | ✅ Complete |
| `menu.html` | Menu page with Breakfast, Lunch, Dinner, Desserts categories | ✅ Complete |
| `lunch-boxes.html` | Lunch box offerings (Protein Packed, Plant Based) | ✅ Complete |
| `platters.html` | Sharing platter offerings (Signature Sets, Hot Platters) | ✅ Complete |
| `specials.html` | Monthly specials + newsletter signup | ✅ Complete |
| `script.js` | In-memory cart logic, carousel scroll, hamburger nav | ✅ Complete |
| `index.css` | Full responsive design system, dark/light theme | ✅ Complete |

### Limitations of the Current Prototype

- **No backend.** All data is hardcoded in HTML. There is no database.
- **Cart resets on every page navigation.** Cart state lives only in memory (`const cart = []`).
- **No checkout flow.** The "Checkout" button has no functionality.
- **No order tracking.** No page or mechanism exists to track order status.
- **No admin panel.** The menu cannot be modified without editing HTML files directly.
- **No QR code system.** No table identification or QR entry flow exists.
- **No authentication.** No user accounts, no admin login.
- **No payment integration.** No payment gateway is wired up.
- **No notifications.** No real-time updates for customer or kitchen.

---

## 5. Target Product

The final product is a **full-stack, real-time restaurant ordering platform** consisting of:

```
┌─────────────────────────────────────────────────────────────┐
│                    CUSTOMER WEB APP                          │
│  (Mobile-first, accessed via QR code scan, no app needed)   │
└─────────────────────────────────────────────────────────────┘
                           │  REST API / WebSocket
┌─────────────────────────────────────────────────────────────┐
│               BACKEND API (Django REST Framework)            │
│         Authentication · Orders · Menu · Notifications       │
└─────────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────────┐
│              PostgreSQL DATABASE                              │
│  Menu Items · Orders · Tables · Users · Notifications        │
└─────────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────────┐
│                CHEF / ADMIN PANEL (React SPA)                │
│     Menu CMS · Live Orders · Kitchen View · Reports          │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. User Roles

### 6.1 Guest (Customer)
- Arrives at table and scans QR code.
- Browses the live menu without creating an account.
- Selects order type (Dine In, Takeaway, Delivery).
- Adds items to cart and checks out.
- Receives real-time order status notifications.
- Can view previous orders from the same session.

### 6.2 Waiter / Floor Staff
- Receives notification when a Dine In order is ready.
- Marks orders as "Served" on a simple mobile-friendly view.
- Can view active table statuses.

### 6.3 Chef / Kitchen Staff
- Receives all incoming orders in real time.
- Views order details and table/order type.
- Marks orders as "In Preparation" and "Ready."

### 6.4 Restaurant Admin / Owner
- Full access to the CMS Admin Panel.
- Manages menu: add, edit, remove items; upload images; toggle availability.
- Views all orders — live and historical.
- Filters orders by date, type, status.
- Prints order reports.
- Manages QR codes for tables.
- Views revenue and popularity analytics (Phase 2).

---

## 7. Full Feature Scope

### 7.1 Customer Web App

#### Home Screen
- [ ] Landing page with restaurant branding (✅ exists)
- [ ] Order type selector: **Dine In / Takeaway / Delivery**
- [ ] QR code scan initiates session and identifies table automatically
- [ ] Table number confirmation screen (for Dine In)
- [ ] Delivery address input (for Delivery mode)

#### Menu Screen
- [ ] Live menu fetched from database (not hardcoded)
- [ ] Tabs / categories: Breakfast · Lunch · Dinner · Desserts · Drinks · Specials
- [ ] Item cards with image, name, description, price, dietary tags
- [ ] "Add to Order" with quantity selector
- [ ] Item availability toggle (set by admin — unavailable items greyed out)
- [ ] Search bar for menu items
- [ ] Category filter by dietary preference (Vegetarian, Vegan, Gluten-Free)

#### Cart & Checkout
- [ ] Persistent cart (survives page navigation via `localStorage` + session API)
- [ ] Edit quantities, remove items
- [ ] Order summary with line items and total
- [ ] Checkout confirmation screen
- [ ] Payment integration (Stripe or PayFast)
- [ ] Order placed → confirmation screen with order number

#### Order Tracking
- [ ] Real-time status display: **Order Received → Being Prepared → Ready / On the Way → Served / Delivered**
- [ ] Dine In: "Your food is on its way to Table X"
- [ ] Takeaway: "Your order is being packed — please proceed to counter"
- [ ] Delivery: Live map showing driver location
- [ ] Push / in-browser notifications for status changes
- [ ] View past orders from current session; option to reorder

---

### 7.2 Chef / Admin Panel

#### Dashboard (Home)
- [ ] Welcome screen with today's snapshot: total orders, revenue, active tables
- [ ] Live active orders count badge

#### Menu CMS
- [ ] View all menu items in a table/grid
- [ ] Add new item: name, description, price, category, image upload, dietary tags, availability toggle
- [ ] Edit existing item inline
- [ ] Delete/archive item
- [ ] Reorder items within a category via drag-and-drop
- [ ] Manage categories: add, rename, reorder

#### Orders Dashboard
- [ ] Live view of all incoming orders (real-time, no page refresh needed)
- [ ] Filter by: Order Type (Dine In / Takeaway / Delivery) · Status · Table Number · Date
- [ ] Expand order to see full item list, customer notes, timestamps
- [ ] Change order status: Received → In Preparation → Ready → Served/Delivered
- [ ] Status change triggers automatic customer notification
- [ ] "Send to Kitchen" button that generates a printable kitchen slip

#### History & Reports
- [ ] View all completed orders
- [ ] Date range filter
- [ ] Export to PDF / Print
- [ ] Basic stats: most ordered items, revenue per day/week/month

#### Table & QR Code Management
- [ ] Add/remove tables
- [ ] Generate and download QR code per table
- [ ] QR code links to customer app with table pre-identified

---

## 8. User Flows

### 8.1 Dine In Flow (Primary)

```
Guest scans QR code on table
        ↓
Home screen loads with table number pre-filled
        ↓
Guest selects "Dine In"
        ↓
Menu screen — browse and add items to cart
        ↓
Cart screen — review, edit, confirm
        ↓
Payment screen → Order placed
        ↓
Order tracking screen:
  → "Order received" notification
  → "Being prepared" notification
  → "Ready — waiter notified" notification
  → "Served" ✓
```

### 8.2 Takeaway Flow

```
Guest enters website (or scans QR at counter)
        ↓
Selects "Takeaway"
        ↓
Menu → Cart → Payment
        ↓
Order tracking:
  → "Order received"
  → "Being prepared"
  → "Ready for collection — please proceed to counter"
```

### 8.3 Delivery Flow

```
Guest enters website
        ↓
Selects "Delivery" → Enters delivery address
        ↓
Menu → Cart → Payment
        ↓
Order tracking:
  → "Order received"
  → "Being prepared"
  → "On the way" + live map
  → "Delivered" ✓
```

### 8.4 Admin / Chef Flow

```
Admin logs in at /admin
        ↓
Dashboard — sees today's summary
        ↓
Orders tab — incoming orders appear in real time
        ↓
Admin clicks order → views items → marks "In Preparation"
        ↓
Customer receives "Being prepared" notification
        ↓
Chef marks "Ready"
        ↓
Waiter is notified → delivers to table → marks "Served"
        ↓
Order moves to History
```

---

## 9. Technical Architecture

### 9.1 Technology Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| **Frontend (Customer App)** | HTML/CSS/JS (current) → React (Phase 2) | Existing prototype in HTML; migrate to React for SPA experience |
| **Frontend (Admin Panel)** | React + Tailwind CSS | Component-driven, fast to build dashboards |
| **Backend API** | Python + Django + Django REST Framework (DRF) | Batteries included, Django Admin as CMS foundation, mature ORM, strong auth |
| **Real-time Layer** | Django Channels + WebSockets | Order status push from kitchen to customer without polling |
| **Database** | PostgreSQL | Relational, handles orders/menu/users reliably, excellent Django ORM support |
| **File Storage** | AWS S3 or Cloudinary | Menu item image uploads |
| **Authentication** | Django auth + DRF Token / JWT | Admin login; guest sessions via session tokens |
| **Payments** | Stripe API | Industry standard, easy integration, supports ZAR |
| **Maps (Delivery)** | Google Maps API | Live delivery tracking |
| **Notifications** | Web Push API + Django Channels | Real-time browser notifications |
| **QR Codes** | `qrcode` Python library | Server-side QR generation per table |
| **Deployment** | Docker + Nginx + Gunicorn | Containerised for easy hosting on any VPS or cloud |
| **Hosting** | Render / Railway / DigitalOcean | Affordable, managed PostgreSQL included |

### 9.2 Why Django over FastAPI

Django is recommended as the primary framework for this project for the following reasons:

- **Django Admin** provides a fully featured CMS panel out of the box that can serve as the Phase 1 admin panel with zero extra code.
- **Django REST Framework** handles the customer-facing API cleanly.
- **Django Channels** adds WebSocket support for real-time order updates without switching frameworks.
- **Django ORM** with PostgreSQL migrations is the fastest path to a working database layer.
- **FastAPI** would be a better choice if the primary concern were raw API performance at scale — it is noted as a future consideration if the platform grows into a multi-tenant SaaS product.

### 9.3 System Architecture Diagram

```
┌──────────────────────────────────────────────────────────────┐
│  CUSTOMER BROWSER (Mobile)                                    │
│  HTML/CSS/JS → React (Phase 2)                               │
│  Communicates via: REST API + WebSocket                       │
└────────────────────────┬─────────────────────────────────────┘
                         │ HTTPS
┌────────────────────────▼─────────────────────────────────────┐
│  NGINX (Reverse Proxy + Static File Serving)                  │
└────────────────────────┬─────────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────────┐
│  DJANGO APPLICATION SERVER (Gunicorn + Daphne for WS)         │
│                                                               │
│  ┌─────────────────┐  ┌──────────────────┐                   │
│  │  REST API        │  │  WebSocket       │                   │
│  │  (DRF)          │  │  (Django Channels)│                   │
│  └────────┬────────┘  └────────┬─────────┘                   │
│           └──────────┬─────────┘                             │
│                      │                                        │
│  ┌───────────────────▼───────────────────┐                   │
│  │  Django Core: Models · Auth · Admin   │                   │
│  └───────────────────┬───────────────────┘                   │
└──────────────────────┼───────────────────────────────────────┘
                       │
┌──────────────────────▼───────────────────────────────────────┐
│  PostgreSQL Database                                          │
│  Tables: User · Restaurant · Table · Category · MenuItem     │
│          Order · OrderItem · OrderStatus · Notification       │
└──────────────────────────────────────────────────────────────┘
          │                          │
┌─────────▼──────────┐   ┌──────────▼──────────┐
│  Redis (Cache +    │   │  S3 / Cloudinary     │
│  Channel Layer)    │   │  (Image Storage)     │
└────────────────────┘   └─────────────────────┘
```

---

## 10. Database Schema

### Core Tables

```sql
-- Restaurant (supports multi-tenant in future)
restaurants (
  id, name, slug, logo_url, address, phone, created_at
)

-- Table (physical tables in the restaurant)
tables (
  id, restaurant_id, table_number, qr_code_url, is_active
)

-- Menu Categories
categories (
  id, restaurant_id, name, display_order, is_visible
)

-- Menu Items
menu_items (
  id, category_id, name, description, price,
  image_url, is_available, dietary_tags[], display_order, created_at
)

-- Orders
orders (
  id, restaurant_id, table_id (nullable), order_type (DINE_IN|TAKEAWAY|DELIVERY),
  delivery_address (nullable), status, total_amount,
  payment_status, payment_ref, session_token, created_at, updated_at
)

-- Order Line Items
order_items (
  id, order_id, menu_item_id, item_name (snapshot),
  item_price (snapshot), quantity, notes
)

-- Order Status History (audit trail)
order_status_history (
  id, order_id, status, changed_by (user_id nullable), changed_at, note
)

-- Users (Admin / Staff)
users (
  id, restaurant_id, email, password_hash,
  role (ADMIN|CHEF|WAITER), is_active, created_at
)

-- Notifications
notifications (
  id, order_id, recipient_type (CUSTOMER|STAFF), message,
  channel (WEBSOCKET|PUSH), sent_at, is_read
)
```

---

## 11. API Endpoints

### Public Endpoints (Customer App)

```
GET    /api/menu/                        List all menu categories + items
GET    /api/menu/categories/             List categories
GET    /api/menu/items/?category=<id>    List items by category
GET    /api/tables/<qr_token>/           Resolve QR token → table info

POST   /api/orders/                      Place a new order
GET    /api/orders/<order_id>/           Get order status (polling fallback)
WS     /ws/orders/<order_id>/            Real-time order status stream
```

### Admin Endpoints (Authenticated)

```
POST   /api/auth/login/                  Admin login → JWT token

GET    /api/admin/menu/items/            List all menu items
POST   /api/admin/menu/items/            Create menu item
PATCH  /api/admin/menu/items/<id>/       Update item
DELETE /api/admin/menu/items/<id>/       Delete item

GET    /api/admin/orders/                List all orders (with filters)
PATCH  /api/admin/orders/<id>/status/   Update order status
GET    /api/admin/orders/<id>/slip/      Generate printable kitchen slip (PDF)

GET    /api/admin/tables/                List tables
POST   /api/admin/tables/               Add table + generate QR
DELETE /api/admin/tables/<id>/          Remove table

GET    /api/admin/reports/              Revenue and order stats
```

---

## 12. Development Roadmap

### Phase 1 — Frontend Hardening (2–3 weeks)
> Goal: Make the existing prototype functional as a standalone demo.

- [ ] Cart persistence with `localStorage` (survives page navigation)
- [ ] Item quantity selector (+/-) and remove button in cart
- [ ] Order type selector (Dine In / Takeaway / Delivery) on home screen
- [ ] Unify Lunch Boxes and Platters under menu tabs instead of separate nav items
- [ ] Add Drinks category to menu
- [ ] Static order confirmation screen (no backend yet)
- [ ] Static order tracking screen with mock status steps

**Deliverable:** Fully interactive frontend demo suitable for investor presentations.

---

### Phase 2 — Backend Foundation (3–4 weeks)
> Goal: Real data, real orders, real admin.

- [ ] Django project setup with PostgreSQL
- [ ] Menu models + DRF API (categories, items)
- [ ] Frontend pulls menu from API (replace hardcoded HTML)
- [ ] Order submission API
- [ ] Django Admin configured as Phase 1 Chef Panel (menu CRUD, order list)
- [ ] Admin authentication (JWT)
- [ ] Image upload for menu items (Cloudinary)

**Deliverable:** Live ordering system — menu managed in admin, orders stored in database.

---

### Phase 3 — QR + Real-Time Orders (2–3 weeks)
> Goal: Table-aware ordering with live kitchen updates.

- [ ] QR code generation per table (Python `qrcode` library)
- [ ] QR resolves table + prefills order context
- [ ] Django Channels + Redis for WebSocket layer
- [ ] Real-time order status push to customer browser
- [ ] Kitchen order dashboard (live feed of incoming orders)
- [ ] Admin marks status → customer notified instantly

**Deliverable:** A guest can scan a QR code, order, and watch their order status update live.

---

### Phase 4 — Payment & Full Admin Panel (3–4 weeks)
> Goal: Money moves. Admin panel is production-ready.

- [ ] Stripe payment integration (checkout flow)
- [ ] Payment confirmation triggers order creation
- [ ] Custom React admin panel replaces Django Admin
  - Menu CMS with drag-and-drop ordering
  - Live order board (Kanban: Received → Preparing → Ready → Served)
  - Order history with date filter and PDF export
  - Table + QR code manager
- [ ] Printable kitchen order slip (PDF)

**Deliverable:** End-to-end transaction flow. Production-ready admin panel.

---

### Phase 5 — Delivery, Notifications & Polish (3–4 weeks)
> Goal: Delivery mode live. Notifications working. App feels polished.

- [ ] Delivery address input + Google Maps autocomplete
- [ ] Live delivery map on order tracking screen
- [ ] Web Push notifications (browser-level, no app required)
- [ ] Waiter mobile view for "orders ready for your table"
- [ ] Guest order history (session-based reorder)
- [ ] UI polish: animations, empty states, loading states
- [ ] Performance optimisation + SEO meta tags

**Deliverable:** Full platform live. Ready for public launch.

---

### Phase 6 — Multi-Tenant SaaS (Future)
> Goal: Sell the platform to multiple restaurants.

- [ ] Restaurant onboarding flow (self-signup)
- [ ] Per-restaurant subdomain or slug routing
- [ ] Subscription billing (Stripe Billing)
- [ ] Analytics dashboard per restaurant
- [ ] FastAPI microservice for high-throughput order processing (if needed at scale)
- [ ] Native mobile app (React Native) wrapping the web experience

---

## 13. What We Have vs. What We Are Building

| Feature | Current State | Target State | Phase |
|---------|--------------|-------------|-------|
| Landing / Home page | ✅ Static HTML | ✅ + Order type selector | 1 |
| Menu (categories + items) | ✅ Hardcoded HTML | Live from database via API | 2 |
| Breakfast, Lunch, Dinner, Desserts | ✅ Exists | ✅ Retained + Drinks added | 1 |
| Specials section | ✅ Exists | CMS-managed | 2 |
| Lunch Boxes & Platters | ✅ Separate pages | Unified under menu tabs | 1 |
| Cart (add items) | ✅ In-memory only | Persistent, quantity-editable | 1 |
| Cart (remove / edit quantity) | ❌ Missing | Full edit controls | 1 |
| Cart persistence across pages | ❌ Resets on navigate | localStorage + session API | 1 |
| Checkout / Payment | ❌ Button does nothing | Stripe integration | 4 |
| Order confirmation screen | ❌ Missing | Confirmation + order number | 3 |
| Order tracking screen | ❌ Missing | Real-time status steps | 3 |
| QR code table scanning | ❌ Missing | QR per table, resolves table ID | 3 |
| Dine In / Takeaway / Delivery choice | ❌ Missing | Home screen selector | 1 |
| Delivery live map | ❌ Missing | Google Maps API | 5 |
| Push notifications | ❌ Missing | Web Push API | 5 |
| Admin / Chef panel | ❌ Missing | Full CMS dashboard | 2–4 |
| Menu management (add/edit/remove) | ❌ Missing | Full CRUD with image upload | 2 |
| Live order dashboard for kitchen | ❌ Missing | Real-time Kanban board | 3 |
| Order status marking | ❌ Missing | Chef marks → customer notified | 3 |
| Order history with print | ❌ Missing | Filterable history + PDF export | 4 |
| QR code generation per table | ❌ Missing | Admin generates + downloads QR | 3 |
| Backend / Database | ❌ None | Django + PostgreSQL | 2 |
| Authentication (admin) | ❌ None | JWT-based admin login | 2 |
| Real-time WebSocket layer | ❌ None | Django Channels + Redis | 3 |
| Image storage for menu items | ❌ None | Cloudinary / AWS S3 | 2 |

---

## 14. Out of Scope (v1)

The following features are acknowledged but intentionally excluded from the v1 build to maintain focus and deliver a working product faster:

- **Native mobile app** (iOS / Android) — the web app is mobile-optimised and covers the need.
- **Multi-restaurant / SaaS tenancy** — v1 is built for a single restaurant. Multi-tenant architecture is Phase 6.
- **Loyalty / rewards programme** — noted as a future feature.
- **Table reservation booking** — separate problem, separate product; out of scope for v1.
- **Staff scheduling / HR features** — not a food ordering problem.
- **Inventory / stock management** — out of scope; operators use existing tools for this.
- **FastAPI** — Django covers the full v1 requirement. FastAPI will be evaluated at scale (Phase 6) for high-throughput microservices if needed.

---

*Document version 1.0 — Nouri Platform*  
*For internal use, investor briefings, and developer onboarding.*
