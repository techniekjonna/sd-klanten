import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section className="relative py-24 text-white text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Onze Diensten</h1>
          <p className="text-gray-300 max-w-xl mx-auto">{config.description}</p>
        </div>
      </section>

      {/* Services */}
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
                      <h3 className="text-xl font-bold" style={{ color: config.colors.text }}>{s.name}</h3>
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
                        {s.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
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

      {/* Takelservice highlight */}
      <section className="py-16 text-white" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Spoedgeval? Bel direct.</h2>
            <p className="text-gray-300 max-w-lg">
              Bij pech of een ongeluk staat ons takelteam dag en nacht voor u klaar. Gemiddeld ter plaatse binnen 30 minuten.
            </p>
          </div>
          <a
            href={`tel:${config.contact.phone}`}
            className="flex-shrink-0 px-8 py-4 font-bold rounded-xl text-white transition-opacity hover:opacity-90 shadow-xl"
            style={{ backgroundColor: config.colors.amber }}
          >
            📞 {config.contact.phone}
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: config.colors.text }}>
            Wilt u meer informatie of een offerte?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Neem contact op voor een vrijblijvend gesprek of offerte op maat.
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
