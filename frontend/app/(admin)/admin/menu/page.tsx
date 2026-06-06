'use client';

import { useState } from 'react';
import Image from 'next/image';
import { formatKES } from '@/lib/utils/format';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  available: boolean;
  soldOut?: boolean;
}

const ITEMS: MenuItem[] = [
  { id: '1', name: 'Spicy Coconut Curry', description: 'Signature coastal style with seasonal vegetables', price: 1200, category: 'Mains', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzB7I30ub29SzcakGELCmIu0UjKyLfdDLadFEnfhMRHVNtVIiDx4y79AYjKQqiAKA9XPmtfeQBYEtT9TUkL5VZOpbkHdsUG9oh88lE0OmD6AVhOj1n2VJ0WP8Eov50FcBxYuTVJHenWzaoKB7XIKeg9n04nZikMoq2WRb_w97-sqCqsMsL3Yz9KlsO4mPmO-va7W8EK43-2kKDgSQ3B83q4e8P3BD9CiW5V1n_Mbf9WraFr5QHvMyCsWrfGRfpnXCQ5i_X_xLVsuE', available: true },
  { id: '2', name: 'Artisan Margherita', description: 'Stone-baked crust, fresh mozzarella, organic basil', price: 950, category: 'Mains', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4rXhDfm5J7QvB5gDw_garA2O6ZCXj-jZE5vLafD4d8XpBPSbe6C-RKWHPwmpNehM4pgD_Wm7Mr-_DqDLnuDwLoTXRNkAkml30Z6yIir3QoJVdMIQP6kpqtimPG0f7RJ82IonGlN8ptC7S_DF8wCtHtjxgTJQ6CLubdtDnXD-iDBFB_TxtDIccS5uE_IFOSNLXGkCQZCPyr6G0J3aSftRm58-SndEVloRtT7DHBQIFTpmKPpmjluBBEC2j1S_yAiarSc6C4UN1qZA', available: true },
  { id: '3', name: 'Grilled Lamb Chops', description: 'Herb-crusted Kenyan lamb with seasonal roots', price: 1850, category: 'Mains', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZiQp0Wod6hJB4DQECxkGW2MvZ_Qu8wScSalWBSrTxYVV6-WM_-AU1wdygnhKR9GdEizkuCHXmofBDkvrkxpNBWPTxjCl3RMHS9UCNlMRlVs24Yw66f9rxNjkuwL7EoAiKGQit_ob5PZQW822BuiMgRNJLZZvpvFqZWB94knJuRsKS0uhwonNS6mcxH3BOPRYdSB16HYAXSEU_8ZKBpZqQvmB4d3Q4iZRmcMX8xefgTGeyb6KOe-xkznBg8r4AOGEWf_iY1QwOpU8', available: false, soldOut: true },
  { id: '4', name: 'Signature Latte', description: 'Double shot Arabica with silky micro-foam', price: 350, category: 'Beverages', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMX14xcq9iaXYYvoHePVQHemEFpzc_vUooVklKL_9hLnAaRekwYE9-LBqw9L0b5EQN8zpo5B8KTMSwWAM_3AP6SRjPQfjyWrwq3qPqgKd6Pb8H1ODUUPlY75uzXrObUFLtA5OqQrMRDTNA_tsyqPXWAsTvVbxSYwtCx7Xgov7g5IhPjABnrPlcZht9lepFQ48HNurje-H5MBGK1bR9lCd-fAFfxd0qwEs2rxkF911rkAAPZlJBwZvhb2mzj1AwEQ8dmHdq954kJ1g', available: true },
];

const CATEGORIES = ['Main Dishes', 'Beverages'];

export default function MenuManagementPage() {
  const [items, setItems] = useState(ITEMS);
  const [toast, setToast] = useState('');

  const toggleAvailability = (id: string) => {
    setItems((prev) => prev.map((item) => {
      if (item.id !== id) return item;
      const updated = { ...item, available: !item.available };
      showToast(`${item.name} is now ${updated.available ? 'Available' : 'Unavailable'}`);
      return updated;
    }));
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const categoryItems = (cat: string) => items.filter((i) =>
    cat === 'Main Dishes' ? i.category === 'Mains' : i.category === 'Beverages'
  );

  return (
    <div className="px-container-margin-mobile md:px-container-margin-desktop max-w-[1440px] mx-auto py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-stack-lg gap-4">
        <div>
          <h2 className="font-display text-headline-lg text-on-surface">Menu Catalog</h2>
          <p className="text-on-surface-variant font-body-md text-body-md">Manage your culinary offerings and availability.</p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 shadow-md hover:opacity-90 active:scale-95 transition-all">
          <span className="material-symbols-outlined">add</span>
          Add New Item
        </button>
      </div>

      {/* Filter bar */}
      <div className="bg-surface-container-low rounded-2xl p-4 mb-stack-lg flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[280px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input className="w-full bg-surface border border-outline-variant rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary outline-none font-body-md text-body-md" placeholder="Search menu items..." type="text" />
        </div>
        <div className="flex gap-2">
          <select className="bg-surface border border-outline-variant rounded-lg px-4 py-2 font-label-md text-label-md outline-none focus:ring-2 focus:ring-primary">
            <option>All Categories</option>
            <option>Main Dishes</option>
            <option>Beverages</option>
          </select>
        </div>
      </div>

      {/* Categories */}
      {CATEGORIES.map((cat) => (
        <section key={cat} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">{cat === 'Main Dishes' ? 'lunch_dining' : 'local_cafe'}</span>
            <h3 className="font-display text-headline-md text-on-surface">{cat}</h3>
            <span className="bg-surface-container-highest px-2 py-0.5 rounded font-label-sm text-label-sm text-on-surface-variant">
              {categoryItems(cat).length} Items
            </span>
          </div>

          <div className="space-y-stack-md">
            {categoryItems(cat).map((item) => (
              <div
                key={item.id}
                className={`group flex flex-col md:flex-row items-center gap-4 p-4 bg-surface border border-outline-variant rounded-2xl hover:shadow-lg transition-all ${!item.available ? 'opacity-80 bg-surface-container-low' : ''}`}
              >
                <div className={`w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative ${!item.available ? 'grayscale' : ''}`}>
                  <Image src={item.imageUrl} alt={item.name} fill unoptimized className="object-cover" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h4 className="font-label-md text-label-md text-body-lg text-on-surface">{item.name}</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{item.description}</p>
                </div>

                <div className="flex flex-col items-center md:items-end min-w-[100px]">
                  <span className="font-bold text-tertiary">{formatKES(item.price)}</span>
                  {item.soldOut
                    ? <span className="font-label-sm text-label-sm text-error font-medium">Sold Out</span>
                    : <span className="font-label-sm text-label-sm text-outline">Category: {item.category}</span>
                  }
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-label-sm text-label-sm text-outline">Availability</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.available}
                        onChange={() => toggleAvailability(item.id)}
                      />
                      <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]" />
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-secondary-container text-on-secondary-container transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                    <button className="p-2 rounded-lg hover:bg-surface-container-highest text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">archive</span></button>
                    <button className="p-2 rounded-lg hover:bg-error-container text-on-error-container transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 right-8 flex items-center gap-3 bg-inverse-surface text-inverse-on-surface px-6 py-4 rounded-xl shadow-2xl z-50 transition-all">
          <span className="material-symbols-outlined text-[#4CAF50]">check_circle</span>
          <span className="font-label-md text-label-md">{toast}</span>
        </div>
      )}
    </div>
  );
}
