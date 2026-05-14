import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-3 group">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="10" fill={config.colors.primary} />
      <path d="M9 22l3-8h12l3 8H9z" fill="white" opacity="0.15" />
      <path d="M8 22h20v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2z" fill="white" />
      <path d="M11 22l2.5-7h9l2.5 7H11z" fill="white" />
      <circle cx="12" cy="24.5" r="1.5" fill={config.colors.primary} />
      <circle cx="24" cy="24.5" r="1.5" fill={config.colors.primary} />
      <rect x="15" y="17" width="6" height="3" rx="0.5" fill={config.colors.primary} opacity="0.6" />
    </svg>
    <div>
      <span className="block text-[11px] font-semibold tracking-widest uppercase text-gray-400 leading-none">Taxibedrijf</span>
      <span className="block text-lg font-black tracking-tight leading-none" style={{ color: config.colors.dark }}>Knol</span>
    </div>
  </Link>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const full = config.basePath + path;
    if (path === '/') return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    return location.pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-3">
          <Logo />

          <nav className="hidden md:flex items-center gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${config.contact.phone}`}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-[1.02] shadow-md shadow-orange-200"
            style={{ backgroundColor: config.colors.primary }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {config.contact.phoneDisplay}
          </a>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-4">
          {config.navigation.map((link) => (
            <Link
              key={link.path}
              to={config.basePath + link.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl my-1 text-sm font-medium transition-colors ${
                isActive(link.path) ? 'text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${config.contact.phone}`}
            className="flex items-center justify-center gap-2 mt-3 py-3 rounded-xl text-sm font-bold text-white"
            style={{ backgroundColor: config.colors.primary }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
};
