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
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-2" style={{ borderColor: config.colors.accent }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to={config.basePath + '/'} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img
              src={config.logo}
              alt={config.name}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-700 hover:text-white hover:opacity-80'
                }`}
                style={isActive(link.path)
                  ? { backgroundColor: config.colors.primary }
                  : { ['--hover-bg' as string]: config.colors.primary }
                }
                onMouseEnter={e => { if (!isActive(link.path)) (e.currentTarget as HTMLElement).style.backgroundColor = config.colors.primary; }}
                onMouseLeave={e => { if (!isActive(link.path)) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="ml-3 px-5 py-2.5 text-sm font-bold text-white rounded-lg transition-opacity hover:opacity-90 flex items-center gap-2"
              style={{ backgroundColor: config.colors.accent }}
            >
              <span>📞</span>
              <span>{config.contact.phoneDisplay}</span>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ color: config.colors.primary }}
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-2 px-4 py-2.5 text-sm font-bold text-white rounded-lg text-center"
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
