*Nouri*	Project Definition Document  |  v1.1

**NOURI**

*Digital Ordering Platform*

Project Definition Document

Version 1.1  ·  June 2026  ·  East Africa Market Adaptation

*Prepared by: Nouri Team*

Note: Names in red brackets (e.g. **[FINLAY]**) indicate the team member who contributed that suggestion. These are for internal review and can be removed before final publication.

**PART ONE: CORE PLATFORM DEFINITION**

**1. Elevator Pitch**

| *"**Nouri is a QR-code-powered digital ordering platform built for hotels and restaurants.* *A guest scans a table QR code, browses a live menu, places an order, and tracks it in* *real time — all from their phone, no app download required. The restaurant owner manages* *everything — menu, orders, staff, and history — from a single admin dashboard.**"* |
| --- |

We are replacing the outdated combination of paper menus, verbal orders, and disconnected POS systems with a seamless, real-time digital experience that reduces wait times, increases order accuracy, and gives restaurant owners full visibility and control over their operation.

**2. Problem Statement**

**For Guests**

- Physical menus are slow to browse, unhygienic, and outdated the moment a price changes.

- Flagging a waiter to place or modify an order is frustrating, especially during peak hours.

- There is no transparency into where your order is in the preparation process.

- Delivery and takeaway customers have no real-time status updates.

**For Restaurant ****&**** Hotel Owners**

- Menu updates require reprinting physical menus — expensive and slow.

- Staff spend significant time taking and relaying orders instead of delivering experiences.

- No single view of all active orders, their status, and their history.

- No data on popular items, peak hours, or revenue trends.

**The Market Gap**

Most existing solutions are either too expensive for small-to-medium restaurants, require hardware investment (tablets at every table), or offer only one piece of the puzzle (just QR menus, or just POS). Nouri solves the full ordering lifecycle from guest discovery to kitchen preparation to delivery — entirely through a browser, with zero hardware requirements.

**3. Solution Overview**

The Nouri platform has two sides:

**Side A — Customer-Facing Web App**

A mobile-first web application that guests access by scanning a QR code on their table. No app download. No account required. The guest sees a live, categorised menu, selects items, chooses their order type (Dine In, Takeaway, or Delivery), pays, and tracks their order in real time.

**Side B — Chef / Admin CMS Panel**

A protected web dashboard for restaurant owners and staff. The owner manages the full menu (add/edit/remove items, upload photos, set availability). The kitchen receives and manages live orders, marks progress, and notifies guests automatically. The owner can review order history, filter by date range, and print reports.

**4. User Roles**

**4.1  Guest (Customer)**

- Arrives at table and scans QR code.

- Browses the live menu without creating an account.

- Selects order type: Dine In, Takeaway, or Delivery.

- Adds items to cart and checks out.

- Receives real-time order status notifications.

- Can view previous orders from the same session.

- Enable customer to edit or cancel an order even after checkout.**  [FINLAY]**

- Integrate an AI / Smart Agent that acts as a virtual waiter, asking contextual questions such as 'Sugar or no sugar?', 'Which drink would you like with that?'**  [FINLAY]**

**4.2  Waiter / Floor Staff**

- Receives notification when a Dine In order is ready.

- Marks orders as 'Served' on a simple mobile-friendly view.

- Can view active table statuses.

- System records the number of customers each waiter has served to support commission-based compensation.**  [FINLAY]**

**4.3  Chef / Kitchen Staff**

- Receives all incoming orders in real time.

- Views order details and table/order type.

- Marks orders as 'In Preparation' and 'Ready.'

**4.4  Restaurant Admin / Owner**

- Full access to the CMS Admin Panel.

- Manages menu: add, edit, remove items; upload images; toggle availability.

- Views all orders — live and historical.

- Filters orders by date, type, status.

- Prints order reports.

- Manages QR codes for tables.

- Views revenue and popularity analytics (Phase 2).

**5. Customer App — Feature Scope**

**5.1  Home Screen**

- Landing page with restaurant branding

- Order type selector: Dine In / Takeaway / Delivery

- QR code scan initiates session and identifies table automatically

