import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.dark }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg"
                style={{ backgroundColor: config.colors.primary }}
              >
                K
              </div>
              <div className="leading-none">
                <span className="block text-sm font-extrabold text-white">Taxibedrijf</span>
                <span className="block text-sm font-extrabold" style={{ color: config.colors.primary }}>Knol</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{config.tagline}</p>
            <p className="text-gray-500 text-xs mt-3">KvK: Taxibedrijf Knol B.V. · Brunssum</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 text-sm uppercase tracking-wider">Navigatie</h4>
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors font-medium" style={{ color: config.colors.primary }}>
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <span>🕐</span>
                <div>
                  <p>Ma–Vr: {config.contact.hours.weekday}</p>
                  <p>Za–Zo: {config.contact.hours.weekend}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{config.contact.hours.note}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {year} Taxibedrijf Knol B.V. Alle rechten voorbehouden.</p>
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
