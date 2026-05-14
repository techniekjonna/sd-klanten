import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const DARK = '#0B1D3E';
const DARK2 = '#0F2448';
const CARD = 'rgba(255,255,255,0.05)';
const BORDER = 'rgba(255,255,255,0.08)';
const MUTED = 'rgba(255,255,255,0.6)';

export const Tarieven = () => {
  const accent = config.colors.accent;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-24 text-white text-center" style={{ backgroundColor: DARK2 }}>
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
            Overzicht
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarieven</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: MUTED }}>
            Vaste, transparante tarieven zonder verborgen kosten. Altijd eerlijk, altijd duidelijk.
          </p>
        </div>
      </section>

      {/* Tarieven tabellen */}
      <section className="py-20" style={{ backgroundColor: DARK }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {config.tarieven.map((categorie) => (
              <div
                key={categorie.titel}
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${BORDER}` }}
              >
                {/* Categorie header */}
                <div
                  className="px-7 py-4 flex items-center gap-3"
                  style={{ backgroundColor: `${accent}15`, borderBottom: `1px solid ${BORDER}` }}
                >
                  <span
                    className="w-1 h-5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  <h2 className="text-sm font-bold uppercase tracking-wide text-white">{categorie.titel}</h2>
                </div>

                {/* Rijen */}
                <div style={{ backgroundColor: CARD }}>
                  {categorie.regels.map((regel, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-7 py-4 transition-colors"
                      style={{
                        borderTop: i > 0 ? `1px solid ${BORDER}` : 'none',
                      }}
                    >
                      <span className="text-sm" style={{ color: MUTED }}>{regel.omschrijving}</span>
                      <span className="font-bold text-sm tabular-nums text-white">{regel.tarief}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Toelichting */}
          <div
            className="mt-8 p-6 rounded-2xl border-l-4 text-sm"
            style={{ backgroundColor: `${accent}10`, borderColor: accent }}
          >
            <p className="font-semibold mb-3 text-white">Toelichting</p>
            <ul className="space-y-1.5 list-disc list-inside" style={{ color: MUTED }}>
              <li>Alle tarieven zijn inclusief BTW.</li>
              <li>Nachttarief geldt van 22:00 tot 06:00 uur.</li>
              <li>Voor vaste ritten wordt vooraf een prijs afgesproken.</li>
              <li>Bij zakelijk transport kunt u maandelijks laten factureren — neem contact op voor een offerte.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: DARK2 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Direct een rit boeken?
          </h2>
          <p className="mb-8 max-w-md mx-auto text-sm" style={{ color: MUTED }}>
            Vul ons boekingsformulier in of bel ons direct. Wij zijn 24/7 beschikbaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={config.basePath + '/boeken'}
              className="px-8 py-4 font-bold rounded-xl text-black transition-all hover:scale-105"
              style={{ backgroundColor: accent }}
            >
              Nu Boeken
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-semibold rounded-xl border-2 transition-all hover:opacity-80 text-white"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