- Table number confirmation screen (Dine In)

- Delivery address input (Delivery mode)

**5.2  Menu Screen**

- Live menu fetched from database (not hardcoded)

- Tabs/categories: Breakfast · Lunch · Dinner · Desserts · Drinks · Specials

- Item cards with image, name, description, price, and dietary tags

- 'Add to Order' with quantity selector

- Item availability toggle (unavailable items greyed out)

- Search bar for menu items

- Category filter by dietary preference (Vegetarian, Vegan, Gluten-Free)

- Smart Recommendations: 'Customers who ordered this also ordered...' — suggested drinks with meals and upsell pairings.**  [LYDIAH]**

**5.3  Cart ****&**** Checkout**

- Persistent cart (survives page navigation)

- Edit quantities and remove items

- Order summary with line items and total

- Checkout confirmation screen

- Payment integration (Stripe / PayFast / M-Pesa)

- Order placed → confirmation screen with order number

- Allow customers to split the bill — divide the total among multiple guests at the same table.**  [LYDIAH]**

- Digital receipt after payment — available as a PDF download or sent via email.**  [LYDIAH]**

**5.4  Order Tracking**

- Real-time status: Order Received → Being Prepared → Ready / On the Way → Served / Delivered

- Dine In: 'Your food is on its way to Table X'

- Takeaway: 'Your order is being packed — please proceed to counter'

- Delivery: Live map showing driver location

- Push / in-browser notifications for status changes

- View past orders from current session; option to reorder

**6. Chef / Admin Panel — Feature Scope**

**6.1  Dashboard (Home)**

- Welcome screen with today's snapshot: total orders, revenue, active tables

- Live active orders count badge

**6.2  Menu CMS**

- View all menu items in a table/grid

- Add new item: name, description, price, category, image, dietary tags, availability toggle

- Edit existing items inline

- Delete/archive item

- Reorder items within a category via drag-and-drop

- Manage categories: add, rename, reorder

**6.3  Orders Dashboard**

- Live view of all incoming orders (real-time, no page refresh)

- Filter by: Order Type · Status · Table Number · Date

- Expand order to see full item list, notes, and timestamps

- Change order status: Received → In Preparation → Ready → Served/Delivered

- Status change triggers automatic customer notification

- 'Send to Kitchen' button generates a printable kitchen slip

**6.4  History ****&**** Reports**

- View all completed orders

- Date range filter

- Export to PDF / Print

- Basic stats: most ordered items, revenue per day/week/month

**6.5  Table ****&**** QR Code Management**

- Add/remove tables

- Generate and download QR code per table

- QR code links to customer app with table pre-identified

**7. User Flows**

**7.1  Customer Flow — After Scanning QR Code**

| **Dine In** | **Take Away** | **Delivery** |
| --- | --- | --- |
| Select Table | Select Table | Enter Delivery Address (live location) |
| Select food from Menu | Select food from Menu | Select food from Menu |
| Confirm in Cart & Make Payment | Confirm in Cart & Make Payment | Confirm in Cart & Make Payment |
| Notifications: Received / Being Prepared / Served | Notifications: Received / Being Prepared / Ready for Collection | Notifications: Received / Being Prepared / On the Way / Delivered |

**7.2  Admin / Chef Flow**

- Admin logs in at /admin

- Dashboard — views today's summary

- Orders tab — incoming orders appear in real time

- Admin clicks order → views items → marks 'In Preparation'

- Customer receives 'Being prepared' notification

- Chef marks 'Ready' → waiter notified → delivers to table → marks 'Served'

- Order moves to History

**8. Technical Architecture**

**8.1  Technology Stack**

| **Layer** | **Technology** |
| --- | --- |
| Customer App (Frontend) | HTML/CSS/JS (Phase 1) → React (Phase 2) |
| Admin Panel (Frontend) | React + Tailwind CSS |
| Backend API | Python · Django · Django REST Framework |
| Real-Time Layer | Django Channels + WebSockets |
| Database | PostgreSQL |
| File Storage | Cloudinary (CDN optimised for Africa) |
| Authentication | Django Auth + JWT |
| Payments | M-Pesa Daraja API · Airtel Money · Pesapal · Stripe (international fallback) |
| Maps (Delivery) | Google Maps API |
| Notifications | Web Push API · Django Channels · WhatsApp Business API · SMS via Africa's Talking |
| QR Codes | Python qrcode library |
| Deployment | Docker + Nginx + Gunicorn |
| Hosting | DigitalOcean (Bangalore) or AWS (Cape Town) for East Africa latency |

