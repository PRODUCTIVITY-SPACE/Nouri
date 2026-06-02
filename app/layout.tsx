import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Nouri — Food. Fast. Fresh.',
    template: '%s | Nouri',
  },
  description:
    'Scan your table QR code, browse a live menu, and track your order in real time. The smart ordering platform for hotels and restaurants.',
  keywords: ['restaurant ordering', 'hotel dining', 'QR menu', 'digital menu', 'food ordering'],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} font-sans antialiased bg-white text-nouri-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
