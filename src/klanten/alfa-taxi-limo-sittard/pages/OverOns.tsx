import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const { primary, accent, text, primaryLight } = config.colors;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primary }}>Over Ons</p>
          <h1 className="text-3xl md:text-4xl font-black" style={{ color: text }}>Over Alfa Taxi Limo Sittard</h1>
          <p className="text-gray-500 text-sm mt-2 max-w-xl">{config.tagline}</p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: primary }}>Ons Verhaal</p>
              <h2 className="text-3xl font-black mb-5" style={{ color: text }}>Meer dan 10 jaar uw partner in vervoer</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{config.about.story}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{config.about.mission}</p>
              <div className="grid grid-cols-3 gap-4">
                {[{ value: '2015', label: 'Opgericht' }, { value: '24/7', label: 'Bereikbaar' }, { value: '100%', label: 'Tevredenheid' }].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-xl font-black" style={{ color: primary }}>{s.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={config.about.image} alt="Alfa Taxi" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map((i) => <span key={i} style={{ color: accent }}>★</span>)}
                </div>
                <p className="text-xs font-semibold text-gray-700 max-w-[160px]">"Al jaren de beste taxi in de regio!"</p>
                <p className="text-[10px] text-gray-400 mt-1">— Tevreden klant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: primary }}>Onze Waarden</p>
            <h2 className="text-3xl font-black" style={{ color: text }}>Onze Kernwaarden</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0" style={{ backgroundColor: primary }}>
                  {i + 1}
                </div>
                <p className="text-sm font-semibold" style={{ color: text }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: primary }}>Onderscheidend</p>
            <h2 className="text-3xl font-black" style={{ color: text }}>Wat ons onderscheidt</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.features.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4" style={{ backgroundColor: primaryLight }}>
                  {f.icon}
                </div>
                <h3 className="text-sm font-black mb-2" style={{ color: text }}>{f.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Klaar voor uw rit?</h2>
          <p className="text-blue-200 text-sm mb-7">Bel ons of boek online — 24/7 bereikbaar.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${config.contact.phone}`} className="px-7 py-3 font-bold text-white rounded-xl hover:opacity-90 transition-opacity" style={{ backgroundColor: accent }}>
              📞 {config.contact.phone}
            </a>
            <Link to={config.basePath + '/tarieven'} className="px-7 py-3 font-bold rounded-xl border-2 border-white/40 text-white hover:border-white/80 transition-colors">
              Online Boeken →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
