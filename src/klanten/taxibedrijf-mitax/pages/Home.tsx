import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = config.colors.navy;
const ORANGE = config.colors.orange;
const ORANGE_H = config.colors.orangeHover;
const BGLIGHT = config.colors.bgLight;
const MUTED = config.colors.muted;

interface QuickForm {
  van: string;
  naar: string;
  datum: string;
  retour: boolean;
  reizigers: number;
  bagage: boolean;
}

export const Home = () => {
  const [form, setForm] = useState<QuickForm>({
    van: '',
    naar: '',
    datum: '',
    retour: false,
    reizigers: 1,
    bagage: true,
  });
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [tussenstop, setTussenstop] = useState('');

  const set = <K extends keyof QuickForm>(k: K, v: QuickForm[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const inputBase =
    'w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-800 placeholder-gray-400';

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(18,43,82,0.93) 45%, rgba(18,43,82,0.55) 100%)' }}
        />

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: headline */}
            <div className="text-white">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6"
                style={{ backgroundColor: `${ORANGE}25`, color: ORANGE }}
              >
                {config.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.08] mb-6">
                {config.hero.title}
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg opacity-90">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-2 px-6 py-3.5 font-bold rounded-xl text-white transition-all hover:scale-105 shadow-xl text-sm"
                  style={{ backgroundColor: ORANGE }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {config.contact.phoneDisplay}
                </a>
                <Link
                  to={config.basePath + '/boeken'}
                  className="flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl text-white border-2 border-white/30 hover:border-white/60 transition-all text-sm"
                >
                  Online Boeken →
                </Link>
              </div>

              {/* stats strip */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { val: '24/7', lbl: 'Beschikbaar' },
                  { val: 'Vaste prijs', lbl: 'Geen meter' },
                  { val: 'Zuid-Limburg', lbl: 'Werkgebied' },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <p className="font-extrabold text-base" style={{ color: ORANGE }}>{val}</p>
                    <p className="text-xs text-blue-200 opacity-70">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: booking widget */}
            <div
              className="rounded-2xl shadow-2xl overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)' }}
            >
              {/* Widget header */}
              <div className="px-6 pt-6 pb-5 border-b border-white/10">
                <h2 className="text-xl font-extrabold text-white">Boek eenvoudig uw taxirit</h2>
                <p className="text-xs text-white/50 mt-1">Vul in en wij bevestigen binnen 30 min</p>
              </div>

              <div className="px-6 pt-5 pb-2">
                {/* Waar wil je heen */}
                <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-3">Waar wil je heen?</p>

                {/* Van */}
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 w-3 h-3 rounded-full border-2 z-10 bg-transparent" style={{ borderColor: ORANGE }} />
                  <input
                    type="text"
                    value={form.van}
                    onChange={(e) => set('van', e.target.value)}
                    className="w-full pl-9 pr-10 py-3 text-sm rounded-t-xl focus:outline-none text-gray-800 placeholder-gray-400 bg-white"
                    placeholder="van   straatnaam met huisnummer"
                    style={{ borderRadius: '10px 10px 0 0' }}
                  />
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, van: p.naar, naar: p.van }))}
                    className="absolute right-2.5 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow"
                    style={{ backgroundColor: ORANGE }}
                    title="Omwisselen"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>

                {/* Tussenstop */}
                <div
                  className="flex items-center gap-2 px-3.5 py-2 text-xs cursor-pointer border-x border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gray-50"
                  onClick={() => setShowTussenstop(!showTussenstop)}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} style={{ color: ORANGE }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="font-semibold" style={{ color: ORANGE }}>tussenstop toevoegen</span>
                </div>
                {showTussenstop && (
                  <input
                    type="text"
                    value={tussenstop}
                    onChange={(e) => setTussenstop(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-white border-x border-b border-gray-200 focus:outline-none text-gray-800 placeholder-gray-400"
                    placeholder="tussenstop adres"
                  />
                )}

                {/* Naar */}
                <div className="relative flex items-center">
                  <div className="absolute left-3 z-10">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: ORANGE }}>
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={form.naar}
                    onChange={(e) => set('naar', e.target.value)}
                    className="w-full pl-9 pr-4 py-3 text-sm bg-white border border-gray-200 focus:outline-none text-gray-800 placeholder-gray-400"
                    placeholder="naar   straatnaam met huisnummer"
                    style={{ borderRadius: '0 0 10px 10px' }}
                  />
                </div>
              </div>

              {/* Bagage */}
              <div className="px-6 py-3">
                <p className="text-xs font-semibold text-white/60 mb-2">Reis je met bagage?</p>
                <div className="flex gap-5">
                  {([true, false] as const).map((v) => (
                    <label key={String(v)} className="flex items-center gap-2 cursor-pointer text-sm text-white/85">
                      <span
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                        style={{
                          borderColor: form.bagage === v ? ORANGE : 'rgba(255,255,255,0.35)',
                          backgroundColor: form.bagage === v ? ORANGE : 'transparent',
                        }}
                        onClick={() => set('bagage', v)}
                      >
                        {form.bagage === v && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                      {v ? 'Ja' : 'Nee, ik heb geen bagage'}
                    </label>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 mx-6" />

              {/* Datum / Retour / Reizigers */}
              <div className="px-6 py-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Ophaalmoment</p>
                  <div className="relative">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm">📅</span>
                    <input
                      type="datetime-local"
                      value={form.datum}
                      onChange={(e) => set('datum', e.target.value)}
                      className="w-full pl-8 pr-2 py-2.5 text-xs bg-white rounded-xl focus:outline-none text-gray-800 border border-gray-200"
                      style={{ colorScheme: 'light' }}
                    />
                  </div>
                  <label className="flex items-center gap-2 mt-3 cursor-pointer">
                    <div
                      className="w-10 h-5 rounded-full relative transition-all flex-shrink-0"
                      style={{ backgroundColor: form.retour ? ORANGE : 'rgba(255,255,255,0.2)' }}
                      onClick={() => set('retour', !form.retour)}
                    >
                      <div
                        className="w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all shadow"
                        style={{ left: form.retour ? '22px' : '2px' }}
                      />
                    </div>
                    <span className="text-sm text-white/80 font-medium">Retour</span>
                  </label>
                  {form.retour ? (
                    <div className="relative mt-2">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm">📅</span>
                      <input
                        type="datetime-local"
                        className="w-full pl-8 pr-2 py-2.5 text-xs bg-white rounded-xl focus:outline-none text-gray-800 border border-gray-200"
                        style={{ colorScheme: 'light' }}
                      />
                    </div>
                  ) : (
                    <div className="mt-2 px-3 py-2.5 rounded-xl text-xs text-white/30 bg-white/5 border border-white/10">
                      📅 Enkele reis
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Reizigers</p>
                  <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-gray-200">
                    <button
                      type="button"
                      onClick={() => set('reizigers', Math.max(1, form.reizigers - 1))}
                      className="w-6 h-6 rounded-full font-bold flex items-center justify-center text-white transition-all hover:opacity-80"
                      style={{ backgroundColor: form.reizigers > 1 ? ORANGE : '#ccc' }}
                    >
                      −
                    </button>
                    <span className="font-bold text-gray-800 w-5 text-center">{form.reizigers}</span>
                    <button
                      type="button"
                      onClick={() => set('reizigers', Math.min(8, form.reizigers + 1))}
                      className="w-6 h-6 rounded-full font-bold flex items-center justify-center text-white transition-all hover:opacity-80"
                      style={{ backgroundColor: ORANGE }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="px-6 pb-6">
                <Link
                  to={config.basePath + '/boeken'}
                  className="block w-full py-4 text-center font-bold text-white rounded-xl transition-all hover:scale-[1.01] shadow-lg text-sm"
                  style={{ backgroundColor: ORANGE }}
                >
                  Bereken mijn ritprijs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KENMERKEN ─────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: BGLIGHT }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>
              Waarom Mitax?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>
              Uw taxirit in goede handen
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{ backgroundColor: `${ORANGE}15` }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIENSTEN ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>
              Onze services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              Wat kunnen wij voor u doen?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.diensten.map((d) => (
              <Link
                key={d.id}
                to={config.basePath + '/diensten'}
                className="group block border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="font-bold text-base mb-2 group-hover:text-orange-600 transition-colors" style={{ color: NAVY }}>
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                  {d.description.substring(0, 90)}...
                </p>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ORANGE }}>
                  Meer info →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIEVEN SNIPPET ─────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>
              Transparant
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Vaste Tarieven</h2>
            <p className="mt-3 text-sm text-blue-200 opacity-70 max-w-md mx-auto">
              Geen taxameter. Afgesproken prijs is de eindprijs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-10">
            {[
              { label: 'Starttarief', value: '€ 3,00' },
              { label: 'Per km overdag', value: '€ 2,20' },
              { label: 'Per km s\'nachts', value: '€ 2,85' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="text-center py-10 px-6 rounded-2xl border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
              >
                <p className="text-4xl font-extrabold mb-2" style={{ color: ORANGE }}>{value}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-200 opacity-60">{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to={config.basePath + '/tarieven'}
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-white transition-all hover:scale-105"
              style={{ backgroundColor: ORANGE }}
            >
              Alle Tarieven Bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: BGLIGHT }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>
              Ervaringen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>
              Wat klanten zeggen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: ORANGE }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-5" style={{ color: MUTED }}>
                  "{t.text}"
                </p>
                <p className="font-semibold text-sm" style={{ color: NAVY }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 text-center" style={{ backgroundColor: ORANGE }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Klaar voor uw rit?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Bel ons direct of boek online. Wij zijn 24/7 voor u bereikbaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-10 py-4 font-bold rounded-xl text-white bg-white/20 hover:bg-white/30 transition-all border-2 border-white/40 hover:border-white/70"
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/boeken'}
              className="px-10 py-4 font-bold rounded-xl transition-all hover:scale-105 shadow-xl"
              style={{ backgroundColor: NAVY, color: 'white' }}
            >
              Online Boeken
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
