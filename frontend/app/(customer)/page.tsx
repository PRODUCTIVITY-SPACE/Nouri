import { HeroSection } from '@/components/home/HeroSection';
import { OrderTypeSelector } from '@/components/home/OrderTypeSelector';
import { BentoSection } from '@/components/home/BentoSection';

export default function CustomerHomePage() {
  return (
    <main className="max-w-7xl mx-auto">
      <HeroSection />
      <OrderTypeSelector />
      <BentoSection />

      {/* Language quick switch — mobile only */}
      <section className="md:hidden px-container-margin-mobile mt-stack-lg mb-8">
        <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border border-outline-variant">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">language</span>
            <span className="font-label-md text-label-md">Current: English</span>
          </div>
          <button className="text-primary font-bold font-label-md text-label-md">Change to Swahili</button>
        </div>
      </section>
    </main>
  );
}
