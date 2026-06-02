# Database Schema

## Tables

### accounts_user
Custom Django user extending AbstractUser.

| Column | Type | Notes |
|---|---|---|
| id | bigint PK | |
| email | varchar | unique |
| role | varchar | admin / chef / waiter |
| restaurant_id | FK → menu_restaurant | nullable |
| phone | varchar | |

### menu_restaurant
| id | name | slug | logo | address | phone | created_at |

### menu_category
| id | restaurant_id FK | name | slug | display_order | is_visible |

### menu_menuitem
| id | category_id FK | name | description | price | image | is_available | dietary_tags (JSON) | display_order |

### tables_table
| id | restaurant_id FK | table_number | qr_token (UUID) | qr_code_url | is_active |

### orders_order
| id | restaurant_id FK | table_id FK | order_type | delivery_address | session_token | status | total_amount | payment_status | payment_ref | notes | created_at | updated_at |

### orders_orderitem
| id | order_id FK | menu_item_id FK | item_name (snapshot) | item_price (snapshot) | quantity | notes |

### orders_orderstatushistory
| id | order_id FK | status | changed_by FK | note | changed_at |

### notifications_notification
| id | order_id FK | recipient_type | message | channel | is_read | sent_at |
