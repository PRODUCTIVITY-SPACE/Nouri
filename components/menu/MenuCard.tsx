'use client';

import Image from 'next/image';
import { clsx } from 'clsx';
import { useCartStore } from '@/lib/store/cart';
import type { MenuItem, DietaryTag } from '@/lib/types';

const DIETARY_STYLES: Record<DietaryTag, string> = {
  vegetarian: 'bg-green-100 text-green-700',
  vegan: 'bg-emerald-100 text-emerald-700',
  'gluten-free': 'bg-yellow-100 text-yellow-700',
  spicy: 'bg-red-100 text-red-600',
  popular: 'bg-orange-100 text-orange-600',
};

export default function MenuCard({ item }: { item: MenuItem }) {
  const { addItem, openCart } = useCartStore();

  const handleAdd = () => {
    addItem({
      menuItemId: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
    });
    openCart();
  };

  return (
    <div
      className={clsx(
        'bg-nouri-gray rounded-5xl p-10 text-center flex flex-col items-center',
        'transition-all duration-300 hover:-translate-y-4 hover:bg-white hover:shadow-2xl',
        'snap-center min-w-[320px] md:min-w-[360px]',
        !item.isAvailable && 'opacity-50 pointer-events-none'
      )}
    >
      {/* Food image */}
      <div className="w-48 h-48 relative mb-6">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-contain drop-shadow-xl"
          sizes="192px"
        />
      </div>

      {/* Dietary tags */}
      {item.dietaryTags.length > 0 && (
        <div className="flex flex-wrap gap-1 justify-center mb-3">
          {item.dietaryTags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={clsx(
                'px-2 py-0.5 rounded-full text-[11px] font-semibold capitalize',
                DIETARY_STYLES[tag]
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h3 className="text-2xl font-bold text-nouri-black mb-2">{item.name}</h3>
      <p className="text-nouri-gray-mid text-sm leading-relaxed mb-3 max-w-[240px]">
        {item.description}
      </p>
      <p className="text-nouri-red font-extrabold text-xl mb-6">
        ${item.price.toFixed(2)}
      </p>

      {item.isAvailable ? (
        <button onClick={handleAdd} className="btn-outline">
          Add to Order
        </button>
      ) : (
        <span className="text-sm text-gray-400 font-medium">Unavailable</span>
      )}
    </div>
  );
}
