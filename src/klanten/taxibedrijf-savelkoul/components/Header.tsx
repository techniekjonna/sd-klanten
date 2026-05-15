import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-2.5 flex-shrink-0">
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-white text-lg"
      style={{ backgroundColor: config.colors.accent }}
    >
      S
    </div>
    <div className="leading-tight">
      <div className="font-extrabold text-white text-sm tracking-wide">SAVELKOUL</div>
      <div className="text-xs font-medium tracking-widest uppercase" style={{ color: config.colors.accent }}>
        Taxi
      </div>
    </div>
  </Link>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(config.basePath + path);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div style={{ backgroundColor: config.colors.primary }} className="text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-3">
            <Logo />

            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <span style={{ color: config.colors.accent }}>📍</span>
                <span className="text-xs">{config.contact.region}</span>
              </div>
              <a
                href={`mailto:${config.contact.email}`}
                className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-xs"
              >
                <span style={{ color: config.colors.accent }}>✉</span>
                {config.contact.email}
              </a>
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: config.colors.accent }}
              >
                📞 {config.contact.phoneDisplay}
              </a>
            </div>

            <a
              href={`tel:${config.contact.phone}`}
              className="md:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white"
              style={{ backgroundColor: config.colors.accent }}
            >
              📞 Bel nu
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ backgroundColor: '#122b1f' }} className="border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-11">
            <nav className="hidden md:flex items-center">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  className={`px-4 h-11 flex items-center text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                    isActive(link.path)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white border-transparent'
                  }`}
                  style={
                    isActive(link.path)
                      ? { color: config.colors.accent, borderColor: config.colors.accent }
                      : { borderColor: 'transparent' }
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              to={config.basePath + '/contact'}
              className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.accent }}
            >
              Nu Boeken →
            </Link>

            <button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className="block w-5 h-0.5 bg-current mb-1.5" />
              <span className="block w-5 h-0.5 bg-current mb-1.5" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ backgroundColor: '#122b1f' }} className="border-t border-white/10 md:hidden">
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={isActive(link.path) ? { backgroundColor: config.colors.accent } : {}}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={config.basePath + '/contact'}
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-2.5 text-sm font-bold text-white rounded-lg text-center"
                style={{ backgroundColor: config.colors.accent }}
              >
                Nu Boeken →
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
