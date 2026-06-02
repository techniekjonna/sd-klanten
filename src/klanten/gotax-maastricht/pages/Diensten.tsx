import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white"
        style={{ backgroundColor: '#0F0F0F' }}
      >
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-4 opacity-60">Wat wij bieden</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Onze Diensten</h1>
          <div className="w-16 h-0.5" style={{ backgroundColor: p }} />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 p-8 hover:border-yellow-300 transition-colors group"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="text-2xl w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-black" style={{ color: config.colors.text }}>
                        {s.name}
                      </h3>
                      {s.priceLabel && (
                        <span className="text-xs font-bold flex-shrink-0" style={{ color: p }}>
                          {s.priceLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                    {s.features && s.features.length > 0 && (
                      <ul className="space-y-2">
                        {s.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: p }} />
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

      {/* Luchthaven grid */}
      <section className="py-16" style={{ backgroundColor: '#F9F6EF' }}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: p }}>Populaire routes</p>
          <h2 className="text-2xl font-black mb-8" style={{ color: config.colors.text }}>Luchthaven transfers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {['Schiphol', 'Eindhoven', 'Brussel', 'Düsseldorf'].map(lh => (
              <div key={lh} className="bg-white border border-gray-100 px-4 py-4 text-sm font-semibold" style={{ color: config.colors.text }}>
                ✈️ {lh}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-6">Vraag een offerte aan</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-sm">
            Wij sturen u vrijblijvend een prijsopgave op maat.
          </p>
          <Link
            to={config.basePath + "/contact"}
            className="inline-block px-10 py-4 font-bold text-sm text-black tracking-wide transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
