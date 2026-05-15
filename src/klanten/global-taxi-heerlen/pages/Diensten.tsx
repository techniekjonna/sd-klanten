import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const ac = config.colors.accent;
  const dk = config.colors.dark;

  return (
    <Layout>
      <section className="py-16 text-white" style={{ backgroundColor: dk }}>
        <div className="container mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ac }}>Diensten</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Onze diensten</h1>
          <p className="text-gray-400 max-w-xl">{config.description}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => (
              <Link
                key={s.id}
                to={config.basePath + s.path}
                className="group flex flex-col p-8 rounded-2xl border-2 border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                  style={{ backgroundColor: ac + '33' }}
                >
                  {s.icon}
                </div>
                <h2 className="text-xl font-extrabold mb-3" style={{ color: dk }}>{s.name}</h2>
                <p className="text-gray-500 leading-relaxed mb-5 flex-grow">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: ac, color: dk }}
                      >
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <span
                  className="text-sm font-bold group-hover:underline"
                  style={{ color: dk }}
                >
                  Meer informatie →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 text-center" style={{ backgroundColor: ac }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: dk }}>
            Vragen over onze diensten?
          </h2>
          <p className="text-sm mb-6" style={{ color: config.colors.gray }}>
            Bel ons 24/7 of stuur een bericht via onze contactpagina.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${config.contact.phoneTel}`}
              className="px-8 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: dk }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 transition-colors hover:bg-white"
              style={{ borderColor: dk, color: dk }}
            >
              Contact opnemen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
