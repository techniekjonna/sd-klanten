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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to={config.basePath + '/'}
            className="flex items-center gap-3 transition-opacity hover:opacity-85"
          >
            {/* Diamond "R" mark */}
            <div
              className="w-9 h-9 flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0"
              style={{
                backgroundColor: config.colors.primary,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
            >
              R
            </div>
            <div className="leading-tight">
              <span className="block font-extrabold text-base tracking-tight" style={{ color: config.colors.text }}>
                Renierkens
              </span>
              <span className="block text-xs font-medium tracking-wide uppercase" style={{ color: config.colors.primary }}>
                Taxibedrijf
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium transition-colors pb-0.5 ${
                  isActive(link.path)
                    ? 'border-b-2'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={
                  isActive(link.path)
                    ? { color: config.colors.primary, borderColor: config.colors.primary }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}

            {/* Phone CTA */}
            <a
              href="tel:0455327470"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all border-2 hover:text-white"
              style={{
                borderColor: config.colors.primary,
                color: config.colors.primary,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = config.colors.primary;
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = config.colors.primary;
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
              </svg>
              045 532 7470
            </a>
          </nav>

          {/* Mobile: show phone + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:0455327470"
              className="text-sm font-bold"
              style={{ color: config.colors.primary }}
            >
              045 532 7470
            </a>
            <button
              className="p-2 rounded-lg transition-colors"
              style={{ color: config.colors.text }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu openen"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
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
              href="tel:0455327470"
              className="mx-4 mt-3 px-4 py-3 text-sm font-semibold text-white rounded-lg text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary }}
            >
              Bel direct: 045 532 7470
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
