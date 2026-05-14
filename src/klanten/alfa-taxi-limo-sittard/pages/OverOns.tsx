import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const { primary, accent, dark, text, primaryLight } = config.colors;

  return (
    <Layout>
      {/* Header */}
      <section
        className="relative py-20 text-white"
        style={{ background: `linear-gradient(135deg, ${dark} 0%, ${primary} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
            Over Ons
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            {config.about.title}
          </h1>
          <p className="text-white/70 max-w-xl">{config.tagline}</p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
                Ons Verhaal
              </p>
              <h2 className="text-3xl font-black mb-5" style={{ color: text }}>
                Meer dan 10 jaar uw partner in vervoer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{config.about.mission}</p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2015', label: 'Opgericht' },
                  { value: '24/7', label: 'Bereikbaar' },
                  { value: '100%', label: 'Tevredenheid' },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-2xl" style={{ backgroundColor: primaryLight }}>
                    <p className="text-2xl font-black" style={{ color: primary }}>{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={config.about.image}
                  alt="Alfa Taxi Sittard"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl p-5 shadow-xl max-w-xs"
                style={{ backgroundColor: dark }}
              >
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-white text-sm font-medium leading-snug">
                  "Al jaren de beste taxiservice in Sittard-Geleen!"
                </p>
                <p className="text-white/40 text-xs mt-2">— Tevreden klant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
              Onze Waarden
            </p>
            <h2 className="text-3xl font-black" style={{ color: text }}>Onze Kernwaarden</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                  style={{ backgroundColor: primary }}
                >
                  {i + 1}
                </div>
                <p className="font-semibold text-sm" style={{ color: text }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
              Onderscheidend
            </p>
            <h2 className="text-3xl font-black" style={{ color: text }}>Wat ons onderscheidt</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ backgroundColor: primaryLight }}
                >
                  {f.icon}
                </div>
                <h3 className="text-base font-black mb-2" style={{ color: text }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${primary} 0%, ${dark} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-3">Klaar voor uw rit?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Bel ons of boek online — wij zijn 24/7 beschikbaar voor u.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: accent }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/tarieven'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Online Boeken →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
