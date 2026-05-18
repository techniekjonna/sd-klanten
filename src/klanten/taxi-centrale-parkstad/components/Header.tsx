import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-3 hover:opacity-85 transition-opacity">
    <img
      src="https://www.taxicentraleparkstad.nl/smarty/wireframe01/media/images/Taxicentrale-Parkstad-logo.png"
      alt="Taxi Centrale Parkstad"
      className="h-12 w-auto"
      onError={e => {
        (e.currentTarget as HTMLImageElement).style.display = 'none';
        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
        if (fallback) fallback.style.display = 'flex';
      }}
    />
    <div style={{ display: 'none' }} className="items-center gap-1">
      <span className="font-black text-xl tracking-tight" style={{ color: config.colors.accent }}>TCP</span>
      <span className="text-sm font-semibold" style={{ color: config.colors.primary }}>Taxi Centrale Parkstad</span>
    </div>
  </Link>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') return location.pathname === fullPath;
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: config.colors.primary }}>
      {/* Top bar */}
      <div className="border-b border-white/10" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
          <span className="text-xs text-white/60">Dag & nacht bereikbaar — Heerlen, Landgraaf, Kerkrade en omgeving</span>
          <a
            href={`tel:${config.contact.phone}`}
            className="text-xs font-bold transition-colors"
            style={{ color: config.colors.accent }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'text-white font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                style={isActive(link.path) ? { color: config.colors.accent } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${config.contact.phone}`}
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: config.colors.accent, color: '#1C2B26' }}
          >
            Bel direct
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
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
          <nav className="lg:hidden border-t border-white/20 py-3 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(link.path) ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
                style={isActive(link.path) ? { color: config.colors.accent } : {}}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mt-2 mx-0 px-4 py-3 text-sm font-bold text-center rounded-lg"
              style={{ backgroundColor: config.colors.accent, color: '#1C2B26' }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
