import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const dark = config.colors.dark;

export const OverOns = () => (
  <Layout>
    {/* Header */}
    <section
      className="relative py-24 text-white text-center"
      style={{ backgroundColor: dark }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: p }} />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{config.about.title}</h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm">{config.tagline}</p>
      </div>
    </section>

    {/* Verhaal */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ backgroundColor: config.colors.primaryLight, color: p }}
            >
              Gevestigd in Brunssum
            </div>
            <h2 className="text-3xl font-bold mb-5" style={{ color: dark }}>Ons Verhaal</h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">{config.about.story}</p>
            <p className="text-gray-600 leading-relaxed text-sm">{config.about.mission}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={config.about.image}
              alt={config.name}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Kernwaarden */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: dark }}>Onze Kernwaarden</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {config.about.values.map((value, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4 border border-gray-100">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                style={{ backgroundColor: p }}
              >
                {i + 1}
              </div>
              <p className="font-medium text-sm" style={{ color: dark }}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: dark }}>Wat ons onderscheidt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.features.map((f, i) => (
            <div key={i} className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                style={{ backgroundColor: config.colors.primaryLight }}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: dark }}>{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3">Maak kennis met ons team</h2>
        <p className="opacity-90 mb-8 max-w-md mx-auto">Bel ons of stuur een bericht — we vertellen u graag meer.</p>
        <Link
          to={config.basePath + '/contact'}
          className="inline-block px-10 py-4 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors"
          style={{ color: p }}
        >
          Neem Contact Op
        </Link>
      </div>
    </section>
  </Layout>
);
