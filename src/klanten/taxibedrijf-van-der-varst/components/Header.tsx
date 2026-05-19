import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const full = config.basePath + path;
    return path === '/' ? location.pathname === full : location.pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to={config.basePath + '/'} className="flex items-center gap-2 group">
            <div className="leading-none">
              <span className="text-white font-extrabold text-lg tracking-tight block" style={{ letterSpacing: '-0.01em' }}>Van der Varst</span>
              <span className="text-xs font-medium" style={{ color: config.colors.accent }}>Taxibedrijf · Echt</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {config.navigation.map((item) => (
              <Link
                key={item.path}
                to={config.basePath + item.path}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: isActive(item.path) ? config.colors.accent : 'rgba(255,255,255,0.85)',
                  backgroundColor: isActive(item.path) ? 'rgba(245,158,11,0.12)' : 'transparent',
                  fontWeight: isActive(item.path) ? 700 : 500,
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="ml-3 px-4 py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.accent, color: '#fff' }}
            >
              {config.contact.phoneDisplay}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded transition-all"
                style={{ backgroundColor: 'white' }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 pt-2 flex flex-col gap-1 border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
            {config.navigation.map((item) => (
              <Link
                key={item.path}
                to={config.basePath + item.path}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: isActive(item.path) ? config.colors.accent : 'rgba(255,255,255,0.85)',
                  backgroundColor: isActive(item.path) ? 'rgba(245,158,11,0.12)' : 'transparent',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mt-2 mx-4 py-3 rounded-lg text-sm font-bold text-center text-white"
              style={{ backgroundColor: config.colors.accent }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
