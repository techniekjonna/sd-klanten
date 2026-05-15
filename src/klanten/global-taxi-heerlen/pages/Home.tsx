import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const ac = config.colors.accent;
const dk = config.colors.dark;

/* ── Inline booking widget (compact, dark style) ─────────────────── */
const BookingForm = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [reizigers, setReizigers] = useState(1);
  const [retour, setRetour] = useState(false);

  const swap = () => { const t = van; setVan(naar); setNaar(t); };

  const field =
    'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-yellow-400 transition-colors';

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); window.location.href = `tel:${config.contact.phoneTel}`; }}
      className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_auto_auto] gap-3 items-end"
    >
      {/* Van */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-1.5">Ophaaladres</label>
        <input type="text" placeholder="Straat + huisnummer" value={van} onChange={e => setVan(e.target.value)} className={field} />
      </div>

      {/* Naar */}
      <div className="relative">
        <label className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-1.5">Bestemming</label>
        <input type="text" placeholder="Straat + huisnummer" value={naar} onChange={e => setNaar(e.target.value)} className={field} />
        <button
          type="button" onClick={swap}
          className="absolute right-3 top-[2.1rem] text-white/40 hover:text-yellow-400 transition-colors text-base leading-none"
          title="Omwisselen"
        >⇅</button>
      </div>

      {/* Datum */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-1.5">Datum & tijd</label>
        <input type="datetime-local" value={datum} onChange={e => setDatum(e.target.value)} className={field} />
      </div>

      {/* Reizigers */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-1.5">Reizigers</label>
        <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-3">
          <button type="button" onClick={() => setReizigers(Math.max(1, reizigers - 1))} className="text-white/60 hover:text-white w-5 text-center font-bold">−</button>
          <span className="text-white font-bold w-4 text-center text-sm">{reizigers}</span>
          <button type="button" onClick={() => setReizigers(Math.min(8, reizigers + 1))} className="text-white/60 hover:text-white w-5 text-center font-bold">+</button>
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-2">
        <label className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-1.5 opacity-0 select-none">Boek</label>
        <a
          href={`tel:${config.contact.phoneTel}`}
          className="px-6 py-3 font-bold text-sm rounded-lg whitespace-nowrap transition-all hover:scale-105 active:scale-100"
          style={{ backgroundColor: ac, color: dk }}
        >
          Rit boeken →
        </a>
      </div>
    </form>
  );
};

/* ── Retour toggle ────────────────────────────────────────────────── */

/* ── Page ─────────────────────────────────────────────────────────── */
export const Home = () => (
  <Layout>

    {/* ══ HERO ══════════════════════════════════════════════════════ */}
    <section className="relative flex flex-col min-h-screen">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${config.hero.image})` }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.65) 60%, rgba(10,10,10,0.4) 100%)' }} />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ac }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              24/7 beschikbaar — {config.contact.phone}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-extrabold leading-[1.05] mb-6 text-white">
            <span className="block text-5xl md:text-7xl">Snel.</span>
            <span className="block text-5xl md:text-7xl">Veilig.</span>
            <span className="block text-5xl md:text-7xl" style={{ color: ac }}>Comfortabel.</span>
          </h1>

          <p className="text-lg text-white/70 max-w-lg leading-relaxed mb-10">
            Global Taxi Heerlen — meer dan 10 jaar vertrouwde service in Heerlen en omgeving.
            Gediplomeerde chauffeurs, vaste prijzen, altijd op tijd.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${config.contact.phoneTel}`}
              className="inline-flex items-center gap-3 px-8 py-4 font-bold rounded-xl text-base transition-all hover:scale-105 active:scale-100 shadow-2xl"
              style={{ backgroundColor: ac, color: dk }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/diensten'}
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base border-2 border-white/30 text-white hover:border-white/70 transition-colors"
            >
              Onze diensten
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Floating stats — bottom right */}
        <div className="absolute bottom-10 right-6 hidden lg:flex gap-px overflow-hidden rounded-2xl shadow-2xl border border-white/10">
          {[
            { num: '10+', label: 'Jaar ervaring' },
            { num: '24/7', label: 'Beschikbaar' },
            { num: '100%', label: 'Punctueel' },
          ].map((s, i) => (
            <div key={i} className="px-6 py-4 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
              <div className="text-2xl font-extrabold" style={{ color: ac }}>{s.num}</div>
              <div className="text-xs text-white/60 mt-0.5 whitespace-nowrap">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking bar — anchored to bottom */}
      <div className="relative z-10" style={{ backgroundColor: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(16px)', borderTop: `1px solid rgba(255,255,255,0.08)` }}>
        <div className="container mx-auto px-6 py-5">
          <BookingForm />
        </div>
      </div>
    </section>

    {/* ══ SERVICES ══════════════════════════════════════════════════ */}
    <section className="py-24" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ac === '#f5c800' ? '#c9a400' : ac }}>Wat wij bieden</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: dk }}>
              Onze diensten
            </h2>
          </div>
          <Link
            to={config.basePath + '/diensten'}
            className="text-sm font-bold flex items-center gap-1.5 hover:gap-3 transition-all"
            style={{ color: dk }}
          >
            Alle diensten bekijken
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {config.services.map((s, i) => (
            <Link
              key={s.id}
              to={config.basePath + s.path}
              className="group relative flex items-start gap-5 p-7 rounded-2xl bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ border: '1.5px solid #ececec' }}
            >
              {/* Yellow left accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all group-hover:w-1.5"
                style={{ backgroundColor: ac }}
              />
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#1a1a1a', color: ac }}
              >
                {s.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1.5" style={{ color: dk }}>{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
              <svg
                className="w-5 h-5 text-gray-300 group-hover:text-gray-700 transition-colors flex-shrink-0 mt-1"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ══ WAAROM WIJ — dark strip ════════════════════════════════════ */}
    <section className="py-24" style={{ backgroundColor: dk }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: ac }}>Waarom Global Taxi?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
              Jong bedrijf,<br />10 jaar<br />
              <span style={{ color: ac }}>bewezen</span>.
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 max-w-md">
              {config.about.story}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {config.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: ac + '22', color: ac }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{f.title}</p>
                    <p className="text-xs text-white/50 mt-0.5 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to={config.basePath + '/over-ons'}
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 font-bold rounded-xl transition-all hover:scale-105"
              style={{ backgroundColor: ac, color: dk }}
            >
              Over ons
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: image + numbers overlay */}
          <div className="relative hidden lg:block">
            <img
              src={config.about.image}
              alt="Global Taxi Heerlen"
              className="w-full h-96 object-cover rounded-2xl"
            />
            {/* Overlay card */}
            <div
              className="absolute -bottom-6 -left-6 rounded-2xl px-7 py-5 shadow-2xl"
              style={{ backgroundColor: ac, color: dk }}
            >
              <p className="text-4xl font-extrabold leading-none">10+</p>
              <p className="text-sm font-semibold mt-1 opacity-80">Jaar ervaring</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ══ TESTIMONIALS ══════════════════════════════════════════════ */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ac === '#f5c800' ? '#c9a400' : ac }}>Reviews</p>
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: dk }}>
            Wat klanten zeggen
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map((t) => (
            <div
              key={t.id}
              className="relative p-8 rounded-2xl flex flex-col"
              style={{ backgroundColor: '#f7f7f7', border: '1.5px solid #ececec' }}
            >
              {/* Big quote mark */}
              <span
                className="absolute top-5 right-6 text-6xl font-serif leading-none select-none"
                style={{ color: ac + '55' }}
              >"</span>
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: ac }} className="text-base">★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: dk, color: ac }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: dk }}>{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ CTA BAND ══════════════════════════════════════════════════ */}
    <section
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: ac }}
    >
      {/* Decorative large number */}
      <span
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[10rem] font-extrabold leading-none select-none pointer-events-none opacity-10"
        style={{ color: dk }}
      >24/7</span>

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: dk }}>
            Klaar voor uw rit?
          </h2>
          <p className="text-sm opacity-70" style={{ color: dk }}>
            Bel ons direct — 24 uur per dag, 7 dagen per week.
          </p>
        </div>
        <a
          href={`tel:${config.contact.phoneTel}`}
          className="inline-flex items-center gap-3 px-10 py-5 font-extrabold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105 whitespace-nowrap"
          style={{ backgroundColor: dk, color: ac }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          {config.contact.phone}
        </a>
      </div>
    </section>

  </Layout>
);
