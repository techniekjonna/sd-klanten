import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const { primary, accent, dark, text } = config.colors;

  return (
    <footer className="pb-16 md:pb-0" style={{ backgroundColor: dark }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-base" style={{ backgroundColor: accent }}>
                🚕
              </div>
              <div>
                <span className="text-white font-black text-base">ALFA </span>
                <span className="font-black text-base" style={{ color: accent }}>TAXI</span>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold">Limo Sittard</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">{config.tagline}</p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              📞 {config.contact.phone}
            </a>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Navigatie</h4>
            <ul className="space-y-2.5">
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
          <div className="md:col-span-4 md:col-start-9">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>{config.contact.address}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors" style={{ color: accent }}>
                  {config.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li>7 dagen per week — {config.contact.hours.weekday}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600 border-t border-white/10">
          <p>© {year} {config.name}. Alle rechten voorbehouden. KVK: {config.contact.kvk}</p>
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
