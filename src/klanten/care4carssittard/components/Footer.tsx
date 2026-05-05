import { Link } from 'react-router-dom';
import { config } from '../config';

const fontCondensed = "'Barlow Condensed', sans-serif";
const fontBody = "'Barlow', sans-serif";

export const Footer = () => {
  const year = new Date().getFullYear();
  const p = config.colors.primary;

  return (
    <footer style={{ backgroundColor: '#1F2937', fontFamily: fontBody }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div
              className="mb-3 flex items-center gap-0"
              style={{ fontFamily: fontCondensed, fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em' }}
            >
              <span className="text-white">CARE</span>
              <span style={{ color: p }}>4</span>
              <span className="text-white">CARS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{config.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-200 uppercase text-xs tracking-widest">Navigatie</h4>
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

          <div>
            <h4 className="font-semibold mb-4 text-gray-200 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{config.contact.address}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-1 space-y-0.5">
                <p>{config.contact.hours.weekdays}</p>
                <p>{config.contact.hours.friday}</p>
                <p>{config.contact.hours.weekend}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {year} Care4Cars Sittard. Alle rechten voorbehouden.</p>
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
