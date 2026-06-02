// Menu API — wraps Django REST endpoints
// All functions return typed responses; swap mock data for real calls in Phase 2

import type { MenuCategory, MenuItem } from '@/lib/types';

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';

export async function fetchCategories(): Promise<MenuCategory[]> {
  // Phase 2: const res = await fetch(`${API}/menu/categories/`);
  // return res.json();
  throw new Error('Not implemented — connect Django API in Phase 2');
}

export async function fetchMenuItems(categoryId?: string): Promise<MenuItem[]> {
  // Phase 2: const url = categoryId ? `${API}/menu/items/?category=${categoryId}` : `${API}/menu/items/`;
  throw new Error('Not implemented — connect Django API in Phase 2');
}
