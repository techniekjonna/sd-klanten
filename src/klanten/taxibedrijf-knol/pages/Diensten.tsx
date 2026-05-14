import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const dark = config.colors.dark;

export const Diensten = () => (
  <Layout>
    {/* Header */}
    <section className="pt-20 pb-16 px-6" style={{ backgroundColor: dark }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: p }}>Wat wij bieden</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-none">Onze<br/>Diensten</h1>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Van een korte rit door Brunssum tot een transfer naar Schiphol — Taxibedrijf Knol regelt het snel en betrouwbaar.
          </p>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-5">
        {config.services.map((s, i) => (
          <div
            key={s.id}
            className="group grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
          >
            {/* Number + icon */}
            <div
              className="md:col-span-2 flex flex-row md:flex-col items-center justify-center gap-4 p-6"
              style={{ backgroundColor: i % 2 === 0 ? dark : '#F9FAFB' }}
            >
              <span
                className="text-5xl font-black leading-none"
                style={{ color: i % 2 === 0 ? p + '40' : p + '25' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-3xl">{s.icon}</span>
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-8">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-black" style={{ color: dark }}>{s.name}</h3>
                {s.priceLabel && (
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: p + '15', color: p }}
                  >
                    {s.priceLabel}
                  </span>
                )}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>

            {/* Features */}
            <div className="md:col-span-3 p-6 border-l border-gray-100 flex flex-col justify-center">
              {s.features && (
                <ul className="space-y-2.5">
                  {s.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[9px] font-bold" style={{ backgroundColor: p }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Info strip */}
    <section className="py-16 px-6" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Reserveer van tevoren', desc: 'Plan uw rit via telefoon of ons contactformulier voor de zekerste service.', icon: '🗓' },
          { title: 'Betaalmogelijkheden', desc: 'Contant, pin of zakelijke factuur — wij passen ons aan uw voorkeur aan.', icon: '💳' },
          { title: 'Spoed? Bel direct.', desc: `Direct bereikbaar op ${config.contact.phoneDisplay} voor een onmiddellijke rit.`, icon: '⚡' },
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="text-2xl">{item.icon}</div>
            <div>
              <p className="font-bold text-sm mb-1" style={{ color: dark }}>{item.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-6" style={{ backgroundColor: dark }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Klaar om te rijden?</h2>
          <p className="text-gray-400 text-sm">Neem contact op — we staan voor u klaar.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-6 py-3.5 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/5 transition-colors"
          >
            Rit aanvragen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
