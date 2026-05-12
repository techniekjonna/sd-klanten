import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="hover:opacity-80 transition-opacity inline-flex items-center">
    {/*
      Recreate the Taxi 046 logo: "TAXI 046" text with a large C-arc
      overlapping from the right. The arc is taller than the text and
      sits partially behind it, opening to the top-left.
    */}
    <span className="relative inline-flex items-center">
      {/* Text sits in front (z-10) */}
      <span className="font-black text-[1.6rem] tracking-tight text-black leading-none z-10 relative">
        TAXI 046
      </span>
      {/* Large arc: absolute, extends above and below the text */}
      <svg
        viewBox="0 0 56 72"
        className="absolute -right-6 h-14 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        {/*
          Circle center: (28, 36), radius 28.
          Arc from top (28, 8) sweeping clockwise ~300° to top-left gap.
          Opens at top-left (roughly 11 o'clock position).
        */}
        <path
          d="M 28 8 A 28 28 0 1 1 7 19"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
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
