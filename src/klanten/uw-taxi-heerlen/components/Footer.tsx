import { Link } from 'react-router-dom';
import { config } from '../config';

const { darkBlue, yellow, lightBlue } = config.colors;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: darkBlue }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <img
              src="https://uwtaxiheerlen.nl/Trial%20kleur/images%20kleur/Hoofdlogo%20kleur2.gif"
              alt="Uw Taxi Heerlen"
              className="h-16 w-auto object-contain mb-4"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <p className="text-sm leading-relaxed" style={{ color: lightBlue }}>
              {config.tagline}
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: yellow, color: darkBlue }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs" style={{ color: yellow }}>
              Navigatie
            </h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: lightBlue }}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs" style={{ color: yellow }}>
              Contact
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: lightBlue }}>
              <li>📍 {config.contact.address}</li>
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
              <li className="pt-2">
                <span className="font-semibold text-white">Bereikbaarheid:</span>
                <br />
                Ma–Zo: {config.contact.hours.weekday}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderColor: lightBlue + '40', color: lightBlue }}
        >
          <p>© {year} Uw Taxi Heerlen. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a
              href="https://sandedesign.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-semibold"
            >
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
