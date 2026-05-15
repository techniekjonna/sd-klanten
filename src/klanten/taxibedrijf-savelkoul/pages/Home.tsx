import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [tussenstop, setTussenstop] = useState('');
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [bagage, setBagage] = useState(true);
  const [datetime, setDatetime] = useState('');
  const [retour, setRetour] = useState(false);
  const [retourDatetime, setRetourDatetime] = useState('');
  const [reizigers, setReizigers] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSwap = () => {
    setVan(naar);
    setNaar(van);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!van || !naar || !datetime || reizigers < 1) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 text-white"
          style={{ backgroundColor: config.colors.accent }}
        >
          ✓
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.primary }}>
          Aanvraag verstuurd!
        </h3>
        <p className="text-gray-500 text-sm mb-5">
          Wij nemen zo spoedig mogelijk contact op ter bevestiging.
        </p>
        <a
          href={`tel:${config.contact.phone}`}
          className="text-sm font-bold"
          style={{ color: config.colors.accent }}
        >
          Of bel direct: {config.contact.phoneDisplay}
        </a>
        <button
          onClick={() => setSubmitted(false)}
          className="block mx-auto mt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          Nieuwe aanvraag
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-2xl">
      <h2 className="text-lg font-extrabold mb-5" style={{ color: config.colors.primary }}>
        Boek uw taxirit
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: route */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: config.colors.accent }}>
            Waar wilt u heen?
          </p>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 flex flex-col items-center py-2" style={{ width: 16 }}>
              <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: config.colors.accent }} />
              {showTussenstop && (
                <>
                  <div className="flex-1 w-px bg-gray-200 my-1" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </>
              )}
              <div className="flex-1 w-px bg-gray-200 my-1" />
              <div className="text-base" style={{ color: config.colors.primary }}>📍</div>
            </div>

            <div className="pl-8 space-y-2">
              <input
                type="text"
                value={van}
                onChange={(e) => setVan(e.target.value)}
                placeholder="Vertrekadres met huisnummer"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                style={{ '--tw-ring-color': config.colors.accent } as React.CSSProperties}
              />

              {showTussenstop ? (
                <input
                  type="text"
                  value={tussenstop}
                  onChange={(e) => setTussenstop(e.target.value)}
                  placeholder="Tussenstop adres"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowTussenstop(true)}
                  className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style={{ color: config.colors.accent }}
                >
                  <span
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{ borderColor: config.colors.accent }}
                  >
                    +
                  </span>
                  Tussenstop toevoegen
                </button>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={naar}
                  onChange={(e) => setNaar(e.target.value)}
                  placeholder="Bestemmingsadres met huisnummer"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                />
                <button
                  type="button"
                  onClick={handleSwap}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: config.colors.primary }}
                  title="Van en naar omwisselen"
                >
                  ⇅
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold text-gray-500 mb-2">Reist u met bagage?</p>
            <div className="flex gap-5">
              {[{ val: true, label: 'Ja' }, { val: false, label: 'Nee, geen bagage' }].map(({ val, label }) => (
                <label key={label} className="flex items-center gap-2 cursor-pointer">
                  <div
                    onClick={() => setBagage(val)}
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer"
                    style={{
                      borderColor: bagage === val ? config.colors.accent : '#d1d5db',
                      backgroundColor: bagage === val ? config.colors.accent : 'transparent',
                    }}
                  >
                    {bagage === val && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right: datum + opties */}
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1.5">Datum & tijdstip ophalen</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">📅</span>
              <input
                type="datetime-local"
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
                className="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setRetour(!retour)}
                className="w-10 h-5 rounded-full relative transition-colors cursor-pointer flex-shrink-0"
                style={{ backgroundColor: retour ? config.colors.accent : '#e5e7eb' }}
              >
                <div
                  className="w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all shadow"
                  style={{ left: retour ? '1.375rem' : '0.125rem' }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">Retour</span>
            </label>
            {retour ? (
              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">📅</span>
                <input
                  type="datetime-local"
                  value={retourDatetime}
                  onChange={(e) => setRetourDatetime(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                />
              </div>
            ) : (
              <div className="mt-2 rounded-xl px-4 py-3 text-sm text-gray-400 border border-gray-100 bg-gray-50">
                Enkele reis
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1.5">Aantal reizigers</p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 font-bold"
              >
                −
              </button>
              <span className="text-lg font-extrabold w-8 text-center" style={{ color: config.colors.primary }}>
                {reizigers}
              </span>
              <button
                type="button"
                onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full py-4 text-white font-extrabold rounded-xl transition-opacity hover:opacity-90 text-sm tracking-wide"
        style={{ backgroundColor: config.colors.accent }}
      >
        Bereken mijn ritprijs →
      </button>
    </form>
  );
};

export const Home = () => (
  <Layout>
    {/* Hero */}
    <section
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: `url(${config.hero.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(20, 46, 35, 0.85)' }} />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Hero text */}
          <div className="text-white pt-2">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: config.colors.accent }}
            >
              24/7 Beschikbaar in Heerlen
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Taxibedrijf Savelkoul
              <span className="block text-xl md:text-2xl font-semibold mt-2 text-gray-300">
                Betrouwbaar vervoer in Parkstad & omgeving
              </span>
            </h1>
            <p className="text-gray-300 text-base mb-8 leading-relaxed max-w-md">
              Van een lokale rit door Heerlen tot een luchthaventrip — wij staan dag en nacht voor u klaar. Eerlijke prijzen, vriendelijke chauffeurs.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {config.features.slice(0, 3).map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                  <span>{f.icon}</span>
                  <span className="text-sm font-medium">{f.title}</span>
                </div>
              ))}
            </div>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-3 text-white font-bold text-lg hover:opacity-80 transition-opacity"
            >
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: config.colors.accent }}
              >
                📞
              </span>
              {config.contact.phoneDisplay}
            </a>
          </div>

          {/* Booking widget */}
          <div>
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>

    {/* USP strip */}
    <section style={{ backgroundColor: config.colors.primary }} className="py-5 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {config.features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 py-1">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm">{f.title}</p>
                <p className="text-gray-400 text-xs hidden md:block">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Diensten */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: config.colors.primary }}>
            Onze diensten
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Voor ieder vervoersvraagstuk de passende oplossing — snel, betrouwbaar en betaalbaar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: `${config.colors.accent}18` }}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: config.colors.primary }}>
                {s.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <ul className="space-y-1.5">
                {s.features?.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-bold" style={{ color: config.colors.accent }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Luchthaven */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: config.colors.primary }}>
              Luchthaventransfer
            </h2>
            <p className="text-gray-500 text-sm">
              Vaste all-in prijzen vanuit Heerlen naar alle grote vliegvelden.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {config.airports.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{a.flag}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm" style={{ color: config.colors.primary }}>{a.name}</p>
                  <p className="text-xs text-gray-400">{a.country} · {a.time}</p>
                </div>
                <p className="font-extrabold text-sm flex-shrink-0" style={{ color: config.colors.accent }}>
                  {a.price}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-5">{config.pricing.note}</p>
        </div>
      </div>
    </section>

    {/* Service regio */}
    <section style={{ backgroundColor: config.colors.primary }} className="py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-2">Wij rijden door heel Parkstad & Zuid-Limburg</h2>
        <p className="text-gray-400 text-sm mb-7">Lokaal bekende chauffeurs, korte aanrijtijden.</p>
        <div className="flex flex-wrap justify-center gap-2">
          {config.serviceArea.map((city) => (
            <span
              key={city}
              className="px-4 py-2 rounded-full text-sm font-semibold border"
              style={{ borderColor: config.colors.accent, color: config.colors.accent }}
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: config.colors.primary }}>
          Wat klanten zeggen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {config.testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: config.colors.accent }} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm" style={{ color: config.colors.primary }}>{t.name}</p>
                {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16" style={{ backgroundColor: config.colors.accent }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Direct een taxi nodig?</h2>
        <p className="text-white/80 text-base mb-8">Bel ons of stuur een bericht. Wij zijn 24/7 bereikbaar.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm"
            style={{ color: config.colors.primary }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-sm"
          >
            Online Boeken →
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
