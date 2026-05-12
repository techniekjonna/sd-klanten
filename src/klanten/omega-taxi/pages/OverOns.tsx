import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = '#3A3A3A';
const LIGHT = '#4A4A4A';
const ACCENT = '#F5C842';
const CARD = 'rgba(255,255,255,0.06)';
const BORDER = 'rgba(255,255,255,0.09)';
const MUTED = 'rgba(255,255,255,0.55)';

export const ZakelijkeService = () => {
  const s = config.services.zakelijk;
  return (
    <Layout>
      <section className="py-24 text-white text-center" style={{ backgroundColor: LIGHT }}>
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Voor bedrijven</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{s.title}</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: MUTED }}>{s.description}</p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {s.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-gray-900" style={{ backgroundColor: ACCENT }}>✓</span>
                <span className="text-sm text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
            <h2 className="text-2xl font-bold text-white mb-4">Zakelijk account aanvragen?</h2>
            <p className="text-sm mb-8" style={{ color: MUTED }}>Neem contact op voor een persoonlijk aanbod op maat voor uw organisatie.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={config.basePath + '/bestellen'} className="px-8 py-3 font-bold rounded-xl text-gray-900" style={{ backgroundColor: ACCENT }}>
                Contact Opnemen
              </Link>
              <a href={`tel:${config.contact.phone}`} className="px-8 py-3 font-bold rounded-xl border-2 text-white" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                {config.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
