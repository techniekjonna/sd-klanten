import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const full = config.basePath + path;
    return location.pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div style={{ backgroundColor: config.colors.primary }} className="text-white text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 py-3">
            {/* Logo */}
            <Link to={config.basePath + '/'} className="flex-shrink-0">
              <img
                src={config.logo}
                alt="Taxi Sittard"
                className="h-9 object-contain"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = 'none';
                  if (el.nextElementSibling) {
                    (el.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
              <span
                className="text-xl font-bold hidden"
                style={{ color: config.colors.accent }}
              >
                Taxi Sittard
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {/* Regio */}
              <div className="flex items-center gap-2 text-gray-300">
                <span style={{ color: config.colors.accent }}>📍</span>
                <div className="text-xs leading-tight">
                  <div className="font-semibold text-white">Regio</div>
                  <div>{config.contact.region}</div>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${config.contact.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <span style={{ color: config.colors.accent }}>✉</span>
                <div className="text-xs leading-tight">
                  <div className="font-semibold text-white">E-mail</div>
                  <div>{config.contact.email}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center gap-2 hover:opacity-90 transition-opacity px-4 py-2 rounded-lg"
                style={{ backgroundColor: config.colors.accent }}
              >
                <span className="text-white font-bold">📞</span>
                <span className="font-bold text-white text-sm">{config.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Mobile phone */}
            <a
              href={`tel:${config.contact.phone}`}
              className="md:hidden flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
              style={{ backgroundColor: config.colors.accent }}
            >
              📞 Bel nu
            </a>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div style={{ backgroundColor: '#0d1b35' }} className="border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  className={`px-4 h-12 flex items-center text-xs font-bold uppercase tracking-wide transition-colors border-b-2 ${
                    isActive(link.path)
                      ? 'text-white border-current'
                      : 'text-gray-400 hover:text-white border-transparent hover:border-gray-600'
                  }`}
                  style={isActive(link.path) ? { color: config.colors.accent, borderColor: config.colors.accent } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* BOEK NU CTA */}
            <Link
              to={config.basePath + '/contact'}
              className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.accent }}
            >
              Boek Nu →
            </Link>

            {/* Mobile toggle */}
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

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: '#0d1b35' }} className="border-t border-white/10 md:hidden">
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={isActive(link.path) ? { backgroundColor: config.colors.accent } : {}}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={config.basePath + '/contact'}
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-2.5 text-sm font-bold text-white rounded-lg text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: config.colors.accent }}
              >
                Boek Nu →
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
