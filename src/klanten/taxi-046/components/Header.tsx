import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-0 hover:opacity-80 transition-opacity">
    <span className="font-black text-2xl tracking-tight text-black leading-none">TAXI</span>
    <span className="relative inline-flex items-center ml-2">
      <span className="font-black text-2xl tracking-tight text-black leading-none">046</span>
      <svg
        viewBox="0 0 36 36"
        className="ml-1 w-8 h-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 3 A15 15 0 1 1 3 18"
          stroke="black"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  </Link>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors rounded ${
                  isActive(link.path)
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${config.contact.phone}`}
            className="hidden lg:flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-colors"
          >
            <span>📞</span>
            <span>{config.contact.phoneDisplay}</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-3 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-semibold uppercase tracking-wide rounded transition-colors ${
                  isActive(link.path) ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-0 mt-2 px-4 py-3 bg-black text-white text-sm font-bold rounded text-center"
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
