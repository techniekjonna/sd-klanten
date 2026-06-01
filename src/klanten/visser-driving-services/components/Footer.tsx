import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const accent = config.colors.accent || '#C9A84C';

  return (
    <footer style={{ backgroundColor: '#111111' }} className="text-white">
      {/* Top divider accent */}
      <div className="h-px w-full" style={{ backgroundColor: accent }} />

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>
              Visser Driving Services
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Gecertificeerde directiechauffeurs voor de private en publieke sector. Gedrevenheid, vakmanschap & integriteit — door heel Nederland.
            </p>
            <div className="mt-6 flex flex-col gap-1.5 text-sm text-gray-500">
              <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                {config.contact.phoneDisplay || config.contact.phone}
              </a>
              <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                {config.contact.email}
              </a>
              <span>{config.contact.address}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: accent }}>
              Navigatie
            </h4>
            <ul className="space-y-3">
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

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: accent }}>
              Certificeringen
            </h4>
            <ul className="space-y-3">
              {['CCV-D1', 'CCV-D2', 'CORTEX SRO-D3'].map((cert) => (
                <li key={cert} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                  {cert}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-gray-500 text-sm">
              <p>365 dagen per jaar</p>
              <p>24/7 bereikbaar</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {year} Visser Driving Services. Alle rechten voorbehouden.</p>
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
