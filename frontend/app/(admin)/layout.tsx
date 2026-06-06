import { AdminTopBar } from '@/components/layout/AdminTopBar';
import { AdminSideNav } from '@/components/layout/AdminSideNav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AdminTopBar />
      <AdminSideNav />
      <main className="pt-16 md:pl-64 min-h-screen">{children}</main>
    </div>
  );
}
