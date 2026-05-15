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

  const active = isActive(item.path);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors rounded-lg"
        style={{ color: active ? config.colors.accent : 'rgba(255,255,255,0.75)' }}
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-52 rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden"
          style={{ backgroundColor: '#1f1f1f', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {item.dropdown!.map((sub) => (
            <Link
              key={sub.path}
              to={config.basePath + sub.path}
              onClick={() => { setOpen(false); onClose(); }}
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-colors group"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0 transition-all"
                style={{ backgroundColor: config.colors.accent }}
              />
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
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(18,18,18,0.97)' : config.colors.dark,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[68px]">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {(config.navigation as NavItem[]).map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.path} item={item} isActive={isActive} onClose={() => setMenuOpen(false)} />
              ) : (
                <Link
                  key={item.path}
                  to={config.basePath + item.path}
                  className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                  style={{ color: isActive(item.path) ? config.colors.accent : 'rgba(255,255,255,0.75)' }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Phone CTA */}
          <a
            href={`tel:${config.contact.phoneTel}`}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all hover:scale-105"
            style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {config.contact.phone}
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'rgba(255,255,255,0.8)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="lg:hidden py-4 flex flex-col gap-0.5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {(config.navigation as NavItem[]).map((item) => (
              <div key={item.path}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.path ? null : item.path)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold rounded-lg"
                      style={{ color: 'rgba(255,255,255,0.75)' }}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform ${mobileDropdown === item.path ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileDropdown === item.path && (
                      <div className="ml-4 pl-4 py-1 flex flex-col gap-0.5" style={{ borderLeft: `2px solid ${config.colors.accent}` }}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={config.basePath + sub.path}
                            onClick={() => { setMenuOpen(false); setMobileDropdown(null); }}
                            className="block px-3 py-2 text-sm rounded-lg"
                            style={{ color: 'rgba(255,255,255,0.6)' }}
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
                    className="block px-4 py-2.5 text-sm font-semibold rounded-lg"
                    style={{ color: isActive(item.path) ? config.colors.accent : 'rgba(255,255,255,0.75)' }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={`tel:${config.contact.phoneTel}`}
              className="mt-3 mx-2 flex items-center justify-center gap-2 py-3.5 text-sm font-bold rounded-xl"
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
