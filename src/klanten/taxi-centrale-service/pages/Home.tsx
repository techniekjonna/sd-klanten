import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [ophaalmoment, setOphaalmoment] = useState('');
  const [retour, setRetour] = useState(false);
  const [passagiers, setPassagiers] = useState(1);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Widget header */}
      <div className="px-6 py-5" style={{ backgroundColor: config.colors.primary }}>
        <h2 className="text-white font-black text-lg">Rit aanvragen</h2>
        <p className="text-white/60 text-xs mt-0.5">Vul in en wij nemen contact op</p>
      </div>

      <div className="p-6">
        {/* Van/Naar */}
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: config.colors.primary }}>Uw route</p>
          <div className="relative flex flex-col gap-2">
            {/* Van */}
            <div
              className="flex items-center border-2 rounded-xl overflow-hidden transition-all"
              style={{ borderColor: config.colors.light }}
              onFocusCapture={e => (e.currentTarget as HTMLDivElement).style.borderColor = config.colors.primary}
              onBlurCapture={e => (e.currentTarget as HTMLDivElement).style.borderColor = config.colors.light}
            >
              <div className="w-10 flex items-center justify-center py-3 shrink-0">
                <span className="w-3 h-3 rounded-full border-2 block" style={{ borderColor: config.colors.primary }} />
              </div>
              <div className="h-4 w-px" style={{ backgroundColor: config.colors.light }} />
              <span className="text-xs font-bold mx-2 shrink-0" style={{ color: config.colors.muted }}>van</span>
              <input
                type="text"
                placeholder="Ophaaladres"
                value={van}
                onChange={e => setVan(e.target.value)}
                className="flex-1 py-3 pr-3 text-sm outline-none placeholder-gray-300"
              />
            </div>

            {/* Swap */}
            <div className="flex justify-end pr-2">
              <button
                type="button"
                onClick={() => { const t = van; setVan(naar); setNaar(t); }}
                className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all"
                style={{ borderColor: config.colors.primary, color: config.colors.primary }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = config.colors.primary;
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
                  (e.currentTarget as HTMLButtonElement).style.color = config.colors.primary;
                }}
                title="Omwisselen"
              >
                ⇅
              </button>
            </div>

            {/* Naar */}
            <div
              className="flex items-center border-2 rounded-xl overflow-hidden transition-all"
              style={{ borderColor: config.colors.light }}
              onFocusCapture={e => (e.currentTarget as HTMLDivElement).style.borderColor = config.colors.primary}
              onBlurCapture={e => (e.currentTarget as HTMLDivElement).style.borderColor = config.colors.light}
            >
              <div className="w-10 flex items-center justify-center py-3 shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill={config.colors.primary} />
                </svg>
              </div>
              <div className="h-4 w-px" style={{ backgroundColor: config.colors.light }} />
              <span className="text-xs font-bold mx-2 shrink-0" style={{ color: config.colors.muted }}>naar</span>
              <input
                type="text"
                placeholder="Bestemming"
                value={naar}
                onChange={e => setNaar(e.target.value)}
                className="flex-1 py-3 pr-3 text-sm outline-none placeholder-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Ophaalmoment */}
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: config.colors.muted }}>
            Ophaalmoment
          </label>
          <input
            type="datetime-local"
            value={ophaalmoment}
            onChange={e => setOphaalmoment(e.target.value)}
            className="w-full border-2 rounded-xl px-3 py-2.5 text-sm outline-none transition-all"
            style={{ borderColor: config.colors.light }}
            onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
            onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
          />
        </div>

        {/* Retour toggle */}
        <div className="mb-5">
          <div
            className="flex items-center gap-3 border-2 rounded-xl px-4 py-3 cursor-pointer transition-all"
            style={{ borderColor: retour ? config.colors.primary : config.colors.light }}
            onClick={() => setRetour(!retour)}
          >
            <div
              className="w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all"
              style={{
                borderColor: retour ? config.colors.primary : '#ccc',
                backgroundColor: retour ? config.colors.primary : '',
              }}
            >
              {retour && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm font-medium text-gray-600">Retourrit gewenst</span>
          </div>
        </div>

        {/* Passagiers */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: config.colors.muted }}>Passagiers</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all"
              style={{ borderColor: config.colors.primary, color: config.colors.primary }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = config.colors.primary;
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
                (e.currentTarget as HTMLButtonElement).style.color = config.colors.primary;
              }}
            >−</button>
            <span className="text-xl font-black w-6 text-center" style={{ color: config.colors.text }}>{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all"
              style={{ borderColor: config.colors.primary, color: config.colors.primary }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = config.colors.primary;
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
                (e.currentTarget as HTMLButtonElement).style.color = config.colors.primary;
              }}
            >+</button>
            <span className="text-xs text-gray-400">personen</span>
          </div>
        </div>

        {/* Submit */}
        <a
          href={`tel:${config.contact.phone}`}
          className="block w-full text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all hover:opacity-90 hover:shadow-lg"
          style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
        >
          Rit aanvragen →
        </a>

        <p className="text-center text-xs text-gray-400 mt-3">
          Of bel direct:{' '}
          <a href={`tel:${config.contact.phone}`} className="font-bold hover:underline" style={{ color: config.colors.primary }}>
            {config.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
};

