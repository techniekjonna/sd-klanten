import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      <section className="relative py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Onze Diensten</h1>
          <p className="text-white/70 max-w-xl mx-auto">{config.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold" style={{ color: config.colors.text }}>{s.name}</h3>
                      {s.priceLabel && (
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: '#E8A020' + '22', color: '#B87300' }}
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
                            <span style={{ color: '#E8A020' }} className="font-bold">✓</span>
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: config.colors.text }}>
            Heeft u een specifieke wens?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Neem contact op voor een offerte op maat. Wij denken graag met u mee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Vraag een offerte aan
            </Link>
            <a
              href={`tel:${(config as any).contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl border-2 transition-all hover:text-white"
              style={{ borderColor: p, color: p }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = p; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = p; }}
            >
              📞 Bel direct
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
