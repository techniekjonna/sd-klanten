import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: primary }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Onze Diensten</h1>
          <p className="text-gray-300 max-w-xl mx-auto">{config.description}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold" style={{ color: primary }}>
                        {s.name}
                      </h3>
                      {s.priceLabel && (
                        <span
                          className="text-sm font-bold px-3 py-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: accent, color: primary }}
                        >
                          {s.priceLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                    {s.features && s.features.length > 0 && (
                      <ul className="space-y-1.5">
                        {s.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span style={{ color: accent }}>✓</span>
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

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: primary }}>
            Direct een rit boeken?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Bel ons direct of stuur een WhatsApp bericht — wij zijn 24/7 bereikbaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-block px-10 py-4 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent, color: primary }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="inline-block px-10 py-4 font-semibold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: primary }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
