import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const ac = config.colors.accent;
  const dk = config.colors.dark;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-white" style={{ backgroundColor: dk }}>
        <div className="container mx-auto px-4">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: ac }}
          >
            Over ons
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{config.about.title}</h1>
          <p className="text-gray-400 max-w-xl">{config.tagline}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-2xl font-extrabold mb-5" style={{ color: dk }}>Ons verhaal</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
            </div>
            <img
              src={config.about.image}
              alt="Global Taxi Heerlen"
              className="rounded-2xl w-full h-72 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightGray }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-10 text-center" style={{ color: dk }}>
            Onze kernwaarden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.about.values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4"
                  style={{ backgroundColor: ac, color: dk }}
                >
                  {i + 1}
                </div>
                <p className="text-sm font-semibold" style={{ color: dk }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-10 text-center" style={{ color: dk }}>
            Waarom klanten voor ons kiezen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {config.features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: dk }}>{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ backgroundColor: ac }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: dk }}>
            Wilt u onze service zelf ervaren?
          </h2>
          <p className="text-sm mb-6" style={{ color: config.colors.gray }}>
            Dan kunt u 24/7 bellen naar {config.contact.phone}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${config.contact.phoneTel}`}
              className="px-8 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: dk }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 transition-colors hover:bg-white"
              style={{ borderColor: dk, color: dk }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
