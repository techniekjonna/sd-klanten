import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const OFF_WHITE = '#f6f8f5';
const OFF_WHITE_2 = '#edf1ec';

export const OverOns = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: config.colors.primaryDark }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{config.about.title}</h1>
          <p className="text-green-200 max-w-xl mx-auto">{config.tagline}</p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20" style={{ backgroundColor: OFF_WHITE }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: config.colors.text }}>
                Ons Verhaal
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
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

      {/* Locatie highlight */}
      <section className="py-16" style={{ backgroundColor: OFF_WHITE_2 }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: config.colors.text }}>
            Centraal gelegen in Stadbroek, Sittard
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>{config.contact.address}</strong>
          </p>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Wij bevinden ons vlak bij het gemeentehuis van Sittard. Ideaal voor pasfoto's:
            kom om 08:45 langs en loop daarna direct door naar uw afspraak bij de gemeente.
          </p>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20" style={{ backgroundColor: OFF_WHITE }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Onze Kernwaarden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl p-6 bg-white shadow-sm"
                style={{ border: '1px solid #d4dbd3' }}
              >
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

      {/* Onderscheidende factoren */}
      <section className="py-20" style={{ backgroundColor: OFF_WHITE_2 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat ons onderscheidt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                style={{ border: '1px solid #d4dbd3' }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${config.colors.primaryDark} 0%, ${p} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Kom gerust langs of neem contact op</h2>
          <p className="text-lg opacity-90 mb-8">
            Wij staan u graag persoonlijk te woord. Geen afspraak nodig voor pasfoto's.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
