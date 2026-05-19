import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [passagiers, setPassagiers] = useState(1);
  const [retour, setRetour] = useState(false);
  const [bagage, setBagage] = useState(true);
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full">
      <div className="px-6 py-4" style={{ backgroundColor: primary }}>
        <h2 className="text-white font-bold text-lg">Bereken uw ritprijs</h2>
        <p className="text-white/70 text-sm mt-0.5">Vul uw route in voor een directe prijsindicatie</p>
      </div>

      <div className="p-6 space-y-4">
        {/* Route */}
        <div className="relative">
          <div className="absolute left-[1.65rem] top-[3.2rem] bottom-[1.6rem] w-px bg-gray-200" />
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Van</label>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 transition-all" style={{ '--tw-ring-color': primary } as React.CSSProperties}>
                <span className="px-3 py-3 text-lg z-10">📍</span>
                <input
                  type="text"
                  placeholder="Straatnaam met huisnummer"
                  value={van}
                  onChange={e => setVan(e.target.value)}
                  className="flex-1 px-2 py-3 text-sm outline-none placeholder-gray-300"
                />
              </div>
            </div>

            <div className="flex justify-start pl-2">
              <button
                type="button"
                onClick={() => { const t = van; setVan(naar); setNaar(t); }}
                className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 transition-colors text-sm font-bold"
              >
                ⇅
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Naar</label>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 transition-all">
                <span className="px-3 py-3 text-lg z-10">🏁</span>
                <input
                  type="text"
                  placeholder="Straatnaam met huisnummer"
                  value={naar}
                  onChange={e => setNaar(e.target.value)}
                  className="flex-1 px-2 py-3 text-sm outline-none placeholder-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Datum & tijd */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Datum</label>
            <input
              type="date"
              value={datum}
              onChange={e => setDatum(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm outline-none focus:ring-2 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm outline-none focus:ring-2 transition-all"
            />
          </div>
        </div>

        {/* Passagiers */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Aantal reizigers</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:border-gray-400 transition-colors"
            >
              −
            </button>
            <span className="text-lg font-bold w-6 text-center" style={{ color: primary }}>{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(16, passagiers + 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:border-gray-400 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Opties */}
        <div className="flex gap-5">
          {[
            { label: 'Retour', val: retour, set: setRetour },
            { label: 'Bagage', val: bagage, set: setBagage },
          ].map(({ label, val, set }) => (
            <button
              key={label}
              type="button"
              onClick={() => set(!val)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <div
                className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all"
                style={{ backgroundColor: val ? primary : 'transparent', borderColor: val ? primary : '#D1D5DB' }}
              >
                {val && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              {label}
            </button>
          ))}
        </div>

        <Link
          to={config.basePath + '/reserveer-airporttaxi'}
          className="block w-full text-center py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-90 text-white"
          style={{ backgroundColor: accent }}
        >
          Bereken mijn ritprijs →
        </Link>

        <p className="text-center text-xs text-gray-400">
          Of bel direct:{' '}
          <a href={`tel:${config.contact.phone}`} className="font-semibold hover:underline" style={{ color: primary }}>
            {config.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
};

const FleetSection = () => {
  const [tab, setTab] = useState<'wagen' | 'bus'>('wagen');
  const [imgIdx, setImgIdx] = useState(0);
  const vehicle = tab === 'wagen' ? config.fleet.wagen : config.fleet.bus;
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  const switchTab = (t: 'wagen' | 'bus') => { setTab(t); setImgIdx(0); };

  return (
    <section className="py-20" style={{ backgroundColor: config.colors.lightBg }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: primary }}>Ons wagenpark</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Modern, schoon en comfortabel vervoer voor elke gelegenheid.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-3">
          {(['wagen', 'bus'] as const).map(t => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all"
              style={tab === t
                ? { backgroundColor: primary, color: '#fff' }
                : { backgroundColor: '#fff', color: primary, border: `2px solid ${primary}` }
              }
            >
              {t === 'wagen' ? '🚗 Personenwagen' : '🚌 Bus'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Image gallery */}
          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200 shadow-lg">
              <img
                src={vehicle.images[imgIdx]}
                alt={vehicle.title}
                className="w-full h-full object-cover"
              />
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIdx(i => (i - 1 + vehicle.images.length) % vehicle.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setImgIdx(i => (i + 1) % vehicle.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-2 mt-3 justify-center">
              {vehicle.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className="w-14 h-10 rounded-lg overflow-hidden border-2 transition-all"
                  style={{ borderColor: imgIdx === i ? accent : 'transparent' }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: primary }}>{vehicle.title}</h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: `${accent}20`, color: accent }}>
              👤 {vehicle.capacity}
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{vehicle.description}</p>
            <ul className="space-y-2.5">
              {vehicle.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: accent }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      {/* Hero + booking */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(7,26,62,0.85) 0%, rgba(7,26,62,0.5) 60%, rgba(7,26,62,0.2) 100%)' }} />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: tekst */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
                <span className="text-sm font-medium">24/7 beschikbaar</span>
              </div>
              <img
                src={config.logo}
                alt="Taxiservice Julliard"
                className="h-14 mb-6 brightness-0 invert"
              />
              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-md">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {config.services.map(s => (
                  <span key={s.id} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-white/80 border border-white/20 bg-white/5">
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
              <a
                href={`tel:${config.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                📞 Bel direct: {config.contact.phoneDisplay}
              </a>
            </div>

            {/* Right: booking widget */}
            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-7" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Bereikbaar' },
              { value: '16 pers.', label: 'Max. capaciteit' },
              { value: '6', label: 'Luchthavens' },
              { value: '100%', label: 'Vaste prijzen' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: accent }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: primary }}>Waarom Taxiservice Julliard?</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Wij bieden persoonlijke service gecombineerd met professionaliteit en betrouwbaarheid.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="group p-7 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all" style={{ backgroundColor: `${accent}15` }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: primary }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: primary }}>Onze diensten</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Van luchthaventransfer tot schoolvervoer — voor iedere rit de juiste oplossing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.services.map(s => (
              <Link
                key={s.id}
                to={config.basePath + s.path}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: primary }}>{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features?.map(feat => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-sm font-semibold flex items-center gap-1 transition-colors" style={{ color: accent }}>
                  Meer info <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <FleetSection />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primary }}>Wat onze klanten zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map(t => (
              <div key={t.id} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: primary }}>{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar voor uw rit?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
            Bel ons direct of reserveer online. Wij staan 24/7 voor u klaar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/reserveer-airporttaxi'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white transition-colors"
              style={{ '--hover-color': primary } as React.CSSProperties}
            >
              Online reserveren
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
