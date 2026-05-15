import { Layout } from '../components/Layout';
import { config } from '../config';

export const Airportvervoer = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>✈️ Dienst</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Airportvervoer</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Vaste tarieven naar alle grote luchthavens in Nederland, België en Duitsland. Geen stress, altijd op tijd.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Ontspannen reizen</div>
              <h2 className="text-3xl font-black mb-6">Geen stress bij de luchthaven</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Een vroeg vliegtuig of een late aankomst? Geen probleem. Taxi MC haalt u op van uw deur en brengt u tijdig naar de luchthaven — of wij staan klaar wanneer u landt. Wij volgen uw vlucht en passen ons aan bij vertragingen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Alle vermelde prijzen zijn vaste tarieven inclusief tolkosten. U weet vooraf exact wat u betaalt — geen verrassingen achteraf.
              </p>
              <div className="bg-yellow-50 border-l-4 rounded-r-xl p-4 mb-8" style={{ borderColor: p }}>
                <div className="font-bold text-sm mb-1">Vluchtmonitoring inbegrepen</div>
                <div className="text-xs text-gray-600">Bij aankomstvluchten controleren wij uw vluchtdienstregeling. U hoeft ons niet te bellen bij vertraging — wij zijn er wanneer u er bent.</div>
              </div>
              <a href={`tel:${config.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-black"
                style={{ backgroundColor: p }}>
                📞 Rit reserveren
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop"
                alt="Airportvervoer"
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
            <h2 className="text-3xl font-black mb-2">Vaste luchthaven tarieven</h2>
            <p className="text-gray-500 text-sm">Prijzen zijn vaste all-in tarieven excl. 9% BTW. Retour op aanvraag.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {config.airports.map((airport, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between border-2 border-gray-100 hover:border-yellow-400 transition-colors">
                <div>
                  <div className="font-bold text-sm">{airport.name}</div>
                  <div className="text-xs text-gray-400">{airport.code}</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-xl" style={{ color: p }}>€{airport.price}</div>
                  <div className="text-xs text-gray-400">v.a.</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">Wachtkosten: €60/uur (na 30 min wachten). Bestelbus (8 pers.): +35% toeslag. Creditcard kosten van toepassing.</p>
        </div>
      </section>

      <section className="py-16 text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-4">Vlucht boeken?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Bel ons direct voor een reservering of stuur uw vlieggegevens per mail.</p>
          <a href={`tel:${config.contact.phone}`}
            className="px-8 py-4 rounded-xl font-black text-black inline-block" style={{ backgroundColor: p }}>
            📞 {config.contact.phoneDisplay}
          </a>
        </div>
      </section>
    </Layout>
  );
};
