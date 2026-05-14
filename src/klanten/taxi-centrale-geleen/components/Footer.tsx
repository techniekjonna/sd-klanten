import { Link } from 'react-router-dom';
import { config } from '../config';
import { Logo } from './Logo';

export const Footer = () => {
  const year = new Date().getFullYear();

  const extraLinks = [
    { label: 'Zakelijk Vervoer', path: '/bestellen' },
    { label: 'Groepsvervoer', path: '/bestellen' },
    { label: 'Particulier Vervoer', path: '/bestellen' },
    { label: 'Zorgvervoer', path: '/bestellen' },
  ];

  return (
    <footer style={{ backgroundColor: '#0d0d0d', color: '#aaaaaa' }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <Logo dark />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#777' }}>
              Betrouwbaar en comfortabel taxivervoer in de regio Westelijke Mijnstreek. 24/7 voor u beschikbaar.
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary, color: '#111111' }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-widest" style={{ color: config.colors.primary }}>
              Navigatie
            </h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm hover:text-white transition-colors flex items-center gap-2"
                    style={{ color: '#888' }}
                  >
                    <span style={{ color: config.colors.primary }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-widest" style={{ color: config.colors.primary }}>
              Vervoer
            </h4>
            <ul className="space-y-2.5">
              {extraLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm hover:text-white transition-colors flex items-center gap-2"
                    style={{ color: '#888' }}
                  >
                    <span style={{ color: config.colors.primary }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-widest" style={{ color: config.colors.primary }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: '#888' }}>
              <li className="flex gap-2.5">
                <span style={{ color: config.colors.primary }}>📍</span>
                <span>{config.contact.address}<br />{config.contact.city}</span>
              </li>
              <li className="flex gap-2.5">
                <span style={{ color: config.colors.primary }}>📞</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <span style={{ color: config.colors.primary }}>✉️</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <span style={{ color: config.colors.primary }}>🕐</span>
                <span>24 uur per dag<br />7 dagen per week</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ borderTop: '1px solid #222', color: '#555' }}>
          <div className="flex flex-wrap gap-4">
            <span>© {year} Taxi Centrale Geleen. Alle rechten voorbehouden.</span>
            <span>KVK: {config.contact.kvk}</span>
            <span>BTW: {config.contact.btw}</span>
          </div>
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
