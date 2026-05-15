import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const GREEN = config.colors.primary;
const GOLD = config.colors.accent;
const MUTED = '#78716C';

export const Tarieven = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Eerlijk & transparant</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: GREEN }}>Tarieven</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: MUTED }}>
            Geen taxameter, geen verborgen kosten. U weet van tevoren precies wat de rit kost.
          </p>
        </div>
      </section>

      {/* Tarieven */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {config.tarieven.map((groep, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-stone-100 shadow-sm">
                <div className="px-7 py-4 flex items-center gap-3" style={{ backgroundColor: GREEN }}>
                  <h2 className="text-base font-bold text-white">{groep.titel}</h2>
                </div>
                <div className="divide-y divide-stone-100">
                  {groep.regels.map((regel, j) => (
                    <div key={j} className="flex items-center justify-between px-7 py-4 hover:bg-stone-50 transition-colors">
                      <span className="text-sm" style={{ color: MUTED }}>{regel.omschrijving}</span>
                      <span className="font-bold text-sm" style={{ color: GREEN }}>{regel.tarief}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Info */}
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: `${GOLD}15`, borderColor: `${GOLD}50` }}
            >
              <h3 className="font-bold mb-3 text-sm" style={{ color: GREEN }}>Goed om te weten</h3>
              <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
                <li className="flex gap-2"><span style={{ color: GOLD }}>•</span> Alle tarieven zijn inclusief BTW.</li>
                <li className="flex gap-2"><span style={{ color: GOLD }}>•</span> Twijfel over de prijs? Bel ons voor een directe opgave.</li>
                <li className="flex gap-2"><span style={{ color: GOLD }}>•</span> Groepsvervoer en zakelijke ritten op aanvraag — offerte mogelijk.</li>
                <li className="flex gap-2"><span style={{ color: GOLD }}>•</span> Betaling per pin of contant.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: GREEN }}>Vraag een vaste prijs op</h2>
          <p className="mb-8 text-sm" style={{ color: MUTED }}>Bel ons en wij geven u meteen een prijsopgave voor uw rit.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 transition-opacity hover:opacity-70"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
