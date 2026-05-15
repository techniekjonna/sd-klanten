import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Over ons</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Het verhaal achter Taxi MC</h1>
          <p className="text-gray-400 max-w-xl mx-auto">{config.tagline}</p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Ons verhaal</div>
              <h2 className="text-3xl font-black mb-6">Betrouwbaar vervoer sinds dag één</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{config.about.mission}</p>
              <a href={`tel:${config.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black"
                style={{ backgroundColor: p }}>
                📞 {config.contact.phoneDisplay}
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={config.about.image} alt={config.name} className="w-full h-96 object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20" style={{ backgroundColor: config.colors.surface }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Kernwaarden</div>
            <h2 className="text-3xl font-black">Waar wij voor staan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.about.values.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center border-t-4" style={{ borderColor: p }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-black mx-auto mb-4 text-lg" style={{ backgroundColor: p }}>
                  {i + 1}
                </div>
                <p className="font-semibold text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Wat ons onderscheidt</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Duidelijkheid, eerlijkheid en persoonlijke service — dat is de Taxi MC manier.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-black mb-4">Direct contact opnemen?</h2>
          <p className="text-black/70 text-lg mb-8 max-w-lg mx-auto">
            Wij staan 24/7 voor u klaar. Bel ons voor een rit of vrijblijvend advies.
          </p>
          <a href={`tel:${config.contact.phone}`}
            className="inline-block px-10 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
            📞 {config.contact.phoneDisplay}
          </a>
        </div>
      </section>
    </Layout>
  );
};
