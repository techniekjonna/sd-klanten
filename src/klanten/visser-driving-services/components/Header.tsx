import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <img
    src="https://www.visserdrivingservices.com/img/headerlogo.svg"
    alt="Visser Driving Services"
    className="h-10 w-auto"
  />
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const accent = config.colors.accent || '#C9A84C';

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100" style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.06)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to={config.basePath + '/'} className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                  isActive(link.path) ? '' : 'text-gray-500 hover:text-gray-900'
                }`}
                style={isActive(link.path) ? { color: accent } : {}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + '/contact'}
              className="ml-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: config.colors.primary }}
            >
              Rit Aanvragen
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-5 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + '/contact'}
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-3 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white text-center"
              style={{ backgroundColor: config.colors.primary }}
            >
              Rit Aanvragen
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
