import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.text }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <img src={config.logo} alt={config.name} className="h-14 w-auto object-contain mb-4 brightness-200 contrast-50" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{config.tagline}</p>
            <div className="flex gap-3 mt-5">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-4 py-2 text-sm font-bold rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: config.colors.accent, color: '#fff' }}
              >
                📞 Bel ons
              </a>
              <a
                href={`mailto:${config.contact.email}`}
                className="px-4 py-2 text-sm font-semibold rounded-lg border border-white/20 text-gray-200 hover:bg-white/10 transition-colors"
              >
                ✉️ E-mail
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-widest" style={{ color: config.colors.accent }}>
              Navigatie
            </h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-1.5"
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
            <h4 className="font-bold mb-5 text-sm uppercase tracking-widest" style={{ color: config.colors.accent }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <span>🕐</span>
                <span>24 uur per dag, 7 dagen per week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
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
