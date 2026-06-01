import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Veiligheid = () => {
  const accent = config.colors.accent || '#C9A84C';

  return (
    <Layout>
      <section
        className="relative py-28 flex items-end"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1604425008631-5ed841ff749c?q=80&w=1470&auto=format&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Veiligheid</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Veiligheid & Discretie</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accent }}>Uw veiligheid</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Veiligheid staat bij ons nooit ter discussie
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Alle Visser Driving Services chauffeurs zijn in het bezit van de zwaarste beveiligingscertificaten in de sector. Wij werken uitsluitend met gecertificeerde professionals die zijn opgeleid voor zowel regulier als beveiligd vervoer.
                </p>
                <p>
                  Onze voertuigen worden regelmatig geïnspecteerd en voldoen aan de hoogste technische eisen. Elk traject wordt met de grootst mogelijke zorgvuldigheid voorbereid.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { cert: 'CCV-D1', desc: 'Basisvereiste voor beveiligd personenvervoer in Nederland.' },
                { cert: 'CCV-D2', desc: 'Gevorderd certificaat voor high-profile en directievervoer.' },
                { cert: 'CORTEX SRO-D3', desc: 'Hoogste niveau — executive protection en staatsveiligheid.' },
              ].map((c) => (
                <div key={c.cert} className="flex items-start gap-5 p-6 border border-gray-100">
                  <div
                    className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white flex-shrink-0"
                    style={{ backgroundColor: accent }}
                  >
                    {c.cert}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Vragen?</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer weten over onze veiligheidsprotocollen?</h2>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
