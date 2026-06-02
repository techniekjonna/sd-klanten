import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') return location.pathname === fullPath || location.pathname === fullPath + '/';
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top bar — amber background with dark text */}
      <div style={{ backgroundColor: config.colors.accent }}>
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
          <span className="text-xs font-semibold" style={{ color: config.colors.dark }}>
            24/7 bereikbaar — Kerkrade &amp; Parkstad Limburg
          </span>
          <a
            href={`tel:${config.contact.phone}`}
            className="text-xs font-bold flex items-center gap-1.5 transition-opacity hover:opacity-80"
            style={{ color: config.colors.dark }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1l-2.2 2.22z" />
            </svg>
            {config.contact.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main navy header */}
      <div style={{ backgroundColor: config.colors.primary }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Text logo */}
            <Link to={config.basePath + '/'} className="flex items-center gap-3 hover:opacity-85 transition-opacity">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
                style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
              >
                TCS
              </div>
              <div className="hidden sm:block">
                <p className="font-black text-sm leading-none text-white">Taxi Centrale Service</p>
                <p className="text-xs leading-none mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>Kerkrade</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive(link.path)
                      ? 'font-bold'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                  style={isActive(link.path) ? { color: config.colors.accent } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href={`tel:${config.contact.phone}`}
              className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all hover:opacity-90 shadow-md"
              style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
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
            <nav className="lg:hidden border-t border-white/15 py-3 flex flex-col gap-1">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive(link.path) ? 'bg-white/15' : 'text-white/75 hover:bg-white/10 hover:text-white'
                  }`}
                  style={isActive(link.path) ? { color: config.colors.accent } : {}}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${config.contact.phone}`}
                className="mt-2 px-4 py-3 text-sm font-bold text-center rounded-lg"
                style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
              >
                Bel direct: {config.contact.phoneDisplay}
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
