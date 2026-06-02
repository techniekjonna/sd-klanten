import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0D0B] text-white border-t border-[#B8972A]/20">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <img
              src="https://www.vandewalldienstverlening.nl/img/logovd_lrg.png"
              alt="Vandewall Dienstverlening"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {config.tagline} — Premium vervoer in Maastricht en omgeving.
              Dag en nacht bereikbaar voor uw rit.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-5 py-2.5 text-sm font-semibold border border-[#B8972A] text-[#B8972A] hover:bg-[#B8972A] hover:text-[#0E0D0B] transition-colors"
              >
                Bel Nu
              </a>
              <a
                href={`mailto:${config.contact.email}`}
                className="text-sm text-gray-400 hover:text-[#B8972A] transition-colors"
              >
                {config.contact.email}
              </a>
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B8972A] mb-5">Navigatie</h4>
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
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B8972A] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
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
                Beschikbaarheid: 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {year} Vandewall Dienstverlening. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a
              href="https://sandedesign.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B8972A] transition-colors"
            >
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
