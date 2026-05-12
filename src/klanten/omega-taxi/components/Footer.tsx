import { Link } from 'react-router-dom';
import { config } from '../config';

const ACCENT = '#F5C842';
const MUTED = 'rgba(255,255,255,0.45)';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#222222' }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <img
              src={config.logo}
              alt={config.name}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
              {config.tagline}
            </p>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
              Diensten
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
              <li>
                <Link to={config.basePath + '/taxi-service'} className="hover:text-white transition-colors">
                  Groepsvervoer
                </Link>
              </li>
              <li>
                <Link to={config.basePath + '/zakelijke-service'} className="hover:text-white transition-colors">
                  Chauffeursdiensten
                </Link>
              </li>
              <li>
                <Link to={config.basePath + '/airport-service'} className="hover:text-white transition-colors">
                  Airport Service
                </Link>
              </li>
              <li>
                <Link to={config.basePath + '/taxi-service'} className="hover:text-white transition-colors">
                  Ziekenhuisvervoer
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
              Navigatie
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: MUTED }}>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors block">
                    {config.contact.phoneDisplay}
                  </a>
                  <a href={`tel:${config.contact.phone2}`} className="hover:text-white transition-colors block">
                    {config.contact.phoneDisplay2}
                  </a>
                </div>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-1">24/7 bereikbaar</li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {['f', 't', 'ig'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: ACCENT }}
                >
                  {s === 'f' ? 'f' : s === 't' ? 't' : '◎'}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: MUTED }}
        >
          <p>© {year} {config.name}. Alle rechten voorbehouden.</p>
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
