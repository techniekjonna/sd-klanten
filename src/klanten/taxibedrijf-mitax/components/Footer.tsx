import { Link } from 'react-router-dom';
import { config } from '../config';

const ORANGE = config.colors.orange;
const MUTED = 'rgba(255,255,255,0.45)';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.navyDark }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-lg"
                style={{ backgroundColor: ORANGE }}
              >
                M
              </div>
              <div>
                <span className="block text-white font-extrabold text-lg leading-none">Mitax</span>
                <span className="block text-xs opacity-50">Taxibedrijf</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              {config.tagline}
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 mt-4 font-bold text-sm transition-opacity hover:opacity-80"
              style={{ color: ORANGE }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
              Diensten
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
              {config.diensten.map((d) => (
                <li key={d.id}>
                  <Link
                    to={config.basePath + '/diensten'}
                    className="hover:text-white transition-colors"
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
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
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: MUTED }}>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{config.contact.address}, {config.contact.city}</span>
              </li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-1 text-xs">
                Maandag t/m zondag: 24 uur per dag
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
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
