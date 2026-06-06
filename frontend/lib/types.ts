// ─── Nouri Domain Types ────────────────────────────────────────────────────

export type OrderType = 'dine-in' | 'takeaway' | 'delivery';
export type OrderStatus = 'received' | 'preparing' | 'ready' | 'served';
export type PaymentMethod = 'mpesa' | 'airtel' | 'cash' | 'stripe' | 'pesapal';
export type DietaryTag = 'vegetarian' | 'vegan' | 'gluten-free' | 'spicy' | 'popular';
export type UserRole = 'admin' | 'chef' | 'waiter';

export interface MenuCategory {
  id: string;
  name: string;
  nameSwahili?: string;
  slug: string;
  displayOrder: number;
  isVisible: boolean;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  nameSwahili?: string;
  description: string;
  price: number; // KES
  imageUrl: string;
  isAvailable: boolean;
  dietaryTags: DietaryTag[];
  badge?: 'popular' | 'new' | 'limited';
  displayOrder: number;
}

export interface CartItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  notes?: string;
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
  paymentMethod?: PaymentMethod;
  estimatedMinutes?: number;
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

export interface DashboardStats {
  totalOrders: number;
  revenue: number;
  activeTables: number;
  totalTables: number;
  liveOrderCount: number;
}
