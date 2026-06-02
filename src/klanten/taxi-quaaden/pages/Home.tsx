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
  const [ritType, setRitType] = useState<'rit' | 'luchthaven'>('rit');

  const p = config.colors.primary;
  const gold = config.colors.gold;

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
      <div className="px-6 py-4" style={{ backgroundColor: p }}>
        <h2 className="text-white font-bold text-lg">Uw rit aanvragen</h2>
        <p className="text-blue-200 text-sm mt-0.5">Vul in en wij nemen contact op</p>
      </div>

      <div className="flex border-b border-gray-100">
        <button
          onClick={() => setRitType('rit')}
          className="flex-1 py-3 text-sm font-semibold transition-colors"
          style={ritType === 'rit' ? { color: p, borderBottom: `3px solid ${p}` } : { color: '#9ca3af' }}
        >
          🚗 Taxirit
        </button>
        <button
          onClick={() => setRitType('luchthaven')}
          className="flex-1 py-3 text-sm font-semibold transition-colors"
          style={ritType === 'luchthaven' ? { color: p, borderBottom: `3px solid ${p}` } : { color: '#9ca3af' }}
        >
          ✈️ Luchthaven
        </button>
      </div>

      <div className="p-6">
        <div className="space-y-3 mb-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Van</label>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <span className="px-3 py-3 text-gray-400 text-sm border-r border-gray-100 bg-gray-50">📍</span>
              <input
                type="text"
                placeholder="Straatnaam met huisnummer"
                value={van}
                onChange={e => setVan(e.target.value)}
                className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-300"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => { const t = van; setVan(naar); setNaar(t); }}
              className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 text-sm font-bold hover:text-white transition-all"
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = p; el.style.borderColor = p; el.style.color = 'white'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = ''; el.style.borderColor = ''; el.style.color = ''; }}
              title="Omwisselen"
            >
              ⇅
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
              {ritType === 'luchthaven' ? 'Luchthaven' : 'Naar'}
            </label>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <span className="px-3 py-3 text-gray-400 text-sm border-r border-gray-100 bg-gray-50">
                {ritType === 'luchthaven' ? '✈️' : '🏁'}
              </span>
              <input
                type="text"
                placeholder={ritType === 'luchthaven' ? 'Bijv. Schiphol, Eindhoven...' : 'Straatnaam met huisnummer'}
                value={naar}
                onChange={e => setNaar(e.target.value)}
                className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Datum</label>
            <input
              type="date"
              value={datum}
              onChange={e => setDatum(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => setRetour(!retour)}
              className="w-10 h-5 rounded-full transition-colors relative flex-shrink-0 cursor-pointer"
              style={{ backgroundColor: retour ? p : '#e5e7eb' }}
            >
              <span
                className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all"
                style={{ left: retour ? '22px' : '2px' }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">Retourrit</span>
          </label>
        </div>

        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Passagiers</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-lg transition-all"
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = p; el.style.borderColor = p; el.style.color = 'white'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = ''; el.style.borderColor = ''; el.style.color = ''; }}
            >
              −
            </button>
            <span className="text-lg font-bold w-6 text-center">{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-lg transition-all"
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = p; el.style.borderColor = p; el.style.color = 'white'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = ''; el.style.borderColor = ''; el.style.color = ''; }}
            >
              +
            </button>
          </div>
        </div>

        <Link
          to={config.basePath + '/contact'}
          className="block w-full text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-lg"
          style={{ backgroundColor: gold }}
        >
          Rit aanvragen →
        </Link>

        <p className="text-center text-xs text-gray-400 mt-3">
          Of bel direct:{' '}
          <a href={`tel:${config.contact.phone}`} className="font-bold hover:underline" style={{ color: p }}>
            {config.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  const p = config.colors.primary;
  const gold = config.colors.gold;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,37,87,0.93) 0%, rgba(15,37,87,0.72) 55%, rgba(15,37,87,0.35) 100%)' }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border border-white/20"
                style={{ backgroundColor: 'rgba(184,150,90,0.18)', color: '#f0d090' }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: gold }} />
                Zakelijk vervoer Zuid-Limburg
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4 tracking-tight">
                Taxi<br />
                <span style={{ color: gold }}>Quaaden</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {config.serviceArea.map(place => (
                  <span
                    key={place}
                    className="px-3 py-1 rounded-full text-sm border border-white/20 text-blue-200"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    {place}
                  </span>
                ))}
              </div>
              <div className="flex gap-8">
                {[
                  { val: '24/7', lbl: 'Bereikbaar' },
                  { val: '100%', lbl: 'Betrouwbaar' },
                  { val: '6', lbl: 'Luchthavens' },
                ].map(s => (
                  <div key={s.lbl}>
                    <div className="text-2xl font-black" style={{ color: gold }}>{s.val}</div>
                    <div className="text-xs text-blue-300 uppercase tracking-widest">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Gold accent bar */}
      <section className="py-4 text-white text-sm font-semibold" style={{ backgroundColor: gold }}>
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
          <span>✈️ Luchthaventransfers</span>
          <span>💼 Zakelijk vervoer</span>
          <span>🎩 Chauffeursdienst</span>
          <span>🚗 Particulier vervoer</span>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: config.colors.light }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: p }}>Waarom Taxi Quaaden?</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Wij onderscheiden ons door kwaliteit, betrouwbaarheid en persoonlijke service in het Zuid-Limburgse Heuvelland.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-7 border-b-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                style={{ borderColor: gold }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: p }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: p }}>Onze Diensten</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Van zakelijk vervoer tot luchthaventransfers — elk traject verzorgd met aandacht en professionaliteit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map(s => (
              <div
                key={s.id}
                className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-1.5" style={{ backgroundColor: gold }} />
                <div className="p-6">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: p }}>{s.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5">
                    {s.features?.map((feat, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: gold }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-3.5 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-md"
              style={{ backgroundColor: p }}
            >
              Meer over onze diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Luchthavens */}
      <section className="py-16" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Luchthaventransfers</h2>
            <p className="text-blue-200 text-sm">Wij rijden naar alle grote luchthavens in Nederland, België en Duitsland.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {config.airports.map(a => (
              <div
                key={a.name}
                className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-2">{a.flag}</div>
                <div className="text-white text-xs font-semibold leading-tight">{a.name}</div>
                <div
                  className="mt-1.5 text-xs font-bold rounded-full px-2 py-0.5 inline-block text-white"
                  style={{ backgroundColor: gold }}
                >
                  {a.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: config.colors.light }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" style={{ color: p }}>Wat onze klanten zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map(t => (
              <div
                key={t.id}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-all border-l-4"
                style={{ borderColor: gold }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base" style={{ color: gold }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: p }}>{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${p} 0%, ${config.colors.navyLight} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Klaar voor uw rit?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-lg mx-auto">
            Neem contact op of vraag direct uw rit aan. Wij zijn 24/7 bereikbaar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl hover:opacity-90 transition-all shadow-lg text-white"
              style={{ backgroundColor: gold }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-colors"
            >
              Rit aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
