import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;

export const Tarieven = () => (
  <Layout>
    {/* Header */}
    <section
      className="py-20 text-white text-center"
      style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #111827 100%)` }}
    >
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Transparante prijzen</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarieven</h1>
        <p className="max-w-xl mx-auto text-white/75 text-lg">
          Eerlijke en transparante tarieven. Geen verborgen kosten — altijd een duidelijke prijs.
        </p>
      </div>
    </section>

    {/* Tarieven tabel */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: '#E5E7EB' }}>
          <div className="px-6 py-4" style={{ backgroundColor: PRIMARY }}>
            <h2 className="text-white font-bold">Standaard rijtarieven</h2>
          </div>
          {config.tarieven.map((t, i) => (
            <div
              key={t.omschrijving}
              className="flex items-center justify-between px-6 py-4"
              style={{ backgroundColor: i % 2 === 0 ? '#F9FAFB' : 'white', borderBottom: i < config.tarieven.length - 1 ? '1px solid #E5E7EB' : 'none' }}
            >
              <span className="text-sm text-gray-700">{t.omschrijving}</span>
              <span className="font-bold text-sm" style={{ color: PRIMARY }}>{t.tarief}</span>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl p-5 border" style={{ backgroundColor: config.colors.light, borderColor: '#99F6E4' }}>
            <h3 className="font-bold mb-2 text-sm" style={{ color: PRIMARY }}>Toeslag informatie</h3>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>• Nachttarief geldig van 23:00 tot 06:00 uur</li>
              <li>• Vakantiedagen: nachttarief van toepassing</li>
              <li>• Luchthaventritten zijn vaste prijzen</li>
              <li>• Groepskorting beschikbaar op aanvraag</li>
            </ul>
          </div>
          <div className="rounded-2xl p-5 border" style={{ backgroundColor: '#F0FDFA', borderColor: '#99F6E4' }}>
            <h3 className="font-bold mb-2 text-sm" style={{ color: config.colors.primary }}>Betaalmogelijkheden</h3>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>• Contant betalen in de taxi</li>
              <li>• Pin / betaalpas</li>
              <li>• Zakelijke facturatie op rekening</li>
              <li>• Voorafgaand online betalen</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          * Bovenstaande tarieven zijn indicatief. De exacte prijs wordt bepaald door de gereden afstand en eventuele toeslagen.
          Neem contact op voor een vaste offerte.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12" style={{ backgroundColor: ACCENT }}>
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-extrabold text-white mb-3">Wil je een exacte prijs weten?</h3>
        <p className="text-white/85 text-sm mb-6">Vraag een offerte aan of bestel direct via ons boekingssysteem.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={config.basePath + '/bestellen'}
            className="px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition"
            style={{ backgroundColor: PRIMARY, color: 'white' }}
          >
            Direct Bestellen
          </Link>
          <a
            href={`tel:${config.contact.phone}`}
            className="px-6 py-3 rounded-xl font-bold text-sm bg-white hover:bg-gray-50 transition"
            style={{ color: PRIMARY }}
          >
            📞 Bel {config.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
