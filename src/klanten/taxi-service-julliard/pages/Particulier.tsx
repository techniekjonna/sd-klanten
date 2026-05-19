import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Particulier = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section className="relative py-24 text-white" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">🚗 Particulier vervoer</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Julliard's Particulier Vervoer</h1>
            <p className="text-white/70 text-lg max-w-xl">Betrouwbaar dagelijks taxivervoer voor particulieren. Van ziekenhuisbezoek tot avondje uit.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏥', title: 'Zorgvervoer', desc: 'Vervoer naar ziekenhuis, huisarts, tandarts of andere medische afspraken. Geduldig en zorgzaam.' },
              { icon: '🚉', title: 'Stations & centrum', desc: 'Ophalen van of brengen naar het station, centrum of andere bestemmingen in de regio.' },
              { icon: '🎭', title: 'Avondje uit', desc: 'Ontspan volledig bij een etentje, theater of feestje. Wij brengen u veilig heen en terug.' },
              { icon: '🛒', title: 'Boodschappenrit', desc: 'Voor wie zelf niet kan rijden — wij helpen u bij uw dagelijkse boodschappen.' },
              { icon: '👴', title: 'Seniorenvervoer', desc: 'Extra aandacht en hulp voor senioren. Rustig, geduldig en met persoonlijke service.' },
              { icon: '🌙', title: 'Nachtrit', desc: 'Laat op stap en geen vervoer? Wij rijden dag én nacht voor u klaar.' },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-2xl border-2 border-gray-100 hover:shadow-lg hover:border-transparent transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: primary }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Een rit plannen?</h2>
          <p className="text-white/70 mb-7 max-w-md mx-auto">Bel ons direct of neem contact op via het formulier. Wij zijn 24/7 bereikbaar.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${config.contact.phone}`} className="px-7 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
              📞 {config.contact.phoneDisplay}
            </a>
            <Link to={config.basePath + '/contact'} className="px-7 py-3.5 font-bold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors">
              Contactformulier
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
