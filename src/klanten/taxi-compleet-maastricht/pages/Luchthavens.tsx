import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Luchthavens = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 text-white" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-4">✈️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Luchthavens</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Ontspannen en op tijd naar uw vlucht. Wij rijden naar alle grote luchthavens in binnen- en buitenland.
          </p>
        </div>
      </section>

      {/* Luchthavens grid */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: primary }}>Onze luchthavens</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Vaste all-in prijzen, zonder verrassingen. Vluchtmonitoring inbegrepen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.airports.map((a) => (
              <div
                key={a.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{a.flag}</span>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white" style={{ backgroundColor: primary }}>
                    {a.time}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: primary }}>{a.name}</h3>
                <p className="text-sm text-gray-500">{a.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: primary }}>Waarom met ons naar de luchthaven?</h2>
              <div className="space-y-5">
                {[
                  { icon: '📅', title: 'Vaste all-in prijs', desc: 'Geen verrassingen achteraf. U weet vooraf precies wat de rit kost.' },
                  { icon: '✈️', title: 'Vluchtmonitoring', desc: 'Wij houden uw vlucht in de gaten. Vertraging? Geen probleem, we wachten op u.' },
                  { icon: '🧳', title: 'Ruimte voor bagage', desc: 'Onze voertuigen hebben ruim voldoende ruimte voor koffers en reisbagage.' },
                  { icon: '🕐', title: 'Altijd op tijd', desc: 'Wij plannen de rit zorgvuldig in zodat u altijd ruim op tijd aankomt.' },
                  { icon: '🚐', title: 'Groepen welkom', desc: 'Met ons ruime busje kunt u ook met een groep comfortabel reizen.' },
                ].map(v => (
                  <div key={v.title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{v.icon}</span>
                    <div>
                      <h3 className="font-bold text-sm mb-1" style={{ color: primary }}>{v.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://c625951.ssl.cf3.rackcdn.com/website/4853476/Canva_-_Black_Mercedes_Benz_Coupe.jpg"
                alt="Luchthaven taxi"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: '450px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vliegtuig gepland?</h2>
          <p className="text-blue-200 mb-8 max-w-md mx-auto">Boek uw luchthaventransfer van tevoren en reis zorgeloos.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3 rounded-xl font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent, color: '#fff' }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/rit-boeken'}
              className="px-8 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Transfer aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
