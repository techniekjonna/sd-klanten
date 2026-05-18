import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
    <svg viewBox="0 0 52 32" className="w-12 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Car body */}
      <rect x="4" y="14" width="44" height="12" rx="3" fill="#C9A84C" />
      {/* Cabin */}
      <path d="M14 14 L18 6 L34 6 L38 14Z" fill="#C9A84C" />
      {/* Windows */}
      <path d="M19 13 L21 8 L31 8 L33 13Z" fill="#0B0C10" opacity="0.7" />
      {/* Wheels */}
      <circle cx="14" cy="26" r="5" fill="#0B0C10" />
      <circle cx="14" cy="26" r="2.5" fill="#C9A84C" />
      <circle cx="38" cy="26" r="5" fill="#0B0C10" />
      <circle cx="38" cy="26" r="2.5" fill="#C9A84C" />
      {/* Gold accent line */}
      <line x1="4" y1="20" x2="48" y2="20" stroke="#E8C96A" strokeWidth="1" opacity="0.5" />
    </svg>
    <div className="flex flex-col leading-tight">
      <span className="font-black text-xl tracking-widest text-[#0B0C10]">DAVIES</span>
      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C9A84C] uppercase">Taxi Service</span>
    </div>
  </Link>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') return location.pathname === fullPath || location.pathname === config.basePath;
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-[#C9A84C]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors rounded-lg ${
                  isActive(link.path)
                    ? 'bg-[#C9A84C] text-[#0B0C10]'
                    : 'text-gray-700 hover:text-[#C9A84C] hover:bg-[#C9A84C]/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${config.contact.phone}`}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#0B0C10] text-[#C9A84C] text-sm font-bold rounded-lg hover:bg-[#C9A84C] hover:text-[#0B0C10] transition-colors border border-[#C9A84C]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>{config.contact.phoneDisplay}</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#C9A84C] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-3 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#C9A84C] text-[#0B0C10]'
                    : 'text-gray-700 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mt-2 px-4 py-3 bg-[#0B0C10] text-[#C9A84C] text-sm font-bold rounded-lg text-center border border-[#C9A84C]"
            >
              {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
