import { Layout } from '../components/Layout';
import { config } from '../config';

export const VacaturesPage = () => {
  const p = config.colors.primary;
  const navy = config.colors.navy;

  return (
    <Layout>
      <section className="relative py-24 text-white" style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FDBA74' }}>Werken bij Taxi Nelissen</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Vacatures
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ben jij een enthousiaste chauffeur die mensen graag helpt?
              Kom werken bij een van de meest gewaardeerde taxibedrijven van Maastricht.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: config.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: navy }}>Openstaande vacatures</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Wij zijn altijd op zoek naar gemotiveerde collega's. Bekijk onze openstaande functies hieronder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {config.vacatures.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="text-xl font-extrabold" style={{ color: navy }}>{v.title}</h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: `${p}18`, color: p }}
                  >
                    {v.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{v.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold mb-3" style={{ color: navy }}>Wat wij vragen:</h4>
                  <ul className="space-y-2">
                    {v.requirements.map((req, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${p}20` }}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: p }}>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`mailto:${config.contact.email}?subject=Sollicitatie: ${encodeURIComponent(v.title)}`}
                  className="block text-center py-3 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: p }}
                >
                  Solliciteer nu →
                </a>
              </div>
            ))}
          </div>

          {/* Why join us */}
          <div style={{ backgroundColor: navy }} className="rounded-2xl p-10 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-4">Waarom werken bij Taxi Nelissen?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                { icon: '🏆', title: '60+ jaar reputatie', desc: 'Werk voor een gevestigde naam in de regio.' },
                { icon: '🕐', title: 'Flexibele werktijden', desc: 'Parttime of fulltime, wij zoeken wat bij u past.' },
                { icon: '😊', title: 'Fijn team', desc: 'Prettige werkomgeving met collegialiteit voorop.' },
              ].map((w) => (
                <div key={w.title} className="p-5">
                  <div className="text-4xl mb-3">{w.icon}</div>
                  <h4 className="font-bold mb-2" style={{ color: '#FDBA74' }}>{w.title}</h4>
                  <p className="text-sm text-gray-300">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white" style={{ backgroundColor: p }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Geen passende vacature?</h2>
          <p className="mb-6 opacity-90">Stuur een open sollicitatie – wij zijn altijd geïnteresseerd in gemotiveerde chauffeurs.</p>
          <a
            href={`mailto:${config.contact.email}?subject=Open sollicitatie`}
            className="inline-block px-8 py-3.5 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Open sollicitatie sturen
          </a>
        </div>
      </section>
    </Layout>
  );
};
