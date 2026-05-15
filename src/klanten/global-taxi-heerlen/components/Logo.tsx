import { Link } from 'react-router-dom';
import { config } from '../config';

export const Logo = () => (
  <Link to={config.basePath + '/'} className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill={config.colors.accent} />
      <path
        d="M7 22.5h1.5l1.2-3h10.6l1.2 3H23a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"
        fill={config.colors.dark}
      />
      <path
        d="M9.5 19.5l1.8-5.5a1 1 0 0 1 .95-.7h10.5a1 1 0 0 1 .95.7l1.8 5.5H9.5z"
        fill={config.colors.dark}
      />
      <rect x="10" y="14.5" width="4" height="3" rx="0.5" fill={config.colors.accent} />
      <rect x="16" y="14.5" width="4" height="3" rx="0.5" fill={config.colors.accent} />
      <circle cx="11" cy="24.5" r="1.5" fill={config.colors.dark} />
      <circle cx="11" cy="24.5" r="0.7" fill={config.colors.accent} />
      <circle cx="22" cy="24.5" r="1.5" fill={config.colors.dark} />
      <circle cx="22" cy="24.5" r="0.7" fill={config.colors.accent} />
      <rect x="25" y="18" width="3" height="2" rx="1" fill={config.colors.accent} />
    </svg>
    <div className="leading-tight">
      <div className="font-black text-base tracking-tight" style={{ color: config.colors.accent }}>
        GLOBAL TAXI
      </div>
      <div className="font-semibold text-xs tracking-widest uppercase" style={{ color: '#aaaaaa' }}>
        Heerlen
      </div>
    </div>
  </Link>
);
