import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const gold = config.colors.primary;
  const dark = '#0E0D0B';

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{
          backgroundImage: `url(https://www.vandewalldienstverlening.nl/img/mainsfr04_xl.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0E0D0B]/80" />
        <div className="relative container mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: gold }}>
            Onze diensten
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Wat wij voor u doen</h1>
          <p className="text-gray-300 max-w-xl mx-auto">{config.description}</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {config.services.map((s, i) => (
              <div
                key={s.id}
                className="border border-gray-100 p-8 hover:border-[#B8972A] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-2xl border group-hover:bg-[#B8972A] group-hover:border-[#B8972A] transition-all"
                    style={{ borderColor: gold }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: dark }}>{s.name}</h3>
                    {s.priceLabel && (
                      <span className="text-xs font-semibold" style={{ color: gold }}>{s.priceLabel}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                {s.features && (
                  <ul className="space-y-2">
                    {s.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span style={{ color: gold }}>✦</span> {feat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0E0D0B] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Klaar voor uw rit?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
            Neem contact op of bel direct. Wij zijn 24/7 bereikbaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#0E0D0B] transition-opacity hover:opacity-90"
              style={{ backgroundColor: gold }}
            >
              Bel Nu
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-10 py-4 text-sm font-bold uppercase tracking-widest text-white border border-white hover:bg-white hover:text-[#0E0D0B] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
