import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';
import { Logo } from './Logo';

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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b" style={{ borderColor: config.colors.primaryLight }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo linkTo={config.basePath + '/'} size="sm" />

          <nav className="hidden md:flex items-center gap-8">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'border-b-2 pb-0.5'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={isActive(link.path) ? { color: config.colors.primary, borderColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + '/contact'}
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundColor: config.colors.primary }}
            >
              Afspraak Maken
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t py-4 flex flex-col gap-1" style={{ borderColor: config.colors.primaryLight }}>
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
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
              className="mx-4 mt-2 px-4 py-2.5 text-sm font-semibold text-white rounded-full text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary }}
            >
              Afspraak Maken
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
