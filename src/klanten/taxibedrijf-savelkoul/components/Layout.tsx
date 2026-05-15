import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
