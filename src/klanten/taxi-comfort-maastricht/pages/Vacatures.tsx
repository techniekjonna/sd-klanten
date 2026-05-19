import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Vacatures = () => {
  const p = config.colors.primary;
  const a = config.colors.accent;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${config.colors.text} 0%, ${p} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Vacatures</h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            Word onderdeel van ons team en rij mee met een gezellig familiebedrijf.
          </p>
        </div>
      </section>

      {/* Vacatures */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {config.vacatures.map((v) => (
            <div key={v.id} className="rounded-2xl border-2 border-gray-100 p-8 mb-8 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-2xl font-black" style={{ color: config.colors.text }}>{v.title}</h2>
                <span className="px-3 py-1.5 text-xs font-bold rounded-full flex-shrink-0"
                  style={{ backgroundColor: config.colors.accentLight, color: a }}>
                  Open
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{v.description}</p>
              <h3 className="font-bold mb-3" style={{ color: config.colors.text }}>Wat wij vragen:</h3>
              <ul className="space-y-2 mb-8">
                {v.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: p }}>
                      ✓
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${config.contact.email}?subject=Sollicitatie ${v.title}`}
                className="inline-block px-7 py-3.5 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: a }}
              >
                Solliciteer via e-mail →
              </a>
            </div>
          ))}

          {/* Open sollicitatie */}
          <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: config.colors.primaryLight }}>
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-black mb-3" style={{ color: config.colors.text }}>Open sollicitatie</h3>
            <p className="text-gray-600 mb-6">
              Staat uw droomfunctie er niet bij? Stuur ons een open sollicitatie. Wij zijn altijd op zoek naar gemotiveerde mensen.
            </p>
            <a
              href={`mailto:${config.contact.email}?subject=Open sollicitatie`}
              className="inline-block px-7 py-3.5 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Open sollicitatie sturen
            </a>
          </div>
        </div>
      </section>

      {/* Waarom werken bij ons */}
      <section className="py-20" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-14 text-white">Waarom werken bij Taxi Comfort Maastricht?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '👨‍👩‍👧', title: 'Familiaire sfeer', text: 'Geen groot anoniem bedrijf — bij ons bent u een waardevol teamlid.' },
              { icon: '🕐', title: 'Flexibele werktijden', text: 'Part-time of full-time, wij passen de diensten aan op uw leven.' },
              { icon: '📈', title: 'Groeikansen', text: 'Ruimte voor ontwikkeling en doorgroeimogelijkheden binnen ons bedrijf.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-7 text-center bg-white/5 border border-white/10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: a }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4 text-white">Vragen over de vacature?</h2>
          <p className="text-lg opacity-90 mb-8 text-white">Neem gerust contact op — wij vertellen u er graag meer over.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${config.contact.phone}`} className="px-8 py-4 bg-white font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ color: a }}>
              📞 {config.contact.phoneDisplay}
            </a>
            <Link to={config.basePath + '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white transition-colors"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = a; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}>
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
