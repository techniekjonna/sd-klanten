import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const { darkBlue, yellow, lightBlue } = config.colors;

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
    <img
      src="https://uwtaxiheerlen.nl/Trial%20kleur/images%20kleur/Hoofdlogo%20kleur2.gif"
      alt="Uw Taxi Heerlen"
      className="h-14 w-auto object-contain"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = 'none';
      }}
    />
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
