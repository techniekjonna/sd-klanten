import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

type Betaalmethode = 'contant' | 'pinnen' | 'tikkie' | 'creditcard';

const QuickBook = () => {
  const { primary, accent } = config.colors;
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [retour, setRetour] = useState(false);
  const [bagage, setBagage] = useState(true);
  const [reizigers, setReizigers] = useState(1);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md">
      <h2 className="text-lg font-black mb-5" style={{ color: config.colors.text }}>
        Boek eenvoudig je taxirit
      </h2>

      {/* Van/Naar */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <span className="text-blue-500 text-xs">◉</span>
          <input
            type="text"
            placeholder="straatnaam met huisnummer"
            value={van}
            onChange={(e) => setVan(e.target.value)}
            className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <button className="text-xs font-semibold ml-4 transition-colors" style={{ color: primary }}>
          + tussenstop toevoegen
        </button>
        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <span className="text-red-500 text-xs">📍</span>
          <input
            type="text"
            placeholder="straatnaam met huisnummer"
            value={naar}
            onChange={(e) => setNaar(e.target.value)}
            className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Datum + retour */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="border border-gray-200 rounded-xl px-4 py-3 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all col-span-2">
          <label className="text-[10px] font-bold uppercase tracking-wide text-gray-400 block mb-0.5">Ophaalmoment taxi</label>
          <input
            type="datetime-local"
            value={datum}
            onChange={(e) => setDatum(e.target.value)}
            className="w-full text-sm outline-none text-gray-700"
          />
        </div>
        <div className="col-span-2 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setRetour(!retour)}
            className="relative w-10 h-5 rounded-full transition-colors flex-shrink-0"
            style={{ backgroundColor: retour ? primary : '#E2E8F0' }}
          >
            <span
              className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style={{ transform: retour ? 'translateX(20px)' : 'translateX(0)' }}
            />
          </button>
          <span className="text-sm text-gray-600 font-medium">Retour</span>
          {!retour && <span className="text-xs text-gray-400">Enkele reis</span>}
        </div>
      </div>

      {/* Bagage + reizigers */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Reis je met bagage?</p>
          <div className="flex gap-3">
            {[{ val: true, label: 'Ja' }, { val: false, label: 'Nee, ik heb geen bagage' }].map(({ val, label }) => (
              <label key={label} className="flex items-center gap-1.5 cursor-pointer">
                <span
                  className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: bagage === val ? accent : '#D1D5DB' }}
                  onClick={() => setBagage(val)}
                >
                  {bagage === val && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />}
                </span>
                <span className="text-xs text-gray-600">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Aantal reizigers</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setReizigers(Math.max(1, reizigers - 1))}
              className="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors text-sm"
            >
              -
            </button>
            <span className="text-sm font-bold w-4 text-center" style={{ color: config.colors.text }}>{reizigers}</span>
            <button
              type="button"
              onClick={() => setReizigers(Math.min(8, reizigers + 1))}
              className="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors text-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <Link
        to={config.basePath + '/tarieven'}
        className="block w-full py-4 text-center font-bold text-white rounded-xl transition-opacity hover:opacity-90 text-sm"
        style={{ backgroundColor: primary }}
      >
        Bereken mijn ritprijs →
      </Link>
    </div>
  );
};

export const Home = () => {
  const { primary, accent, dark, text, primaryLight } = config.colors;

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${config.hero.image})` }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${dark}E8 50%, ${dark}60 80%, transparent 100%)` }} />

        <div className="relative container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: text */}
            <div className="max-w-xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 border"
                style={{ backgroundColor: `${accent}20`, color: accent, borderColor: `${accent}40` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                24/7 BESCHIKBAAR
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
                {config.hero.title}
                <span className="block italic" style={{ color: accent }}>
                  {config.hero.highlight}
                </span>
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
                {config.hero.subtitle}
              </p>

              {/* USPs */}
              <div className="flex flex-wrap gap-3 mb-8">
                {config.features.slice(0, 3).map((f) => (
                  <div
                    key={f.title}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white border border-white/20 backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <span>{f.icon}</span>
                    <span>{f.title}</span>
                  </div>
                ))}
              </div>

              {/* Phone */}
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center gap-3 text-white group"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: accent }}
                >
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Bel direct</p>
                  <p className="text-xl font-black group-hover:underline" style={{ color: accent }}>
                    {config.contact.phone}
                  </p>
                </div>
              </a>
            </div>

            {/* Right: booking widget */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <QuickBook />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {config.features.map((f, i) => (
              <div key={i} className="py-6 px-6 flex items-start gap-3">
                <span className="text-2xl mt-0.5">{f.icon}</span>
                <div>
                  <p className="text-sm font-bold" style={{ color: text }}>{f.title}</p>
                  <p className="text-xs text-gray-400 leading-snug mt-0.5">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIENSTEN ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: primary }}>Onze Diensten</p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: text }}>Waarvoor kunt u ons bellen?</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
              Van vliegveldrit tot bruiloft — wij rijden u comfortabel en op tijd.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: primaryLight }}
                >
                  {s.icon}
                </div>
                <h3 className="text-base font-black mb-1.5" style={{ color: text }}>{s.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: primaryLight, color: primary }}>
                    {s.priceLabel}
                  </span>
                  <Link to={config.basePath + '/tarieven'} className="text-xs font-bold transition-colors hover:underline" style={{ color: accent }}>
                    Boek →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LUCHTHAVENS ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-gray-100 bg-gray-50">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primary }}>
                Luchthaven specialist
              </p>
              <h3 className="text-xl font-black" style={{ color: text }}>Wij rijden naar alle luchthavens</h3>
              <p className="text-sm text-gray-400 mt-1">Vaste all-in prijs, inclusief vluchttracering en wachttijd.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['✈️ Eindhoven', '✈️ Maastricht', '✈️ Schiphol', '✈️ Düsseldorf', '✈️ Brussel'].map((lp) => (
                <span key={lp} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 shadow-sm">
                  {lp}
                </span>
              ))}
            </div>
            <Link
              to={config.basePath + '/tarieven'}
              className="flex-shrink-0 px-6 py-3 font-bold text-white rounded-xl text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: primary }}
            >
              Vliegveld Boeken
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOE WERKT HET ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: primary }}>Zo eenvoudig</p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: text }}>Hoe werkt het?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { n: '1', icon: '📋', title: 'Boek of bel', desc: 'Vul ons online formulier in of bel +31 46-2600100. Wij zijn 24/7 bereikbaar.' },
              { n: '2', icon: '✅', title: 'Bevestiging', desc: 'U ontvangt direct een bevestiging. Wij staan op tijd voor uw deur.' },
              { n: '3', icon: '🚕', title: 'Geniet van uw rit', desc: 'Stap in en ontspan. Onze chauffeur brengt u veilig op uw bestemming.' },
            ].map((item) => (
              <div key={item.n} className="bg-white rounded-2xl p-7 border border-gray-100 text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-black mx-auto mb-4"
                  style={{ backgroundColor: primary }}
                >
                  {item.n}
                </div>
                <p className="text-2xl mb-3">{item.icon}</p>
                <h3 className="text-base font-black mb-2" style={{ color: text }}>{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: primary }}>Ervaringen</p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: text }}>Wat onze klanten zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                    style={{ backgroundColor: primary }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: text }}>{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Klaar voor uw rit?</h2>
          <p className="text-blue-200 text-sm mb-8 max-w-md mx-auto">
            Bel ons of boek online — wij zijn 24/7 beschikbaar voor u.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: accent }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/tarieven'}
              className="px-8 py-3.5 font-bold text-white rounded-xl border-2 border-white/40 hover:border-white/80 transition-colors"
            >
              Online Boeken →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
