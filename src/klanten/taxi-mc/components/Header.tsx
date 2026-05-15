import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

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
    <header className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: config.colors.dark }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={config.basePath + '/'} className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-yellow-400">
              <img
                src="https://taxi-willem.nl/wp-content/uploads/2025/09/cropped-TaxiMC-Favicon25.png"
                alt="Taxi MC logo"
                className="w-full h-full object-cover"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <span className="text-white font-black text-xl tracking-tight">
              Taxi <span style={{ color: config.colors.primary }}>MC</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="px-3 py-2 text-sm font-medium rounded-md transition-all"
                style={
                  isActive(link.path)
                    ? { backgroundColor: config.colors.primary, color: '#000' }
                    : { color: '#d1d5db' }
                }
                onMouseEnter={e => { if (!isActive(link.path)) (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={e => { if (!isActive(link.path)) (e.currentTarget as HTMLElement).style.color = '#d1d5db'; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA phone */}
          <a
            href={`tel:${config.contact.phone}`}
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: config.colors.primary }}
          >
            <span>📞</span>
            <span>{config.contact.phoneDisplay}</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <span className="text-xl font-bold">✕</span>
            ) : (
              <div>
                <span className="block w-5 h-0.5 bg-current mb-1.5" />
                <span className="block w-5 h-0.5 bg-current mb-1.5" />
                <span className="block w-5 h-0.5 bg-current" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="lg:hidden border-t py-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <nav className="flex flex-col gap-1 mb-4">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium rounded-lg transition-all"
                  style={
                    isActive(link.path)
                      ? { backgroundColor: config.colors.primary, color: '#000', fontWeight: 700 }
                      : { color: '#d1d5db' }
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center justify-center gap-2 mx-4 px-4 py-3 rounded-lg font-bold text-sm text-black"
              style={{ backgroundColor: config.colors.primary }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
