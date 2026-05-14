import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = config.colors.navy;
const ORANGE = config.colors.orange;
const MUTED = config.colors.muted;
const BGLIGHT = config.colors.bgLight;

export const Tarieven = () => (
  <Layout>
    {/* Header */}
    <section className="py-24 text-white text-center" style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
          Transparant
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarieven</h1>
        <p className="max-w-xl mx-auto text-blue-200 opacity-80">
          Geen taxameter, geen verborgen kosten. U betaalt altijd de afgesproken prijs.
        </p>
      </div>
    </section>

    {/* Tarieven tabellen */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {config.tarieven.map((groep, gi) => (
            <div key={gi} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div
                className="px-5 py-4 text-sm font-bold uppercase tracking-wide text-white"
                style={{ backgroundColor: gi === 0 ? NAVY : gi === 1 ? ORANGE : '#374151' }}
              >
                {groep.titel}
              </div>
              <div className="divide-y divide-gray-50">
                {groep.regels.map((r, ri) => (
                  <div
                    key={ri}
                    className="flex justify-between items-center px-5 py-3.5 text-sm"
                    style={{ backgroundColor: ri % 2 === 0 ? BGLIGHT : 'white' }}
                  >
                    <span style={{ color: MUTED }}>{r.omschrijving}</span>
                    <span className="font-bold text-right ml-4" style={{ color: NAVY }}>{r.tarief}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="max-w-2xl mx-auto mt-10 p-5 rounded-xl border-l-4 text-sm"
          style={{ backgroundColor: `${ORANGE}10`, borderColor: ORANGE, color: MUTED }}
        >
          <p className="font-semibold mb-1" style={{ color: NAVY }}>Vaste prijs afspreken?</p>
          Bel ons voor een offerte op maat. Voor vaste ritten zoals vliegveldtransfers spreken we vooraf een vaste prijs af zonder verrassingen.
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-16" style={{ backgroundColor: BGLIGHT }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🤝', title: 'Vaste prijs', text: 'Geen meter. Prijs wordt vooraf afgesproken en wijzigt niet.' },
            { icon: '🧾', title: 'Factuur op aanvraag', text: 'Zakelijke klanten kunnen een factuur ontvangen voor iedere rit.' },
            { icon: '💳', title: 'Betalen per pin of contant', text: 'Zowel pinnen als contant betalen is mogelijk.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold mb-2 text-sm" style={{ color: NAVY }}>{item.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center" style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Direct een rit aanvragen?</h2>
        <p className="text-blue-200 opacity-70 mb-8 max-w-md mx-auto">
          Boek online of bel ons voor een vaste prijs afspraak.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={config.basePath + '/boeken'}
            className="px-10 py-4 font-bold text-white rounded-xl transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: ORANGE }}
          >
            Online Boeken
          </Link>
          <a
            href={`tel:${config.contact.phone}`}
            className="px-10 py-4 font-bold rounded-xl border-2 border-white/30 text-white hover:border-white/60 transition-all"
          >
            {config.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
