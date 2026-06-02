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
    <header className="sticky top-0 z-50 bg-white border-b border-[#B8972A]/25 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link
            to={config.basePath + '/'}
            className="flex items-center gap-3 transition-opacity hover:opacity-85"
          >
            <img
              src="https://www.vandewalldienstverlening.nl/img/logovd_lrg.png"
              alt="Vandewall Dienstverlening"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-[#B8972A] border-b border-[#B8972A] pb-0.5'
                    : 'text-[#1A1209] hover:text-[#B8972A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors border border-[#B8972A] text-[#B8972A] hover:bg-[#B8972A] hover:text-white"
            >
              <span>📞</span>
              {config.contact.phone}
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-[#1A1209] hover:text-[#B8972A] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-[#B8972A]/15 py-4 flex flex-col gap-1 bg-white">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#B8972A] bg-[#B8972A]/8'
                    : 'text-[#1A1209] hover:text-[#B8972A] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-4 mt-2 px-4 py-3 text-sm font-semibold text-white bg-[#B8972A] text-center"
            >
              {config.contact.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
