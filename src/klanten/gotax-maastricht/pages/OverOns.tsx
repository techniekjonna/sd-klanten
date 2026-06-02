import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white"
        style={{ backgroundColor: '#0F0F0F' }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${config.about.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-4 opacity-60">Over ons</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4">{config.about.title}</h1>
          <div className="w-16 h-0.5 mt-2" style={{ backgroundColor: p }} />
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: p }}>Ons verhaal</p>
            <h2 className="text-3xl font-black mb-6" style={{ color: config.colors.text }}>
              Meer dan een taxi
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">{config.about.story}</p>
            <p className="text-gray-600 leading-relaxed text-sm">{config.about.mission}</p>
          </div>
          <div
            className="h-80 lg:h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${config.about.image})` }}
          />
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-24" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: p }}>Wat ons drijft</p>
            <h2 className="text-3xl font-black text-white">Onze Kernwaarden</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {config.about.values.map((value, i) => (
              <div key={i} className="bg-black p-8">
                <div
                  className="text-3xl font-black mb-4 opacity-30"
                  style={{ color: p }}
                >
                  0{i + 1}
                </div>
                <p className="text-white text-sm font-medium leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: p }}>Onderscheidend</p>
            <h2 className="text-3xl font-black" style={{ color: config.colors.text }}>Wat ons onderscheidt</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 border border-gray-100 hover:border-yellow-300 transition-colors">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-6">Klaar voor een premium rit?</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-sm">
            Bel ons of stuur een bericht — uw chauffeur staat klaar.
          </p>
          <Link
            to={config.basePath + "/contact"}
            className="inline-block px-10 py-4 font-bold text-sm text-black tracking-wide transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
