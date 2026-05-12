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
      <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 text-white"
          style={{ backgroundColor: config.colors.accent }}
        >
          ✓
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: config.colors.primary }}>
          Aanvraag verstuurd!
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          Wij nemen zo spoedig mogelijk contact op ter bevestiging.
        </p>
        <a
          href={`tel:${config.contact.phone}`}
          className="text-sm font-semibold"
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
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 shadow-xl"
      style={{ minWidth: 0 }}
    >
      <h2 className="text-xl font-extrabold mb-5" style={{ color: config.colors.primary }}>
        Boek eenvoudig je taxirit
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: route */}
        <div>
          <p className="text-sm font-bold mb-3" style={{ color: config.colors.accent }}>
            Waar wil je heen?
          </p>

          <div className="relative">
            {/* Route visual */}
            <div className="absolute left-3 top-0 bottom-0 flex flex-col items-center py-2 gap-1" style={{ width: 16 }}>
              <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: config.colors.accent }} />
              {showTussenstop && (
                <>
                  <div className="flex-1 w-0.5 bg-gray-200" style={{ minHeight: 16 }} />
                  <div className="w-3 h-3 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                  </div>
                </>
              )}
              <div className="flex-1 w-0.5 bg-gray-200" style={{ minHeight: 16 }} />
              <div className="text-base" style={{ color: config.colors.primary }}>📍</div>
            </div>

            <div className="pl-8 space-y-2">
              <input
                type="text"
                value={van}
                onChange={(e) => setVan(e.target.value)}
                placeholder="straatnaam met huisnummer"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />

              {showTussenstop ? (
                <input
                  type="text"
                  value={tussenstop}
                  onChange={(e) => setTussenstop(e.target.value)}
                  placeholder="tussenstop adres"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowTussenstop(true)}
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                  style={{ color: config.colors.accent }}
                >
                  <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ borderColor: config.colors.accent }}>+</span>
                  tussenstop toevoegen
                </button>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={naar}
                  onChange={(e) => setNaar(e.target.value)}
                  placeholder="straatnaam met huisnummer"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button
                  type="button"
                  onClick={handleSwap}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: config.colors.primary }}
                  title="Van en naar wisselen"
                >
                  ⇅
                </button>
              </div>
            </div>
          </div>

          {/* Bagage */}
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600 mb-2">Reis je met bagage?</p>
            <div className="flex gap-4">
              {[{ val: true, label: 'Ja' }, { val: false, label: 'Nee, ik heb geen bagage' }].map(({ val, label }) => (
                <label key={label} className="flex items-center gap-2 cursor-pointer">
                  <div
                    onClick={() => setBagage(val)}
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors"
                    style={{
                      borderColor: bagage === val ? config.colors.primary : '#d1d5db',
                      backgroundColor: bagage === val ? config.colors.primary : 'transparent',
                    }}
                  >
                    {bagage === val && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right: datetime + options */}
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1.5">Ophaalmoment taxi</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
              <input
                type="datetime-local"
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
                className="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
          </div>

          {/* Retour */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setRetour(!retour)}
                className="w-10 h-6 rounded-full relative transition-colors cursor-pointer flex-shrink-0"
                style={{ backgroundColor: retour ? config.colors.accent : '#d1d5db' }}
              >
                <div
                  className="w-4 h-4 bg-white rounded-full absolute top-1 transition-all shadow-sm"
                  style={{ left: retour ? '1.25rem' : '0.25rem' }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">Retour</span>
            </label>
            {retour && (
              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
                <input
                  type="datetime-local"
                  value={retourDatetime}
                  onChange={(e) => setRetourDatetime(e.target.value)}
                  placeholder="Enkele reis"
                  className="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            )}
            {!retour && (
              <div className="mt-2 rounded-xl px-4 py-3 text-sm text-gray-400 border border-gray-100 bg-gray-50">
                Enkele reis
              </div>
            )}
          </div>

          {/* Aantal reizigers */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1.5">Aantal reizigers</p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors font-bold"
              >
                −
              </button>
              <span className="text-lg font-bold w-8 text-center" style={{ color: config.colors.primary }}>
                {reizigers}
              </span>
              <button
                type="button"
                onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full py-4 text-white font-bold rounded-xl transition-opacity hover:opacity-90 text-base"
        style={{ backgroundColor: config.colors.accent }}
      >
        Bereken mijn ritprijs →
      </button>
    </form>
  );
};

export const Home = () => {
  return (
    <Layout>
      {/* Hero with booking widget */}
      <section
        className="relative py-14 md:py-20"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 32, 68, 0.82)' }} />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: hero text */}
            <div className="text-white pt-4">
              <p
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: config.colors.accent, color: '#fff' }}
              >
                24/7 Beschikbaar
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                Taxi Sittard
                <span className="block text-2xl md:text-3xl font-semibold mt-2 opacity-90">
                  Snel, betrouwbaar & voordelig
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Hoge service, lage prijs. Van een lokale rit tot luchthaventrip — wij staan voor u klaar.
              </p>
              <div className="flex flex-wrap gap-4">
                {config.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                    <span className="text-lg">{f.icon}</span>
                    <span className="text-sm font-medium">{f.title}</span>
                  </div>
                ))}
              </div>
              <a
                href={`tel:${config.contact.phone}`}
                className="mt-8 inline-flex items-center gap-2 text-white font-bold text-lg hover:opacity-80 transition-opacity"
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: config.colors.accent }}
                >
                  📞
                </span>
                {config.contact.phoneDisplay}
              </a>
            </div>

            {/* Right: booking widget */}
            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section style={{ backgroundColor: config.colors.primary }} className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: config.colors.primary }}>
              Onze diensten
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Voor elk vervoersvraagstuk de juiste oplossing — snel, betaalbaar en betrouwbaar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors"
                  style={{ backgroundColor: `${config.colors.accent}20` }}
                >
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: config.colors.primary }}>
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

      {/* Luchthavens */}
      <section className="py-20" style={{ backgroundColor: config.colors.primary }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Luchthaventransfer
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Vaste all-in prijzen naar alle grote vliegvelden in Nederland, België en Duitsland.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.airports.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/8 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/12 transition-colors"
              >
                <span className="text-3xl">{a.flag}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm">{a.name}</p>
                  <p className="text-gray-400 text-xs">{a.country} · ±{a.time}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-extrabold text-sm" style={{ color: config.colors.accent }}>
                    {a.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-6">{config.pricing.note}</p>
        </div>
      </section>

      {/* Service regio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: config.colors.primary }}>
            Wij rijden door heel Zuid-Limburg
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {config.serviceArea.map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full text-sm font-semibold border-2"
                style={{ borderColor: config.colors.accent, color: config.colors.primary }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: config.colors.primary }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: config.colors.accent }} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
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
      <section
        className="py-16 text-white text-center"
        style={{ backgroundColor: config.colors.accent }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Direct een taxi nodig?</h2>
          <p className="text-lg mb-8 opacity-90">Bel ons of boek direct online. 24/7 bereikbaar.</p>
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
};
