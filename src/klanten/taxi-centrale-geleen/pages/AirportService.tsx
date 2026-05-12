import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const AirportService = () => {
  const y = config.colors.primary;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-32 text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        <div className="relative container mx-auto px-4 text-center">
          <div className="text-5xl mb-6">✈️</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Airport Service</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: '#ccc' }}>
            Zorgeloos naar uw vliegtuig. Wij monitoren uw vlucht en zorgen dat u op tijd aankomt.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-extrabold mb-5" style={{ color: config.colors.dark }}>
                Stress-vrij op weg naar het vliegveld
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Met onze airport service staat u ontspannen in het vliegtuig. Wij halen u op, monitoren uw vlucht en staan u bij aankomst op te wachten — met uw naam op een bordje.
              </p>
              <p className="text-gray-500 leading-relaxed mb-7">
                Al onze airport tarieven zijn vaste all-in prijzen. Inclusief wachttijd, parkeergeld en tolkosten. U betaalt wat is afgesproken, niets meer.
              </p>
              <div className="space-y-3">
                {['Vluchtmonitoring inbegrepen', 'All-in vaste prijs', 'Terugrit ook mogelijk', 'Max. 4 personen per voertuig', 'Grote bagage welkom', 'Op tijd of uw geld terug'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: y, color: '#111' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {config.airports.map((airport) => (
                <div
                  key={airport.name}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-yellow-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{airport.flag}</span>
                    <div>
                      <p className="font-bold text-sm" style={{ color: config.colors.dark }}>{airport.name}</p>
                      <p className="text-xs text-gray-400">{airport.country} · {airport.time}</p>
                    </div>
                  </div>
                  <Link
                    to={config.basePath + '/bestellen'}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: y, color: '#111' }}
                  >
                    Boek
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-center mb-12" style={{ color: config.colors.dark }}>
            Zo werkt onze airport service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: '1', icon: '📞', title: 'Boek van tevoren', desc: 'Bel of gebruik ons formulier. Geef uw vluchtgegevens op voor vluchtmonitoring.' },
              { step: '2', icon: '🚕', title: 'Wij halen u op', desc: 'Op de afgesproken tijd staat onze chauffeur bij u voor de deur.' },
              { step: '3', icon: '✈️', title: 'Zorgeloos vliegen', desc: 'Comfortabel naar het vliegveld, met ruim de tijd voor inchecken.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: y }}>Stap {item.step}</div>
                <h3 className="font-bold mb-2" style={{ color: config.colors.dark }}>{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-extrabold mb-2 text-white">Uw vlucht al ingepland?</h2>
          <p className="text-sm mb-7" style={{ color: '#888' }}>Boek uw airport transfer nu en reis stress-vrij.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-7 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: y, color: '#111' }}
            >
              📞 Bel Direct
            </a>
            <Link
              to={config.basePath + '/bestellen'}
              className="px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Online Bestellen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
