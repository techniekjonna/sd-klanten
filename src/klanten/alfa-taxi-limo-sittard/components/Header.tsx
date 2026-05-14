import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { primary, accent, dark } = config.colors;

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') {
      return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    }
    return location.pathname.startsWith(fullPath);
  };

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: dark }} className="hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 text-xs text-white/60">
            <div className="flex items-center gap-6">
              <span>📍 Vildershof 11, 6162 JM Geleen</span>
              <span>🕐 24/7 bereikbaar</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${config.contact.email}`}
                className="hover:text-white transition-colors"
              >
                ✉️ {config.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: dark }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={config.basePath + '/'} className="flex items-center gap-2.5 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0"
                style={{ backgroundColor: accent }}
              >
                🚕
              </div>
              <div className="leading-tight">
                <span className="text-white font-black text-lg tracking-tight">ALFA</span>
                <span className="font-black text-lg tracking-tight ml-1" style={{ color: accent }}>
                  TAXI
                </span>
                <div className="text-white/40 text-[10px] font-medium uppercase tracking-widest -mt-0.5">
                  Limo Sittard
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  style={isActive(link.path) ? { backgroundColor: primary } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${config.contact.phone}`}
                className="text-sm font-bold transition-colors hover:text-white"
                style={{ color: accent }}
              >
                {config.contact.phone}
              </a>
              <Link
                to={config.basePath + '/tarieven'}
                className="px-5 py-2 text-sm font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                Boek Nu
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: dark }}>
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(link.path) ? 'text-white' : 'text-white/70'
                  }`}
                  style={isActive(link.path) ? { backgroundColor: primary } : {}}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${config.contact.phone}`}
                onClick={() => setMenuOpen(false)}
                className="mt-3 mx-0 px-4 py-3 text-sm font-bold text-white rounded-xl text-center"
                style={{ backgroundColor: accent }}
              >
                📞 {config.contact.phone}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile sticky bottom bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-2xl border-t"
        style={{ backgroundColor: dark, borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="flex">
          <a
            href={`tel:${config.contact.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white"
            style={{ backgroundColor: accent }}
          >
            <span>📞</span>
            <span>Bel Direct</span>
          </a>
          <Link
            to={config.basePath + '/tarieven'}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white"
            style={{ backgroundColor: primary }}
          >
            <span>📋</span>
            <span>Boek Online</span>
          </Link>
        </div>
      </div>
    </>
  );
};
