import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0B1D3E' }}>
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
