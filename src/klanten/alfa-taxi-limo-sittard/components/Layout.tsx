import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col" data-client="alfa-taxi-limo-sittard">
    <Header />
    {/* pb-16 reserves space for mobile sticky bottom bar */}
    <main className="flex-grow pb-16 md:pb-0">{children}</main>
    <Footer />
  </div>
);
