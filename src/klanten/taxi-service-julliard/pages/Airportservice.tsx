import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Airportservice = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section
        className="relative py-32 text-white text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: `${config.colors.darkBg}cc` }} />
        <div className="relative container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">
            ✈️ Luchthaven transfers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Julliard's Airportservice</h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Ontspan en laat ons rijden. Vaste all-in prijzen, vluchtmonitoring en altijd op tijd.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to={config.basePath + '/reserveer-airporttaxi'} className="px-7 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
              Direct reserveren
            </Link>
            <Link to={config.basePath + '/prijzen-airportservice'} className="px-7 py-3.5 font-bold rounded-xl border-2 border-white text-white hover:bg-white transition-colors" style={{ '--hover-color': primary } as React.CSSProperties}>
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </section>

      {/* Luchthavens */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: primary }}>Wij rijden naar</h2>
            <p className="text-gray-500">Vaste routes naar alle grote luchthavens in Nederland, België en Duitsland.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {config.airports.map(airport => (
              <div key={airport.name} className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-lg transition-all">
                <span className="text-3xl">{airport.flag}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-sm" style={{ color: primary }}>{airport.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{airport.country}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold" style={{ color: accent }}>{airport.price}</div>
                  <div className="text-xs text-gray-400">{airport.time}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 p-5 rounded-2xl border-2 border-dashed border-gray-200">
              <span className="text-3xl">🌍</span>
              <div>
                <h3 className="font-bold text-sm" style={{ color: primary }}>Andere luchthaven?</h3>
                <p className="text-xs text-gray-400">Neem contact op voor een offerte</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to={config.basePath + '/prijzen-airportservice'} className="inline-flex items-center gap-2 text-sm font-bold hover:underline" style={{ color: accent }}>
              Bekijk alle prijzen →
            </Link>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: primary }}>Waarom onze airportservice?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: '💰', title: 'Vaste all-in prijs', desc: 'Geen verrassingen achteraf. U betaalt wat afgesproken is, inclusief parkeerkosten en tolwegen.' },
              { icon: '🛫', title: 'Vluchtmonitoring', desc: 'Wij monitoren uw vlucht bij vertragingen. Uw chauffeur past zijn aankomsttijd automatisch aan.' },
              { icon: '🧳', title: 'Ruime bagageruimte', desc: 'Veel koffers? Geen probleem. Onze bus biedt ruimte voor grote hoeveelheden bagage.' },
              { icon: '⏰', title: 'Stipt en betrouwbaar', desc: 'U wordt op tijd opgehaald zodat u zorgeloos uw vlucht haalt. Altijd.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: primary }}>{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Klaar om te reserveren?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">Boek uw airporttaxi online of bel ons direct. Wij staan 24/7 voor u klaar.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={config.basePath + '/reserveer-airporttaxi'} className="px-8 py-4 font-bold rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
              Reserveer uw airporttaxi
            </Link>
            <a href={`tel:${config.contact.phone}`} className="px-8 py-4 border-2 border-white font-bold rounded-xl hover:bg-white transition-colors" style={{ color: 'white' }}>
              📞 {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
