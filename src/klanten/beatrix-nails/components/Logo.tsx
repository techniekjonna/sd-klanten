import { Link } from 'react-router-dom';
import { config } from '../config';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  linkTo?: string;
}

export const Logo = ({ size = 'md', linkTo }: LogoProps) => {
  const sizes = {
    sm: { top: '1rem', bottom: '0.55rem', spacing: '0.18em' },
    md: { top: '1.3rem', bottom: '0.65rem', spacing: '0.2em' },
    lg: { top: '2.2rem', bottom: '1.1rem', spacing: '0.22em' },
  };

  const s = sizes[size];

  const inner = (
    <div className="flex flex-col items-center leading-none select-none">
      <span
        style={{
          fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
          fontSize: s.top,
          letterSpacing: '0.08em',
          color: config.colors.primary,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        Beatrix
      </span>
      <span
        style={{
          fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
          fontSize: s.bottom,
          letterSpacing: s.spacing,
          color: config.colors.darkPink,
          fontWeight: 400,
          lineHeight: 1.3,
          textTransform: 'uppercase',
        }}
      >
        Nails &amp; Beauty
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="hover:opacity-80 transition-opacity">
        {inner}
      </Link>
    );
  }

  return inner;
};
