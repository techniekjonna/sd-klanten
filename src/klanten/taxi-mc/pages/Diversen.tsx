import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diversen = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>🎭 Dienst</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Diversen</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Congressen, concerten, evenementen en persoonlijk Europees vervoer. Wij regelen het voor u.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: '🏛️',
                title: 'Congressen & vergaderingen',
                desc: 'Wij verzorgen vervoer van en naar congressen, seminars en zakelijke vergaderingen door heel Europa. Voor groepen en individuen.',
              },
              {
                icon: '🎵',
                title: 'Concerten & evenementen',
                desc: 'Geniet van uw avond zonder zorgen over parkeren of openbaar vervoer. Wij brengen u heen en halen u na afloop op.',
              },
              {
                icon: '🌍',
                title: 'Persoonlijk Europees vervoer',
                desc: 'Van de regio Heerlen naar elke bestemming in Europa. Lange afstandsritten in comfortabele voertuigen op vaste prijs.',
              },
              {
                icon: '👥',
                title: 'Groepsvervoer',
                desc: 'Voor grotere groepen beschikken wij over bestelwagens met capaciteit voor maximaal 8 personen inclusief bagage.',
              },
            ].map((item, i) => (
              <div key={i} className="border-2 border-gray-100 rounded-2xl p-7 hover:border-yellow-400 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: config.colors.dark }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 text-white flex flex-col justify-center">
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Op maat</div>
                <h2 className="text-3xl font-black mb-4">Heeft u een specifieke wens?</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Elk verzoek is anders. Of het nu gaat om een bruiloft, een zakelijke delegatie of een persoonlijk roadtrip door Europa — wij denken graag met u mee en zorgen voor de perfecte oplossing.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`tel:${config.contact.phone}`}
                    className="px-6 py-3 rounded-xl font-black text-black"
                    style={{ backgroundColor: p }}>
                    📞 {config.contact.phoneDisplay}
                  </a>
                  <a href={`mailto:${config.contact.email}`}
                    className="px-6 py-3 rounded-xl font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-colors">
                    ✉️ Stuur een mail
                  </a>
                </div>
              </div>
              <div className="relative min-h-[280px] lg:min-h-0">
                <img
                  src="https://images.unsplash.com/photo-1569288052389-dac9b0ac9eac?w=800&h=600&fit=crop"
                  alt="Diversen vervoer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
