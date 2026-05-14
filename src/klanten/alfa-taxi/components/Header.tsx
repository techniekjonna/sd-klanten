import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.startsWith(config.basePath + path);

  return (
    <header style={{ backgroundColor: config.colors.primary, borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo linksboven */}
          <Link to={config.basePath + '/'} className="flex-shrink-0">
            <img
              src="/cropped-logo.png"
              alt={config.name}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 mr-2">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  className="text-sm font-medium transition-all"
                  style={{
                    color: isActive(link.path) ? config.colors.accent : 'rgba(255,255,255,0.75)',
                    borderBottom: isActive(link.path) ? `2px solid ${config.colors.accent}` : '2px solid transparent',
                    paddingBottom: '2px',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Bel Nu knop */}
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg border-2 transition-all hover:opacity-80"
              style={{
                borderColor: config.colors.accent,
                color: config.colors.accent,
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Bel Nu
            </a>

            {/* Nu Boeken knop */}
            <Link
              to={config.basePath + '/boeken'}
              className="px-5 py-2.5 text-sm font-bold rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.accent, color: '#000' }}
            >
              Nu Boeken
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-opacity hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.85)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="md:hidden border-t py-4 flex flex-col gap-1"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                style={{
                  color: isActive(link.path) ? '#000' : 'rgba(255,255,255,0.8)',
                  backgroundColor: isActive(link.path) ? config.colors.accent : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mx-4 mt-3">
              <a
                href={`tel:${config.contact.phone}`}
                onClick={() => setMenuOpen(false)}
                className="flex-1 px-4 py-3 text-sm font-bold rounded-lg border-2 text-center"
                style={{ borderColor: config.colors.accent, color: config.colors.accent }}
              >
                Bel Nu
              </a>
              <Link
                to={config.basePath + '/boeken'}
                onClick={() => setMenuOpen(false)}
                className="flex-1 px-4 py-3 text-sm font-bold rounded-lg text-center"
                style={{ backgroundColor: config.colors.accent, color: '#000' }}
              >
                Nu Boeken
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
