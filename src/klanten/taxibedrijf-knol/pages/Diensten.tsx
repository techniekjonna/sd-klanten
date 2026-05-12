import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const dark = config.colors.dark;

export const Diensten = () => (
  <Layout>
    {/* Header */}
    <section
      className="relative py-24 text-white text-center"
      style={{ backgroundColor: dark }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ backgroundColor: p }}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Onze Diensten</h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm">
          Van een korte rit door Brunssum tot een vlucht transfer — Taxibedrijf Knol regelt het.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.services.map((s, idx) => (
            <div
              key={s.id}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-1.5" style={{ backgroundColor: idx % 2 === 0 ? p : dark }} />
              <div className="p-8">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  {s.priceLabel && (
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: config.colors.primaryLight, color: p }}
                    >
                      {s.priceLabel}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: dark }}>{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.description}</p>
                {s.features && (
                  <ul className="space-y-2">
                    {s.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ backgroundColor: p }}>✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Info strip */}
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '🗓️', title: 'Reserveer van tevoren', desc: 'Plan uw rit rustig in via telefoon of ons contactformulier.' },
            { icon: '💳', title: 'Betalen', desc: 'Contant, pin en factuur (zakelijk) zijn allemaal mogelijk.' },
            { icon: '📞', title: 'Direct bellen', desc: `Bel ons op ${config.contact.phoneDisplay} voor een onmiddellijke rit.` },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-base mb-2" style={{ color: dark }}>{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3">Klaar om te rijden?</h2>
        <p className="opacity-90 mb-8 max-w-md mx-auto">Neem contact op of bel direct. We staan voor u klaar.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 bg-white/20 font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/40"
          >
            Rit aanvragen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
