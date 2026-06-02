import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

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
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-2" style={{ borderColor: config.colors.primary }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to={config.basePath + '/'} className="flex items-center">
            <img
              src={config.logo}
              alt="Taxi Quaaden logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-5 py-6 text-sm font-semibold transition-colors border-b-4 ${
                  isActive(link.path)
                    ? 'border-b-4 text-white'
                    : 'text-gray-700 hover:text-white hover:border-transparent'
                }`}
                style={
                  isActive(link.path)
                    ? { backgroundColor: config.colors.primary, borderColor: config.colors.accent }
                    : { borderColor: 'transparent' }
                }
                onMouseEnter={e => {
                  if (!isActive(link.path)) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = config.colors.primary;
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive(link.path)) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="ml-4 px-5 py-2.5 text-sm font-bold text-white rounded-lg transition-all hover:opacity-90 shadow-md"
              style={{ backgroundColor: config.colors.accent }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ color: config.colors.primary }}
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t py-3 flex flex-col" style={{ borderColor: config.colors.light }}>
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold transition-colors"
                style={
                  isActive(link.path)
                    ? { backgroundColor: config.colors.primary, color: 'white' }
                    : { color: config.colors.text }
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-4 mt-3 mb-1 px-4 py-3 text-sm font-bold text-white rounded-lg text-center"
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
