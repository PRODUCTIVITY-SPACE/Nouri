import Image from 'next/image';
import { formatKES } from '@/lib/utils/format';

export function RecommendationBento() {
  return (
    <section className="mb-stack-lg">
      <h2 className="font-display text-headline-md mb-4 text-primary">Chef&apos;s Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large hero card */}
        <div className="md:col-span-2 relative h-64 rounded-3xl overflow-hidden group cursor-pointer shadow-sm border border-outline-variant">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIXQZE4KMadecoY2hPKUlmGZeKJoQT5dcKxNTpeTXG33YxsDDaTu_YWxM-Vy46vZESiDI5fJt1hsbZub4qUuhyXtrOPTSH1M10XTKynn5eHaGV_PHO8646efyOMM0wnNGATujygRVvk4_m-KEw5lO0cGP0YSQNOvG2llJn-hFM3me1piEevme_NCFK4VZ36-HPu-rmGDtlvDBujTjzNhjjJ18AAg1c9X41wWgT47M4LRY8fJhN4LdfbZHTCWTCMhmLvvKrCCuUA_c"
            alt="Highland Prime Steak"
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            <span className="bg-tertiary text-white w-fit px-3 py-1 rounded-full font-label-sm text-label-sm mb-2">
              LIMITED OFFER
            </span>
            <h3 className="text-white font-display text-headline-lg mb-1">Highland Prime Steak</h3>
            <p className="text-white/80 font-body-md text-body-md mb-4">Dry-aged for 28 days, served with truffle mash.</p>
            <div className="flex items-center justify-between">
              <span className="text-primary-fixed-dim font-bold text-headline-md">{formatKES(3200)}</span>
              <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                Add to Order
              </button>
            </div>
          </div>
        </div>

        {/* Secondary card */}
        <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRknNB6UP5UjNNgH-Uap5TwFTcFfuEtQVnfLhh4yvMVNDKo8F8B7FCTMYCQZ65jI6cN3LwcHMueKgjgxaW1SsHUVBxbLUyMZCZ7u_MK_pQjdXva-GOKXJ7nvRZK-yrL9pN4jjRkbdLt9-0n8RZLFKv-gF6WtB8C4goGvPOh1vLPUAuP0L-T9kG75VifaBMk0mlvZUTfawzLjzSziZx4mhP3Qp1oXBdQjbOunPjfOZpkIa2L9MqwHLAwh_blgX3jH2rAtbT3IdZzxk"
                alt="Artisan Hibiscus Tea"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-headline-md text-on-surface">Artisan Hibiscus Tea</h3>
            <p className="text-on-surface-variant font-body-md text-body-md">Locally sourced, chilled perfection.</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-tertiary font-bold text-headline-md">{formatKES(450)}</span>
            <button className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
