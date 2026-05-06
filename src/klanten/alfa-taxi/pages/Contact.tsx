import { Layout } from '../components/Layout';
import { config } from '../config';

const DARK = '#0B1D3E';
const DARK2 = '#0F2448';
const CARD = 'rgba(255,255,255,0.05)';
const BORDER = 'rgba(255,255,255,0.08)';
const MUTED = 'rgba(255,255,255,0.6)';

export const Contact = () => {
  const accent = config.colors.accent;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-24 text-white text-center" style={{ backgroundColor: DARK2 }}>
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
            Bereikbaar
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: MUTED }}>
            Heeft u een vraag of wilt u meer informatie? Wij helpen u graag verder.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: DARK }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: '📞',
                label: 'Telefoon',
                value: config.contact.phoneDisplay,
                href: `tel:${config.contact.phone}`,
                sub: '24/7 bereikbaar',
              },
              {
                icon: '✉️',
                label: 'E-mail',
                value: config.contact.email,
                href: `mailto:${config.contact.email}`,
                sub: 'Reactie binnen 1 werkdag',
              },
              {
                icon: '🕐',
                label: 'Beschikbaarheid',
                value: '24 uur per dag, 7 dagen per week',
                href: undefined,
                sub: 'Feestdagen inbegrepen',
              },
              {
                icon: '🚖',
                label: 'Direct Boeken',
                value: 'Gebruik ons boekingsformulier',
                href: config.basePath + '/boeken',
                sub: 'Bevestiging binnen 30 min.',
              },
            ].map(({ icon, label, value, href, sub }) => (
              <div
                key={label}
                className="flex gap-5 p-7 rounded-2xl transition-all hover:scale-[1.01]"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: MUTED }}>{label}</p>
                  {href ? (
                    <a href={href} className="font-bold text-sm block transition-opacity hover:opacity-80 text-white">
                      {value}
                    </a>
                  ) : (
                    <p className="font-bold text-sm text-white">{value}</p>
                  )}
                  {sub && <p className="text-xs mt-0.5" style={{ color: MUTED }}>{sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
