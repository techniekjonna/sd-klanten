import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <img
              src="https://cdn.myonline.company/fit-in/300x100/filters:no_upscale()/2725/media/Logo-One-Taxi-1542737191.png"
              alt="OneTaxi Zuid-Limburg"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {config.tagline}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/onetaxi-zuidlimburg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm hover:opacity-80 transition-opacity"
                style={{ backgroundColor: config.colors.primary }}
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://wa.me/31647727247"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: config.colors.primary }}>Navigatie</h4>
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
            <h4 className="font-bold mb-4" style={{ color: config.colors.primary }}>Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="leading-relaxed">{config.contact.address}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors font-medium">
                  {config.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-gray-500">Ma–Vr: </span>{config.contact.hours.weekday}
                <br />
                <span className="text-gray-500">Weekend: </span>{config.contact.hours.weekend}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
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
