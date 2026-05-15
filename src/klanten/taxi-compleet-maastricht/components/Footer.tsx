import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.primary }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-lg">🚕</div>
              <span className="font-bold text-lg">Taxi Compleet Maastricht</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5 max-w-xs">{config.tagline}</p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.accent, color: '#fff' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-blue-200">Menu</h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-blue-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-blue-200">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-100">
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
                <span>24/7 bereikbaar, 7 dagen per week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
          <p>© {year} Taxi Compleet Maastricht. Alle rechten voorbehouden.</p>
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
