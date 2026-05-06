import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: config.colors.primaryDark }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Fotografie & Diensten</h1>
          <p className="text-green-200 max-w-xl mx-auto">{config.description}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="text-3xl w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold" style={{ color: config.colors.text }}>
                        {s.name}
                      </h3>
                      {s.priceLabel && (
                        <span
                          className="text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: config.colors.primaryLight, color: p }}
                        >
                          {s.priceLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                    {s.features && s.features.length > 0 && (
                      <ul className="space-y-1.5">
                        {s.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                            <span style={{ color: p }}>✓</span>
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

      {/* Pasfoto highlight */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-4">📸</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: config.colors.text }}>
              Pasfoto zonder afspraak — altijd welkom!
            </h2>
            <p className="text-gray-600 mb-4">
              Wist u dat wij al om <strong>08:45</strong> open zijn? Vlak voor het gemeentehuis van Sittard opent.
              Kom gerust langs voor uw pasfoto en ga direct daarna door naar uw afspraak.
            </p>
            <p className="font-semibold" style={{ color: p }}>
              4 officiële pasfoto's voor slechts €12
            </p>
          </div>
        </div>
      </section>

      {/* Reportage detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: config.colors.text }}>
              Fotoreportages op maat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '💍', title: 'Huwelijk', desc: 'Uw mooiste dag voor altijd vastgelegd. Studio of op locatie.' },
                { icon: '👨‍👩‍👧‍👦', title: 'Familie', desc: "Familiefoto's waar u jarenlang van geniet." },
                { icon: '🏢', title: 'Bedrijf', desc: 'Professionele bedrijfsfotografie voor uw website of materialen.' },
                { icon: '🕊️', title: 'Overig', desc: 'Begrafenis, jubileum, feest — wij zijn er bij.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: config.colors.primaryLight }}>
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: config.colors.text }}>{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryDark }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Heeft u een vraag over onze diensten?
          </h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">
            Neem vrijblijvend contact op. Wij helpen u graag de juiste keuze te maken.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
