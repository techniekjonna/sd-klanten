import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Luchthaven = () => (
  <Layout>
    <section
      className="py-16 text-white"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: config.colors.accent }}>
          ✈️ Luchthaventransfer
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Naar het vliegveld?</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
          Taxibedrijf Savelkoul brengt u ontspannen naar alle grote vliegvelden vanuit Heerlen. Vaste all-in prijs, vluchtbewaking inbegrepen.
        </p>
      </div>
    </section>

    {/* USPs */}
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '💰', title: 'Vaste all-in prijs', desc: 'Geen verrassingen. Prijs inclusief tolwegen, bagage en wachttijd bij vertraging.' },
            { icon: '🛬', title: 'Vluchtbewaking', desc: 'Wij volgen uw vlucht live. Bij vertraging wacht uw chauffeur gewoon op u.' },
            { icon: '🧳', title: 'Ruime kofferruimte', desc: 'Grote koffers, skikoffers of golfbags — geen probleem.' },
            { icon: '⏰', title: 'Altijd op tijd', desc: 'Wij halen u vroeg op zodat u nooit stress heeft bij de incheckbalie.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                style={{ backgroundColor: `${config.colors.accent}18` }}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: config.colors.primary }}>{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Vliegvelden */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: config.colors.primary }}>
          Beschikbare vliegvelden
        </h2>
        <div className="space-y-3">
          {config.airports.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-5 bg-white border border-gray-100 rounded-xl px-6 py-5 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">{a.flag}</span>
              <div className="flex-1">
                <p className="font-bold" style={{ color: config.colors.primary }}>{a.name}</p>
                <p className="text-sm text-gray-400">{a.country} — ongeveer {a.time} rijden vanuit Heerlen</p>
              </div>
              <div className="text-right">
                <p className="font-extrabold text-lg" style={{ color: config.colors.accent }}>{a.price}</p>
                <p className="text-xs text-gray-400">all-in</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs mt-5">{config.pricing.note}</p>
      </div>
    </section>

    {/* Hoe werkt het */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-center mb-10" style={{ color: config.colors.primary }}>
          Hoe werkt het?
        </h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
          <div className="space-y-8">
            {[
              { step: '1', title: 'Boek uw rit', desc: 'Bel ons of boek via het online formulier. Geef uw vertrekdatum, vluchtgegevens en adres op.' },
              { step: '2', title: 'Bevestiging', desc: 'U ontvangt bevestiging van uw boeking met de vaste prijs. Geen verrassingen achteraf.' },
              { step: '3', title: 'Chauffeur aan de deur', desc: 'Op de afgesproken tijd staat uw chauffeur klaar. Ruim op tijd voor uw vlucht.' },
              { step: '4', title: 'Ontspannen vliegen', desc: 'Stap in en geniet van de rit. Wij volgen uw vlucht — bij terugkomst staan we op u te wachten.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start relative">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white text-sm flex-shrink-0 relative z-10"
                  style={{ backgroundColor: config.colors.accent }}
                >
                  {item.step}
                </div>
                <div className="bg-white rounded-xl px-5 py-4 border border-gray-100 flex-1">
                  <h3 className="font-bold mb-1" style={{ color: config.colors.primary }}>{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 text-center" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-white mb-3">Luchthavenrit boeken?</h2>
        <p className="text-gray-400 text-sm mb-7">Plan uw rit ruim op tijd — wij regelen de rest.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-7 py-3.5 font-bold rounded-xl text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: config.colors.accent, color: '#fff' }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-7 py-3.5 border-2 border-white text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-colors"
          >
            Online aanvragen →
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
