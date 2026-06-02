# Customer API Reference

Base URL: `http://localhost:8000/api`

## Menu

| Method | Endpoint | Description |
|---|---|---|
| GET | `/menu/categories/` | List all visible categories |
| GET | `/menu/items/` | List all available items |
| GET | `/menu/items/?category={id}` | Items filtered by category |
| GET | `/tables/{qr_token}/` | Resolve QR token → table info |

## Orders

| Method | Endpoint | Description |
|---|---|---|
| POST | `/orders/` | Place a new order |
| GET | `/orders/{id}/` | Get order details + status |
| WS | `ws://…/ws/orders/{id}/` | Real-time status stream |