**8.2  Why Django**

- Django Admin provides a fully featured CMS panel out of the box for Phase 1.

- Django REST Framework handles the customer-facing API cleanly.

- Django Channels adds WebSocket support for real-time order updates.

- Django ORM with PostgreSQL migrations is the fastest path to a working database layer.

- FastAPI is noted as a future consideration at scale (Phase 6).

**9. Database Schema**

| **Table** | **Key Fields** |
| --- | --- |
| restaurants | id, name, slug, logo_url, address, phone, currency, tax_rate, created_at |
| tables | id, restaurant_id, table_number, qr_code_url, is_active |
| categories | id, restaurant_id, name, display_order, is_visible |
| menu_items | id, category_id, name, description, price, image_url, is_available, dietary_tags, display_order |
| orders | id, restaurant_id, table_id, order_type, delivery_address, status, total_amount, payment_status, payment_method, session_token |
| order_items | id, order_id, menu_item_id, item_name (snapshot), item_price (snapshot), quantity, notes |
| order_status_history | id, order_id, status, changed_by, changed_at, note |
| users | id, restaurant_id, email, password_hash, role (ADMIN/CHEF/WAITER), is_active |
| notifications | id, order_id, recipient_type, message, channel, sent_at, is_read |

**10. Development Roadmap**

| **Phase** | **Goal ****&**** Key Deliverables** |
| --- | --- |
| Phase 1 (2–3 wks) Frontend Hardening | Cart persistence · Order type selector · Static tracking screen · Unify menu tabs Deliverable: Fully interactive demo for investor presentations |
| Phase 2 (3–4 wks) Backend Foundation | Django + PostgreSQL · Menu API · Order submission · Django Admin as Chef Panel · Image uploads Deliverable: Live ordering system with DB-managed menu |
| Phase 3 (2–3 wks) QR + Real-Time Orders | QR code generation · Django Channels + Redis · Real-time order status · Kitchen dashboard Deliverable: Guest scans QR, orders, and watches status update live |
| Phase 4 (3–4 wks) Payment & Admin Panel | M-Pesa STK Push · Stripe · React admin panel · Kanban order board · PDF export · QR manager Deliverable: End-to-end transactions. Production-ready admin panel |
| Phase 5 (3–4 wks) Delivery & Polish | Delivery live map · Web Push + SMS + WhatsApp notifications · Waiter mobile view · UI polish Deliverable: Full platform ready for public launch |
| Phase 6 (Future) Multi-Tenant SaaS | Restaurant onboarding · Per-restaurant routing · Subscription billing · Analytics · Native mobile app |

**11. Current State vs. Target State**

