import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const ZiekenvervoerPage = () => {
  const p = config.colors.primary;
  const navy = config.colors.navy;
  const service = config.services.find((s) => s.id === 'ziekenvervoer')!;

  return (
    <Layout>
      <section className="relative py-24 text-white" style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FDBA74' }}>Ziekenvervoer</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Ziekenvervoer naar MUMC+ en omgeving
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Betrouwbaar ziekenvervoer voor uw ziekenhuisbezoeken in Maastricht en omgeving.
              Altijd op tijd, geduldig en zorgzaam. Uw rust staat voorop.
            </p>
            <a href={`tel:${config.contact.phoneHref}`} className="inline-block px-8 py-4 font-bold text-white rounded-xl shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: p }}>
              📞 Rit aanvragen
            </a>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: config.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: navy }}>
                Zorgvuldig vervoer naar het ziekenhuis
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Een bezoek aan het ziekenhuis is al stressvol genoeg. Laat het vervoer aan ons over.
                Onze chauffeurs rijden u rustig en veilig naar MUMC+ en andere ziekenhuizen in de
                regio. Indien gewenst wachten wij op u en brengen u daarna weer veilig naar huis.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wij begrijpen dat u misschien niet fit bent na een behandeling. Daarom nemen wij alle
                tijd voor u en helpen wij u waar nodig. Uw welzijn staat bij ons altijd voorop.
              </p>
              <ul className="space-y-3">
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
                { icon: '🏥', title: 'MUMC+ Maastricht', desc: 'Directe rit naar het Maastricht UMC+. Heen- én terugrit mogelijk.' },
                { icon: '⏳', title: 'Wachten indien gewenst', desc: 'Wij wachten op u tijdens uw afspraak of behandeling.' },
                { icon: '❤️', title: 'Geduldig en zorgzaam', desc: 'Onze chauffeurs zijn getraind in zorgvuldig en geduldig vervoer.' },
                { icon: '✅', title: 'Op tijd gegarandeerd', desc: 'U mist nooit uw afspraak door een te late taxi.' },
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
          <h2 className="text-3xl font-extrabold mb-4">Ziekenhuis rit inplannen?</h2>
          <p className="mb-6 opacity-90">Bel ons en wij regelen uw vervoer.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${config.contact.phoneHref}`} className="px-8 py-3.5 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors" style={{ color: p }}>
              📞 {config.contact.phone}
            </a>
            <Link to={config.basePath + '/contact'} className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-colors">
              Contactformulier
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
