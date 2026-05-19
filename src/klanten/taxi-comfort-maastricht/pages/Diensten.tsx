import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
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
          <h1 className="text-4xl md:text-5xl font-black mb-4">Onze Diensten</h1>
          <p className="text-blue-200 max-w-xl mx-auto">{config.description}</p>
        </div>
      </section>

      {/* Diensten grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => (
              <div key={s.id} className="rounded-2xl border-2 border-gray-100 p-8 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-5">
                  <div
                    className="text-3xl w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-black" style={{ color: config.colors.text }}>{s.name}</h3>
                      {s.priceLabel && (
                        <span className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: config.colors.accentLight, color: a }}>
                          {s.priceLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                    {s.features && (
                      <ul className="space-y-2">
                        {s.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                            <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                              style={{ backgroundColor: p }}>
                              ✓
                            </span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black mb-4" style={{ color: config.colors.text }}>Ons rijgebied</h2>
          <p className="text-gray-500 mb-8">Wij rijden door heel de regio. Hieronder een greep uit onze vaste bestemmingen:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {config.serviceArea.map(place => (
              <span key={place} className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: p }}>
                {place}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4 text-white">Niet zeker welke dienst bij u past?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Bel ons gerust op voor advies. Wij helpen u de juiste keuze te maken.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: a, color: '#fff' }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white transition-colors"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = config.colors.text; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            >
              Contactformulier
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