| **Feature** | **Current State** | **Target State** | **Phase** |
| --- | --- | --- | --- |
| Landing / Home page | ✅ Static HTML | + Order type selector | 1 |
| Menu (categories + items) | ✅ Hardcoded HTML | Live from database via API | 2 |
| Breakfast, Lunch, Dinner, Desserts | ✅ Exists | Retained + Drinks added | 1 |
| Cart (add items) | ✅ In-memory only | Persistent, quantity-editable | 1 |
| Cart persistence across pages | ❌ Resets on navigate | localStorage + session API | 1 |
| Checkout / Payment | ❌ Not functional | M-Pesa + Stripe integration | 4 |
| Order confirmation screen | ❌ Missing | Confirmation + order number | 3 |
| Order tracking screen | ❌ Missing | Real-time status steps | 3 |
| QR code table scanning | ❌ Missing | QR per table, resolves table ID | 3 |
| Split bill | ❌ Missing | Multi-guest bill splitting | 4 |
| Digital receipt (PDF/email) | ❌ Missing | PDF download + email delivery | 4 |
| Smart recommendations | ❌ Missing | 'Also ordered' upsell engine | 4 |
| Edit/cancel order post-checkout | ❌ Missing | Time-limited order editing | 3 |
| AI smart waiter agent | ❌ Missing | Contextual upsell prompts | 5 |
| Waiter commission tracking | ❌ Missing | Per-waiter order/serve count | 4 |
| Admin / Chef panel | ❌ Missing | Full CMS dashboard | 2–4 |
| M-Pesa STK Push payment | ❌ Missing | Daraja API integration | 4 |
| Cash / Pay at counter option | ❌ Missing | Checkout payment option | 4 |
| SMS notification fallback | ❌ Missing | Africa's Talking / Twilio SMS | 3 |
| Offline-first / service worker | ❌ Missing | Cached menu, queued orders | 3 |
| Bilingual EN/SW support | ❌ Missing | Language toggle on all screens | 4 |
| Local currency + tax config | ❌ Missing | KES/TZS/UGX + VAT rules | 2 |
| Thermal printer integration | ❌ Missing | Kitchen slip + receipt printing | 4 |
| Backend / Database | ❌ None | Django + PostgreSQL | 2 |
| Authentication (admin) | ❌ None | JWT-based admin login | 2 |
| WebSocket real-time layer | ❌ None | Django Channels + Redis | 3 |
| Image storage | ❌ None | Cloudinary (Africa CDN) | 2 |

**PART TWO: EAST AFRICA MARKET ADAPTATION**

*Version 1.1  ·  June 2026**  — Contributed by: ***[HARRISON]**

**EA-1. Executive Summary**

This section adapts the Nouri platform for the East African hospitality market. The original product definition remains intact: a standalone, single-restaurant, QR-code-powered digital ordering platform with no third-party app integrations. This specification adds market-specific features, payment methods, and technical adjustments required for successful deployment in Kenya, Tanzania, Uganda, and neighbouring markets.

The East African market is defined by high mobile money penetration, low card usage, unreliable internet connectivity, and strong WhatsApp and SMS usage. The MVP must reflect these realities. All features listed here are scoped for the standalone single-tenant build. Multi-tenant SaaS remains a future phase.

**EA-2. East African Market Context**

**Mobile Money Dominance**

M-Pesa, operated by Safaricom and Vodacom, is the dominant payment rail across Kenya, Tanzania, and Uganda. Airtel Money holds significant secondary market share. Card penetration remains low, particularly outside business districts and tourist hubs. Any digital ordering platform that does not support mobile money will fail to gain traction in this market.

**Connectivity Challenges**

While 4G coverage is expanding in major cities, restaurants in suburban, rural, and resort locations frequently experience intermittent connectivity. The customer app must function reliably under low bandwidth and brief offline conditions.

**Messaging Preferences**

WhatsApp is the most widely used messaging application in East Africa. SMS remains universally accessible, including on feature phones. Email is rarely used for transactional communication by local consumers.

**Language**

English and Swahili are the primary business languages. Bilingual support is expected for customer-facing interfaces.

**Currency**

Kenyan Shilling (KES), Tanzanian Shilling (TZS), and Ugandan Shilling (UGX) must be supported. No hardcoded USD display.

**EA-3. MVP Feature Specification**

**EA-3.1  Mobile Money Payment Integration**

This is a critical MVP requirement. Stripe, while retained as a fallback for international guests, cannot be the primary payment method.

**M-Pesa STK Push**

At checkout, the guest enters their mobile phone number. The system triggers an STK Push request to the guest's phone. The guest receives a pop-up prompt on their handset, enters their M-Pesa PIN, and the payment is confirmed instantly. The order status updates to 'Paid' automatically upon confirmation.

**Airtel Money**

A parallel integration for Airtel Money using the same phone number input and PIN prompt flow.

**Pesapal Gateway**

Pesapal should be integrated as a unified payment gateway handling both mobile money providers and card payments through a single interface, reducing integration overhead and providing a backup if direct API integrations fail.

**Cash Payment Option**

