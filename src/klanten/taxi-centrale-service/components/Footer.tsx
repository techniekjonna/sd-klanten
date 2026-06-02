import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.dark, color: '#fff' }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + tagline + phone */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
                style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
              >
                TCS
              </div>
              <div>
                <p className="font-black text-base leading-none text-white">Taxi Centrale Service</p>
                <p className="text-xs leading-none mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Kerkrade — T.C.S.</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>
              {config.tagline} — uw betrouwbare taxibedrijf in Kerkrade en de regio Parkstad Limburg.
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1l-2.2 2.22z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: config.colors.accent }}>Menu</h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.50)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: config.colors.accent }}>Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.50)' }}>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
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

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.30)' }}
        >
          <p>© {year} Taxi Centrale Service (T.C.S.). Alle rechten voorbehouden.</p>
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
