import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const cfg = config as any;

  return (
    <footer style={{ backgroundColor: config.colors.primary }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="md:col-span-1">
            <div className="flex items-end gap-0 leading-none mb-3">
              <span className="text-2xl font-black text-white">Taxi</span>
              <span className="text-2xl font-black" style={{ color: '#E8A020' }}>Frans</span>
            </div>
            <p className="text-white/50 text-xs italic mb-4">de goedkoopste</p>
            <p className="text-white/60 text-sm leading-relaxed">{config.description}</p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-bold mb-4 text-white/90 uppercase tracking-widest text-xs">Navigatie</h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
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

          {/* Diensten */}
          <div>
            <h4 className="font-bold mb-4 text-white/90 uppercase tracking-widest text-xs">Diensten</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {config.services.map((s) => (
                <li key={s.id} className="flex items-center gap-2">
                  <span className="text-base">{s.icon}</span>
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white/90 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/60">{config.contact.address}</li>
              <li>
                <a href={`tel:${cfg.contact.phone}`} className="font-semibold transition-colors hover:opacity-80" style={{ color: '#E8A020' }}>
                  {cfg.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="text-white/60 hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="text-white/60">
                {config.contact.hours.weekday}<br />
                {config.contact.hours.weekend}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {year} TaxiFrans · KvK {cfg.kvk} · BTW {cfg.btw} · Vergunning P-78231</p>
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