The checkout flow must include a 'Pay at Counter' or 'Pay Cash on Delivery' option. The waiter or delivery staff confirms cash receipt in the admin panel, which then advances the order to 'In Preparation.'

**EA-3.2  Offline-First ****&**** Low Bandwidth Customer App**

- Service worker caches the menu locally — if connectivity is lost while browsing, the menu remains visible and interactive.

- Orders placed while offline are queued locally and transmitted automatically when the connection is restored.

- All menu images served in WebP format with lazy loading, targeting full menu load under 3 seconds on 3G.

- Phase 1 retains the HTML/CSS/JS stack rather than React to ensure the smallest possible bundle size and minimal data consumption.

- SMS fallback for notifications when WebSocket connectivity is lost or the guest has no active data connection.

**EA-3.3  USSD Fallback for Feature Phones**

A significant portion of the East African population still uses feature phones. A USSD menu provides access to the ordering system without a smartphone or data connection. The guest dials a short code, navigates a text-based menu, selects items, specifies quantities, and confirms the order. Order confirmation and status updates are delivered via SMS. This feature is a major competitive differentiator for roadside eateries, budget hotel restaurants, and rural locations.

**EA-3.4  Bilingual Support (English ****&**** Swahili)**

- The app defaults to the browser's preferred language.

- A visible language toggle must be present on every screen.

- All guest-facing copy, menu descriptions, buttons, notifications, and SMS messages must be translated.

- The admin panel may remain in English only.

**EA-3.5  Local Currency ****&**** Tax Configuration**

- Admin can set local currency — KES, TZS, or UGX — displayed throughout the app with correct symbol.

- Configurable tax rates: Kenya 16% VAT, Tanzania 18% VAT + tourism levy where applicable.

- Customer app displays tax-inclusive pricing or itemised tax per local convention.

**EA-3.6  Receipt Generation**

- SMS receipt on payment confirmation: order number, itemised list, total, payment method, M-Pesa confirmation code.

- Thermal printer integration for kitchen slips and customer receipts (dominant receipt printer type in East Africa).

- Print output includes: order number, table/delivery address, item list with notes, timestamp, payment status.

**EA-4. Payment Flow Specification**

**EA-4.1  M-Pesa STK Push Flow**

| **Step** | **Action** |
| --- | --- |
| 1 | Guest adds items to cart and proceeds to checkout. |
| 2 | Guest selects 'Pay with M-Pesa.' |
| 3 | Guest enters their mobile phone number. |
| 4 | System sends STK Push request to Safaricom / Vodacom M-Pesa API. |
| 5 | Guest receives pop-up on handset requesting PIN. |
| 6 | Guest enters PIN. |
| 7 | M-Pesa confirms transaction. |
| 8 | System receives callback confirmation. |
| 9 | Order status updates to 'Paid.' |
| 10 | Guest receives SMS receipt with M-Pesa confirmation code. |
| 11 | Order advances to kitchen queue. |

**EA-4.2  Cash Payment Flow**

| **Step** | **Action** |
| --- | --- |
| 1 | Guest selects 'Pay Cash at Counter', 'Cash on Delivery', or 'Add to Room Bill.' |
| 2 | Order is submitted with status 'Pending Payment.' |
| 3 | For Dine In: waiter confirms cash collection or room posting in the admin panel. |
| 4 | For Delivery: rider confirms cash collection upon delivery. |
| 5 | Order status updates to 'Paid' and advances to kitchen queue or is marked complete. |

**EA-5. USSD Menu Flow Specification**

