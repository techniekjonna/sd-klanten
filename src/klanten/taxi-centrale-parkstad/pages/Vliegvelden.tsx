import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Vliegvelden = () => (
  <Layout>
    <section className="py-20 text-white" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Luchthaven transfers</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Zorgeloos naar uw vlucht</h1>
        <p className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
          Van Heerlen en omgeving naar alle grote luchthavens. Vaste all-in prijzen, geen verrassingen onderweg.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Luchthavens grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {config.airports.map(airport => (
            <div
              key={airport.name}
              className="rounded-2xl p-6 border-2 flex items-center gap-4 hover:shadow-md transition-all"
              style={{ borderColor: config.colors.light }}
            >
              <div className="text-4xl">{airport.flag}</div>
              <div>
                <p className="font-bold text-sm" style={{ color: config.colors.text }}>{airport.name}</p>
                <p className="text-xs text-gray-400">{airport.country}</p>
                <span
                  className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: config.colors.light, color: config.colors.primary }}
                >
                  ± {airport.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Voordelen */}
        <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: config.colors.light }}>
          <h2 className="text-2xl font-black mb-6" style={{ color: config.colors.text }}>Waarom TCP voor uw luchthaventrip?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '✈️', title: 'Vluchtmonitoring', desc: 'Wij volgen uw vlucht. Vertraging? Wij wachten.' },
              { icon: '💶', title: 'Vaste all-in prijs', desc: 'Geen toeslag voor bagage, wachttijd of nachtritten.' },
              { icon: '🛄', title: 'Grote bagageruimte', desc: 'Ruimte voor koffers, skispullen en meer.' },
              { icon: '🕐', title: 'Stipt & betrouwbaar', desc: 'Altijd op tijd opgehaald, nooit stress bij de gate.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: config.colors.text }}>{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: config.colors.primary }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black mb-2">Luchthaven transfer boeken?</h3>
              <p className="text-white/70 text-sm">Bel ons of vraag een offerte aan voor een vaste prijs naar uw luchthaven.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
              >
                📞 Bel direct
              </a>
              <Link
                to={config.basePath + '/bestellen'}
                className="px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Rit aanvragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
