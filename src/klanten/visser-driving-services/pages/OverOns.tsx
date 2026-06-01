import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const accent = config.colors.accent || '#C9A84C';

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 flex items-end"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>
            Over ons
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Visser Driving Services
          </h1>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accent }}>Ons verhaal</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Gedrevenheid, vakmanschap & integriteit
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{config.about.mission}</p>
              <ul className="space-y-4">
                {config.about.values.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: accent }} />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={config.about.image}
                alt="Over Visser Driving Services"
                className="w-full h-[500px] object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificeringen */}
      <section className="py-20" style={{ backgroundColor: '#F7F5F1' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Kwaliteit & veiligheid</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Gecertificeerd op het hoogste niveau
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                cert: 'CCV-D1',
                title: 'Basis Beveiliging',
                desc: 'Basiscertificering voor beveiligd personenvervoer door heel Nederland.',
              },
              {
                cert: 'CCV-D2',
                title: 'Gevorderde Beveiliging',
                desc: 'Gevorderd certificaat voor directiebeveiliging en high-profile clientèle.',
              },
              {
                cert: 'CORTEX SRO-D3',
                title: 'Executive Protection',
                desc: 'Hoogste certificering voor close-protection en staatsveiligheid.',
              },
            ].map((c) => (
              <div key={c.cert} className="bg-white p-8 border border-gray-100">
                <div
                  className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-5"
                  style={{ backgroundColor: accent }}
                >
                  {c.cert}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-gray-900">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foto */}
      <section className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604425008631-5ed841ff749c?q=80&w=1470&auto=format&fit=crop"
          alt="Visser Driving Services"
          className="w-full h-full object-cover grayscale"
          style={{ filter: 'brightness(0.4) grayscale(1)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl font-light tracking-widest uppercase text-center">
            Wij anticiperen op uw behoeften
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Contact</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Maak kennis met ons</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
            Neem vrijblijvend contact op. Wij vertellen u graag meer over onze diensten en hoe wij u kunnen ondersteunen.
          </p>
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
