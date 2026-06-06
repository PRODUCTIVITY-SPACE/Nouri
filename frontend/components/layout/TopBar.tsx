import Link from 'next/link';

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-container-margin-mobile md:px-container-margin-desktop h-16 bg-surface shadow-sm">
      <Link href="/" className="font-display text-display-lg font-bold text-primary">
        Nouri
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <button className="text-primary font-bold border-b-2 border-primary py-1 font-label-md text-label-md">
          English / Swahili
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-label-md text-label-md hidden sm:block">Profile</span>
        </button>
      </div>
    </header>
  );
}
