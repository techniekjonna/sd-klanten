import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const hours = config.contact.hours;

  return (
    <footer style={{ backgroundColor: config.colors.primaryDark }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl p-2 inline-block mb-3">
              <img
                src={config.logo}
                alt={config.name}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-green-200 text-sm leading-relaxed">{config.tagline}</p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigatie</h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-green-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li>{config.contact.address}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${config.contact.mobile}`} className="hover:text-white transition-colors">
                  {config.contact.mobile}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Openingstijden</h4>
            <ul className="space-y-1 text-sm">
              {(
                [
                  ['Maandag', hours.maandag],
                  ['Dinsdag', hours.dinsdag],
                  ['Woensdag', hours.woensdag],
                  ['Donderdag', hours.donderdag],
                  ['Vrijdag', hours.vrijdag],
                  ['Zaterdag', hours.zaterdag],
                ] as [string, string][]
              ).map(([day, time]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-green-300">{day}</span>
                  <span className={time === 'Gesloten' ? 'text-red-300' : 'text-white'}>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-green-300"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
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
