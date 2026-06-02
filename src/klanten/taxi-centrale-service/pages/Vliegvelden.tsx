import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Vliegvelden = () => (
  <Layout>
    {/* Hero with photo background */}
    <section
      className="relative py-28 text-white"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1530675669163-6f4c0f2bafd5?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(6,14,28,0.80)' }} />
      <div className="relative container mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Luchthaven transfers</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Zorgeloos naar uw vlucht</h1>
        <p className="text-white/65 max-w-xl mx-auto text-sm leading-relaxed">
          Van Kerkrade naar alle grote luchthavens in Nederland, Duitsland en België. Vaste all-in prijzen, vluchtmonitoring inbegrepen.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Airport cards grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: config.colors.text }}>Beschikbare luchthavens</h2>
            <p className="text-gray-500 text-sm mt-2">Vanuit Kerkrade en de grensregio rijden wij naar al deze luchthavens</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {config.airports.map(airport => (
              <div
                key={airport.name}
                className="rounded-2xl p-6 border-2 hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ borderColor: config.colors.light }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl shrink-0">{airport.flag}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-sm leading-snug" style={{ color: config.colors.text }}>{airport.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{airport.country}</p>
                    <span
                      className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold"
                      style={{ backgroundColor: config.colors.light, color: config.colors.primary }}
                    >
                      {airport.time} rijden
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hoe werkt het */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: config.colors.text }}>Hoe werkt het?</h2>
            <p className="text-gray-500 text-sm mt-2">In 3 eenvoudige stappen naar uw vlucht</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Reserveer uw rit',
                desc: 'Bel ons of stuur een bericht met uw vluchtgegevens, ophaallocatie en gewenste tijdstip. Wij bevestigen uw reservering.',
              },
              {
                step: '02',
                title: 'Wij monitoren uw vlucht',
                desc: 'Bij terugvluchten volgen wij uw vlucht live. Vertraging? Wij passen de ophaaltijd automatisch aan — geen stress.',
              },
              {
                step: '03',
                title: 'Comfortabel vervoer',
                desc: 'Uw TCS-chauffeur staat stipt klaar en brengt u veilig en ontspannen naar uw bestemming.',
              },
            ].map(item => (
              <div key={item.step} className="relative rounded-2xl p-7" style={{ backgroundColor: config.colors.light }}>
                <div
                  className="absolute -top-3 -left-3 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white shadow-md"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  {item.step}
                </div>
                <h3 className="font-black text-base mb-2 mt-1" style={{ color: config.colors.text }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: config.colors.primary }}>
          <h2 className="text-xl font-black mb-6 text-white">Waarom TCS voor uw luchthaventrip?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '✈️', title: 'Vluchtmonitoring', desc: 'Wij volgen uw vlucht live. Vertraging? Wij wachten zonder extra kosten.' },
              { icon: '💶', title: 'Vaste all-in prijs', desc: 'Geen toeslag voor bagage, nachtrit of wachttijd bij de grens.' },
              { icon: '🧳', title: 'Ruime bagageruimte', desc: 'Genoeg plek voor koffers, skispullen, kinderwagens en meer.' },
              { icon: '🌍', title: 'Grensregio specialist', desc: 'Kerkrade grenst aan Duitsland — wij rijden dagelijks over de grens.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1 text-white">{item.title}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="rounded-2xl p-8" style={{ backgroundColor: config.colors.light }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black mb-1" style={{ color: config.colors.text }}>Luchthaven transfer boeken?</h3>
              <p className="text-gray-500 text-sm">Bel ons of stuur een bericht voor een vaste prijs op maat.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
              >
                Bel: {config.contact.phoneDisplay}
              </a>
              <Link
                to={config.basePath + '/contact'}
                className="px-6 py-3 rounded-xl font-bold text-sm border-2 hover:opacity-80 transition-all"
                style={{ borderColor: config.colors.primary, color: config.colors.primary }}
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
