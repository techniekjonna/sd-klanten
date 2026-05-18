import { Link } from 'react-router-dom';
import { config } from '../config';

const yellow = config.colors.primary;
const dark = config.colors.dark;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: dark }} className="text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={config.logo} alt={config.name} className="h-12 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{config.tagline}</p>
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide" style={{ backgroundColor: yellow, color: dark }}>
              {config.contact.hours}
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wide" style={{ color: yellow }}>Navigatie</h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link to={config.basePath + link.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="mt-1.5 ml-3 space-y-1.5">
                      {link.children.map((child) => (
                        <li key={child.path}>
                          <Link to={config.basePath + child.path} className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wide" style={{ color: yellow }}>Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>{config.contact.address}<br />{config.contact.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors font-medium" style={{ color: yellow }}>
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
                <span>{config.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {year} {config.fullName}. Alle rechten voorbehouden.</p>
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
