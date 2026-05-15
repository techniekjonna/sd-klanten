import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const NAVY = '#1B3F6E';
const ORANGE = '#F97316';

const TaxiLogo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-2.5 group">
    <div className="flex-shrink-0">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill={NAVY}/>
        <rect x="6" y="20" width="24" height="9" rx="2" fill={ORANGE}/>
        <path d="M10 20 L13 14 L23 14 L26 20 Z" fill={ORANGE}/>
        <rect x="13.5" y="15" width="4" height="4" rx="1" fill={NAVY} opacity="0.8"/>
        <rect x="18.5" y="15" width="4" height="4" rx="1" fill={NAVY} opacity="0.8"/>
        <circle cx="11" cy="29" r="3" fill={NAVY}/>
        <circle cx="11" cy="29" r="1.5" fill="white" opacity="0.5"/>
        <circle cx="25" cy="29" r="3" fill={NAVY}/>
        <circle cx="25" cy="29" r="1.5" fill="white" opacity="0.5"/>
        <rect x="15" y="11" width="6" height="3" rx="1" fill="white" opacity="0.9"/>
        <text x="18" y="13.5" fontSize="2.5" textAnchor="middle" fill={NAVY} fontWeight="bold">TAXI</text>
      </svg>
    </div>
    <div className="leading-tight">
      <span className="block text-lg font-extrabold tracking-tight" style={{ color: NAVY }}>D&amp;M Taxi</span>
      <span className="block text-xs font-semibold tracking-wider uppercase" style={{ color: ORANGE }}>Parkstad</span>
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
          <TaxiLogo />

          <nav className="hidden md:flex items-center gap-7">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="text-sm font-medium transition-colors"
                style={isActive(link.path) ? { color: ORANGE } : { color: '#374151' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${config.contact.phone}`}
              className="text-sm font-semibold transition-colors"
              style={{ color: NAVY }}
            >
              045 570 03 00
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              Taxi Boeken
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
            <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
            <span className="block w-5 h-0.5 bg-gray-700" />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
                style={isActive(link.path) ? { backgroundColor: '#FFF7ED', color: ORANGE } : { color: '#374151' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-4 mt-2 px-4 py-2.5 text-sm font-bold rounded-lg text-center text-white"
              style={{ backgroundColor: NAVY }}
            >
              Bel 045 570 03 00
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
