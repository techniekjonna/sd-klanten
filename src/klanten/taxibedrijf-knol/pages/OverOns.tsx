import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const dark = config.colors.dark;

export const OverOns = () => (
  <Layout>
    {/* Header */}
    <section className="pt-20 pb-16 px-6" style={{ backgroundColor: dark }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: p }}>Ons verhaal</p>
        <h1 className="text-5xl md:text-6xl font-black text-white leading-none">Over<br/>Taxibedrijf Knol</h1>
      </div>
    </section>

    {/* Verhaal */}
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: p }}>Gevestigd in Brunssum</p>
          <h2 className="text-4xl font-black mb-6 leading-tight" style={{ color: dark }}>
            Uw vertrouwde partner in vervoer
          </h2>
          <p className="text-gray-500 leading-relaxed mb-5 text-sm">{config.about.story}</p>
          <p className="text-gray-500 leading-relaxed text-sm">{config.about.mission}</p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { value: '20+', label: 'Jaar actief' },
              { value: 'Zuid-Limburg', label: 'Werkgebied' },
              { value: '24/7', label: 'Bereikbaar' },
              { value: '100%', label: 'Vaste tarieven' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: '#F9FAFB' }}>
                <p className="text-xl font-black mb-0.5" style={{ color: p }}>{s.value}</p>
                <p className="text-xs text-gray-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src={config.about.image}
              alt={config.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border-l-4"
            style={{ borderColor: p }}
          >
            <p className="text-xs text-gray-400 mb-1">Gevestigd in</p>
            <p className="font-black text-base" style={{ color: dark }}>Brunssum</p>
            <p className="text-xs text-gray-400 mt-0.5">Trichterweg 111</p>
          </div>
        </div>
      </div>
    </section>

    {/* Kernwaarden */}
    <section className="py-24 px-6" style={{ backgroundColor: dark }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: p }}>Waar wij voor staan</p>
        <h2 className="text-4xl font-black text-white mb-14">Onze kernwaarden</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {config.about.values.map((value, i) => (
            <div
              key={i}
              className="rounded-2xl p-7"
              style={{ backgroundColor: '#FFFFFF08', border: '1px solid #FFFFFF0D' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm mb-5"
                style={{ backgroundColor: p }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="font-bold text-white text-sm leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: p }}>Ons onderscheid</p>
        <h2 className="text-4xl font-black mb-14" style={{ color: dark }}>Wat ons anders maakt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div key={i} className="p-7 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ backgroundColor: p + '15' }}
              >
                {f.icon}
              </div>
              <h3 className="font-bold mb-2 text-sm" style={{ color: dark }}>{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 px-6" style={{ backgroundColor: p }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white">Maak kennis met ons team</h2>
          <p className="text-white/80 text-sm mt-1">Bel ons of stuur een bericht — we vertellen u graag meer.</p>
        </div>
        <Link
          to={config.basePath + '/contact'}
          className="px-8 py-4 bg-white rounded-xl font-black transition-all hover:scale-[1.02] whitespace-nowrap"
          style={{ color: p }}
        >
          Neem Contact Op →
        </Link>
      </div>
    </section>
  </Layout>
);