export const Home = () => (
  <Layout>
    {/* Hero */}
    <section
      className="relative min-h-[92vh] flex items-center"
      style={{
        backgroundImage: `url(${config.hero.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(6,14,28,0.75)' }} />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — headline */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold border border-white/20" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: config.colors.accent }} />
              24/7 bereikbaar — Kerkrade &amp; Parkstad
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-5 tracking-tight">
              Uw Taxicentrale<br />
              in Kerkrade —{' '}
              <span style={{ color: config.colors.accent }}>TCS</span>
            </h1>
            <p className="text-lg text-white/75 mb-8 max-w-md leading-relaxed">
              {config.hero.subtitle}
            </p>
            {/* Service area pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {config.serviceArea.slice(0, 5).map(p => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-white/65"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                >
                  {p}
                </span>
              ))}
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-white/65"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
              >
                & meer
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
              >
                Bel: {config.contact.phoneDisplay}
              </a>
              <Link
                to={config.basePath + '/contact'}
                className="px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Rit aanvragen
              </Link>
            </div>
          </div>

          {/* Right — booking widget */}
          <div>
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '24/7', label: 'Bereikbaar' },
            { value: 'Regio', label: 'Parkstad Limburg' },
            { value: '6+', label: 'Luchthavens' },
            { value: '100%', label: 'Betrouwbaar' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-black" style={{ color: config.colors.accent }}>{s.value}</div>
              <div className="text-xs uppercase tracking-widest mt-1 text-white/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features grid */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Waarom TCS?</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 tracking-tight" style={{ color: config.colors.text }}>
            Uw betrouwbare taxipartner
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">Persoonlijk contact, stiptheid en jarenlange kennis van de regio Kerkrade en Parkstad Limburg.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: config.colors.light }}
              >
                {f.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Onze diensten</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 tracking-tight" style={{ color: config.colors.text }}>Vervoer op maat</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">Van een lokale rit tot een vlucht naar Schiphol — voor elke behoefte de juiste oplossing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map(s => (
            <div
              key={s.id}
              className="group border-2 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              style={{ borderColor: config.colors.light }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = config.colors.accent}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = config.colors.light}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: config.colors.light }}
              >
                {s.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>{s.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <ul className="space-y-1.5">
                {s.features?.map((feat, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: config.colors.accent }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to={config.basePath + '/diensten'}
            className="inline-block px-8 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ backgroundColor: config.colors.primary }}
          >
            Meer over onze diensten →
          </Link>
        </div>
      </div>
    </section>

    {/* About section */}
    <section className="py-20" style={{ backgroundColor: config.colors.light }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Over TCS</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-5 tracking-tight" style={{ color: config.colors.text }}>
              Taxi Centrale Service — Kerkrade
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">{config.about.story}</p>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">{config.about.mission}</p>
            <ul className="space-y-2.5 mb-8">
              {config.about.values.map((v, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium" style={{ color: config.colors.text }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                    style={{ backgroundColor: config.colors.accent }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {v}
                </li>
              ))}
            </ul>
            <Link
              to={config.basePath + '/over-ons'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
              style={{ backgroundColor: config.colors.primary }}
            >
              Meer over TCS →
            </Link>
          </div>
          <div className="relative">
            <img
              src={config.about.image}
              alt="Taxi Centrale Service Kerkrade"
              className="w-full rounded-2xl shadow-xl object-cover h-80"
            />
            <div
              className="absolute -bottom-4 -right-4 rounded-2xl p-5 shadow-xl"
              style={{ backgroundColor: config.colors.accent }}
            >
              <p className="font-black text-2xl" style={{ color: config.colors.dark }}>24/7</p>
              <p className="text-xs mt-0.5 font-semibold" style={{ color: config.colors.dark }}>dag &amp; nacht</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Ervaringen</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 tracking-tight" style={{ color: config.colors.text }}>Wat klanten zeggen</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map(t => (
            <div key={t.id} className="rounded-2xl p-7 border-2 hover:shadow-md transition-all" style={{ borderColor: config.colors.light }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-base" style={{ color: config.colors.accent }}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm" style={{ color: config.colors.text }}>{t.name}</p>
                {t.role && <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA section */}
    <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
      <div className="container mx-auto px-4">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ backgroundColor: 'rgba(245,158,11,0.2)', color: config.colors.accent }}>
          Klaar om te rijden?
        </span>
        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Direct een taxi in Kerkrade</h2>
        <p className="text-white/55 text-lg mb-8 max-w-lg mx-auto">
          Bel TCS direct of vraag online een rit aan. Wij zijn er altijd voor u — dag en nacht, zeven dagen per week.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 rounded-xl font-bold transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
          >
            Bel: {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 border-2 border-white/25 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
          >
            Rit aanvragen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
