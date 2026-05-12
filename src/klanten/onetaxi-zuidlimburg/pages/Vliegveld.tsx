import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const airports = [
  {
    name: 'Maastricht Aachen Airport',
    code: 'MST',
    afstand: '± 15 km',
    rijtijd: '± 20 min',
    icon: '🛫',
  },
  {
    name: 'Eindhoven Airport',
    code: 'EIN',
    afstand: '± 80 km',
    rijtijd: '± 60 min',
    icon: '✈️',
  },
  {
    name: 'Düsseldorf Airport',
    code: 'DUS',
    afstand: '± 75 km',
    rijtijd: '± 55 min',
    icon: '🛬',
  },
  {
    name: 'Schiphol Amsterdam',
    code: 'AMS',
    afstand: '± 225 km',
    rijtijd: '± 2 uur',
    icon: '✈️',
  },
];

const voordelen = [
  { icon: '🕐', title: 'Vluchttracking', desc: 'Wij volgen uw vlucht live. Vertraging? Dan wachten wij op u.' },
  { icon: '🧳', title: 'Ruime kofferruimte', desc: 'Voldoende ruimte voor meerdere koffers — geen gedoe met instappen.' },
  { icon: '☀️', title: 'Vroege & late ritten', desc: 'Vroege ochtendvlucht of late landing? Wij zijn er altijd voor u.' },
  { icon: '💶', title: 'Vaste prijs', desc: 'Geen taxameter verrassingen. U kent de prijs vóór de rit.' },
];

export const Vliegveld = () => {
  const yellow = config.colors.primary;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-24 text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: yellow, color: '#111' }}
          >
            Vliegveld Transfer
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Stressvrij naar het <span style={{ color: yellow }}>Vliegveld</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Wij brengen u op tijd naar elk vliegveld in de regio. Comfortabel, betrouwbaar en met een vaste prijs.
          </p>
        </div>
      </section>

      {/* Vliegvelden */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10 text-black">
            Wij rijden naar <span style={{ color: '#CC0000' }}>alle vliegvelden</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {airports.map((airport) => (
              <div
                key={airport.code}
                className="text-center p-7 rounded-2xl border-2 border-gray-100 hover:border-yellow-400 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{airport.icon}</div>
                <h3 className="font-black text-black text-base mb-1">{airport.name}</h3>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{ backgroundColor: yellow, color: '#111' }}
                >
                  {airport.code}
                </span>
                <div className="space-y-1 text-sm text-gray-500 mt-3">
                  <p>📍 {airport.afstand}</p>
                  <p>⏱️ {airport.rijtijd}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16" style={{ backgroundColor: '#111' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-white mb-10">
            Waarom OneTaxi voor uw <span style={{ color: yellow }}>vliegveldrit</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {voordelen.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#1A1A1A' }}>
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-black text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-black text-center mb-10 text-black">Hoe werkt het?</h2>
          <div className="space-y-6">
            {[
              { stap: '1', title: 'Reserveer uw rit', desc: 'Boek online via onze reserveringspagina of bel/WhatsApp ons direct. Geef uw vertrek- en aankomstadres op, samen met de gewenste datum en tijd.' },
              { stap: '2', title: 'Ontvang bevestiging', desc: 'Wij bevestigen uw rit zo snel mogelijk. U ontvangt alle details van uw rit, inclusief de naam van uw chauffeur en het kenteken.' },
              { stap: '3', title: 'Wij zijn er op tijd', desc: 'Uw chauffeur staat klaar op het afgesproken tijdstip. Wij houden uw vlucht in de gaten — ook bij vertraging.' },
              { stap: '4', title: 'Comfortabele rit', desc: 'Geniet van een comfortabele rit zonder stress. Betalen kan per pin of contant bij aankomst.' },
            ].map(({ stap, title, desc }) => (
              <div key={stap} className="flex gap-5 items-start">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black text-black text-lg"
                  style={{ backgroundColor: yellow }}
                >
                  {stap}
                </div>
                <div>
                  <h3 className="font-black text-black mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ backgroundColor: yellow }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-black mb-3">Vliegveldrit nodig?</h2>
          <p className="text-black/70 mb-8">Reserveer nu of neem direct contact op voor een vaste prijs offerte.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/reserveren'}
              className="px-8 py-3.5 font-bold text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#CC0000' }}
            >
              Direct Reserveren
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold text-black bg-white rounded-xl hover:bg-gray-100 transition-colors"
            >
              📞 {config.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
