import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const PRIMARY = '#3A3A3A';
const ACCENT = '#F5C842';

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
    <header style={{ backgroundColor: PRIMARY }} className="sticky top-0 z-50 shadow-lg">
      {/* Top bar: phone numbers */}
      <div style={{ backgroundColor: '#2A2A2A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-6 h-9 text-xs">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-80"
              style={{ color: ACCENT }}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>OF</span>
            <a
              href={`tel:${config.contact.phone2}`}
              className="font-medium transition-opacity hover:opacity-80"
              style={{ color: ACCENT }}
            >
              {config.contact.phoneDisplay2}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={config.basePath + '/'} className="flex-shrink-0">
            <img
              src={config.logo}
              alt={config.name}
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all rounded"
                style={{
                  color: isActive(link.path) ? ACCENT : 'rgba(255,255,255,0.85)',
                  borderBottom: isActive(link.path) ? `2px solid ${ACCENT}` : '2px solid transparent',
                  backgroundColor: isActive(link.path) ? 'rgba(245,200,66,0.08)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-opacity hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.85)' }}
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
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-bold uppercase tracking-wide rounded-lg transition-colors"
                style={{
                  color: isActive(link.path) ? '#000' : 'rgba(255,255,255,0.8)',
                  backgroundColor: isActive(link.path) ? ACCENT : 'transparent',
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
