# Admin API Reference

All endpoints require `Authorization: Bearer {access_token}` header.

## Auth

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/login/` | Get JWT tokens |
| POST | `/auth/refresh/` | Refresh access token |

## Menu Management

| Method | Endpoint | Description |
|---|---|---|
| GET | `/admin/menu/items/` | List all items |
| POST | `/admin/menu/items/` | Create item |
| PATCH | `/admin/menu/items/{id}/` | Update item |
| DELETE | `/admin/menu/items/{id}/` | Delete item |

## Orders

| Method | Endpoint | Description |
|---|---|---|
| GET | `/admin/orders/` | List all orders (filterable) |
| PATCH | `/admin/orders/{id}/status/` | Update order status |
| GET | `/admin/orders/{id}/slip/` | Printable kitchen slip (PDF) |

## Tables

| Method | Endpoint | Description |
|---|---|---|
| GET | `/admin/tables/` | List tables |
| POST | `/admin/tables/` | Add table + generate QR |
| DELETE | `/admin/tables/{id}/` | Remove table |

## Reports

| Method | Endpoint | Description |
|---|---|---|
| GET | `/admin/reports/today/` | Today's summary stats |
| GET | `/admin/reports/?from=&to=` | Revenue + orders by date range |
