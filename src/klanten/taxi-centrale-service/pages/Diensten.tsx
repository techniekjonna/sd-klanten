import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => (
  <Layout>
    {/* Hero banner */}
    <section className="py-20 text-white" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Onze diensten</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Vervoer voor elk doel</h1>
        <p className="text-white/65 max-w-xl mx-auto text-sm leading-relaxed">
          Taxi Centrale Service verzorgt lokale ritten, zakelijk vervoer, evenementen en luchthaventritten vanuit Kerkrade en de regio Parkstad Limburg.
        </p>
      </div>
    </section>

    {/* Service cards */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.services.map(s => (
            <div
              key={s.id}
              className="rounded-2xl p-8 border-2 hover:shadow-lg hover:-translate-y-1 transition-all"
              style={{ borderColor: config.colors.light }}
            >
              <div className="flex items-start gap-5 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{ backgroundColor: config.colors.light }}
                >
                  {s.icon}
                </div>
                <div>
                  <h2 className="text-xl font-black mb-1" style={{ color: config.colors.text }}>{s.name}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
              {s.features && s.features.length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: config.colors.text }}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: config.colors.accent }}
                      >
                        <svg className="w-3 h-3" fill="none" stroke={config.colors.dark} viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why TCS section */}
    <section className="py-16" style={{ backgroundColor: config.colors.light }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Waarom TCS?</span>
          <h2 className="text-2xl md:text-3xl font-black mt-2 tracking-tight" style={{ color: config.colors.text }}>4 redenen om voor TCS te kiezen</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: '🤝', title: 'Persoonlijk contact', desc: 'Direct met de chauffeur — geen callcenter tussendoor.' },
            { icon: '💶', title: 'Eerlijke tarieven', desc: 'Transparante prijzen zonder verborgen kosten of toeslagen.' },
            { icon: '🗺️', title: 'Regio specialist', desc: 'Wij kennen Kerkrade en de grensregio als onze broekzak.' },
            { icon: '⏰', title: 'Altijd stipt', desc: 'Stiptheid is onze standaard, niet een uitzondering.' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: config.colors.text }}>{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA strip */}
    <section className="py-14" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Een rit aanvragen bij TCS?</h2>
        <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">Bel ons direct of stuur een bericht. Wij zijn dag en nacht bereikbaar voor u.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-7 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
          >
            Bel: {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-7 py-3 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:bg-white/10 transition-all"
          >
            Stuur een bericht
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
