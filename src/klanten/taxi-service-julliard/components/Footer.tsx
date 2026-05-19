import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.darkBg }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-4">
            <img
              src={config.logo}
              alt="Taxiservice Julliard"
              className="h-10 mb-5 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">{config.tagline}</p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
              style={{ backgroundColor: config.colors.accent }}
            >
              <span>📞</span>
              <span>{config.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Nav links */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/40">Menu</h4>
            <ul className="space-y-2.5">
              {config.navigation.map(link => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/40">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5">📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <span>📞</span>
                  <span>{config.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <span>✉️</span>
                  <span>{config.contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span>🕐</span>
                <span>24 uur per dag, 7 dagen per week</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p>© {year} Taxiservice Julliard. Alle rechten voorbehouden.</p>
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
