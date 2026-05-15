import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-2.5 group">
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0"
      style={{ backgroundColor: config.colors.accent }}
    >
      PT
    </div>
    <div className="leading-tight">
      <span className="block text-lg font-extrabold tracking-tight" style={{ color: config.colors.primary }}>
        Pack <span style={{ color: config.colors.accent }}>Taxi</span>
      </span>
      <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium -mt-0.5">
        Heerlen
      </span>
    </div>
  </Link>
);

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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'border-b-2 pb-0.5'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={isActive(link.path) ? { color: config.colors.accent, borderColor: config.colors.accent } : {}}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.accent }}
            >
              📞 {config.contact.phone}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
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
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-4 mt-2 px-4 py-2.5 text-sm font-semibold text-white rounded-lg text-center"
              style={{ backgroundColor: config.colors.accent }}
            >
              📞 Bel Nu
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
