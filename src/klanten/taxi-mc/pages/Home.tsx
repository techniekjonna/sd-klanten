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
  const [bagage, setBagage] = useState(false);
  const [retourDatum, setRetourDatum] = useState('');

  const swap = () => { const tmp = van; setVan(naar); setNaar(tmp); };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header strip */}
      <div className="px-6 py-4" style={{ backgroundColor: config.colors.primary }}>
        <h2 className="font-black text-lg text-black tracking-tight">Boek eenvoudig uw taxirit</h2>
        <p className="text-black/60 text-sm">Vaste prijs — geen verrassingen</p>
      </div>

      <div className="p-6 space-y-4">
        {/* Van */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Van</label>
          <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-yellow-400 transition-colors">
            <span className="px-3 py-3 text-gray-400 bg-gray-50 border-r border-gray-100">📍</span>
            <input
              type="text"
              placeholder="Straatnaam + huisnummer, stad"
              value={van}
              onChange={e => setVan(e.target.value)}
              className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-300"
            />
          </div>
        </div>

        {/* Swap */}
        <div className="flex justify-center -my-1">
          <button
            type="button"
            onClick={swap}
            className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-400 transition-all text-gray-500 hover:text-black font-bold text-sm"
          >
            ⇅
          </button>
        </div>

        {/* Naar */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Naar</label>
          <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-yellow-400 transition-colors">
            <span className="px-3 py-3 text-gray-400 bg-gray-50 border-r border-gray-100">🏁</span>
            <input
              type="text"
              placeholder="Straatnaam + huisnummer, stad"
              value={naar}
              onChange={e => setNaar(e.target.value)}
              className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-300"
            />
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
              className="w-full border-2 border-gray-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        </div>

        {/* Opties rij */}
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            {/* Retour toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <button
                type="button"
                onClick={() => setRetour(!retour)}
                className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0"
                style={retour ? { backgroundColor: config.colors.primary, borderColor: config.colors.primary } : { borderColor: '#d1d5db' }}
              >
                {retour && <span className="text-black text-xs font-bold">✓</span>}
              </button>
              <span className="text-sm font-medium text-gray-700">Retour</span>
            </label>

            {/* Bagage toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <button
                type="button"
                onClick={() => setBagage(!bagage)}
                className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0"
                style={bagage ? { backgroundColor: config.colors.primary, borderColor: config.colors.primary } : { borderColor: '#d1d5db' }}
              >
                {bagage && <span className="text-black text-xs font-bold">✓</span>}
              </button>
              <span className="text-sm font-medium text-gray-700">Bagage</span>
            </label>
          </div>

          {/* Passagiers */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Reizigers</span>
            <div className="flex items-center gap-1.5">
              <button type="button" onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
                className="w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-yellow-400 transition-all font-bold text-sm">
                −
              </button>
              <span className="w-5 text-center font-bold text-sm">{passagiers}</span>
              <button type="button" onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
                className="w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-yellow-400 transition-all font-bold text-sm">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Retour datum */}
        {retour && (
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Retourdatum</label>
            <input
              type="date"
              value={retourDatum}
              onChange={e => setRetourDatum(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        )}

        {/* CTA */}
        <a
          href={`tel:${config.contact.phone}`}
          className="block w-full text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          style={{ backgroundColor: config.colors.primary }}
        >
          Rit aanvragen — Bel {config.contact.phoneDisplay}
        </a>

        <p className="text-center text-xs text-gray-400">
          Of mail naar{' '}
          <a href={`mailto:${config.contact.email}`} className="font-semibold text-black hover:underline">
            {config.contact.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Hero met booking widget */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 100%)' }} />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Links: tekst */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-black text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: p }}>
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                24/7 Beschikbaar
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-none mb-6 tracking-tight">
                Taxi <span style={{ color: p }}>MC</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-md">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Zakelijk vervoer', 'Airportvervoer', 'Treinvervoer', 'Heel Europa'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm text-gray-200 border border-white/25 bg-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`tel:${config.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black transition-opacity hover:opacity-90"
                style={{ backgroundColor: p }}
              >
                📞 {config.contact.phoneDisplay}
              </a>
            </div>

            {/* Rechts: booking widget */}
            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-5" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Bereikbaar' },
              { value: '9 luchthavens', label: 'Directe verbindingen' },
              { value: 'Heel Europa', label: 'Servicebereik' },
              { value: '3 talen', label: 'NL · EN · DE' },
            ].map(s => (
              <div key={s.label} className="py-3">
                <div className="text-xl font-black" style={{ color: p }}>{s.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: config.colors.surface }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Waarom Taxi MC?</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Duidelijkheid en eerlijkheid — dat is onze belofte aan elke klant.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group border-b-4" style={{ borderColor: 'transparent' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = p)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: `${p}22` }}>
                  {f.icon}
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Onze diensten</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Van zakelijk vervoer tot luchthaventritten — altijd comfortabel en op tijd.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map(s => (
              <Link
                key={s.id}
                to={config.basePath + s.path}
                className="group block rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-yellow-400 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.features?.map((feat, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: p }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest" style={{ color: p }}>
                    Meer info →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Voertuig features */}
      <section className="py-20" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Comfort & Kwaliteit</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Alles voor een perfecte rit</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Onze voertuigen zijn uitgerust met alle comfort dat u nodig heeft voor een ontspannen reis. Of het nu een korte stadsrit of een lange luchthaventransfer is.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {config.vehicleFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: p }}>
                      <span className="text-black text-xs font-black">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop"
                alt="Taxi MC voertuig"
                className="rounded-2xl w-full object-cover shadow-2xl"
                style={{ height: '360px' }}
              />
              <div className="absolute -bottom-4 -left-4 rounded-2xl px-5 py-4 shadow-xl" style={{ backgroundColor: p }}>
                <div className="text-black font-black text-2xl">€80</div>
                <div className="text-black/70 text-xs font-semibold">Vanaf Maastricht</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: config.colors.surface }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Wat klanten zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map(t => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base" style={{ color: p }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Klaar voor een comfortabele rit?</h2>
          <p className="text-black/70 text-lg mb-8 max-w-lg mx-auto">
            Bel ons direct of stuur een e-mail. Wij zijn 24 uur per dag bereikbaar voor u.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 rounded-xl font-black text-white transition-colors"
              style={{ backgroundColor: config.colors.dark }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${config.contact.email}`}
              className="px-8 py-4 border-2 border-black text-black rounded-xl font-bold hover:bg-black hover:text-white transition-colors"
            >
              ✉️ {config.contact.email}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
