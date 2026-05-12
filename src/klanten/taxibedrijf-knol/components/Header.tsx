import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-2.5 group">
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-lg leading-none select-none"
      style={{ backgroundColor: config.colors.primary }}
    >
      K
    </div>
    <div className="leading-none">
      <span className="block text-base font-extrabold tracking-tight" style={{ color: config.colors.dark }}>
        Taxibedrijf
      </span>
      <span className="block text-base font-extrabold tracking-tight" style={{ color: config.colors.primary }}>
        Knol
      </span>
    </div>
  </Link>
);

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
          <Logo />

          <nav className="hidden md:flex items-center gap-7">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? '' : 'text-gray-600 hover:text-gray-900'
                }`}
                style={isActive(link.path) ? { color: config.colors.primary } : {}}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="block h-0.5 mt-0.5 rounded-full" style={{ backgroundColor: config.colors.primary }} />
                )}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${config.contact.phone}`}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: config.colors.primary }}
          >
            <span>📞</span>
            <span>{config.contact.phoneDisplay}</span>
          </a>

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

        {menuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-4 mt-2 px-4 py-2.5 text-sm font-bold text-white rounded-lg text-center"
              style={{ backgroundColor: config.colors.primary }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
