import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const ParticulierVervoer = () => {
  const p = config.colors.primary;
  const navy = config.colors.navy;
  const service = config.services.find((s) => s.id === 'particulier')!;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 text-white" style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FDBA74' }}>
              Taxi Nelissen
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Particulier Vervoer in Maastricht
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Comfortabel, betaalbaar en betrouwbaar taxivervoer voor particulieren in de regio Maastricht.
              Van een dagje uit tot luchthavenvervoer – wij brengen u veilig op uw bestemming.
            </p>
            <a
              href={`tel:${config.contact.phoneHref}`}
              className="inline-block px-8 py-4 font-bold text-white rounded-xl shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              📞 Direct reserveren
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ backgroundColor: config.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: navy }}>
                Comfortabel van deur tot deur
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bij Taxi Nelissen kunt u rekenen op persoonlijk vervoer dat aansluit bij uw wensen.
                Onze vriendelijke chauffeurs staan voor de deur op het afgesproken tijdstip en brengen
                u veilig naar uw bestemming. Of het nu een bezoek aan vrienden is, een avondje uit
                of een vroeg vliegtuig – wij zorgen voor een zorgeloze rit.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wij hanteren vaste, transparante all-in prijzen zodat u nooit voor verrassingen
                staat. Grote bagage is altijd welkom en een retourrit plannen is eenvoudig.
              </p>

              <h3 className="text-xl font-bold mb-4" style={{ color: navy }}>Inbegrepen bij particulier vervoer:</h3>
              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: config.colors.text }}>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${p}20` }}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: p }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              {[
                { icon: '🚖', title: 'Vaste all-in tarieven', desc: 'Geen verborgen kosten of toeslagen. U betaalt altijd de afgesproken prijs.' },
                { icon: '⏰', title: 'Altijd op tijd', desc: 'Uw chauffeur staat stipt op de afgesproken tijd voor de deur.' },
                { icon: '🧳', title: 'Ruimte voor bagage', desc: 'Grote koffers, kinderwagens en rolstoelen zijn altijd welkom.' },
                { icon: '📱', title: 'Eenvoudig boeken', desc: 'Bel ons of stuur een bericht. Binnen no-time is uw rit geboekt.' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
                  <span className="text-3xl flex-shrink-0">{card.icon}</span>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: navy }}>{card.title}</h4>
                    <p className="text-sm text-gray-500">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white" style={{ backgroundColor: p }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Rit reserveren?</h2>
          <p className="mb-6 opacity-90">Bel ons direct of gebruik het contactformulier.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phoneHref}`}
              className="px-8 py-3.5 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: p }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-colors"
            >
              Contactformulier
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
