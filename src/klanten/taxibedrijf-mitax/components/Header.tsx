import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const NAVY = config.colors.navy;
const ORANGE = config.colors.orange;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') {
      return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    }
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: NAVY }}>
      {/* Top bar */}
      <div style={{ backgroundColor: config.colors.navyDark, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 text-xs">
            <span className="text-white opacity-60 hidden sm:block">
              📍 {config.contact.address}, {config.contact.city}
            </span>
            <div className="flex items-center gap-4 ml-auto">
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80"
                style={{ color: ORANGE }}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {config.contact.phoneDisplay}
              </a>
              <span className="text-white opacity-30">|</span>
              <span className="text-white opacity-60">24/7 bereikbaar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={config.basePath + '/'} className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-lg select-none"
              style={{ backgroundColor: ORANGE }}
            >
              M
            </div>
            <div>
              <span className="block text-white font-extrabold text-lg leading-none tracking-tight">
                Mitax
              </span>
              <span className="block text-xs font-medium opacity-60 text-white tracking-wide">
                Taxibedrijf
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {config.navigation.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all"
                style={{
                  color: isActive(link.path) ? ORANGE : 'rgba(255,255,255,0.8)',
                  backgroundColor: isActive(link.path) ? 'rgba(232,93,4,0.12)' : 'transparent',
                  borderBottom: isActive(link.path) ? `2px solid ${ORANGE}` : '2px solid transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + '/boeken'}
              className="ml-2 px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: ORANGE }}
            >
              Boek een Rit
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white transition-opacity hover:opacity-70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="md:hidden border-t py-4 flex flex-col gap-1"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                style={{
                  color: isActive(link.path) ? '#fff' : 'rgba(255,255,255,0.75)',
                  backgroundColor: isActive(link.path) ? ORANGE : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
