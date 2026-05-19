import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') {
      return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    }
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to={config.basePath + '/'} className="flex-shrink-0">
            <img
              src="https://d1zviajkun9gxg.cloudfront.net/user/prod/2023/10/23/de-marktwijzer-2003f70a-3a5d-490c-b9a3-19ca6018730b.png"
              alt="Taxi Nelissen"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav – all 7 links */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-orange-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone – prominent, orange */}
          <a
            href={`tel:${config.contact.phoneHref}`}
            className="hidden md:flex items-center gap-2 font-bold text-sm whitespace-nowrap flex-shrink-0 transition-opacity hover:opacity-80"
            style={{ color: config.colors.primary }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {config.contact.phone}
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-700 hover:bg-orange-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phoneHref}`}
              className="mx-4 mt-3 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white"
              style={{ backgroundColor: config.colors.primary }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {config.contact.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
