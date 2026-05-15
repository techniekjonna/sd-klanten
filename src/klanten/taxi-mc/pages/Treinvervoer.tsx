import { Layout } from '../components/Layout';
import { config } from '../config';

export const Treinvervoer = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>🚆 Dienst</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Treinvervoer</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Van en naar alle grote treinstations in de Benelux en Duitsland. Stipt, comfortabel en met vaste prijs.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Treinstation transfers</div>
              <h2 className="text-3xl font-black mb-6">Zorgeloos naar het station</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Of u nu een trein pakt vanuit Nederland, België of Duitsland — Taxi MC brengt u comfortabel naar het station van uw keuze. U hoeft zich geen zorgen te maken over parkeren, files of aansluitingen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wij hanteren vaste tarieven voor alle verbindingen. Zo weet u vooraf precies wat de rit kost en hoeft u niet te rekenen met een lopende meter.
              </p>
              <ul className="space-y-3 mb-8">
                {['Vaste tarieven, geen meter', 'Ophalen aan huis', 'Afzetten bij het perron', 'Grote bagage meenemen', 'Tijdig bij uw trein', 'Retour mogelijk'].map((item, i) => (
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
                📞 Rit boeken
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop"
                alt="Treinvervoer"
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
            <h2 className="text-3xl font-black mb-2">Vaste station tarieven</h2>
            <p className="text-gray-500 text-sm">All-in prijzen excl. 9% BTW. Wachtkosten na 30 min: €60/uur.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {config.trainStations.map((station, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between border-2 border-gray-100 hover:border-yellow-400 transition-colors">
                <div className="font-bold text-sm">{station.name}</div>
                <div className="font-black text-xl" style={{ color: p }}>€{station.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-4">Treinstation reserveren?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Bel ons direct om uw rit te boeken. Wij zijn 24/7 bereikbaar.</p>
          <a href={`tel:${config.contact.phone}`}
            className="px-8 py-4 rounded-xl font-black text-black inline-block" style={{ backgroundColor: p }}>
            📞 {config.contact.phoneDisplay}
          </a>
        </div>
      </section>
    </Layout>
  );
};
