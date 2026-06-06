'use client';

import { useState } from 'react';
import { RecommendationBento } from '@/components/menu/RecommendationBento';
import { CategoryPill } from '@/components/menu/CategoryPill';
import { MenuCard } from '@/components/menu/MenuCard';
import { useCartStore, getCartTotal } from '@/lib/store/cart';
import { formatKES } from '@/lib/utils/format';
import type { MenuItem } from '@/lib/types';

const CATEGORIES = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Specials'];

const MOCK_ITEMS: MenuItem[] = [
  {
    id: '1', categoryId: 'lunch', name: 'Margherita Classica', description: 'Stone-baked with San Marzano tomatoes, buffalo mozzarella, and cold-pressed olive oil.',
    price: 1450, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwj76K5iIMw11_KBc1DfPr317qapuS9uhRQuPJlnPKmjFJYA-GqiV5hk175WYBTOLfQTX1Sdi48qNbJAHTU0CoqAgba0LRQYbWyytVjPV7g70HXu-OGetFqQhWOwEDwyImhktL79mHxbzzJ-JCToGJGpkVtUdNTaVcZdrGu9ofZoIBxFbG9a75zqWSGgSe_NYogvTickHZQyX-rrA_eNAOKeuQsdVIBECg7CIieRUPctK8nkAfos7p2YWOgoI2aWcyjJaYR8YxF10',
    isAvailable: true, dietaryTags: ['vegetarian'], displayOrder: 1,
  },
  {
    id: '2', categoryId: 'lunch', name: 'Nouri Vitality Bowl', description: 'Quinoa, charred kale, roasted sweet potato, and spiced chickpeas with lemon tahini.',
    price: 1100, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdqnkaiqnl0uB-4bYf3DfAcnWdeKM2XVM_xiOnERo4-YF9jsWqP4lD8MGiwB86kzFxkEuJzCTg0MwsjCYbRStSYTdpqqt73w6UUVplja298UacrlFZq4s2dqtEObir5OECIOQX3CgADJVG430Ibp88fSBkgNd7NWh6eU2iEGiwbtF1j9Uh2-RyKrnCrJa93mmRuj1cLZVTCeN8V8fG5sfcwCC7rwNiDywdOubMF0z9BkOn1AP6nvxRXKFdtC4-S7a9euEpgOQlCPE',
    isAvailable: true, dietaryTags: ['vegetarian', 'vegan'], displayOrder: 2,
  },
  {
    id: '3', categoryId: 'lunch', name: 'The Signature Burger', description: '200g Wagyu beef, sharp cheddar, truffle mayo, and house-made brioche bun.',
    price: 1850, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3-Jp9VZQaXByHqb5yAM0jDDWqZqZQGCrB-CeFCZhvbQFzXjRa7I5aYWC6UTDL5ph4W665PerZtRk6cppEOHzftZpcTBOhNqbRfcc3Vfm1JB-jBQB7BCysWbOlLjQw2Wu5n64VFXrbBEaVQGVp018PZirQFFl-MPqG2bcLxbF-EuvVurzfxFWFzzknSyNeMBAyov1tlKDCWrOpjDcLZMaJePcmSJZJJMR6VhcdeYjuqd4XZYCtd4isJ2lPWrTGrrFOrDq_H5KcUYE',
    isAvailable: true, dietaryTags: [], displayOrder: 3,
  },
  {
    id: '4', categoryId: 'specials', name: 'Dark Choco Glaze', description: 'Hand-crafted sourdough donut dipped in 70% Kenyan dark chocolate.',
    price: 400, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwvkT-qc9GFOtKB7AIWkJ7hodtIy-EyTUGnLctKNq0GJxr8BNzv5e6PSXR3mM__XFe687XyXEnxBg91pqgpBW2VBBKbZHGWhWTiTPtuNqFyYXuco8jTPWGgt786SdJVAcVPUJ0YOnH--t2JkQsgCS7clnif_aHPmQbsCvCeNkoURei4H7PowzJJG9EqyFLOMCwLbae0ycVWGW78pPo1HugqSf-LzOmnYocVfhQqdZBuM0ePH4uA1ijmjjbMyQH3yYT6LxE_zuz27Q',
    isAvailable: true, dietaryTags: [], badge: 'popular', displayOrder: 4,
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const items = useCartStore((s) => s.items);
  const cartTotal = getCartTotal(items);
  const cartCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <main className="px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto">
      {/* Mobile search + lang row */}
      <div className="flex md:hidden justify-between items-center mb-6 gap-4">
        <button className="flex-1 bg-surface-container-high px-4 py-2 rounded-xl text-left flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">language</span>
          <span className="font-label-md text-label-md">EN / SW</span>
        </button>
        <button className="bg-primary-container p-3 rounded-xl text-on-primary-container shadow-sm">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      <RecommendationBento />

      {/* Sticky category + filters */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md py-4 -mx-4 px-4 mb-stack-lg">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar">
          <span className="text-on-surface-variant font-label-sm text-label-sm mr-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">filter_list</span> Filters:
          </span>
          {[{ icon: 'eco', label: 'Vegetarian' }, { icon: 'set_meal', label: 'Seafood' }, { icon: 'nutrition', label: 'Gluten Free' }].map(({ icon, label }) => (
            <button key={label} className="flex-shrink-0 px-4 py-1 border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">{icon}</span> {label}
            </button>
          ))}
        </div>
      </section>

      {/* Menu grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter pb-32">
        {MOCK_ITEMS.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </section>

      {/* Sticky view order CTA — mobile */}
      {cartCount > 0 && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 md:hidden z-40">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full shadow-2xl font-bold flex items-center gap-3 active:scale-95 transition-transform">
            <span>View Order</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-lg text-sm">{formatKES(cartTotal)}</span>
          </button>
        </div>
      )}
    </main>
  );
}
