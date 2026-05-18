import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const DARK = config.colors.dark;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') {
      return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    }
    return location.pathname.startsWith(fullPath);
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div style={{ backgroundColor: DARK }} className="hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 text-xs text-white/70">
            <span>{config.contact.address}, {config.contact.city}</span>
            <div className="flex items-center gap-6">
              <span style={{ color: PRIMARY }} className="font-semibold">{config.contact.hours}</span>
              <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                {config.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={config.basePath + '/'} className="flex-shrink-0">
            <img
              src={config.logo}
              alt={config.name}
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {config.navigation.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.children ? handleMouseEnter(link.label) : undefined}
                onMouseLeave={link.children ? handleMouseLeave : undefined}
              >
                <Link
                  to={config.basePath + link.path}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all rounded-lg hover:bg-gray-50"
                  style={{
                    color: isActive(link.path) ? DARK : '#555',
                    borderBottom: isActive(link.path) ? `2px solid ${PRIMARY}` : '2px solid transparent',
                  }}
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[220px] py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={config.basePath + child.path}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-black transition-colors"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: PRIMARY }}
                        />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA + phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 text-sm font-bold"
              style={{ color: DARK }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-5 py-2.5 text-sm font-bold rounded-xl transition-all hover:opacity-90 shadow-sm"
              style={{ backgroundColor: PRIMARY, color: DARK }}
            >
              Direct Boeken
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container mx-auto px-4 py-3 flex flex-col">
            {config.navigation.map((link) => (
              <div key={link.path}>
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold uppercase tracking-wide text-gray-800 hover:bg-gray-50 rounded-lg"
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="ml-4 mb-2 border-l-2 pl-4" style={{ borderColor: PRIMARY }}>
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={config.basePath + child.path}
                            className="block py-2 text-sm text-gray-600 hover:text-black transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={config.basePath + link.path}
                    className="block px-3 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg hover:bg-gray-50"
                    style={{ color: isActive(link.path) ? DARK : '#555' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm border-2"
                style={{ borderColor: DARK, color: DARK }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {config.contact.phoneDisplay}
              </a>
              <Link
                to={config.basePath + '/contact'}
                className="flex items-center justify-center px-4 py-3 rounded-xl font-bold text-sm"
                style={{ backgroundColor: PRIMARY, color: DARK }}
                onClick={() => setMenuOpen(false)}
              >
                Direct Boeken
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
