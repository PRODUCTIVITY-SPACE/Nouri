import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <div className="pt-16 pb-24 md:pb-8">{children}</div>
      <BottomNav />
    </>
  );
}
