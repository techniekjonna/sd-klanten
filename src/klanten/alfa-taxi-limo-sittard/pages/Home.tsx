import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const stats = [
  { value: '10+', label: 'Jaar ervaring' },
  { value: '24/7', label: 'Bereikbaar' },
  { value: '100%', label: 'Betrouwbaar' },
  { value: '4 & 8', label: 'Persoonswagens' },
];

export const Home = () => {
  const { primary, accent, dark, text, primaryLight } = config.colors;

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end md:justify-center overflow-hidden">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${config.hero.image})` }}
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, ${dark}F0 40%, ${dark}88 70%, transparent 100%)`,
          }}
        />

        <div className="relative container mx-auto px-4 pt-20 pb-16 md:pt-0 md:pb-0">
          <div className="max-w-2xl">
            {/* badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-widest"
              style={{ backgroundColor: `${accent}30`, color: accent, border: `1px solid ${accent}50` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
              Sittard-Geleen & Omgeving
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-5">
              {config.hero.title}{' '}
              <span
                className="block"
                style={{ color: accent }}
              >
                {config.hero.highlight}
              </span>
            </h1>

            <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-lg">
              {config.hero.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-7 py-3.5 font-bold text-white rounded-xl text-base transition-opacity hover:opacity-90 shadow-xl"
                style={{ backgroundColor: accent }}
              >
                {config.hero.cta} →
              </Link>
              <a
                href={`tel:${config.contact.phone}`}
                className="px-7 py-3.5 font-bold text-white rounded-xl text-base border-2 border-white/30 hover:border-white/60 transition-colors backdrop-blur-sm"
              >
                📞 {config.contact.phone}
              </a>
            </div>

            {/* trust badges */}
            <div className="flex flex-wrap gap-5 mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              {['✓ Geen reserveringskosten', '✓ Vaste transparante prijs', '✓ Direct bevestigd'].map((b) => (
                <span key={b} className="text-sm text-white/60 font-medium">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar — overlays hero bottom on desktop */}
        <div className="relative mt-auto md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0">
          <div
            className="container mx-auto px-4"
          >
            <div
              className="grid grid-cols-2 md:grid-cols-4 rounded-t-2xl md:rounded-2xl md:mb-0 overflow-hidden shadow-2xl"
              style={{ backgroundColor: primary }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="py-5 px-6 text-center"
                  style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
                >
                  <p className="text-2xl md:text-3xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-white/60 mt-0.5 font-medium uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIENSTEN ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
              Onze Diensten
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: text }}>
              Waarvoor kunt u ons bellen?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Van vliegveldrit tot bruiloft — wij rijden u comfortabel en op tijd.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: primaryLight }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-black mb-2" style={{ color: text }}>{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: primaryLight, color: primary }}
                  >
                    {s.priceLabel}
                  </span>
                  <Link
                    to={config.basePath + '/tarieven'}
                    className="text-xs font-bold hover:underline transition-colors"
                    style={{ color: accent }}
                  >
                    Boek →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOE WERKT HET ── */}
      <section className="py-20" style={{ backgroundColor: dark }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>Zo eenvoudig</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Hoe werkt het?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Boek of bel', desc: 'Vul ons online formulier in of bel direct op +31 46-2600100. Wij zijn 24/7 bereikbaar.', icon: '📋' },
              { step: '02', title: 'Bevestiging', desc: 'U ontvangt direct een bevestiging. Wij staan op tijd voor uw deur — gegarandeerd.', icon: '✅' },
              { step: '03', title: 'Geniet van uw rit', desc: 'Stap in en ontspan. Onze chauffeur brengt u veilig en comfortabel op uw bestemming.', icon: '🚕' },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div
                  className="text-5xl font-black mb-4 block opacity-10 absolute -top-3 left-1/2 -translate-x-1/2 leading-none"
                  style={{ color: accent }}
                >
                  {item.step}
                </div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-5"
                  style={{ backgroundColor: `${primary}40`, border: `2px solid ${primary}` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to={config.basePath + '/tarieven'}
              className="inline-block px-8 py-4 font-bold text-white rounded-xl text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Direct Boeken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WAAROM ONS ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
                Waarom Alfa Taxi?
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: text }}>
                Uw betrouwbare taxipartner in de regio
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Sinds 2015 vertrouwen inwoners van Sittard-Geleen op Alfa Taxi voor al hun vervoersbehoeften.
                Wij kennen de regio als onze broekzak en garanderen altijd een stipte, comfortabele rit.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: primaryLight }}
                  >
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <p className="font-bold text-sm mb-1" style={{ color: text }}>{f.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image + floating card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&h=600&fit=crop"
                  alt="Taxi Sittard"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -left-5 rounded-2xl p-5 shadow-xl"
                style={{ backgroundColor: dark }}
              >
                <p className="text-3xl font-black text-white">24/7</p>
                <p className="text-xs text-white/50 mt-0.5">Bereikbaar voor u</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="mt-3 block text-xs font-bold hover:underline"
                  style={{ color: accent }}
                >
                  {config.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUCHTHAVENS ── */}
      <section className="py-14" style={{ backgroundColor: primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primary }}>
                Luchthaven vervoer
              </p>
              <h3 className="text-2xl font-black" style={{ color: text }}>
                Wij rijden u naar alle luchthavens
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['✈️ Eindhoven Airport', '✈️ Maastricht Aachen', '✈️ Schiphol', '✈️ Düsseldorf', '✈️ Brussel'].map(
                (lp) => (
                  <span
                    key={lp}
                    className="px-4 py-2 bg-white rounded-xl text-sm font-semibold shadow-sm"
                    style={{ color: text }}
                  >
                    {lp}
                  </span>
                )
              )}
            </div>
            <Link
              to={config.basePath + '/tarieven'}
              className="flex-shrink-0 px-6 py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: primary }}
            >
              Boek Vliegveldrit
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
              Ervaringen
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: text }}>
              Wat onze klanten zeggen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white"
                    style={{ backgroundColor: primary }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: text }}>{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
