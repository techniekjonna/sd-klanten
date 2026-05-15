import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Bereikbaarheid</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact opnemen</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            24/7 bereikbaar voor uw rit of vraag. Bel direct of stuur een e-mail.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Direct bellen — highlighted */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl p-8 text-black mb-6" style={{ backgroundColor: p }}>
                <div className="text-4xl mb-3">📞</div>
                <h2 className="text-xl font-black mb-2">Direct bellen</h2>
                <p className="text-black/70 text-sm mb-4">De snelste manier om een rit te boeken. Wij zijn dag en nacht bereikbaar.</p>
                <a href={`tel:${config.contact.phone}`} className="block text-2xl font-black hover:underline">
                  {config.contact.phoneDisplay}
                </a>
              </div>

              <div className="rounded-2xl p-6 border-2 border-gray-100 mb-4">
                <div className="text-2xl mb-2">✉️</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">E-mail</div>
                <a href={`mailto:${config.contact.email}`} className="font-bold text-sm hover:underline" style={{ color: p }}>
                  {config.contact.email}
                </a>
              </div>

              <div className="rounded-2xl p-6 border-2 border-gray-100 mb-4">
                <div className="text-2xl mb-2">🕐</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Bereikbaarheid</div>
                <p className="font-bold text-sm">24 uur per dag, 7 dagen per week</p>
              </div>

              <div className="rounded-2xl p-6 border-2 border-gray-100">
                <div className="text-2xl mb-2">🏢</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">KvK nummer</div>
                <p className="font-bold text-sm">{config.contact.kvk}</p>
              </div>
            </div>

            {/* Info blok rechts */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl p-8 mb-6" style={{ backgroundColor: config.colors.surface }}>
                <h2 className="text-2xl font-black mb-4">Hoe kunt u ons bereiken?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Voor het boeken van een rit neemt u het beste telefonisch contact op. Zo kunnen wij direct uw wensen bespreken en een geschikte chauffeur inplannen. U kunt ook een e-mail sturen voor offertes of vragen over zakelijk vervoer.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: '💼', title: 'Zakelijk vervoer', text: 'Voor vaste contracten en factuurafspraken.' },
                    { icon: '✈️', title: 'Luchthaventritten', text: 'Vaste tarieven, altijd op tijd bij de gate.' },
                    { icon: '🚆', title: 'Treinvervoer', text: 'Pick-up en drop-off bij alle grote stations.' },
                    { icon: '🌍', title: 'Europees vervoer', text: 'Ritten door heel Europa op aanvraag.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 flex gap-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="font-bold text-sm mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big CTA */}
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: config.colors.dark }}>
                <div className="p-8 text-white">
                  <h3 className="text-xl font-black mb-2">Nu een rit boeken?</h3>
                  <p className="text-gray-400 text-sm mb-6">Bel ons direct — we regelen de rest.</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={`tel:${config.contact.phone}`}
                      className="px-6 py-3 rounded-xl font-black text-black transition-opacity hover:opacity-90"
                      style={{ backgroundColor: p }}>
                      📞 {config.contact.phoneDisplay}
                    </a>
                    <a href={`mailto:${config.contact.email}`}
                      className="px-6 py-3 rounded-xl font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-colors">
                      ✉️ Stuur een mail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
