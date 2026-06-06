import Image from 'next/image';

export function BentoSection() {
  return (
    <section className="px-container-margin-mobile md:px-container-margin-desktop mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="md:col-span-2 bg-secondary-container rounded-xl p-6 flex flex-col justify-between overflow-hidden relative group min-h-[200px]">
        <div className="z-10 relative">
          <h3 className="font-display text-headline-md text-on-secondary-container mb-2">Chef&apos;s Special</h3>
          <p className="font-body-md text-body-md text-on-secondary-container/80 max-w-xs">
            Experience the rich heritage of coastal flavors with our signature Samaki wa Kupaka.
          </p>
        </div>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkHn1steJBZUUaPGKdCvK8CSa4-2kZTVL4LrAKA2oQDY0D43IDmLd1NGOENSHT8g3RH3MCPFV1is9LsiCBuGXYKByuZrygu2rvg0CXSlkXX1rXtZWoLS2YSB_fXMk9k2zhZoKaf8IJL4wNMlaBq0XSkCBrOu-ULmmKV0G5slMttqSlBYT7mCThCVR3KCLzdTo4T7tLCHDLtzn_jVkVhJv2UqzoilJ8_iIoCSG9rG17Lvp7-Wwbd--jhEMFAkaWmlwPwhP9h7s72h0"
          alt="Samaki wa Kupaka — coastal fish in coconut curry sauce"
          fill
          unoptimized
          className="absolute right-[-10%] bottom-[-10%] !w-1/2 !h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="bg-tertiary-container rounded-xl p-6 flex flex-col gap-stack-md">
        <span className="material-symbols-outlined text-on-tertiary-container text-4xl">loyalty</span>
        <h3 className="font-display text-headline-md text-on-tertiary-container">Rewards</h3>
        <p className="font-body-md text-body-md text-on-tertiary-container/80">
          Earn points on every bite and unlock exclusive Swahili hospitality treats.
        </p>
        <button className="mt-auto text-on-tertiary-container font-label-md text-label-md flex items-center gap-1 group">
          Learn more
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
