import type { Metadata } from 'next';
import { MENU_ITEMS, CATEGORIES } from '@/lib/data/menu';

export const metadata: Metadata = { title: 'Menu Management' };

export default function AdminMenuPage() {
  const categoryMap = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.name]));

  return (
    <div>
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="font-display font-bold text-3xl text-nouri-black">Menu Management</h1>
          <p className="text-gray-400 mt-1 text-sm">{MENU_ITEMS.length} items across {CATEGORIES.length} categories</p>
        </div>
        <button className="btn-accent text-sm px-6 py-3">
          + Add Item
        </button>
      </div>

      {/* Category filter tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none mb-8 pb-1">
        <button className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-nouri-black text-white">
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:border-nouri-black transition-colors"
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Menu items table */}
      <div className="admin-card overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="text-gray-400 font-semibold border-b border-gray-100 text-left">
              {['Item', 'Category', 'Price', 'Tags', 'Available', 'Actions'].map((h) => (
                <th key={h} className="pb-3 pr-6 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MENU_ITEMS.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-4 pr-6">
                  <p className="font-bold text-nouri-black">{item.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5 max-w-xs truncate">{item.description}</p>
                </td>
                <td className="py-4 pr-6 text-gray-600 capitalize">{categoryMap[item.categoryId]}</td>
                <td className="py-4 pr-6 font-bold text-nouri-red">${item.price.toFixed(2)}</td>
                <td className="py-4 pr-6">
                  <div className="flex flex-wrap gap-1">
                    {item.dietaryTags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full text-xs capitalize">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 pr-6">
                  <span className={`status-badge ${item.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                    {item.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-nouri-black text-xs font-semibold transition-colors">
                      Edit
                    </button>
                    <button className="text-gray-400 hover:text-red-500 text-xs font-semibold transition-colors">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-gray-400 text-xs mt-6">
        Full CRUD connected to Django REST API — Phase 2
      </p>
    </div>
  );
}
