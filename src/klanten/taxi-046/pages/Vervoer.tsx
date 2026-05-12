import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Vervoer = () => (
  <Layout>
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Vervoer</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Wij bieden verschillende vervoersoplossingen voor particulieren en bedrijven.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.services.map((s, i) => (
            <div key={s.id} className="border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all group">
              <div className="flex items-start gap-5">
                <div className="text-4xl">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-black mb-3 tracking-tight">{s.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">{s.description}</p>
                  <ul className="space-y-2">
                    {s.features?.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i === 2 && (
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link
                    to={config.basePath + '/airport'}
                    className="text-sm font-bold underline hover:no-underline"
                  >
                    Meer over luchthaventransfers →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-black mb-4 tracking-tight">Rit aanvragen?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Bel ons direct of gebruik ons online bestelformulier.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
          >
            📞 Bel nu
          </a>
          <Link
            to={config.basePath + '/bestel'}
            className="px-8 py-3 border-2 border-black text-black font-bold rounded-xl hover:bg-black hover:text-white transition-colors"
          >
            Online bestellen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
