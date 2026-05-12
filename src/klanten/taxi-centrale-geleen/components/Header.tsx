import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';
import { Logo } from './Logo';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: config.colors.dark, borderBottom: '1px solid #2a2a2a' }}>
      {/* Top bar */}
      <div style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid #222' }}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs" style={{ color: '#888' }}>
          <span>📞 <a href={`tel:${config.contact.phone}`} className="hover:text-yellow-400 transition-colors" style={{ color: '#ccc' }}>{config.contact.phoneDisplay}</a></span>
          <span>🕐 24 uur per dag, 7 dagen per week beschikbaar</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to={config.basePath + '/'} className="hover:opacity-90 transition-opacity">
            <Logo dark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="px-4 py-2 text-sm font-semibold transition-all rounded"
                style={
                  isActive(link.path)
                    ? { backgroundColor: config.colors.primary, color: '#111111' }
                    : { color: '#cccccc' }
                }
                onMouseEnter={e => { if (!isActive(link.path)) (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
                onMouseLeave={e => { if (!isActive(link.path)) (e.currentTarget as HTMLElement).style.color = '#cccccc'; }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="ml-4 px-5 py-2 text-sm font-bold rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary, color: '#111111' }}
            >
              📞 Bel Nu
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: '#cccccc' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-1" style={{ borderTop: '1px solid #2a2a2a' }}>
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold rounded transition-colors"
                style={
                  isActive(link.path)
                    ? { backgroundColor: config.colors.primary, color: '#111111' }
                    : { color: '#cccccc' }
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-0 mt-2 px-4 py-3 text-sm font-bold rounded text-center"
              style={{ backgroundColor: config.colors.primary, color: '#111111' }}
            >
              📞 Bel {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
