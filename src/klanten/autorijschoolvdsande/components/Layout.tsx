import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div data-client="autorijschoolvdsande" className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
