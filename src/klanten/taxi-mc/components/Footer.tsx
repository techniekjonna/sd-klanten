import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.dark }} className="text-white">
      {/* Yellow accent bar */}
      <div className="h-1" style={{ backgroundColor: config.colors.primary }} />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-yellow-400">
                <img
                  src="https://taxi-willem.nl/wp-content/uploads/2025/09/cropped-TaxiMC-Favicon25.png"
                  alt="Taxi MC logo"
                  className="w-full h-full object-cover"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                Taxi <span style={{ color: config.colors.primary }}>MC</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">{config.tagline}</p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-black transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: config.colors.primary }}>Diensten</h4>
            <ul className="space-y-2.5">
              {config.navigation.filter(l => l.path !== '/').map((link) => (
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
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: config.colors.primary }}>Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  📞 {config.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  ✉️ {config.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>{config.contact.hours.weekday}</span>
              </li>
              <li className="text-xs pt-1">
                KvK: {config.kvk}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p>© {year} Taxi MC. Alle rechten voorbehouden.</p>
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
