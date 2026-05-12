import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-2 group">
    <img
      src="https://cdn.myonline.company/fit-in/300x100/filters:no_upscale()/2725/media/Logo-One-Taxi-1542737191.png"
      alt="OneTaxi Zuid-Limburg"
      className="h-10 w-auto object-contain"
      onError={(e) => {
        const t = e.currentTarget;
        t.style.display = 'none';
        const fallback = t.nextElementSibling as HTMLElement | null;
        if (fallback) fallback.style.display = 'flex';
      }}
    />
    <span className="items-center gap-0 font-black text-2xl tracking-tight hidden">
      <span className="text-black">TA</span>
      <span style={{ color: '#CC0000' }}>ONE</span>
      <span className="text-black">XI</span>
    </span>
  </Link>
);

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
    <>
      {/* Top bar */}
      <div className="bg-black text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-gray-400">
            Ma–Vr: {config.contact.hours.weekday} &nbsp;|&nbsp; {config.contact.hours.weekend}
          </span>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors font-medium"
            >
              📞 {config.contact.phone}
            </a>
            <a
              href="https://wa.me/31647727247"
              className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: config.colors.primary }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive(link.path)
                      ? 'bg-black text-yellow-400'
                      : 'text-black hover:bg-black/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${config.contact.phone}`}
                className="ml-3 px-5 py-2 text-sm font-bold text-white rounded-lg transition-all hover:opacity-90 shadow-sm"
                style={{ backgroundColor: '#CC0000' }}
              >
                📞 Bel Nu
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-black hover:bg-black/10 rounded-lg transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className="block w-6 h-0.5 bg-black mb-1.5" />
              <span className="block w-6 h-0.5 bg-black mb-1.5" />
              <span className="block w-6 h-0.5 bg-black" />
            </button>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <nav className="md:hidden border-t border-black/20 py-3 flex flex-col gap-1 pb-4">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={config.basePath + link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-black text-yellow-400'
                      : 'text-black hover:bg-black/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${config.contact.phone}`}
                className="mt-2 px-4 py-3 text-sm font-bold text-white rounded-lg text-center"
                style={{ backgroundColor: '#CC0000' }}
              >
                📞 {config.contact.phone}
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};
