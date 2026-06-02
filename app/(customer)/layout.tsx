import CartSidebar from '@/components/layout/CartSidebar';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CartSidebar />
    </>
  );
}
