import { Link } from 'react-router-dom';
import { config } from '../config';
import { Logo } from './Logo';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#111111' }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-xs">
              {config.tagline}. Vervoersveiligheid, vertrouwde service en vervoerscomfort — dat is onze belofte.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={`tel:${config.contact.phoneTel}`}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
              >
                📞 {config.contact.phone}
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: config.colors.accent }}>
              Diensten
            </h4>
            <ul className="space-y-2">
              {config.services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={config.basePath + s.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: config.colors.accent }}>
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${config.contact.phoneTel}`} className="hover:text-white transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <span>🕐</span>
                <span>24 uur per dag, 7 dagen per week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500" style={{ borderColor: '#2a2a2a' }}>
          <p>© {year} Global Taxi Heerlen. Alle rechten voorbehouden.</p>
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
