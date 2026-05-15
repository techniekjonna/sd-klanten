import { Layout } from '../components/Layout';
import { config } from '../config';

export const ZakelijkVervoer = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>💼 Dienst</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Zakelijk Vervoer</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Professioneel, discreet en altijd op tijd. Vervoer voor executives en zakenreizigers.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Zakelijk vervoer op maat</div>
              <h2 className="text-3xl font-black mb-6">Uw partner voor zakelijk reizen</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Taxi MC verzorgt professioneel zakelijk vervoer voor bedrijven, executives en zakenreizigers. Wij begrijpen dat stiptheid, discretie en comfort essentieel zijn wanneer u op weg bent naar een vergadering, bedrijfsbezoek of evenement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                U kunt rekenen op een representatieve chauffeur, een comfortabel voertuig en een vaste prijsafspraak vooraf. Ritten worden gefactureerd op bedrijfsnaam indien gewenst.
              </p>
              <ul className="space-y-3 mb-8">
                {['Factuur op bedrijfsnaam mogelijk', 'Vaste chauffeur na afspraak', 'Discreet en professioneel', 'Flexibele pick-up tijden', 'Heel Europa mogelijk', 'Op aanvraag geprijsd'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: p }}>
                      <span className="text-black text-xs font-black">✓</span>
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={`tel:${config.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-black"
                style={{ backgroundColor: p }}>
                📞 Offerte aanvragen
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=800&h=600&fit=crop"
                alt="Zakelijk vervoer"
                className="rounded-2xl w-full object-cover shadow-2xl"
                style={{ height: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: config.colors.surface }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Wat is inbegrepen?</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Elk zakelijk traject bij Taxi MC omvat standaard de volgende zaken.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {config.vehicleFeatures.map((feat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-center gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${p}22` }}>
                  <span className="text-sm" style={{ color: p }}>✓</span>
                </div>
                <span className="font-medium text-sm">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-4">Interesse in zakelijk vervoer?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Neem contact op voor een vrijblijvende offerte of om uw vaste ritten te bespreken.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${config.contact.phone}`}
              className="px-8 py-4 rounded-xl font-black text-black" style={{ backgroundColor: p }}>
              📞 {config.contact.phoneDisplay}
            </a>
            <a href={`mailto:${config.contact.email}`}
              className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-colors">
              ✉️ {config.contact.email}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
