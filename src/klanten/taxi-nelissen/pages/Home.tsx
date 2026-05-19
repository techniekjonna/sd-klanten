import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

// ── Booking widget ────────────────────────────────────────────────────────────
const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [tussenstop, setTussenstop] = useState('');
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [bagage, setBagage] = useState('nee');
  const [ophaalmoment, setOphaalmoment] = useState('');
  const [retour, setRetour] = useState(false);
  const [retourMoment, setRetourMoment] = useState('');
  const [reizigers, setReizigers] = useState(1);

  const handleSwap = () => {
    const tmp = van;
    setVan(naar);
    setNaar(tmp);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-auto">
      <div className="mb-5">
        <h3 className="text-lg font-bold" style={{ color: config.colors.navy }}>
          Boek uw Maastricht taxi
        </h3>
        <p className="text-xs mt-0.5" style={{ color: config.colors.muted }}>Vul uw gegevens in voor een ritprijs</p>
      </div>

      <div className="space-y-3">
        {/* Van */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">📍</span>
          <input
            type="text"
            value={van}
            onChange={(e) => setVan(e.target.value)}
            placeholder="Vertrekadres met huisnummer"
            className="w-full pl-9 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ '--tw-ring-color': config.colors.primary } as React.CSSProperties}
          />
        </div>

        {/* Tussenstop toggle */}
        {!showTussenstop ? (
          <button
            type="button"
            onClick={() => setShowTussenstop(true)}
            className="flex items-center gap-1.5 text-xs font-medium transition-colors"
            style={{ color: config.colors.primary }}
          >
            <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ borderColor: config.colors.primary }}>+</span>
            tussenstop toevoegen
          </button>
        ) : (
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">🔄</span>
            <input
              type="text"
              value={tussenstop}
              onChange={(e) => setTussenstop(e.target.value)}
              placeholder="Tussenstop adres"
              className="w-full pl-9 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2"
            />
          </div>
        )}

        {/* Swap button */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-100" />
          <button
            type="button"
            onClick={handleSwap}
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors hover:text-white"
            style={{ borderColor: config.colors.primary, color: config.colors.primary }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = config.colors.primary;
              (e.currentTarget as HTMLButtonElement).style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
              (e.currentTarget as HTMLButtonElement).style.color = config.colors.primary;
            }}
            title="Wissel vertrek en bestemming"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Naar */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">🏁</span>
          <input
            type="text"
            value={naar}
            onChange={(e) => setNaar(e.target.value)}
            placeholder="Bestemmingsadres met huisnummer"
            className="w-full pl-9 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2"
          />
        </div>

        {/* Bagage */}
        <div>
          <p className="text-xs font-semibold mb-2" style={{ color: config.colors.text }}>Reis je met bagage?</p>
          <div className="flex gap-3">
            {(['ja', 'nee'] as const).map((v) => (
              <label key={v} className="flex items-center gap-1.5 cursor-pointer text-sm">
                <span
                  className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{
                    borderColor: bagage === v ? config.colors.primary : '#D1D5DB',
                    backgroundColor: bagage === v ? config.colors.primary : 'transparent',
                  }}
                >
                  {bagage === v && <span className="w-1.5 h-1.5 rounded-full bg-white block" />}
                </span>
                <input
                  type="radio"
                  name="bagage"
                  value={v}
                  checked={bagage === v}
                  onChange={() => setBagage(v)}
                  className="sr-only"
                />
                {v === 'ja' ? 'Ja' : 'Nee, geen bagage'}
              </label>
            ))}
          </div>
        </div>

        {/* Ophaalmoment */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base pointer-events-none">📅</span>
          <input
            type="datetime-local"
            value={ophaalmoment}
            onChange={(e) => setOphaalmoment(e.target.value)}
            className="w-full pl-9 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2"
          />
        </div>

        {/* Retour */}
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <span
            className="w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors"
            style={{
              borderColor: retour ? config.colors.primary : '#D1D5DB',
              backgroundColor: retour ? config.colors.primary : 'transparent',
            }}
          >
            {retour && (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          <input type="checkbox" checked={retour} onChange={() => setRetour(!retour)} className="sr-only" />
          <span style={{ color: config.colors.text }}>Retourrit</span>
        </label>

        {retour && (
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base pointer-events-none">🔁</span>
            <input
              type="datetime-local"
              value={retourMoment}
              onChange={(e) => setRetourMoment(e.target.value)}
              className="w-full pl-9 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2"
            />
          </div>
        )}

        {/* Reizigers */}
        <div>
          <p className="text-xs font-semibold mb-2" style={{ color: config.colors.text }}>Aantal reizigers</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setReizigers(Math.max(1, reizigers - 1))}
              className="w-9 h-9 rounded-lg border-2 font-bold text-lg flex items-center justify-center transition-colors"
              style={{ borderColor: config.colors.primary, color: config.colors.primary }}
            >
              −
            </button>
            <span className="w-8 text-center font-bold text-lg" style={{ color: config.colors.text }}>
              {reizigers}
            </span>
            <button
              type="button"
              onClick={() => setReizigers(Math.min(8, reizigers + 1))}
              className="w-9 h-9 rounded-lg border-2 font-bold text-lg flex items-center justify-center transition-colors"
              style={{ borderColor: config.colors.primary, color: config.colors.primary }}
            >
              +
            </button>
            <span className="text-xs" style={{ color: config.colors.muted }}>max. 8 personen</span>
          </div>
        </div>

        {/* Submit */}
        <button
          type="button"
          className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
          style={{ backgroundColor: config.colors.primary }}
        >
          Bereken mijn ritprijs
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// ── Home page ─────────────────────────────────────────────────────────────────
export const Home = () => {
  const p = config.colors.primary;
  const navy = config.colors.navy;

  return (
    <Layout>
      {/* ── Top bar ── */}
      <div className="text-white text-sm py-2" style={{ backgroundColor: p }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <span className="font-medium">🕐 24/7 bereikbaar – altijd voor u klaar</span>
          <a href={`tel:${config.contact.phoneHref}`} className="font-bold hover:underline">
            📞 {config.contact.phone}
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[88vh] flex items-center"
        style={{
          backgroundImage: `url(${config.about.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark navy overlay */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to right, ${navy}EE 45%, ${navy}99 75%, ${navy}33 100%)` }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left – 60% */}
            <div className="flex-1 text-white">
              <p
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                style={{ backgroundColor: `${p}33`, color: '#FDBA74' }}
              >
                Taxi Nelissen · Maastricht · Sinds 1962
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Uw veilige, vertrouwde taxi{' '}
                <span style={{ color: '#FDBA74' }}>uit de regio Maastricht</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed">
                Al meer dan 60 jaar rijden wij betrouwbaar door Maastricht en omgeving.
                Van luchthaven tot ziekenhuis – altijd op tijd, altijd met een glimlach.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${config.contact.phoneHref}`}
                  className="px-8 py-4 font-bold text-white rounded-xl shadow-lg transition-opacity hover:opacity-90 text-sm"
                  style={{ backgroundColor: p }}
                >
                  Direct boeken
                </a>
                <a
                  href={`tel:${config.contact.phoneHref}`}
                  className="px-8 py-4 font-bold text-white border-2 border-white rounded-xl hover:bg-white transition-colors text-sm"
                  style={{}}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = navy; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = ''; }}
                >
                  📞 Bel ons nu
                </a>
              </div>
            </div>

            {/* Right – booking widget 40% */}
            <div className="w-full lg:w-auto lg:min-w-[360px]">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
            {[
              { value: '60+', label: 'jaar ervaring' },
              { value: '24/7', label: 'beschikbaar' },
              { value: '1000+', label: 'tevreden klanten' },
            ].map((s) => (
              <div key={s.label} className="py-2">
                <p className="text-4xl font-extrabold" style={{ color: '#FDBA74' }}>{s.value}</p>
                <p className="text-sm mt-1 text-gray-300 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      <section className="py-20" style={{ backgroundColor: config.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: navy }}>
              Waarom Taxi Nelissen?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We doen meer dan rijden. We zorgen voor een complete, zorgeloze ervaring.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow text-center border-t-4"
                style={{ borderTopColor: p }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: navy }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diensten ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: navy }}>
              Onze Diensten
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{config.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl p-7 hover:shadow-lg transition-all border border-gray-100 hover:-translate-y-1 border-l-4"
                style={{ borderLeftColor: p }}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: navy }}>{s.name}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{s.description}</p>
                <ul className="space-y-1">
                  {s.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: config.colors.text }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${p}20` }}>
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: p }}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Luchthavens ── */}
      <section className="py-20" style={{ backgroundColor: config.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: navy }}>
              ✈️ Wij rijden naar alle grote luchthavens
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Vaste all-in prijzen, geen verrassingen. Wij monitoren uw vlucht.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {config.airports.map((airport) => (
              <div
                key={airport.name}
                className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-sm" style={{ color: navy }}>{airport.name}</span>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0"
                  style={{ backgroundColor: `${p}18`, color: p }}
                >
                  {airport.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20" style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Wat onze klanten zeggen
            </h2>
            <p style={{ color: '#9CA3AF' }}>Honderden tevreden klanten gingen u voor</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-lg">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: p }} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-sm" style={{ color: navy }}>{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 text-white" style={{ backgroundColor: p }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Klaar voor uw rit?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Bel ons direct of stuur een bericht. Wij staan altijd voor u klaar – 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phoneHref}`}
              className="px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: p }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white transition-colors"
              style={{}}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = p; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = ''; }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
