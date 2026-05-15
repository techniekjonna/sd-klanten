import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;
const MUTED = '#64748B';

export const Tarieven = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 text-white" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
            Eerlijk & transparant
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarieven</h1>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Geen verrassingen. U weet van tevoren precies wat de rit kost. Afgesproken prijs = eindprijs.
          </p>
        </div>
      </section>

      {/* Tarieven tabellen */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {config.tarieven.map((groep, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="px-7 py-5" style={{ backgroundColor: PRIMARY }}>
                  <h2 className="text-lg font-bold text-white">{groep.titel}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {groep.regels.map((regel, j) => (
                    <div key={j} className="flex items-center justify-between px-7 py-4">
                      <span className="text-sm" style={{ color: MUTED }}>{regel.omschrijving}</span>
                      <span className="font-bold text-sm" style={{ color: PRIMARY }}>{regel.tarief}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info block */}
          <div className="max-w-3xl mx-auto mt-8">
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: `${ACCENT}15`, border: `1px solid ${ACCENT}40` }}
            >
              <h3 className="font-bold mb-3" style={{ color: PRIMARY }}>Goed om te weten</h3>
              <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
                <li className="flex gap-2"><span style={{ color: ACCENT }}>•</span> Alle tarieven zijn inclusief BTW.</li>
                <li className="flex gap-2"><span style={{ color: ACCENT }}>•</span> Bij twijfel over de prijs: bel ons en wij geven u direct een vaste prijs op.</li>
                <li className="flex gap-2"><span style={{ color: ACCENT }}>•</span> Groepsvervoer en zakelijke ritten op aanvraag — we maken graag een offerte.</li>
                <li className="flex gap-2"><span style={{ color: ACCENT }}>•</span> Betaling mogelijk per pin of contant.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">Vraag een vaste prijs op</h2>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Bel ons en wij geven u meteen een prijsopgave voor uw rit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: '#fff' }}
            >
              Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 text-white transition-all hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
