import Image from 'next/image';
import Link from 'next/link';
import { StatusStepper } from '@/components/tracking/StatusStepper';

// Phase 2: fetch real order from API using orderId param
export default async function TrackOrderPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  return (
    <main className="px-container-margin-mobile md:px-container-margin-desktop max-w-5xl mx-auto pb-12">

      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-stack-lg py-6">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant mb-2">
            <Link href="/" className="font-label-sm text-label-sm hover:text-primary">Orders</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="font-label-sm text-label-sm text-primary">#{orderId.slice(0, 8).toUpperCase()}</span>
          </nav>
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface">Tracking Your Order</h2>
          <p className="text-on-surface-variant font-body-md mt-1">
            Order received at 12:45 PM •{' '}
            <span className="text-primary font-bold">Estimated arrival: 1:15 PM</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high border border-outline-variant text-on-surface hover:bg-surface-dim transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
            <span className="font-label-md text-label-md">Help</span>
          </button>
          <Link href="/menu" className="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary text-on-primary font-bold hover:scale-95 transition-transform duration-150">
            <span className="material-symbols-outlined">replay</span>
            <span className="font-label-md text-label-md">Reorder</span>
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

        {/* Left: status + order details */}
        <div className="lg:col-span-7 flex flex-col gap-gutter">

          {/* Real-time status card */}
          <div className="bg-surface-container-low rounded-2xl p-6 shadow-sm border border-outline-variant/30">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center animate-status-pulse">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl">outdoor_grill</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Currently</p>
                  <h3 className="font-display text-headline-md text-on-surface">Being Prepared</h3>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-tertiary">12</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mins Left</p>
              </div>
            </div>
            <StatusStepper status="preparing" />
          </div>

          {/* Order items */}
          <div className="bg-surface rounded-2xl p-6 border border-outline-variant/30">
            <h4 className="font-label-md text-label-md text-on-surface-variant uppercase mb-4 tracking-widest">Order Summary</h4>
            <div className="space-y-4">
              {[
                { name: 'Beef Pilau Extra Large', notes: 'No onions', price: 850, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJNyQ_WY7guaGlfZuJWNLoNXa9-LQ2NOxmljppMOO0GbSXVokYFUH9b5A_WVuXacv8g7Ql1-lHp0yrbVkqeWsVPM_8W72zqrMIth5qM6puy_P2ul0UDrwft8t8GsBO6P7MIr-ee5zq0h4lY5w7e2S-4rCuIxwce_cqxA4cdorUSPRKoy3XI1D_CYMtVZ9CIFLxJ0_KDCxFdAbQbV4lu3XLG8UbLIdO6D-2teWZVl_R4f0Eor6rdYnO105xi8MEImWMN7fSSB-EixQ' },
                { name: 'Fresh Passion Juice', notes: 'Qty: 2 • Chilled', price: 400, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbvHRke059X1hvjMMsNn8np8mruvoSkXxYfvuiQ5pz2Xe2nPnIOuNmPSqifr3l_-k4_hlnZKlHoxL_aYGmxPaz5g5AslCsJpV_6sZmQNWqJQ8SeBUwEY9mU2aYI9J4PzCrOlvAluVcX1MVZnayvQmmaSnwuEJ_h6ERVgvDtm1Iks_crqBbBrEyownESvW6bkIbkM92Lsp0Cye7tjVb0Dedm6SMC41ng-M9XAHY477ylzvbW9UHcFyktRhm_U-k_hL6tjaDA5-jxSs' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="w-16 h-12 bg-surface-variant rounded-lg overflow-hidden relative flex-shrink-0">
                      <Image src={item.src} alt={item.name} fill unoptimized className="object-cover" />
                    </div>
                    <div>
                      <p className="font-body-md font-bold text-on-surface">{item.name}</p>
                      <p className="text-sm text-on-surface-variant">{item.notes}</p>
                    </div>
                  </div>
                  <p className="font-label-md text-label-md text-tertiary">KES {item.price}</p>
                </div>
              ))}
              <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                <span className="font-body-md text-on-surface-variant">Total (Paid via M-Pesa)</span>
                <span className="font-display text-headline-md text-on-surface">KES 1,250</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: map + table info + help */}
        <div className="lg:col-span-5 flex flex-col gap-gutter">

          {/* Map placeholder */}
          <div className="bg-surface-container rounded-2xl overflow-hidden h-[320px] relative border border-outline-variant/30">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN2ZJixOoMeHlF4Hqlh4Fh4QNKKhn6__GW12DeqZ9N0Z8F5OZz3XpEPGWaynRFh13ayy6u3jLcloGvYFkJJ_duA1mQZUV7758ULIOw-DxoYOvjz9aBaU5aLWYJ3hjynrcLci3UoSwxF8M0VXs_A5NYSSHi40f4yBp0r6-37pMNn7kNEFPajcuDFIQBdg5ewBO8oDimSeRfWFOjJs8oB1vAyzPrvSz8oRbjgBdHqlEHTuatgnLdtxtyuY4xRkxgs61MTqiqikIEQaI"
              alt="Delivery map — Nairobi"
              fill
              unoptimized
              className="object-cover grayscale-[0.2] contrast-[0.9]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">moped</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Courier: Juma K.</p>
                  <p className="text-xs text-on-surface-variant">Coming from Nouri Westlands</p>
                </div>
                <button className="ml-auto w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table info */}
          <div className="bg-[#4CAF50]/10 border border-[#4CAF50]/20 rounded-2xl p-6 flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#4CAF50] text-white flex flex-col items-center justify-center">
              <span className="font-label-sm text-label-sm uppercase text-[10px]">Table</span>
              <span className="text-2xl font-bold">14</span>
            </div>
            <div>
              <h5 className="font-body-md font-bold text-on-surface">Dine-in Information</h5>
              <p className="text-on-surface-variant text-sm">Your food is coming to Table 14. Relax and enjoy!</p>
            </div>
          </div>

          {/* Help */}
          <div className="bg-surface-container-highest rounded-2xl p-6">
            <h5 className="font-label-md text-label-md text-on-surface-variant uppercase mb-4">Need Assistance?</h5>
            <div className="flex flex-col gap-3">
              {[
                { href: 'tel:+254700000000', icon: 'phone_in_talk', label: 'Call Restaurant' },
                { href: '#', icon: 'chat_bubble', label: 'Live Chat Support' },
              ].map(({ href, icon, label }) => (
                <Link key={label} href={href} className="flex items-center justify-between p-3 bg-surface rounded-xl border border-outline-variant hover:border-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">{icon}</span>
                    <span className="font-label-md text-label-md">{label}</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
