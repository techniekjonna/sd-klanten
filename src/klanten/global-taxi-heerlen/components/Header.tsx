import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';
import { Logo } from './Logo';

type NavItem = {
  label: string;
  path: string;
  dropdown?: { label: string; path: string }[];
};

const DropdownMenu = ({
  item,
  isActive,
  onClose,
}: {
  item: NavItem;
  isActive: (p: string) => boolean;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded ${
          isActive(item.path)
            ? 'text-white'
            : 'text-gray-300 hover:text-white'
        }`}
        style={isActive(item.path) ? { color: config.colors.accent } : {}}
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 overflow-hidden">
          {item.dropdown!.map((sub) => (
            <Link
              key={sub.path}
              to={config.basePath + sub.path}
              onClick={() => { setOpen(false); onClose(); }}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors border-b border-gray-50 last:border-0"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
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
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {(config.navigation as NavItem[]).map((item) =>
              item.dropdown ? (
                <DropdownMenu
                  key={item.path}
                  item={item}
                  isActive={isActive}
                  onClose={() => setMenuOpen(false)}
                />
              ) : (
                <Link
                  key={item.path}
                  to={config.basePath + item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                    isActive(item.path) ? '' : 'text-gray-300 hover:text-white'
                  }`}
                  style={isActive(item.path) ? { color: config.colors.accent } : {}}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <a
            href={`tel:${config.contact.phoneTel}`}
            className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-colors"
            style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {config.contact.phone}
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
          <nav
            className="lg:hidden border-t py-3 flex flex-col gap-1"
            style={{ borderColor: config.colors.gray }}
          >
            {(config.navigation as NavItem[]).map((item) => (
              <div key={item.path}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === item.path ? null : item.path
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white"
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${
                          mobileDropdownOpen === item.path ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileDropdownOpen === item.path && (
                      <div className="ml-4 border-l-2 pl-4" style={{ borderColor: config.colors.accent }}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={config.basePath + sub.path}
                            onClick={() => { setMenuOpen(false); setMobileDropdownOpen(null); }}
                            className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={config.basePath + item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                      isActive(item.path) ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                    style={isActive(item.path) ? { color: config.colors.accent } : {}}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={`tel:${config.contact.phoneTel}`}
              className="mx-4 mt-2 px-4 py-3 text-sm font-bold rounded-lg text-center"
              style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
            >
              📞 {config.contact.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
