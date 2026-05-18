import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.dark, color: '#fff' }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + info */}
          <div className="md:col-span-2">
            <img
              src="https://www.taxicentraleparkstad.nl/smarty/wireframe01/media/images/Taxicentrale-Parkstad-logo.png"
              alt="Taxi Centrale Parkstad"
              className="h-14 w-auto mb-4 brightness-0 invert opacity-90"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {config.tagline} — uw betrouwbare taxibedrijf in de regio Parkstad Limburg.
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: config.colors.accent }}>Menu</h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: config.colors.accent }}>Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors flex items-center gap-2">
                  <span>📞</span>
                  <span>{config.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors flex items-center gap-2">
                  <span>✉️</span>
                  <span>{config.contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>24/7 bereikbaar</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}
        >
          <p>© {year} Taxi Centrale Parkstad. Alle rechten voorbehouden.</p>
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
