import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.dark }} className="text-white">
      {/* Top strip */}
      <div style={{ backgroundColor: config.colors.primary }} className="py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-lg">Direct een taxi nodig?</p>
            <p className="text-white/80 text-sm">Wij zijn dag en nacht bereikbaar voor u.</p>
          </div>
          <a
            href={`tel:${config.contact.phone}`}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl font-bold text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ color: config.colors.primary }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={config.colors.primary}>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {config.contact.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="10" fill={config.colors.primary} />
                <path d="M8 22h20v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2z" fill="white" />
                <path d="M11 22l2.5-7h9l2.5 7H11z" fill="white" />
                <circle cx="12" cy="24.5" r="1.5" fill={config.colors.primary} />
                <circle cx="24" cy="24.5" r="1.5" fill={config.colors.primary} />
              </svg>
              <div>
                <span className="block text-[10px] font-semibold tracking-widest uppercase text-gray-500 leading-none">Taxibedrijf</span>
                <span className="block text-lg font-black leading-none text-white">Knol</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {config.tagline}. Gevestigd in Brunssum, actief door heel Zuid-Limburg.
            </p>
            <p className="text-gray-600 text-xs mt-4">KvK: Taxibedrijf Knol B.V.</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Navigatie</p>
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
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>{config.contact.address}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="font-medium transition-colors hover:text-white" style={{ color: config.colors.primary }}>
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-1 text-xs text-gray-500 leading-relaxed">
                Ma–Vr: {config.contact.hours.weekday}<br />
                Za–Zo: {config.contact.hours.weekend}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {year} Taxibedrijf Knol B.V. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a href="https://sandedesign.nl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
