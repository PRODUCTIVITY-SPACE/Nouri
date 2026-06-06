import Link from 'next/link';

export function AdminTopBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-container-margin-mobile md:px-container-margin-desktop h-16 bg-surface shadow-sm">
      <div className="flex items-center gap-4">
        <Link href="/admin" className="font-display text-display-lg font-bold text-primary">
          Nouri
        </Link>
        <span className="hidden md:block font-label-md text-label-md text-on-surface-variant">Admin</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined">person</span>
          </div>
          <span className="hidden md:block font-label-md text-label-md">Profile</span>
        </div>
      </div>
    </header>
  );
}
