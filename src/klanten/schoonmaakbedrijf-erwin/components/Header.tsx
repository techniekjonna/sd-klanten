import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header
      className="sticky top-0 z-50 shadow-lg"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo — geen icoon, tekst met Erwin prominent */}
          <Link to={config.basePath + '/'} className="flex flex-col leading-none group">
            <span className="text-xs font-medium text-blue-200 uppercase tracking-widest">
              Schoonmaakbedrijf
            </span>
            <span className="text-2xl font-black text-white tracking-tight group-hover:text-blue-100 transition-colors">
              Erwin
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-white/20 text-white'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-5 bg-white/20 mx-2" />

            <a
              href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              WhatsApp
            </a>
            <Link
              to={config.basePath + '/afspraak'}
              className="px-4 py-2 text-sm font-bold rounded-lg transition-colors"
              style={{ backgroundColor: config.colors.primaryDark, color: '#fff' }}
            >
              Afspraak Maken
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">✕</span>
            ) : (
              <div>
                <span className="block w-6 h-0.5 bg-white mb-1.5" />
                <span className="block w-6 h-0.5 bg-white mb-1.5" />
                <span className="block w-6 h-0.5 bg-white" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="md:hidden border-t py-4 flex flex-col gap-1"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(link.path) ? 'bg-white/20 text-white' : 'text-blue-100 hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3">
              <a
                href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex-1 py-2.5 text-sm font-semibold text-white rounded-lg text-center"
                style={{ backgroundColor: '#25D366' }}
              >
                WhatsApp
              </a>
              <Link
                to={config.basePath + '/afspraak'}
                onClick={() => setMenuOpen(false)}
                className="flex-1 py-2.5 text-sm font-bold text-white rounded-lg text-center transition-colors"
                style={{ backgroundColor: config.colors.primaryDark }}
              >
                Afspraak Maken
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
