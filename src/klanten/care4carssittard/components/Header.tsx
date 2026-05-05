import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const fontBody = "'Barlow', sans-serif";
const fontCondensed = "'Barlow Condensed', sans-serif";

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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo — matches screenshot: CARE4CARS condensed bold all-caps */}
          <Link
            to={config.basePath + '/'}
            className="flex items-center gap-0 hover:opacity-80 transition-opacity"
            style={{ fontFamily: fontCondensed, fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0.05em', textDecoration: 'none' }}
          >
            <span style={{ color: '#1F2937' }}>CARE</span>
            <span style={{ color: config.colors.primary, fontWeight: 800 }}>4</span>
            <span style={{ color: '#1F2937' }}>CARS</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'border-b-2 pb-0.5' : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{
                  fontFamily: fontBody,
                  ...(isActive(link.path) ? { color: config.colors.primary, borderColor: config.colors.primary } : {}),
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={config.hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary, fontFamily: fontBody }}
            >
              Afspraak Maken
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
                style={{
                  fontFamily: fontBody,
                  ...(isActive(link.path) ? { backgroundColor: config.colors.primary } : {}),
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={config.hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-2 px-4 py-2 text-sm font-semibold text-white rounded-lg text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary, fontFamily: fontBody }}
            >
              Afspraak Maken
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
