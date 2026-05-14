import { Link } from 'react-router-dom';
import { config } from '../config';
import { Logo } from './Logo';

export const Footer = () => {
  const year = new Date().getFullYear();
  const h = config.contact.hours;

  return (
    <footer style={{ backgroundColor: config.colors.text }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-4 brightness-0 invert">
              <Logo size="sm" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {config.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: config.colors.primaryLight }}>
              Navigatie
            </h4>
            <ul className="space-y-2">
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

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: config.colors.primaryLight }}>
              Openingstijden
            </h4>
            <ul className="space-y-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <li className="flex justify-between gap-4"><span>Maandag</span><span>{h.maandag}</span></li>
              <li className="flex justify-between gap-4"><span>Dinsdag</span><span>{h.dinsdag}</span></li>
              <li className="flex justify-between gap-4"><span>Woensdag</span><span>{h.woensdag}</span></li>
              <li className="flex justify-between gap-4"><span>Donderdag</span><span>{h.donderdag}</span></li>
              <li className="flex justify-between gap-4"><span>Vrijdag</span><span>{h.vrijdag}</span></li>
              <li className="flex justify-between gap-4"><span>Zaterdag</span><span>{h.zaterdag}</span></li>
              <li className="flex justify-between gap-4">
                <span>Zondag</span>
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>{h.zondag}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: config.colors.primaryLight }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <li>📍 {config.contact.address}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  📞 {config.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  ✉️ {config.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)' }}
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
