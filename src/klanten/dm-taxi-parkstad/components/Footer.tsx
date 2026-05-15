import { Link } from 'react-router-dom';
import { config } from '../config';

const NAVY = '#1B3F6E';
const ORANGE = '#F97316';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-8 rounded-full" style={{ backgroundColor: ORANGE }} />
              <div>
                <p className="text-white font-extrabold text-lg leading-tight">D&amp;M Taxi</p>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: ORANGE }}>Parkstad</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">{config.tagline}</p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 mt-5 text-white font-bold text-lg hover:opacity-80 transition-opacity"
            >
              📞 045 570 03 00
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Navigatie</h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <span style={{ color: ORANGE }}>📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: ORANGE }}>📞</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  045 570 03 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: ORANGE }}>✉️</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: ORANGE }}>🕐</span>
                <span>24 uur per dag, 7 dagen per week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-blue-300">
          <p>© {year} D&amp;M Taxi Parkstad. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a href="https://sandedesign.nl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
