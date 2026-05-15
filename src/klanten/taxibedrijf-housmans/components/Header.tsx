import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const GREEN = config.colors.primary;
const GOLD = config.colors.accent;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo — tekst-gebaseerd, groen blok met H */}
          <Link to={config.basePath + '/'} className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-lg flex flex-col items-center justify-center leading-none"
              style={{ backgroundColor: GREEN }}
            >
              <span className="text-white font-extrabold text-xl leading-none">H</span>
            </div>
            <div className="leading-none">
              <span className="block font-extrabold text-base tracking-tight" style={{ color: GREEN }}>
                Housmans
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest" style={{ color: GOLD }}>
                Taxi &amp; Vervoer · Echt
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="text-sm font-medium transition-colors"
                style={isActive(link.path) ? { color: GREEN } : { color: '#6B7280' }}
              >
                {isActive(link.path) ? <span className="border-b-2 pb-0.5" style={{ borderColor: GREEN }}>{link.label}</span> : link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
                style={isActive(link.path) ? { color: 'white', backgroundColor: GREEN } : { color: '#374151' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-4 mt-2 py-2.5 text-sm font-bold text-white rounded-lg text-center"
              style={{ backgroundColor: GREEN }}
            >
              {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
