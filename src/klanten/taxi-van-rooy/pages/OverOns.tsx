import { Link } from 'react-router-dom';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const DARK = config.colors.dark;

export const OverOns = () => {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: DARK }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: PRIMARY }}>
              Ons verhaal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{config.about.title}</h1>
            <p className="text-white/60 leading-relaxed">{config.about.description}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: PRIMARY }} className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {config.about.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold mb-1" style={{ color: DARK }}>{stat.value}</div>
                <div className="text-sm font-semibold" style={{ color: `${DARK}99` }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Geschiedenis</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">
                Familiebedrijf met een rijke traditie
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Taxicentrale Cor van Rooy B.V. is opgericht als familiebedrijf in Landgraaf, midden in het hart van Zuid-Limburg.
                  Al decennialang vormt vertrouwen en persoonlijke service de basis van ons bedrijf.
                </p>
                <p>
                  Wat begon als een lokale taxidienst, groeide uit tot een complete vervoerscentrale met een vloot
                  van moderne voertuigen en een team van professionele chauffeurs. Van eenvoudig taxivervoer tot
                  complexe internationale groepsreizen — wij regelen het.
                </p>
                <p>
                  Onze kracht ligt in persoonlijk contact. U bent bij ons geen nummer, maar een gewaardeerde klant
                  die we al jarenlang kennen. Die vertrouwensband is iets wat wij koesteren en bewaken.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={config.about.image}
                alt="Taxi Van Rooy vloot"
                className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section style={{ backgroundColor: config.colors.surface }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Onze waarden</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Waar wij voor staan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🤝',
                title: 'Betrouwbaarheid',
                text: 'Wij komen onze afspraken na. Altijd op tijd, altijd bereikbaar — dat is onze belofte aan u.',
              },
              {
                icon: '❤️',
                title: 'Persoonlijke service',
                text: 'Elke klant is uniek. Wij luisteren naar uw wensen en zorgen voor een vervoersoplossing op maat.',
              },
              {
                icon: '⭐',
                title: 'Kwaliteit',
                text: 'Van onze chauffeurs tot onze voertuigen — wij streven naar het hoogste kwaliteitsniveau in alles wat wij doen.',
              },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet & team image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop"
                alt="Taxi Van Rooy vloot"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
              <div
                className="absolute -top-4 -right-4 rounded-2xl p-4 shadow-lg"
                style={{ backgroundColor: PRIMARY }}
              >
                <div className="text-2xl font-extrabold" style={{ color: DARK }}>10.000+</div>
                <div className="text-xs font-semibold" style={{ color: `${DARK}99` }}>Tevreden klanten</div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Onze vloot</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">
                Moderne voertuigen voor elk vervoer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ons wagenpark bestaat uit moderne, goed onderhouden voertuigen — van comfortabele personenwagens
                tot ruime rolstoeltoegankelijke busjes en grote touringcars. Alle voertuigen worden regelmatig
                gekeurd en zijn uitgerust met de nieuwste veiligheidssystemen.
              </p>
              <ul className="space-y-3">
                {[
                  'Personenwagens voor 1–4 passagiers',
                  'MPV\'s en minivans voor groepjes tot 8 personen',
                  'Rolstoeltoegankelijke voertuigen',
                  'Touringcars en bussen voor grote groepen',
                  'Luxe representatieve voertuigen voor directie',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Kom gerust kennis met ons maken
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Heeft u vragen of wilt u een rit boeken? Neem contact met ons op — wij helpen u graag.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/contact'}
              className="px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: PRIMARY, color: DARK }}
            >
              Neem contact op
            </Link>
            <Link
              to={config.basePath + '/werken-bij'}
              className="px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:border-white transition-colors"
            >
              Werken bij Taxi Van Rooy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
