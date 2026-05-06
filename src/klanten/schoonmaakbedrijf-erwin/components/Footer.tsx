import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.primaryDark }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                style={{ backgroundColor: config.colors.primary }}
              >
                E
              </div>
              <div className="leading-tight">
                <p className="text-sm font-extrabold text-white">Schoonmaakbedrijf</p>
                <p className="text-xs font-semibold" style={{ color: config.colors.primaryLight }}>Erwin</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">{config.tagline}</p>
            <p className="text-blue-300 text-xs">KvK: {config.kvk}</p>
            <p className="text-blue-300 text-xs">Gevestigd in Geleen, Zuid-Limburg</p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Navigatie</h4>
            <ul className="space-y-3">
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

          {/* Diensten */}
          <div>
            <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Diensten</h4>
            <ul className="space-y-3">
              {config.services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to={config.basePath + '/diensten'}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phone}
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
                  <p><span className="text-blue-300">Ma–Vr: </span>{config.contact.hours.weekday}</p>
                  <p><span className="text-blue-300">Za–Zo: </span>{config.contact.hours.weekend}</p>
                </div>
              </li>
            </ul>

            <a
              href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              WhatsApp Ons
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <div className="flex flex-wrap gap-4">
            <p>© {year} Schoonmaakbedrijf Erwin. Alle rechten voorbehouden.</p>
            <span>·</span>
            <span>KvK {config.kvk}</span>
          </div>
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
