import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const p = config.colors.primary;

  return (
    <footer style={{ backgroundColor: '#0A0A0A' }} className="text-white">
      {/* Gold top border */}
      <div className="h-px w-full" style={{ backgroundColor: p }} />

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <img
              src="https://www.gotaxmaastricht.nl/assets/imgs/logo-03.png"
              alt="GoTax Maastricht"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {config.tagline}
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-block mt-5 text-sm font-bold tracking-wide transition-opacity hover:opacity-80"
              style={{ color: p }}
            >
              {config.contact.phone}
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-gray-500">Menu</h4>
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

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-gray-500">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>{config.contact.address}</li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li>{config.contact.hours.weekday}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {year} {config.name}. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a
              href="https://sandedesign.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
