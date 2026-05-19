import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const ZakelijkVervoer = () => {
  const p = config.colors.primary;
  const navy = config.colors.navy;
  const service = config.services.find((s) => s.id === 'zakelijk')!;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 text-white" style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FDBA74' }}>
              Zakelijk
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Zakelijk Vervoer in Maastricht
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Professioneel, punctueel en representatief. Taxi Nelissen verzorgt al meer dan 60 jaar
              zakelijk vervoer voor bedrijven en organisaties in de regio Maastricht.
            </p>
            <a
              href={`tel:${config.contact.phoneHref}`}
              className="inline-block px-8 py-4 font-bold text-white rounded-xl shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              📞 Offerte aanvragen
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ backgroundColor: config.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: navy }}>
                Uw zakelijke partner in vervoer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Voor zakelijk vervoer is stiptheid en professionaliteit geen luxe – het is een
                vereiste. Taxi Nelissen begrijpt dit als geen ander. Onze chauffeurs zijn representatief,
                discreet en kennen de regio als geen ander.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wij bieden maatwerkcontracten voor bedrijven die regelmatig gebruik maken van ons
                vervoer. Factuur op naam van het bedrijf, vaste chauffeur op aanvraag en directievervoer
                behoren tot onze mogelijkheden.
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: config.colors.text }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${p}20` }}>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: p }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              {[
                { icon: '💼', title: 'Directievervoer', desc: 'Discreet en representatief vervoer voor uw directie en management.' },
                { icon: '🤝', title: 'Vaste contracten', desc: 'Sluit een contract af voor regelmatig gebruik en profiteer van gunstige tarieven.' },
                { icon: '📋', title: 'Factuur op bedrijfsnaam', desc: 'Eenvoudige administratie – factuur rechtstreeks op naam van uw bedrijf.' },
                { icon: '✈️', title: 'Zakenreizen & luchthavens', desc: 'Wij brengen u stressvrij naar alle grote luchthavens in de regio.' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
                  <span className="text-3xl flex-shrink-0">{card.icon}</span>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: navy }}>{card.title}</h4>
                    <p className="text-sm text-gray-500">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white" style={{ backgroundColor: p }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Zakelijk contract afsluiten?</h2>
          <p className="mb-6 opacity-90">Neem contact op voor een offerte op maat.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${config.contact.phoneHref}`} className="px-8 py-3.5 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors" style={{ color: p }}>
              📞 {config.contact.phone}
            </a>
            <Link to={config.basePath + '/contact'} className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-colors">
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
