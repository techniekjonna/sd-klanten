import { Link } from 'react-router-dom';
import { config } from '../config';

const GREEN = config.colors.primary;
const GOLD = config.colors.accent;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: GREEN }}>
                <span className="text-white font-extrabold text-xl">H</span>
              </div>
              <div className="leading-none">
                <span className="block font-extrabold text-base text-white">Housmans</span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest" style={{ color: GOLD }}>
                  Taxi &amp; Vervoer · Echt
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-5 max-w-xs">
              {config.tagline}. Wij rijden dag en nacht voor particulieren en bedrijven in Echt en heel Limburg.
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: GOLD, color: '#1C1917' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-stone-400">Navigatie</h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-stone-400">Contact</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>{config.contact.address}</li>
              <li>{config.contact.city}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors" style={{ color: GOLD }}>
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-1 text-stone-500">Dag &amp; nacht beschikbaar</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-600">
          <p>© {year} {config.name}. Alle rechten voorbehouden.</p>
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
