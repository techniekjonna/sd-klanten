import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const { accent, dark } = config.colors;

  return (
    <footer style={{ backgroundColor: dark }} className="text-white pb-16 md:pb-0">
      {/* CTA strip */}
      <div style={{ backgroundColor: accent }}>
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-xl">Klaar voor uw rit?</p>
            <p className="text-white/80 text-sm mt-0.5">Wij zijn dag en nacht voor u bereikbaar.</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-6 py-3 bg-white font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors"
              style={{ color: accent }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/tarieven'}
              className="px-6 py-3 border-2 border-white text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-colors"
            >
              Online Boeken →
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: accent }}
              >
                🚕
              </div>
              <div>
                <span className="text-white font-black text-lg">ALFA</span>
                <span className="font-black text-lg ml-1" style={{ color: accent }}>TAXI</span>
                <div className="text-white/40 text-[10px] uppercase tracking-widest -mt-0.5">Limo Sittard</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {config.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {['24/7 Bereikbaar', 'Vaste Prijzen', 'Alle Luchthavens'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full font-medium text-white/70"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-white/40">Navigatie</h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: accent }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-white/40">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/60">
                <span className="mt-0.5">📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity"
                  style={{ color: accent }}
                >
                  <span>📞</span>
                  <span>{config.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <span>✉️</span>
                  <span>{config.contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <span>🕐</span>
                <span>7 dagen — {config.contact.hours.weekday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p>© {year} {config.name}. Alle rechten voorbehouden. KVK: {config.contact.kvk}</p>
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
