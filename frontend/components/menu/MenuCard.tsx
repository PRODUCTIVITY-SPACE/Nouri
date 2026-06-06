'use client';

import Image from 'next/image';
import { useCartStore } from '@/lib/store/cart';
import { formatKES } from '@/lib/utils/format';
import type { MenuItem } from '@/lib/types';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          unoptimized
          className="object-cover transition-transform group-hover:scale-105"
        />
        {item.badge && (
          <span className="absolute top-3 left-3 bg-tertiary text-white px-2 py-1 rounded-lg text-[10px] font-bold uppercase">
            {item.badge}
          </span>
        )}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full text-primary hover:bg-white transition-colors">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-display text-headline-md text-on-surface leading-tight">{item.name}</h4>
          {item.dietaryTags.includes('vegetarian') && (
            <span className="material-symbols-outlined text-green-600" title="Vegetarian">eco</span>
          )}
        </div>
        <p className="text-on-surface-variant font-body-md text-sm mb-4 line-clamp-2">{item.description}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-tertiary text-lg">{formatKES(item.price)}</span>
          <button
            onClick={() => addItem({ menuItemId: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl })}
            className="bg-primary text-on-primary px-4 py-2 rounded-xl font-label-md active:scale-95 transition-transform flex items-center gap-2"
          >
            Add <span className="material-symbols-outlined text-sm">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
