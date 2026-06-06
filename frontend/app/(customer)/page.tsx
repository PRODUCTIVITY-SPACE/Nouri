import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import OrderTypeSelector from '@/components/home/OrderTypeSelector';

export const metadata: Metadata = {
  title: 'Nouri — Food. Fast. Fresh.',
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col justify-between">
      {/* Dynamic Style block for floating animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(4deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-6deg); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(10px) translateY(-8px); }
        }
        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 7s ease-in-out infinite;
        }
        .animate-drift {
          animation: drift 12s ease-in-out infinite;
        }
      `}} />

      {/* Curved Split Background for viewports >= 768px */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M860,0 C740,300 700,600 580,900 L1440,900 L1440,0 Z"
            fill="#111111"
          />
        </svg>
      </div>

      {/* Decorative leaf images / SVGs (desktop only) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block overflow-hidden z-10">
        {/* Leaf 1 - Floating top right */}
        <div className="absolute top-[15%] right-[12%] w-16 h-16 opacity-75 animate-float-slow">
          <svg className="w-full h-full text-emerald-800/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C22,3 19,8 17,8M16,12C15,12 14,13 13,14C12,15 11,15 10,16C9,17 8.5,18 8.5,18C8.5,18 9.5,17 10.5,16.5C11.5,16 12,15 13,14C14,13 15,12 16,12Z" />
          </svg>
        </div>

        {/* Leaf 2 - Floating mid-right near edge */}
        <div className="absolute top-[48%] right-[4%] w-10 h-10 opacity-60 animate-float-medium">
          <svg className="w-full h-full text-emerald-700/30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C22,3 19,8 17,8M16,12C15,12 14,13 13,14C12,15 11,15 10,16C9,17 8.5,18 8.5,18C8.5,18 9.5,17 10.5,16.5C11.5,16 12,15 13,14C14,13 15,12 16,12Z" />
          </svg>
        </div>

        {/* Leaf 3 - Floating bottom right */}
        <div className="absolute bottom-[20%] right-[32%] w-12 h-12 opacity-80 animate-drift">
          <svg className="w-full h-full text-emerald-900/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C22,3 19,8 17,8M16,12C15,12 14,13 13,14C12,15 11,15 10,16C9,17 8.5,18 8.5,18C8.5,18 9.5,17 10.5,16.5C11.5,16 12,15 13,14C14,13 15,12 16,12Z" />
          </svg>
        </div>
      </div>

      {/* Navbar Component */}
      <Navbar theme="home" />

      {/* Hero Content Section */}
      <main className="relative flex-grow flex items-center z-20">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Content & Form) */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center text-left">
            {/* CHEF'S SPECIAL Badge */}
            <div>
              <span className="inline-block font-display text-xs font-bold tracking-[0.25em] text-nouri-red-light bg-red-50/50 md:bg-red-50 px-3.5 py-1.5 rounded-full mb-4 uppercase">
                CHEF&apos;S SPECIAL
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-[clamp(42px,5.5vw,82px)] leading-[1.05] tracking-tight text-nouri-black mb-4">
              Freshness in <br className="hidden md:inline" />every bite
            </h1>

            {/* Tagline Paragraph */}
            <p className="text-nouri-gray-mid text-base md:text-lg max-w-md mb-8 leading-relaxed">
              Scan your table QR code, choose your order type, and enjoy freshly prepared culinary delights delivered directly to you.
            </p>

            {/* Order Type Selector */}
            <div className="w-full">
              <OrderTypeSelector />
            </div>
          </div>

          {/* Right Column (Hero food image container - visible on desktop, hidden on mobile in utility style) */}
          <div className="hidden md:flex md:col-span-5 lg:col-span-6 relative h-[500px] lg:h-[600px] w-full items-center justify-center pointer-events-none select-none">
            {/* Floating Image Wrapper */}
            <div className="relative w-[360px] h-[360px] lg:w-[480px] lg:h-[480px] animate-float-slow z-10 transition-transform duration-700 hover:scale-105">
              {/* Outer soft glowing red/gold shadow */}
              <div className="absolute inset-0 rounded-full bg-nouri-red/10 blur-[40px] -z-10" />
              
              <Image
                src="/images/hero-food.png"
                alt="Premium Nouri Food Bowl"
                fill
                sizes="(max-width: 768px) 0px, (max-width: 1200px) 360px, 480px"
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Strip */}
      <footer className="relative z-20 w-full px-6 py-6 md:px-16 lg:px-24 flex items-center justify-start pointer-events-none">
        <p className="text-xs text-gray-400 md:text-neutral-500 font-medium">
          &copy; 2026 Nouri Technologies
        </p>
      </footer>
    </div>
  );
}
