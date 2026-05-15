import { Link } from 'react-router-dom';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.primaryDark }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-lg"
                style={{ backgroundColor: ACCENT, color: '#fff' }}
              >
                H
              </div>
              <div className="leading-none">
                <span className="block text-white font-extrabold text-base">Housmans</span>
                <span className="block text-xs font-medium" style={{ color: ACCENT }}>Taxi & Vervoer</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {config.tagline}. Dag en nacht bereikbaar voor ritten door heel Limburg en verder.
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: '#fff' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wide">Navigatie</h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <li>{config.contact.address}</li>
              <li>{config.contact.city}</li>
              <li>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="hover:text-white transition-colors"
                  style={{ color: ACCENT }}
                >
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-1">
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>Dag & nacht: </span>
                {config.contact.hours.weekday}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}
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
