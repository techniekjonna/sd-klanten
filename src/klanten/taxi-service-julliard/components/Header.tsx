import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    return location.pathname.startsWith(fullPath);
  };

  // Split navigation: main links vs secondary (airport booking/pricing)
  const mainNav = config.navigation.slice(0, 7);
  const secondaryNav = config.navigation.slice(7);

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: config.colors.primary }}>
      {/* Top bar: phone + secondary nav */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 text-xs">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors font-medium"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {config.contact.phoneDisplay}
            </a>
            <div className="hidden md:flex items-center gap-4">
              {secondaryNav.map(link => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  className={`font-medium transition-colors uppercase tracking-wide ${
                    isActive(link.path) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to={config.basePath + '/'} className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <img
              src={config.logo}
              alt="Taxiservice Julliard"
              className="h-10 brightness-0 invert"
              onError={e => {
                const t = e.currentTarget;
                t.style.display = 'none';
                const next = t.nextElementSibling as HTMLElement | null;
                if (next) next.style.display = 'block';
              }}
            />
            <span className="hidden text-white font-bold text-lg">Taxiservice Julliard</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {mainNav.map(link => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${config.contact.phone}`}
            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors text-white border border-white/30 hover:bg-white/10"
          >
            Bel direct
          </a>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="xl:hidden border-t border-white/10 py-3 flex flex-col gap-1">
            {config.navigation.map(link => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                  isActive(link.path) ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-0 mt-2 px-4 py-3 rounded-lg text-sm font-bold text-center"
              style={{ backgroundColor: config.colors.accent }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
