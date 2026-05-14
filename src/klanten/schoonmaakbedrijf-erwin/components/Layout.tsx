import { type ReactNode, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const linkId = 'erwin-font';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(link);
    }

    const prev = document.body.style.fontFamily;
    document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
    return () => {
      document.body.style.fontFamily = prev;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
