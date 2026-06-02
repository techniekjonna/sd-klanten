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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          <Link to={config.basePath + "/"} className="hover:opacity-80 transition-opacity">
            <img
              src="https://www.gotaxmaastricht.nl/assets/imgs/logo-03.png"
              alt="GoTax Maastricht"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
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
              to={config.basePath + "/contact"}
              className="px-5 py-2.5 text-sm font-semibold text-white tracking-wide transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary }}
            >
              Nu Boeken
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
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
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + "/contact"}
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-3 px-4 py-3 text-sm font-semibold text-white text-center"
              style={{ backgroundColor: config.colors.primary }}
            >
              Nu Boeken
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
