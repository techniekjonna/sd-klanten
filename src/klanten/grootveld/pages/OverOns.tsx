import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const p = config.colors.primary;
  const amber = config.colors.amber;

  return (
    <Layout>
      {/* Page header */}
      <section className="relative py-24 text-white text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{config.about.title}</h1>
          <p className="text-gray-300 max-w-xl mx-auto">{config.tagline}</p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ backgroundColor: config.colors.primaryLight, color: p }}>
                Ons Verhaal
              </span>
              <h2 className="text-3xl font-bold mb-6" style={{ color: config.colors.text }}>
                Meer dan alleen een taxibedrijf
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={config.about.image} alt={config.name} className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Onze Kernwaarden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm border-l-4" style={{ borderColor: p }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: p }}
                >
                  {i + 1}
                </div>
                <p className="font-medium" style={{ color: config.colors.text }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onderscheidend */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat ons onderscheidt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Klaar om te rijden?</h2>
          <p className="text-lg opacity-90 mb-8">
            Neem contact op of bel ons direct voor een rit of takelservice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: p }}
            >
              Contact Opnemen
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-semibold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              {config.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
