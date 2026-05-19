import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: config.colors.navy }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Branding */}
          <div className="lg:col-span-1">
            <img
              src="https://d1zviajkun9gxg.cloudfront.net/user/prod/2023/10/23/de-marktwijzer-2003f70a-3a5d-490c-b9a3-19ca6018730b.png"
              alt="Taxi Nelissen"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
              {config.tagline}
            </p>
            <div className="flex gap-3 mt-5">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                style={{ backgroundColor: config.colors.navyLight }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${config.contact.phoneHref.replace('+', '')}`}
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                style={{ backgroundColor: config.colors.navyLight }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5" style={{ color: config.colors.primary }}>
              Navigatie
            </h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#9CA3AF' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5" style={{ color: config.colors.primary }}>
              Diensten
            </h4>
            <ul className="space-y-2.5">
              {config.services.map((s) => (
                <li key={s.id}>
                  <span className="text-sm" style={{ color: '#9CA3AF' }}>
                    {s.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5" style={{ color: config.colors.primary }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: '#9CA3AF' }}>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>{config.contact.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <a
                  href={`tel:${config.contact.phoneHref}`}
                  className="hover:text-white transition-colors"
                >
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✉️</span>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🕐</span>
                <span>
                  24/7 bereikbaar
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm border-t"
          style={{ borderColor: config.colors.navyLight, color: '#6B7280' }}
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
