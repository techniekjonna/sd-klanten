import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-black text-2xl tracking-tight leading-none">TAXI</span>
              <span className="relative inline-flex items-center ml-2">
                <span className="font-black text-2xl tracking-tight leading-none">046</span>
                <svg viewBox="0 0 36 36" className="ml-1 w-7 h-7" fill="none">
                  <path d="M18 3 A15 15 0 1 1 3 18" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">{config.tagline}</p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-gray-400">Menu</h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-gray-400">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors flex items-center gap-2">
                  <span>📞</span>
                  <span>{config.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors flex items-center gap-2">
                  <span>✉️</span>
                  <span>{config.contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>24/7 bereikbaar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {year} Taxi 046. KvK: {config.contact.kvk}. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a
              href="https://sandedesign.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
