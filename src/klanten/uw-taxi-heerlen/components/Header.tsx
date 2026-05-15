import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const { darkBlue, yellow, lightBlue } = config.colors;

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center hover:opacity-90 transition-opacity">
    <svg width="180" height="52" viewBox="0 0 180 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left arrow shape (dark blue, pointing left) */}
      <path d="M44 4 L12 26 L44 48 L44 36 L70 36 L70 16 L44 16 Z" fill={darkBlue} />
      {/* Right arrow 1 (yellow) */}
      <path d="M58 10 L58 20 L78 20 L78 10 Z" fill={yellow} />
      <path d="M78 10 L90 16 L78 22 Z" fill={yellow} />
      {/* Right arrow 2 (yellow, offset) */}
      <path d="M58 30 L58 40 L78 40 L78 30 Z" fill={yellow} />
      <path d="M78 30 L90 36 L78 42 Z" fill={yellow} />
      {/* "Uw" text */}
      <text x="96" y="22" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill={darkBlue} letterSpacing="0.5">Uw</text>
      {/* "TAXI" text */}
      <text x="94" y="38" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="900" fill={darkBlue} letterSpacing="1">TAXI</text>
      {/* "HEERLEN" bar */}
      <rect x="94" y="42" width="80" height="9" fill={darkBlue} rx="1" />
      <text x="134" y="50" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill={yellow} letterSpacing="2" textAnchor="middle">HEERLEN</text>
    </svg>
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
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: lightBlue }}>
      {/* Top bar */}
      <div style={{ backgroundColor: darkBlue }} className="py-1.5 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-white/70 text-xs">Betrouwbaar taxivervoer in Heerlen & omgeving</span>
          <a href={`tel:${config.contact.phone}`} className="font-bold text-sm" style={{ color: yellow }}>
            📞 {config.contact.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-lg transition-all"
                style={
                  isActive(link.path)
                    ? { backgroundColor: darkBlue, color: yellow }
                    : { color: darkBlue }
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${config.contact.phone}`}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg"
            style={{ backgroundColor: yellow, color: darkBlue }}
          >
            <span>📞</span>
            <span>{config.contact.phoneDisplay}</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: darkBlue }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden border-t py-3 flex flex-col gap-1 pb-4" style={{ borderColor: darkBlue + '30' }}>
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold uppercase tracking-wide rounded-lg"
                style={
                  isActive(link.path)
                    ? { backgroundColor: darkBlue, color: yellow }
                    : { color: darkBlue }
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mt-2 px-4 py-3 text-sm font-bold rounded-lg text-center"
              style={{ backgroundColor: yellow, color: darkBlue }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
