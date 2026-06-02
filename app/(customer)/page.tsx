import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import OrderTypeSelector from '@/components/home/OrderTypeSelector';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-white">
      {/* Split dark background shape */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full hidden md:block"
        >
          <path
            d="M850 0H1440V900H950C950 900 850 750 1050 550C1250 350 850 150 850 0Z"
            fill="#111111"
          />
        </svg>
        {/* Mobile: simple dark right half */}
        <div className="md:hidden absolute right-0 top-0 w-1/2 h-full bg-nouri-black" />
      </div>

      <Navbar theme="home" />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center px-6 md:px-24 pt-20">
        <div className="max-w-lg">
          <span className="font-display font-bold text-base tracking-[3px] uppercase text-nouri-red-light block mb-8">
            Chef's Special
          </span>
          <h1
            className="font-sans font-extrabold tracking-tight text-nouri-black leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(42px, 7vw, 85px)' }}
          >
            Freshness<br />in every bite
          </h1>
          <p className="text-gray-500 max-w-xs mb-2 leading-relaxed text-[15px]">
            Scan your QR code, browse the live menu, and track your order in real time.
          </p>

          <OrderTypeSelector />
        </div>

        {/* Hero food image — desktop */}
        <div className="absolute right-0 top-0 w-full h-full pointer-events-none hidden md:block">
          <Image
            src="/hero-bowl.png"
            alt="Fresh food bowl"
            width={680}
            height={680}
            className="absolute right-[12%] top-1/2 -translate-y-[52%] z-20 drop-shadow-2xl"
            priority
          />
          <Image
            src="/leaf-bottom-right.png"
            alt=""
            width={130}
            height={130}
            className="absolute bottom-[22%] right-[18%] rotate-[30deg] z-30 drop-shadow-xl"
          />
        </div>
      </section>

      {/* Footer strip */}
      <div className="relative z-10 text-center py-6">
        <p className="text-gray-400 text-xs">© 2026 Nouri Technologies. All rights reserved.</p>
      </div>
    </div>
  );
}
