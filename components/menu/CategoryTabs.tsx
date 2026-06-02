'use client';

import { clsx } from 'clsx';
import type { MenuCategory } from '@/lib/types';

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeId: string;
  onChange: (id: string) => void;
}

export default function CategoryTabs({ categories, activeId, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-none pb-1">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={clsx(
            'flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 whitespace-nowrap',
            activeId === cat.id
              ? 'bg-nouri-black text-white shadow-lg scale-105'
              : 'bg-nouri-gray text-nouri-gray-mid hover:bg-gray-200 hover:text-nouri-black'
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
