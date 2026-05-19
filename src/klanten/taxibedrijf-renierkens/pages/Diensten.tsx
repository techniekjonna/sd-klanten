import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const accent = config.colors.accent;

const serviceIcons: Record<string, JSX.Element> = {
  car: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875H3a3 3 0 106 0h3.75a.75.75 0 00.75-.75V15z" />
      <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
      <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </svg>
  ),
  plane: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  ),
  briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
    </svg>
  ),
};

/* Extra detail content per service */
const serviceDetails: Record<string, { intro: string; airports?: string[] }> = {
  'luchthavenvervoer': {
    intro:
      'Wij brengen u stressvrij naar alle grote luchthavens in de regio. Uw vlucht wordt gemonitord zodat wij u op het juiste moment ophalen — ook bij vertraging.',
    airports: [
      'Maastricht Aachen Airport (MST)',
      'Brussel-Zaventem (BRU)',
      'Düsseldorf International (DUS)',
      'Amsterdam Schiphol (AMS)',
    ],
  },
  'zorgvervoer': {
    intro:
      'Zorgvervoer vraagt om extra aandacht en geduld. Onze chauffeurs zijn daarin opgeleid. Wij werken samen met zorginstanties en bieden vervoer via WMO- en zorgcontracten aan.',
  },
  'particulier-vervoer': {
    intro:
      'Voor elke gelegenheid — of het nu dagelijks woon-werkverkeer, een avondje uit of een speciale gebeurtenis betreft. Wij rijden door heel Zuid-Limburg en omgeving.',
  },
  'zakelijk-contract': {
    intro:
      'Sluit een maatwerk contract af voor structureel vervoer van uw medewerkers of gasten. Vaste chauffeurs, centrale facturatie en prioriteitsservice gaan hand in hand.',
  },
};

export const Diensten = () => {
  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: config.colors.text }}
      >
        {/* Decorative gold stripe */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: accent }}
        />
        <div className="container mx-auto px-4">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide"
            style={{ backgroundColor: 'rgba(200,150,62,0.2)', color: accent, border: `1px solid ${accent}` }}
          >
            Taxibedrijf Renierkens
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Onze Diensten</h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">{config.description}</p>
        </div>
      </section>

      {/* Services — detailed cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => {
              const extra = serviceDetails[s.id];
              return (
                <div
                  key={s.id}
                  className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  {/* Card top bar */}
                  <div
                    className="px-8 pt-8 pb-6"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#fff', color: p }}
                      >
                        {serviceIcons[s.icon] ?? <span className="text-3xl">{s.icon}</span>}
                      </div>
                      {s.priceLabel && (
                        <span
                          className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: p, color: '#fff' }}
                        >
                          {s.priceLabel}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-extrabold mt-4" style={{ color: config.colors.text }}>
                      {s.name}
                    </h2>
                  </div>

                  {/* Card body */}
                  <div className="px-8 py-7 bg-white">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                    {extra?.intro && s.id !== s.id && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{extra.intro}</p>
                    )}

                    {/* Airport list for luchthavenvervoer */}
                    {extra?.airports && (
                      <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                          Luchthavens die wij bedienen
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {extra.airports.map((airport) => (
                            <span
                              key={airport}
                              className="text-xs px-2.5 py-1 rounded-lg font-medium"
                              style={{ backgroundColor: config.colors.primaryLight, color: p }}
                            >
                              {airport}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features list */}
                    {s.features && s.features.length > 0 && (
                      <ul className="space-y-2">
                        {s.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: config.colors.primaryLight }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" style={{ color: p }}>
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                              </svg>
                            </span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works strip */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: config.colors.text }}>
            Hoe werkt het?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {[
              { step: '1', title: 'Reserveer', desc: 'Bel ons of stuur een aanvraag via de website. Minimaal 24 uur van tevoren voor geplande ritten.' },
              { step: '2', title: 'Bevestiging', desc: 'Wij bevestigen uw rit en sturen de chauffeur- en ritinformatie naar u toe.' },
              { step: '3', title: 'Op tijd aanwezig', desc: 'Uw chauffeur staat stipt op tijd voor de deur klaar en brengt u veilig naar uw bestemming.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg mb-4 shadow-md"
                  style={{ backgroundColor: p }}
                >
                  {step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: config.colors.text }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with phone */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Klaar voor uw rit?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Bel direct of stuur een aanvraag. Wij regelen de rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0455327470"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: accent, color: '#fff' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
              </svg>
              045 532 7470
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="inline-block px-8 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: p }}
            >
              Online Aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
