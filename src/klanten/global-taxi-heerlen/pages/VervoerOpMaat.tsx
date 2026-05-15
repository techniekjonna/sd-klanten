import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const service = config.services.find((s) => s.id === 'vervoer-op-maat')!;

export const VervoerOpMaat = () => {
  const ac = config.colors.accent;
  const dk = config.colors.dark;

  return (
    <Layout>
      <section className="py-16 text-white" style={{ backgroundColor: dk }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3">
            <Link to={config.basePath + '/diensten'} style={{ color: ac }} className="hover:underline">Diensten</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">Vervoer op maat</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold">{service.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold mb-4" style={{ color: dk }}>
                Uw vervoerswens, onze oplossing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Heeft u een bijzondere wens of een specifieke behoefte? Wij denken graag met u mee. Van groepsvervoer voor een bedrijfsuitje tot een privérit voor een speciaal evenement — alles is bespreekbaar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: '🎪', title: 'Evenementen', desc: 'Concerten, festivals en beurzen.' },
                  { icon: '👥', title: 'Groepsvervoer', desc: 'Voor meerdere personen tegelijk.' },
                  { icon: '💼', title: 'Zakelijke ritten', desc: 'Vergaderingen en zakenreizen.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl text-center"
                    style={{ backgroundColor: config.colors.lightGray }}
                  >
                    <span className="text-3xl block mb-3">{item.icon}</span>
                    <h4 className="font-bold text-sm mb-1" style={{ color: dk }}>{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: ac, color: dk }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div
                className="rounded-2xl p-7 sticky top-24"
                style={{ backgroundColor: ac + '22', border: `2px solid ${ac}` }}
              >
                <h3 className="font-extrabold text-lg mb-2" style={{ color: dk }}>Vervoer aanvragen</h3>
                <p className="text-sm text-gray-600 mb-5">
                  Vertel ons uw wensen en wij doen de rest.
                </p>
                <a
                  href={`tel:${config.contact.phoneTel}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 font-bold rounded-xl text-white mb-3 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: dk }}
                >
                  📞 {config.contact.phone}
                </a>
                <Link
                  to={config.basePath + '/contact'}
                  className="flex items-center justify-center w-full py-3.5 font-bold rounded-xl border-2 transition-colors hover:bg-white text-sm"
                  style={{ borderColor: dk, color: dk }}
                >
                  Maatwerk aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
