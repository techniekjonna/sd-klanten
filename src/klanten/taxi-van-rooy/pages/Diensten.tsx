import { Link } from 'react-router-dom';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const DARK = config.colors.dark;

export const Diensten = () => {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: DARK }} className="py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: PRIMARY }}>
            Wat wij aanbieden
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Onze diensten</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Van lokaal taxivervoer tot internationaal groepsvervoer — wij hebben voor elke vervoersbehoefte een oplossing.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {config.services.map((service) => (
              <div
                key={service.id}
                className="group border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-lg transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold"
                      style={{ backgroundColor: PRIMARY, color: DARK }}
                    >
                      <span className="text-base">{service.icon}</span>
                      {service.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <svg className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3">
                    <Link
                      to={config.basePath + '/diensten/' + service.slug}
                      className="px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                      style={{ backgroundColor: PRIMARY, color: DARK }}
                    >
                      Meer informatie
                    </Link>
                    <a
                      href={`tel:${config.contact.phone}`}
                      className="px-5 py-2.5 rounded-xl font-bold text-sm border-2 transition-colors hover:bg-gray-50"
                      style={{ borderColor: DARK, color: DARK }}
                    >
                      Direct bellen
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports section */}
      <section style={{ backgroundColor: config.colors.surface }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Airportservice</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-3">
              Wij rijden naar alle grote vliegvelden
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Met onze airportservice rijdt u comfortabel en op tijd naar uw vertrekhal.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {config.airports.map((airport, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-xl mb-2">✈️</div>
                <div className="font-bold text-sm text-gray-900 mb-1">{airport.city}</div>
                <div className="text-xs text-gray-400 mb-2 leading-tight">{airport.name}</div>
                <div
                  className="text-xs font-semibold px-2 py-0.5 rounded-full inline-block"
                  style={{ backgroundColor: `${PRIMARY}28`, color: DARK }}
                >
                  {airport.distance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Heeft u een specifieke vervoersvraag?
          </h2>
          <p className="text-white/60 mb-8">Neem contact op — wij denken graag met u mee.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: PRIMARY, color: DARK }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:border-white transition-colors"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
