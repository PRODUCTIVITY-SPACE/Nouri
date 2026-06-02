'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import CategoryTabs from '@/components/menu/CategoryTabs';
import MenuCard from '@/components/menu/MenuCard';
import { CATEGORIES, getItemsByCategory } from '@/lib/data/menu';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const items = getItemsByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Navbar theme="light" />
      </div>

      <div className="page-header">
        <h1
          className="font-display font-bold text-nouri-black"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
        >
          Our Menu
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto mt-4 leading-relaxed text-base">
          Curated selection of fresh, sustainably sourced ingredients.
        </p>
      </div>

      <div className="px-6 md:px-20 pb-24">
        <CategoryTabs
          categories={CATEGORIES}
          activeId={activeCategory}
          onChange={setActiveCategory}
        />

        {items.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-4xl mb-4">🍽️</p>
            <p className="font-medium">No items in this category yet.</p>
          </div>
        ) : (
          <div className="mt-8 flex gap-8 overflow-x-auto scrollbar-none pb-10 snap-x snap-mandatory">
            {items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      <footer className="text-center py-8 border-t border-gray-100">
        <p className="text-gray-400 text-xs">© 2026 Nouri Technologies</p>
      </footer>
    </div>
  );
}
