import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const GREEN = config.colors.primary;
const GREEN_DARK = config.colors.primaryDark;
const GOLD = config.colors.accent;
const MUTED = '#78716C';

/* ─── Inline boekingsformulier ─────────────────────────── */
const BookingForm = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [retour, setRetour] = useState(false);
  const [reizigers, setReizigers] = useState(1);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-bold text-stone-800 text-lg">Aanvraag verstuurd!</p>
        <p className="text-sm text-stone-600 mt-1">Wij bellen u zo snel mogelijk terug.</p>
        <button
          className="mt-3 text-sm underline font-semibold"
          style={{ color: GREEN }}
          onClick={() => setSent(false)}
        >
          Nieuwe aanvraag
        </button>
      </div>
    );
  }

  const inputClass = 'w-full px-4 py-3 border border-stone-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 text-stone-800 placeholder-stone-400';

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end"
    >
      {/* Van */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 mb-1.5">Van</label>
        <input type="text" required value={van} onChange={(e) => setVan(e.target.value)}
          className={inputClass} placeholder="Vertrekadres" />
      </div>

      {/* Naar */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 mb-1.5">Naar</label>
        <input type="text" required value={naar} onChange={(e) => setNaar(e.target.value)}
          className={inputClass} placeholder="Bestemmingsadres" />
      </div>

      {/* Datum + Tijd */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 mb-1.5">Datum</label>
          <input type="date" required value={datum} onChange={(e) => setDatum(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 mb-1.5">Tijd</label>
          <input type="time" required value={tijd} onChange={(e) => setTijd(e.target.value)} className={inputClass} />
        </div>
      </div>

      {/* Retour / Reizigers / Button */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div
              className="w-9 h-5 rounded-full relative transition-colors flex-shrink-0"
              style={{ backgroundColor: retour ? GREEN : '#D6D3D1' }}
              onClick={() => setRetour(!retour)}
            >
              <div
                className="w-4 h-4 rounded-full bg-white absolute top-0.5 shadow transition-all"
                style={{ left: retour ? '18px' : '2px' }}
              />
            </div>
            <span className="text-sm font-medium text-stone-700">Retour</span>
          </label>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-stone-500 font-medium">Pax:</span>
            <button type="button" onClick={() => setReizigers(Math.max(1, reizigers - 1))}
              className="w-7 h-7 rounded-lg text-white font-bold flex items-center justify-center text-sm"
              style={{ backgroundColor: reizigers > 1 ? GREEN : '#A8A29E' }}>−</button>
            <span className="font-bold text-stone-800 w-4 text-center text-sm">{reizigers}</span>
            <button type="button" onClick={() => setReizigers(Math.min(8, reizigers + 1))}
              className="w-7 h-7 rounded-lg text-white font-bold flex items-center justify-center text-sm"
              style={{ backgroundColor: GREEN }}>+</button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90 text-sm"
          style={{ backgroundColor: GREEN }}
        >
          Rit aanvragen →
        </button>
      </div>
    </form>
  );
};

/* ─── Home pagina ───────────────────────────────────────── */
export const Home = () => {
  return (
    <Layout>
      {/* Hero — licht, geen full-bleed widget */}
      <section
        className="relative min-h-[75vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,46,24,0.88) 0%, rgba(10,46,24,0.5) 60%, rgba(10,46,24,0.1) 100%)' }} />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-xl text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
                Taxibedrijf Housmans — Echt
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-5">
              {config.hero.title}
            </h1>
            <p className="text-lg leading-relaxed mb-9 text-white/75 max-w-md">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#boeken"
                className="px-7 py-3.5 font-bold rounded-xl text-stone-900 transition-opacity hover:opacity-90"
                style={{ backgroundColor: GOLD }}
              >
                Rit aanvragen
              </a>
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl border-2 border-white/30 text-white hover:border-white/60 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {config.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Boekingsformulier band — goud, opvallend */}
      <section id="boeken" style={{ backgroundColor: GOLD }}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-700 mb-0.5">Direct boeken</p>
              <h2 className="text-xl font-extrabold text-stone-900">Uw rit aanvragen</h2>
            </div>
            <div className="flex-1">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* USP balk */}
      <section className="py-4 bg-stone-50 border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
            {[
              '✓ 24/7 beschikbaar',
              '✓ Vaste tarieven',
              '✓ Lokale kennis',
              '✓ Geen verborgen kosten',
              '✓ Dag & nacht bereikbaar',
            ].map((u) => (
              <span key={u} className="text-sm font-semibold" style={{ color: GREEN }}>{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features — horizontale stijl */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>Waarom Housmans</p>
              <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: GREEN }}>Persoonlijk en betrouwbaar</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {config.features.map((f, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
                  <div
                    className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 text-3xl w-14 h-14"
                    style={{ backgroundColor: `${GREEN}12` }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5 text-base" style={{ color: GREEN }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diensten — kaarten op lichte achtergrond */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>Onze services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: GREEN }}>Alles wat u nodig heeft</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { icon: '🚖', label: 'Lokaal & Regionaal', desc: 'Door Echt, Sittard, Roermond en heel Limburg. Altijd stipt op tijd.', path: '/diensten' },
              { icon: '✈️', label: 'Luchthaven Vervoer', desc: 'Eindhoven, Schiphol, Maastricht — vluchttracking inbegrepen.', path: '/diensten' },
              { icon: '🏥', label: 'Zorgvervoer', desc: 'Ziekenhuisritten en medische afspraken. Geduldig en vriendelijk.', path: '/diensten' },
            ].map(({ icon, label, desc, path }) => (
              <Link
                key={label}
                to={config.basePath + path}
                className="group bg-white rounded-2xl p-7 border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5"
                  style={{ backgroundColor: `${GREEN}10` }}
                >
                  {icon}
                </div>
                <h3 className="font-bold text-base mb-2 transition-colors" style={{ color: GREEN }}>{label}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>{desc}</p>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: GOLD }}>Meer info →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-3 rounded-xl font-bold text-sm border-2 transition-opacity hover:opacity-70"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              Alle diensten bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* Tarieven — groen achtergrond met tabel-feel */}
      <section className="py-20" style={{ backgroundColor: GREEN }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>Eerlijk geprijsd</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Onze tarieven</h2>
              <p className="mt-3 text-sm text-white/60">Wat we afspreken, betaalt u. Nooit meer.</p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl overflow-hidden mb-6">
              {[
                { label: 'Starttarief', value: '€ 3,50' },
                { label: 'Per km overdag (06:00–22:00)', value: '€ 2,25' },
                { label: 'Per km \'s nachts (22:00–06:00)', value: '€ 2,85' },
                { label: 'Naar Eindhoven Airport', value: 'v.a. € 70,00' },
                { label: 'Naar Schiphol Airport', value: 'v.a. € 155,00' },
              ].map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex items-center justify-between px-7 py-4"
                  style={{ borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.1)' : undefined }}
                >
                  <span className="text-sm text-white/75">{label}</span>
                  <span className="font-bold text-sm" style={{ color: GOLD }}>{value}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to={config.basePath + '/tarieven'}
                className="inline-block px-8 py-3 rounded-xl font-bold text-stone-900 transition-opacity hover:opacity-90"
                style={{ backgroundColor: GOLD }}
              >
                Alle tarieven bekijken →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews — grote quotes, lichte achtergrond */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>Tevreden klanten</p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: GREEN }}>Wat ze zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {config.testimonials.map((t) => (
              <div key={t.id} className="relative p-8 rounded-2xl bg-stone-50 border border-stone-100">
                <div
                  className="absolute top-5 right-6 text-6xl font-serif leading-none"
                  style={{ color: `${GREEN}15` }}
                >
                  "
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: GOLD }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: MUTED }}>"{t.text}"</p>
                <p className="font-bold text-sm" style={{ color: GREEN }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: GREEN }}>Klaar voor uw rit?</h2>
          <p className="text-sm mb-8 max-w-sm mx-auto" style={{ color: MUTED }}>
            Bel ons direct of stuur een bericht — dag en nacht beschikbaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 transition-opacity hover:opacity-70"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
