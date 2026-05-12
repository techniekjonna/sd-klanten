interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  dark?: boolean;
}

export const Logo = ({ size = 'md', dark = false }: LogoProps) => {
  const scales = { sm: 0.65, md: 1, lg: 1.4 };
  const s = scales[size];

  return (
    <div className="flex items-center gap-2.5" style={{ transform: `scale(${s})`, transformOrigin: 'left center' }}>
      {/* Pin icon with taxi */}
      <svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 0C9.4 0 0 9.4 0 21C0 36.75 21 50 21 50C21 50 42 36.75 42 21C42 9.4 32.6 0 21 0Z"
          fill="#F5C518"
        />
        <circle cx="21" cy="21" r="16" fill={dark ? '#111111' : '#1a1a1a'} />
        {/* Taxi car silhouette */}
        <rect x="11" y="21" width="20" height="9" rx="2" fill="#F5C518" />
        <path d="M14 21L16 15H26L28 21" fill="#F5C518" />
        <circle cx="15" cy="30" r="2.5" fill={dark ? '#111111' : '#1a1a1a'} />
        <circle cx="27" cy="30" r="2.5" fill={dark ? '#111111' : '#1a1a1a'} />
        <rect x="18" y="16" width="6" height="5" rx="1" fill={dark ? '#111111' : '#1a1a1a'} opacity="0.6" />
      </svg>

      {/* Text */}
      <div>
        <div
          className="font-black text-base leading-tight tracking-wide"
          style={{ color: dark ? '#FFFFFF' : '#111111', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.05em' }}
        >
          TAXI CENTRALE
          <span className="block" style={{ color: '#F5C518' }}>GELEEN</span>
        </div>
        <div
          className="text-xs tracking-widest font-medium"
          style={{ color: dark ? '#888888' : '#555555', fontSize: '0.6rem', letterSpacing: '0.1em' }}
        >
          REGIO WESTELIJKE MIJNSTREEK
        </div>
      </div>
    </div>
  );
};
