import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0C10] text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 52 32" className="w-12 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="14" width="44" height="12" rx="3" fill="#C9A84C" />
                <path d="M14 14 L18 6 L34 6 L38 14Z" fill="#C9A84C" />
                <path d="M19 13 L21 8 L31 8 L33 13Z" fill="#0B0C10" opacity="0.7" />
                <circle cx="14" cy="26" r="5" fill="#0B0C10" />
                <circle cx="14" cy="26" r="2.5" fill="#C9A84C" />
                <circle cx="38" cy="26" r="5" fill="#0B0C10" />
                <circle cx="38" cy="26" r="2.5" fill="#C9A84C" />
                <line x1="4" y1="20" x2="48" y2="20" stroke="#E8C96A" strokeWidth="1" opacity="0.5" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-xl tracking-widest text-white">DAVIES</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C9A84C] uppercase">Taxi Service</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">{config.tagline}</p>
            {/* Gold divider */}
            <div className="w-16 h-0.5 bg-[#C9A84C] mb-5" />
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0B0C10] px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#E8C96A] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-[#C9A84C]">Menu</h4>
            <ul className="space-y-3">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-gray-400 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-[#C9A84C]">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] mt-0.5">📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-[#C9A84C] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A84C]">📞</span>
                  <span>{config.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-[#C9A84C] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A84C]">✉️</span>
                  <span>{config.contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A84C]">🕐</span>
                <span>24/7 bereikbaar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {year} Davies Taxi Service. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a href="https://sandedesign.nl" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors">
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
