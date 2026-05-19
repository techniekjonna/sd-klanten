import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const p = config.colors.primary;
  const a = config.colors.accent;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${config.colors.text} 0%, ${p} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Over Ons</h1>
          <p className="text-blue-200 max-w-xl mx-auto text-lg">{config.tagline}</p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: a }}>Ons verhaal</span>
              <h2 className="text-3xl font-black mt-2 mb-6" style={{ color: config.colors.text }}>
                Een familiebedrijf met passie voor vervoer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={config.photos.team1} alt="Team TCM" className="rounded-2xl w-full h-56 object-cover shadow-md" />
              <img src={config.photos.team2} alt="Chauffeur TCM" className="rounded-2xl w-full h-56 object-cover shadow-md mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Onze kernwaarden */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black" style={{ color: config.colors.text }}>Onze kernwaarden</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div key={i} className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                  style={{ backgroundColor: p }}
                >
                  {i + 1}
                </div>
                <p className="font-semibold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voertuigen */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3" style={{ color: config.colors.text }}>Onze voertuigen</h2>
            <p className="text-gray-500">Schoon, modern en comfortabel — voor een prettige reis.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[config.photos.car1, config.photos.car2, config.photos.car3, config.photos.car4].map((src, i) => (
              <img key={i} src={src} alt={`Voertuig ${i + 1}`} className="rounded-2xl w-full h-48 object-cover shadow-md hover:shadow-xl transition-shadow" />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-14 text-white">Wat ons onderscheidt</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2 text-white">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: a }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Klaar om mee te rijden?</h2>
          <p className="text-lg opacity-90 mb-8">Neem contact op of bel ons direct. Wij staan altijd voor u klaar.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 bg-white font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ color: a }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white transition-colors"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = a; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
