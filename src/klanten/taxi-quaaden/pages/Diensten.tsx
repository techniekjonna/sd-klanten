import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const p = config.colors.primary;
  const gold = config.colors.gold;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-white" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Onze Dienstverlening</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Kwalitatief personenvervoer in het Zuid-Limburgse Heuvelland. Zakelijk, discreet en altijd op tijd.
          </p>
        </div>
      </section>

      {/* Gold bar */}
      <div className="h-1.5" style={{ backgroundColor: gold }} />

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map(s => (
              <div key={s.id} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                <div className="h-2" style={{ background: `linear-gradient(90deg, ${p}, ${gold})` }} />
                <div className="p-8">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ backgroundColor: config.colors.light }}
                    >
                      {s.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-black mb-2" style={{ color: p }}>{s.name}</h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {s.features?.map((feat, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: gold }} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports */}
      <section className="py-16" style={{ backgroundColor: config.colors.light }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3" style={{ color: p }}>Luchthaventransfers</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Wij verzorgen transfers naar alle grote luchthavens in de omgeving. Op tijd, comfortabel en met vluchtmonitoring.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {config.airports.map(a => (
              <div
                key={a.name}
                className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-transparent hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{a.flag}</div>
                <div className="text-sm font-bold mb-1" style={{ color: p }}>{a.name}</div>
                <div
                  className="text-xs font-bold rounded-full px-2 py-0.5 inline-block text-white"
                  style={{ backgroundColor: gold }}
                >
                  {a.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra image section */}
      <section className="py-0">
        <div
          className="h-64 md:h-80 w-full bg-cover bg-center relative"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1641230011140-322910168cc4?q=80&w=987&auto=format&fit=crop)' }}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(15,37,87,0.75)' }}>
            <div className="text-center text-white px-4">
              <h3 className="text-2xl md:text-3xl font-black mb-2">Professioneel en discreet</h3>
              <p className="text-blue-200">Uw comfort en veiligheid staan bij ons centraal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Vrijblijvend een rit aanvragen?</h2>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">
            Neem gerust contact op. Wij bespreken uw wensen en zorgen voor de beste oplossing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl hover:opacity-90 transition-all text-white"
              style={{ backgroundColor: gold }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-colors"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
