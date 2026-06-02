import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const gold = config.colors.primary;
  const dark = '#0E0D0B';

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{
          backgroundImage: `url(https://www.vandewalldienstverlening.nl/img/mainsfr06_xl.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0E0D0B]/80" />
        <div className="relative container mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: gold }}>
            Wie wij zijn
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Over Vandewall</h1>
          <p className="text-gray-300 max-w-xl mx-auto">{config.tagline}</p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: gold }}>
                Ons verhaal
              </p>
              <h2 className="text-3xl font-bold mb-6" style={{ color: dark }}>
                Vervoer met passie & precisie
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed text-sm">{config.about.mission}</p>
            </div>
            <div className="overflow-hidden shadow-2xl">
              <img
                src={config.about.image}
                alt="Vandewall Dienstverlening"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20" style={{ backgroundColor: '#F9F6EE' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: gold }}>
              Onze basis
            </p>
            <h2 className="text-3xl font-bold" style={{ color: dark }}>
              Kernwaarden
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div key={i} className="flex items-center gap-5 bg-white p-6 border border-gray-100">
                <div
                  className="w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0 text-[#0E0D0B]"
                  style={{ backgroundColor: gold }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-medium text-sm" style={{ color: dark }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold" style={{ color: dark }}>Wat ons onderscheidt</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-8 border border-gray-100 hover:border-[#B8972A] transition-colors">
                <div className="text-3xl mb-4" style={{ color: gold }}>{f.icon}</div>
                <h3 className="text-sm font-bold mb-2" style={{ color: dark }}>{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0E0D0B] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Maak kennis met Vandewall</h2>
          <p className="text-gray-400 text-sm mb-8">
            Bel ons of stuur een bericht — wij staan altijd voor u klaar.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#0E0D0B] transition-opacity hover:opacity-90"
            style={{ backgroundColor: gold }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
