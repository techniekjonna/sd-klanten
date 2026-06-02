import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.primary }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <img src={config.logo} alt="Taxi Quaaden logo" className="h-14 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-blue-200 text-sm leading-relaxed">{config.tagline}</p>
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-xs text-blue-300">KNV Taxi vervoersvoorwaarden van toepassing.</p>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-bold mb-5 text-white uppercase tracking-widest text-xs" style={{ color: config.colors.accent }}>
              Navigatie
            </h4>
            <ul className="space-y-3">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-blue-200 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 uppercase tracking-widest text-xs" style={{ color: config.colors.accent }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <span>🕐</span>
                <span>24 uur per dag, 7 dagen per week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
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
