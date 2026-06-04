// ─── Domain types shared across frontend ───────────────────────────────────

export type OrderType   = 'dine-in' | 'takeaway' | 'delivery';
export type OrderStatus = 'pending' | 'received' | 'preparing' | 'ready' | 'on-the-way' | 'served' | 'delivered' | 'cancelled';
export type DietaryTag  = 'vegetarian' | 'vegan' | 'gluten-free' | 'spicy' | 'popular';
export type UserRole    = 'admin' | 'chef' | 'waiter';

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  displayOrder: number;
  isVisible: boolean;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  dietaryTags: DietaryTag[];
  displayOrder: number;
}

export interface CartItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Order {
  id: string;
  tableNumber?: number;
  orderType: OrderType;
  deliveryAddress?: string;
  sessionToken: string;
  items: CartItem[];
  status: OrderStatus;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Table {
  id: string;
  tableNumber: number;
  qrToken: string;
  qrCodeUrl?: string;
  isActive: boolean;
}

export interface AdminUser {
  id: string;
  email: string;
  role: UserRole;
  restaurantId: string;
}
