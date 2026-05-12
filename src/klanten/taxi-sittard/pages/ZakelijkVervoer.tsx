import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const voordelen = [
  { icon: '🧾', title: 'Factuur op bedrijfsnaam', desc: 'Eenvoudig voor uw administratie. Maandelijkse of per-rit facturatie mogelijk.' },
  { icon: '👤', title: 'Vaste chauffeur', desc: 'Herkenbaar gezicht voor uw medewerkers en gasten. Op aanvraag.' },
  { icon: '🕐', title: 'Stipte planning', desc: 'Wij houden uw agenda bij. Nooit te laat op een afspraak of vergadering.' },
  { icon: '🔒', title: 'Discreet en professioneel', desc: 'Onze chauffeurs zijn getraind op zakelijke standaarden.' },
  { icon: '📱', title: 'Directe bereikbaarheid', desc: '24/7 bereikbaar voor last-minute ritten en spoedopdrachten.' },
  { icon: '✈️', title: 'Airport & events', desc: 'Van zakenreizen tot teamuitjes en representatief vervoer bij events.' },
];

export const ZakelijkVervoer = () => (
  <Layout>
    <section
      className="py-16 text-white"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: config.colors.accent }}
          >
            Voor bedrijven
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Zakelijk Vervoer</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Betrouwbaar, discreet en professioneel taxivervoer voor bedrijven en hun medewerkers in Zuid-Limburg.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block mt-8 px-7 py-3.5 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: config.colors.accent }}
          >
            Zakelijk account aanvragen →
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-center mb-12" style={{ color: config.colors.primary }}>
          Waarom bedrijven voor ons kiezen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {voordelen.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-base mb-2" style={{ color: config.colors.primary }}>{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: config.colors.primary }}>
          Contract & vaste afspraken
        </h2>
        <p className="text-gray-500 mb-8">
          Voor regelmatig zakelijk vervoer bieden wij contracttarieven en maandelijkse facturatie aan.
          Neem contact op voor een persoonlijk gesprek over de mogelijkheden.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-7 py-3.5 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: config.colors.primary }}
          >
            📞 Direct bellen
          </a>
          <a
            href={`mailto:${config.contact.email}`}
            className="px-7 py-3.5 font-bold rounded-xl border-2 transition-colors hover:bg-gray-50"
            style={{ borderColor: config.colors.accent, color: config.colors.primary }}
          >
            ✉ Mail ons
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
