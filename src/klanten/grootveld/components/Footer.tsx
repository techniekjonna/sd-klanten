import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const p = config.colors.primary;

  return (
    <footer style={{ backgroundColor: config.colors.text }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold"
                style={{ backgroundColor: p }}
              >
                G
              </div>
              <div>
                <p className="font-extrabold text-lg text-white">Grootveld</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Taxi & Takelservice</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {config.description}
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 text-sm font-bold rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              📞 {config.contact.phone}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Navigatie</h4>
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
            <h4 className="font-semibold mb-4 text-gray-200">Contact</h4>
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
              <li className="pt-1 text-gray-500">
                <span className="font-medium text-gray-300">24/7</span> Bereikbaar
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {year} Takel- en Taxibedrijf Grootveld B.V. Alle rechten voorbehouden.</p>
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
