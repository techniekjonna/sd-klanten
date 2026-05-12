import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.primary }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <img
              src={config.logo}
              alt="Taxi Sittard"
              className="h-10 object-contain mb-4"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = 'none';
                if (el.nextElementSibling) {
                  (el.nextElementSibling as HTMLElement).style.display = 'block';
                }
              }}
            />
            <span className="text-2xl font-bold hidden" style={{ color: config.colors.accent }}>
              Taxi Sittard
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mt-3 max-w-xs">
              {config.description}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-4 py-2 text-sm font-bold rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: config.colors.accent }}
              >
                📞 {config.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: config.colors.accent }}>
              Diensten
            </h4>
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
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: config.colors.accent }}>
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{config.contact.address}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-gray-500">Beschikbaar: </span>
                <span className="text-white font-medium">24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {year} Taxi Sittard. Alle rechten voorbehouden.</p>
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
