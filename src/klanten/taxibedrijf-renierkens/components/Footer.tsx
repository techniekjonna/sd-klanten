import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.text }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0"
                style={{
                  backgroundColor: config.colors.accent,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
              >
                R
              </div>
              <div className="leading-tight">
                <span className="block font-extrabold text-base text-white">Renierkens</span>
                <span className="block text-xs font-medium tracking-wide uppercase" style={{ color: config.colors.accent }}>
                  Taxibedrijf
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              {config.tagline}. Al meer dan 28 jaar uw vertrouwde taxipartner in de regio Zuid-Limburg.
            </p>
            <p className="text-gray-500 text-xs">
              KVK: {config.contact.kvk}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 text-sm uppercase tracking-wide">Navigatie</h4>
            <ul className="space-y-2.5">
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
            <h4 className="font-semibold mb-4 text-gray-200 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span>{config.contact.address}</span>
              </li>
              <li>
                <a
                  href="tel:0455327470"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                  </svg>
                  {config.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  {config.contact.email}
                </a>
              </li>
              <li className="text-gray-500 text-xs pt-1">
                Bereikbaar: {config.contact.hours.weekday}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p>© {year} Taxibedrijf Renierkens B.V. &mdash; KVK {config.contact.kvk}. Alle rechten voorbehouden.</p>
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
