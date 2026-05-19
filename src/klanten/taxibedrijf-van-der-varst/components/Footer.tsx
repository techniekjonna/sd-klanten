import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => (
  <footer style={{ backgroundColor: '#0D1F3C', color: 'rgba(255,255,255,0.75)' }}>
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-white text-lg"
              style={{ backgroundColor: config.colors.accent }}
            >
              V
            </div>
            <div>
              <span className="text-white font-bold text-base leading-tight block">Van der Varst</span>
              <span className="text-xs" style={{ color: config.colors.accent }}>Taxibedrijf · Echt</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4">{config.description}</p>
          <p className="text-xs" style={{ color: config.colors.accent }}>
            Opgericht in {config.founded} · 49 chauffeurs
          </p>
        </div>

        {/* Navigatie */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigatie</h4>
          <ul className="space-y-2">
            {config.navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={config.basePath + item.path}
                  className="text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>{config.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors font-semibold">
                {config.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                {config.contact.email}
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
        className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs gap-2"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
      >
        <span>© {new Date().getFullYear()} Taxibedrijf Van der Varst B.V. — Echt · KvK: 13042287</span>
        <span>Alle rechten voorbehouden</span>
      </div>
    </div>
  </footer>
);