| **Step** | **Action** |
| --- | --- |
| 1 | Guest dials short code (e.g. *384*[restaurant code]#). |
| 2 | System presents welcome message and main menu options. |
| 3 | Guest selects: 1 = View Menu, 2 = Active Orders, 3 = Call Restaurant. |
| 4 | Guest selects a category: 1 Breakfast, 2 Lunch, 3 Dinner, 4 Drinks. |
| 5 | System lists items with prices (e.g. 1 Ugali & Sukuma, 2 Nyama Choma, 3 Pilau). |
| 6 | Guest selects item and enters quantity. |
| 7 | System prompts: 1 Add More, 2 Checkout, 3 Cancel. |
| 8 | Guest selects order type: 1 Dine In, 2 Takeaway, 3 Delivery. |
| 9 | Guest provides table number or delivery address. |
| 10 | System prompts payment: 1 M-Pesa, 2 Cash. |
| 11 | Guest selects M-Pesa, enters phone number. System triggers STK Push. |
| 12 | Guest confirms payment. System sends SMS confirmation with order number and ETA. |

**EA-6. Build-Up Features (Post-MVP)**

The following features are validated as valuable for the East African market but are scoped for implementation after the core ordering loop is stable and proven.

**EA-6.1  WhatsApp Business API Integration**

Order status notifications, confirmations, and marketing messages via WhatsApp — including order received, preparation alerts, readiness notifications, and delivery dispatch updates.

**EA-6.2  Lipa na M-Pesa Static QR**

A reverse payment flow where the guest scans a static M-Pesa QR code, manually enters the amount, and pays — a backup if STK Push is temporarily unavailable.

**EA-6.3  Delivery Rider Progressive Web App**

A lightweight PWA for delivery drivers: receive order details, mark order as picked up and delivered. GPS tracking for live customer map deferred to a later phase.

**EA-6.4  Live Fire Grill Timer**

Kitchen timer integration that auto-updates the guest with estimated readiness for nyama choma and other slow-cook items — e.g. 'Your nyama choma will be ready in 12 minutes.'

**EA-6.5  Multi-Outlet Support (Same Owner)**

A single owner operating multiple locations (e.g. Nairobi CBD and Westlands) can use one login and switch between location dashboards, sharing menu structure where desired. Not multi-tenant SaaS.

**EA-6.6  Staff Commission ****&**** Tip Tracking**

Track which waiter is assigned to which table for tip distribution and commission calculation. Supports the cash-heavy and tip-dependent nature of East African hospitality employment.

**EA-6.7  Wastage ****&**** Spoilage Logging**

A simple daily log allowing kitchen staff to record spoiled or wasted inventory (e.g. '3 kg tomatoes spoiled today'). Supports basic cost control without full inventory management.

**EA-7. Implementation Priorities**

| **Priority** | **Feature** |
| --- | --- |
| 1 — Critical | M-Pesa STK Push integration. Without mobile money, the platform will not function in the target market. |
| 2 — Critical | Offline-first customer app with SMS notification fallback. Connectivity is unreliable; the product must degrade gracefully. |
| 3 — Critical | Cash payment option. Do not force digital payments. Allow the restaurant to decide accepted methods. |
| 4 — High | Swahili and English bilingual support. |
| 5 — High | Local currency and tax configuration (KES/TZS/UGX + VAT). |
| 6 — High | USSD fallback for feature phone access. |
| 7 — Medium | WhatsApp Business API integration for notifications. |
| 8 — Medium | Delivery rider Progressive Web App. |
| 9 — Medium | Multi-outlet support for same owner. |
| 10 — Future | Advanced analytics and menu engineering dashboard. |

**12. Out of Scope — All Versions**

The following features are acknowledged but intentionally excluded to maintain focus and deliver a working product faster:

- Native mobile app (iOS / Android) — the PWA and web app covers the need.

- Multi-tenant SaaS architecture — v1 is built for a single restaurant. Multi-tenant is Phase 6.

- Full inventory and stock management — East African restaurants typically purchase fresh daily.

- Table reservation and booking — a separate product problem.

- Staff scheduling / HR features — not core to the food ordering workflow.

- AI chatbot ordering via natural language — Swahili NLP is not sufficiently mature for reliable transactional use.

- Loyalty and rewards programmes — not validated as a launch priority.

- Hotel Property Management System (PMS) integration — standalone system with no third-party integrations.

- Loyalty / rewards programme — noted as a future feature.

- FastAPI — Django covers the full v1 requirement. FastAPI evaluated at scale (Phase 6).

*Nouri Platform  ·  Document v1.1  ·  June 2026*

*For internal use, investor briefings, developer onboarding, and East Africa market planning.*

