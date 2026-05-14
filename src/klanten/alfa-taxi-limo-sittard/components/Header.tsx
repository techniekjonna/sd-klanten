import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { primary, accent, text } = config.colors;

  const isActive = (path: string) => {
    const full = config.basePath + path;
    if (path === '/') return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    return location.pathname.startsWith(full);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 text-xs text-gray-500">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <span style={{ color: primary }}>📍</span>
                Regio Sittard-Geleen, Netherlands
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: primary }}>✉️</span>
                {config.contact.email}
              </span>
            </div>
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-1.5 font-semibold transition-colors hover:opacity-80"
              style={{ color: primary }}
            >
              📞 {config.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to={config.basePath + '/'} className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-base"
                style={{ backgroundColor: accent }}
              >
                🚕
              </div>
              <div className="leading-none">
                <div className="text-base font-black tracking-tight" style={{ color: text }}>
                  ALFA <span style={{ color: primary }}>TAXI</span>
                </div>
                <div className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-0.5">
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
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={
                    isActive(link.path)
                      ? { color: primary, backgroundColor: config.colors.primaryLight }
                      : { color: '#64748B' }
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${config.contact.phone}`}
                className="text-sm font-bold transition-opacity hover:opacity-80"
                style={{ color: primary }}
              >
                {config.contact.phone}
              </a>
              <Link
                to={config.basePath + '/tarieven'}
                className="px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-opacity hover:opacity-90 shadow-sm"
                style={{ backgroundColor: accent }}
              >
                Boek Nu →
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ backgroundColor: menuOpen ? config.colors.primaryLight : 'transparent' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-gray-700 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={
                    isActive(link.path)
                      ? { color: primary, backgroundColor: config.colors.primaryLight }
                      : { color: '#475569' }
                  }
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${config.contact.phone}`}
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3.5 text-sm font-bold text-white rounded-xl text-center"
                style={{ backgroundColor: accent }}
              >
                📞 {config.contact.phone}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-2xl border-t border-gray-200">
        <a
          href={`tel:${config.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white"
          style={{ backgroundColor: accent }}
        >
          📞 Bel Direct
        </a>
        <Link
          to={config.basePath + '/tarieven'}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white"
          style={{ backgroundColor: primary }}
        >
          📋 Boek Online
        </Link>
      </div>
    </>
  );
};
