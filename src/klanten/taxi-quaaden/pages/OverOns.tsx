import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const p = config.colors.primary;
  const gold = config.colors.gold;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-white" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Over Ons</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Leer ons kennen — wie wij zijn, wat wij doen en waarom klanten op ons vertrouwen.
          </p>
        </div>
      </section>
      <div className="h-1.5" style={{ backgroundColor: gold }} />

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-5" style={{ color: p }}>{config.about.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={config.about.image}
                alt="Taxi Quaaden"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ backgroundColor: config.colors.light }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10" style={{ color: p }}>Onze Kernwaarden</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.about.values.map((val, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border-b-4 text-center" style={{ borderColor: gold }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-4"
                  style={{ backgroundColor: p }}
                >
                  {i + 1}
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-snug">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features why us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10" style={{ color: p }}>Waarom kiezen voor Taxi Quaaden?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: p }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div
        className="h-56 md:h-72 w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1639385049779-5e34414d1682?q=80&w=2340&auto=format&fit=crop)' }}
      />

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Neem contact op</h2>
          <p className="text-blue-200 mb-8">
            Heeft u vragen of wilt u een rit boeken? Wij helpen u graag verder.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl hover:opacity-90 transition-all text-white"
              style={{ backgroundColor: gold }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-colors"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
