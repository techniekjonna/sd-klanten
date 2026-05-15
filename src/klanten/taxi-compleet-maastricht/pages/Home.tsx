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

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
      {/* Header strip */}
      <div className="px-6 py-4" style={{ backgroundColor: config.colors.primary }}>
        <h2 className="text-white font-bold text-lg">Boek eenvoudig je taxirit</h2>
        <p className="text-blue-200 text-sm mt-0.5">Direct aanvragen — wij bellen u terug</p>
      </div>

      <div className="p-6 space-y-4">
        {/* Van */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Van</label>
          <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-800 transition-colors">
            <span className="px-3 text-gray-400 text-sm border-r border-gray-200 bg-gray-50 py-3">📍</span>
            <input
              type="text"
              placeholder="straatnaam met huisnummer"
              value={van}
              onChange={e => setVan(e.target.value)}
              className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Swap */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => { const tmp = van; setVan(naar); setNaar(tmp); }}
            className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-800 transition-all text-gray-400 hover:text-blue-800 text-sm font-bold"
            title="Omwisselen"
          >
            ⇅
          </button>
        </div>

        {/* Naar */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Naar</label>
          <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-800 transition-colors">
            <span className="px-3 text-gray-400 text-sm border-r border-gray-200 bg-gray-50 py-3">🏁</span>
            <input
              type="text"
              placeholder="straatnaam met huisnummer"
              value={naar}
              onChange={e => setNaar(e.target.value)}
              className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-400"
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
              className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-800 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-800 transition-colors"
            />
          </div>
        </div>

        {/* Bagage */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Reis je met bagage?</label>
          <div className="flex gap-6">
            {[true, false].map((val) => (
              <label key={String(val)} className="flex items-center gap-2 cursor-pointer">
                <div
                  onClick={() => setBagage(val)}
                  className="w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all"
                  style={{
                    borderColor: bagage === val ? config.colors.primary : '#d1d5db',
                    backgroundColor: bagage === val ? config.colors.primary : 'transparent',
                  }}
                >
                  {bagage === val && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <span className="text-sm text-gray-700">{val ? 'Ja' : 'Nee, ik heb geen bagage'}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Retour & passagiers row */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <div
              onClick={() => setRetour(!retour)}
              className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer"
              style={{
                borderColor: retour ? config.colors.primary : '#d1d5db',
                backgroundColor: retour ? config.colors.primary : 'transparent',
              }}
            >
              {retour && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </div>
            <span className="text-sm font-medium text-gray-700">Retour</span>
          </label>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-1">Reizigers</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-800 transition-all text-gray-600 font-bold"
            >
              −
            </button>
            <span className="text-base font-bold w-5 text-center">{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-800 transition-all text-gray-600 font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Submit */}
        <Link
          to={config.basePath + '/rit-boeken'}
          className="block w-full text-white text-center py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: config.colors.accent }}
        >
          Bereken mijn ritprijs →
        </Link>

        <p className="text-center text-xs text-gray-400">
          Of bel direct:{' '}
          <a href={`tel:${config.contact.phone}`} className="font-semibold hover:underline" style={{ color: config.colors.primary }}>
            {config.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      {/* Hero met booking widget */}
      <section
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(27,58,107,0.85) 0%, rgba(27,58,107,0.55) 55%, rgba(27,58,107,0.2) 100%)' }} />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">24/7 beschikbaar — 7 dagen per week</span>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
                Uw betrouwbare<br />
                <span style={{ color: '#F9D423' }}>taxi in Maastricht</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-md">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {config.serviceArea.slice(0, 6).map(place => (
                  <span key={place} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-blue-100">
                    {place}
                  </span>
                ))}
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-blue-100">& meer</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent, color: '#fff' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Direct bellen
                </a>
                <Link
                  to={config.basePath + '/soorten-vervoer'}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/60 text-white hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Onze diensten
                </Link>
              </div>
            </div>

            {/* Right: booking widget */}
            <div className="flex justify-center lg:justify-end">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: primary }} className="text-white py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '24/7', label: 'Bereikbaar' },
              { value: 'Meerdere', label: 'Voertuigen' },
              { value: '6+', label: 'Luchthavens' },
              { value: '100%', label: 'Betrouwbaar' },
            ].map(s => (
              <div key={s.label} className="py-2">
                <div className="text-2xl font-extrabold" style={{ color: '#F9D423' }}>{s.value}</div>
                <div className="text-xs text-blue-200 uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: primary }}>
              Waarom Taxi Compleet Maastricht?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">Wij zorgen dat u comfortabel en zorgeloos van A naar B komt.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group border-b-4 border-transparent hover:border-yellow-400">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: primary }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto foto + tekst */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://c625951.ssl.cf3.rackcdn.com/website/4853476/Canva_-_Black_Mercedes_Benz_Coupe.jpg"
                alt="Taxi Compleet Maastricht voertuig"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: '420px' }}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primary }}>
                Uw taxichauffeur van Maastricht en omstreken
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {config.about.story}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {config.about.mission}
              </p>
              <ul className="space-y-3 mb-8">
                {config.about.values.map((v, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs" style={{ backgroundColor: primary }}>✓</span>
                    {v}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${config.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Bel: {config.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten grid */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: primary }}>Soorten vervoer</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Van stadsritten tot luchthavens — wij hebben altijd de juiste oplossing voor u.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map(s => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: config.colors.lightBg }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: primary }}>{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features?.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primary }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/soorten-vervoer'}
              className="inline-block px-8 py-3 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: primary }}
            >
              Meer over onze diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: primary }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map(t => (
              <div key={t.id} className="rounded-2xl p-7 border-2 border-gray-100 hover:border-yellow-400 transition-all">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: primary }}>{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <div className="text-5xl mb-5">🚕</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar voor uw rit?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-lg mx-auto">
            Bel ons direct of vraag een rit aan. Wij zijn 24/7 bereikbaar voor u.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 rounded-xl font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent, color: '#fff' }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/rit-boeken'}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Rit boeken
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
