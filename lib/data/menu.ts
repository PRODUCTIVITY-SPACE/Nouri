import type { MenuCategory, MenuItem } from '@/lib/types';

export const CATEGORIES: MenuCategory[] = [
  { id: 'breakfast', name: 'Breakfast', slug: 'breakfast', displayOrder: 1, isVisible: true },
  { id: 'lunch', name: 'Lunch', slug: 'lunch', displayOrder: 2, isVisible: true },
  { id: 'dinner', name: 'Dinner', slug: 'dinner', displayOrder: 3, isVisible: true },
  { id: 'desserts', name: 'Desserts', slug: 'desserts', displayOrder: 4, isVisible: true },
  { id: 'drinks', name: 'Drinks', slug: 'drinks', displayOrder: 5, isVisible: true },
  { id: 'specials', name: 'Specials ✦', slug: 'specials', displayOrder: 6, isVisible: true },
];

export const MENU_ITEMS: MenuItem[] = [
  // ── Breakfast ──────────────────────────────────────────
  {
    id: 'b1', categoryId: 'breakfast', name: 'Morning Bento',
    description: 'Grilled fish, tamagoyaki, and steamed rice.',
    price: 16.00, imageUrl: '/miso-soup.png', isAvailable: true, dietaryTags: [], displayOrder: 1,
  },
  {
    id: 'b2', categoryId: 'breakfast', name: 'Acai Power Bowl',
    description: 'Antioxidant-rich berry blend with granola.',
    price: 14.00, imageUrl: '/hero-bowl.png', isAvailable: true, dietaryTags: ['vegan', 'popular'], displayOrder: 2,
  },
  {
    id: 'b3', categoryId: 'breakfast', name: 'Egg Soufflé',
    description: 'Fluffy Japanese omelette, lightly seasoned.',
    price: 9.00, imageUrl: '/sushi-hand.png', isAvailable: true, dietaryTags: ['vegetarian'], displayOrder: 3,
  },
  {
    id: 'b4', categoryId: 'breakfast', name: 'Salmon Avocado Toast',
    description: 'Toasted sourdough, smoked salmon, fresh avocado.',
    price: 13.00, imageUrl: '/poke-bowl.png', isAvailable: true, dietaryTags: ['popular'], displayOrder: 4,
  },

  // ── Lunch ──────────────────────────────────────────────
  {
    id: 'l1', categoryId: 'lunch', name: 'Zen Poké',
    description: 'Fresh salmon, quinoa, edamame, citrus soy.',
    price: 19.00, imageUrl: '/poke-bowl.png', isAvailable: true, dietaryTags: ['popular', 'gluten-free'], displayOrder: 1,
  },
  {
    id: 'l2', categoryId: 'lunch', name: 'Dragon Roll',
    description: 'Eel, avocado, tempura shrimp, eel sauce.',
    price: 22.00, imageUrl: '/sushi-set.png', isAvailable: true, dietaryTags: [], displayOrder: 2,
  },
  {
    id: 'l3', categoryId: 'lunch', name: 'Tuna Salad',
    description: 'Sashimi-grade tuna, apple slices, sesame dressing.',
    price: 18.00, imageUrl: '/hero-bowl.png', isAvailable: true, dietaryTags: ['gluten-free'], displayOrder: 3,
  },
  {
    id: 'l4', categoryId: 'lunch', name: 'Tempura Set',
    description: 'Crispy king prawns and seasonal vegetables.',
    price: 20.00, imageUrl: '/sushi-hand.png', isAvailable: true, dietaryTags: [], displayOrder: 4,
  },
  {
    id: 'l5', categoryId: 'lunch', name: 'Steak & Greens Box',
    description: 'Grilled sirloin with charred broccoli and miso butter.',
    price: 20.00, imageUrl: '/hero-bowl.png', isAvailable: true, dietaryTags: ['gluten-free'], displayOrder: 5,
  },
  {
    id: 'l6', categoryId: 'lunch', name: 'Buddha Bowl',
    description: 'Chickpeas, roasted sweet potato, avocado, tahini.',
    price: 15.00, imageUrl: '/poke-bowl.png', isAvailable: true, dietaryTags: ['vegan', 'gluten-free'], displayOrder: 6,
  },

  // ── Dinner ─────────────────────────────────────────────
  {
    id: 'd1', categoryId: 'dinner', name: 'Sashimi Deluxe',
    description: "Chef's choice 12-piece premium sashimi platter.",
    price: 35.00, imageUrl: '/sushi-set.png', isAvailable: true, dietaryTags: ['popular', 'gluten-free'], displayOrder: 1,
  },
  {
    id: 'd2', categoryId: 'dinner', name: 'Spicy Ramen',
    description: 'Rich tonkotsu broth, soft-boiled egg, house chili oil.',
    price: 18.00, imageUrl: '/miso-soup.png', isAvailable: true, dietaryTags: ['spicy'], displayOrder: 2,
  },
  {
    id: 'd3', categoryId: 'dinner', name: 'Wagyu Roll',
    description: 'Seared A5 wagyu, truffle mayo, crispy shallots.',
    price: 28.00, imageUrl: '/sushi-hand.png', isAvailable: true, dietaryTags: [], displayOrder: 3,
  },
  {
    id: 'd4', categoryId: 'dinner', name: 'Party Feast Platter',
    description: '42 pieces — our finest rolls for the whole table.',
    price: 55.00, imageUrl: '/sushi-set.png', isAvailable: true, dietaryTags: ['popular'], displayOrder: 4,
  },
  {
    id: 'd5', categoryId: 'dinner', name: 'Yakitori Box',
    description: '20 grilled skewers, tare glaze, pickled ginger.',
    price: 32.00, imageUrl: '/sushi-hand.png', isAvailable: true, dietaryTags: [], displayOrder: 5,
  },

  // ── Desserts ───────────────────────────────────────────
  {
    id: 'ds1', categoryId: 'desserts', name: 'Mochi Trio',
    description: 'Green tea, mango, and strawberry mochi.',
    price: 8.00, imageUrl: '/poke-bowl.png', isAvailable: true, dietaryTags: ['vegetarian', 'popular'], displayOrder: 1,
  },
  {
    id: 'ds2', categoryId: 'desserts', name: 'Yuzu Tart',
    description: 'Silky citrus curd in a buttery shortcrust shell.',
    price: 10.00, imageUrl: '/hero-bowl.png', isAvailable: true, dietaryTags: ['vegetarian'], displayOrder: 2,
  },
  {
    id: 'ds3', categoryId: 'desserts', name: 'Matcha Crepe Cake',
    description: '20 delicate layers of matcha cream and crêpe.',
    price: 12.00, imageUrl: '/hero-bowl.png', isAvailable: true, dietaryTags: ['vegetarian'], displayOrder: 3,
  },
  {
    id: 'ds4', categoryId: 'desserts', name: 'Black Sesame Pudding',
    description: 'Silky set pudding with sweet soy drizzle.',
    price: 9.00, imageUrl: '/miso-soup.png', isAvailable: true, dietaryTags: ['vegan', 'gluten-free'], displayOrder: 4,
  },

  // ── Drinks ─────────────────────────────────────────────
  {
    id: 'dr1', categoryId: 'drinks', name: 'Matcha Latte',
    description: 'Ceremonial-grade matcha with oat milk.',
    price: 6.50, imageUrl: '/miso-soup.png', isAvailable: true, dietaryTags: ['vegan', 'popular'], displayOrder: 1,
  },
  {
    id: 'dr2', categoryId: 'drinks', name: 'Sakura Tea',
    description: 'Cherry blossom infused Japanese green tea.',
    price: 5.50, imageUrl: '/miso-soup.png', isAvailable: true, dietaryTags: ['vegan', 'gluten-free'], displayOrder: 2,
  },
  {
    id: 'dr3', categoryId: 'drinks', name: 'Fresh Yuzu Lemonade',
    description: 'Squeezed daily, served over crushed ice.',
    price: 7.00, imageUrl: '/poke-bowl.png', isAvailable: true, dietaryTags: ['vegan', 'gluten-free'], displayOrder: 3,
  },
  {
    id: 'dr4', categoryId: 'drinks', name: 'Coconut Water',
    description: 'Young coconut, chilled and served natural.',
    price: 5.00, imageUrl: '/hero-bowl.png', isAvailable: true, dietaryTags: ['vegan', 'gluten-free'], displayOrder: 4,
  },

  // ── Specials ───────────────────────────────────────────
  {
    id: 'sp1', categoryId: 'specials', name: 'Truffle Tuna',
    description: 'Bluefin tuna carpaccio with black truffle oil.',
    price: 28.00, imageUrl: '/hero-bowl.png', isAvailable: true, dietaryTags: ['popular', 'gluten-free'], displayOrder: 1,
  },
  {
    id: 'sp2', categoryId: 'specials', name: 'Uni Special',
    description: 'Fresh sea urchin flown in from Hokkaido.',
    price: 42.00, imageUrl: '/sushi-set.png', isAvailable: true, dietaryTags: [], displayOrder: 2,
  },
  {
    id: 'sp3', categoryId: 'specials', name: 'Salmon Teriyaki Box',
    description: 'Glazed salmon fillet, steamed brown rice, pickles.',
    price: 18.00, imageUrl: '/poke-bowl.png', isAvailable: true, dietaryTags: ['gluten-free'], displayOrder: 3,
  },
];

export function getItemsByCategory(categoryId: string): MenuItem[] {
  return MENU_ITEMS
    .filter((item) => item.categoryId === categoryId)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getAllCategories(): MenuCategory[] {
  return CATEGORIES
    .filter((c) => c.isVisible)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getItemById(id: string): MenuItem | undefined {
  return MENU_ITEMS.find((item) => item.id === id);
}
