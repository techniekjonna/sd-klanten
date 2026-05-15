import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;

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
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: PRIMARY }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={config.basePath + '/'} className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-lg"
              style={{ backgroundColor: ACCENT, color: '#fff' }}
            >
              H
            </div>
            <div className="leading-none">
              <span className="block text-white font-extrabold text-base tracking-tight group-hover:opacity-90 transition-opacity">
                Housmans
              </span>
              <span className="block text-xs font-medium" style={{ color: `${ACCENT}` }}>
                Taxi & Vervoer
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="text-sm font-medium transition-colors"
                style={
                  isActive(link.path)
                    ? { color: ACCENT }
                    : { color: 'rgba(255,255,255,0.75)' }
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: '#fff' }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white transition-opacity hover:opacity-75"
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
          <nav
            className="md:hidden py-4 flex flex-col gap-1"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
                style={
                  isActive(link.path)
                    ? { color: PRIMARY, backgroundColor: ACCENT }
                    : { color: 'rgba(255,255,255,0.8)' }
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-4 mt-2 px-4 py-2.5 text-sm font-bold text-white rounded-lg text-center"
              style={{ backgroundColor: ACCENT }}
            >
              {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
