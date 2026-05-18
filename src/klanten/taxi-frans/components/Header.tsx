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
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: config.colors.primary }}>
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
          <a
            href={`tel:${(config as any).contact.phone}`}
            className="text-sm font-semibold hover:opacity-80 transition-opacity flex items-center gap-1.5"
            style={{ color: '#E8A020' }}
          >
            <span>📞</span>
            {(config as any).contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${config.contact.email}`}
            className="text-xs text-white/60 hover:text-white transition-colors hidden sm:block"
          >
            {config.contact.email}
          </a>
          <span className="text-xs text-white/60">
            24/7 · 7 dagen per week
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={config.basePath + '/'} className="flex items-end gap-0 leading-none group">
            <span className="text-2xl font-black text-white tracking-tight group-hover:text-amber-100 transition-colors">
              Taxi
            </span>
            <span className="text-2xl font-black tracking-tight" style={{ color: '#E8A020' }}>
              Frans
            </span>
            <span className="text-[10px] font-medium text-white/50 ml-1.5 mb-0.5 italic self-end">
              de goedkoopste
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-white/20 text-white'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${(config as any).contact.phone}`}
              className="ml-3 px-5 py-2 text-sm font-bold rounded-lg transition-all hover:brightness-110 shadow-md"
              style={{ backgroundColor: '#E8A020', color: config.colors.primary }}
            >
              Boek nu
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
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
          <nav className="md:hidden border-t border-white/10 py-4 flex flex-col gap-1 pb-4">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path) ? 'bg-white/20 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${(config as any).contact.phone}`}
              className="mx-4 mt-2 px-4 py-3 text-sm font-bold rounded-lg text-center"
              style={{ backgroundColor: '#E8A020', color: config.colors.primary }}
            >
              📞 {(config as any).contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
