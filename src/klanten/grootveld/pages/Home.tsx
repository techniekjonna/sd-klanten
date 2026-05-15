import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

interface BookingForm {
  van: string;
  naar: string;
  tussenstop: string;
  showTussenstop: boolean;
  datum: string;
  retour: boolean;
  retourDatum: string;
  reizigers: number;
  bagage: boolean;
}

export const Home = () => {
  const p = config.colors.primary;
  const ph = config.colors.primaryHover;
  const amber = config.colors.amber;

  const [form, setForm] = useState<BookingForm>({
    van: '',
    naar: '',
    tussenstop: '',
    showTussenstop: false,
    datum: '',
    retour: false,
    retourDatum: '',
    reizigers: 1,
    bagage: false,
  });

  const set = <K extends keyof BookingForm>(k: K, v: BookingForm[K]) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const inputCls =
    'w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-gray-800 placeholder-gray-400';

  return (
    <Layout>
      {/* ── HERO with booking widget ─────────────────── */}
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
          style={{ background: 'linear-gradient(120deg, rgba(26,92,56,0.92) 40%, rgba(26,92,56,0.55) 100%)' }}
        />

        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: headline */}
            <div className="text-white">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: `${amber}30`, color: '#FCD34D' }}
              >
                Taxi & Takelservice · Noord-Nederland
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 whitespace-pre-line">
                {config.hero.title}
              </h1>
              <p className="text-lg text-green-100 mb-8 leading-relaxed max-w-md opacity-90">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-2 px-6 py-3.5 font-bold rounded-xl text-white transition-all hover:scale-105 shadow-xl text-sm"
                  style={{ backgroundColor: amber }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {config.contact.phone}
                </a>
              </div>

              <div className="flex flex-wrap gap-8 mt-10">
                {[
                  { val: '24/7', lbl: 'Bereikbaar' },
                  { val: 'Vaste prijs', lbl: 'Geen meter' },
                  { val: '30 min', lbl: 'Gem. reactietijd' },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <p className="font-extrabold text-lg" style={{ color: '#FCD34D' }}>{val}</p>
                    <p className="text-xs text-green-200 opacity-80">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Booking widget */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="px-6 py-4" style={{ backgroundColor: p }}>
                <h2 className="text-white font-bold text-lg">Boek eenvoudig uw rit</h2>
                <p className="text-green-200 text-xs mt-0.5">Waar wil je heen?</p>
              </div>

              <div className="p-6 space-y-4">
                {/* Van / Naar */}
                <div className="relative">
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">van</span>
                      <input
                        type="text"
                        value={form.van}
                        onChange={(e) => set('van', e.target.value)}
                        className={inputCls + ' pl-10'}
                        placeholder="straatnaam met huisnummer"
                      />
                    </div>

                    {form.showTussenstop && (
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">via</span>
                        <input
                          type="text"
                          value={form.tussenstop}
                          onChange={(e) => set('tussenstop', e.target.value)}
                          className={inputCls + ' pl-10'}
                          placeholder="tussenstop adres"
                        />
                      </div>
                    )}

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">naar</span>
                      <input
                        type="text"
                        value={form.naar}
                        onChange={(e) => set('naar', e.target.value)}
                        className={inputCls + ' pl-10'}
                        placeholder="straatnaam met huisnummer"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => set('showTussenstop', !form.showTussenstop)}
                    className="mt-2 text-xs font-medium flex items-center gap-1 hover:underline"
                    style={{ color: p }}
                  >
                    {form.showTussenstop ? '− tussenstop verwijderen' : '+ tussenstop toevoegen'}
                  </button>
                </div>

                {/* Datum/Tijd */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Ophaalmoment</label>
                  <input
                    type="datetime-local"
                    value={form.datum}
                    onChange={(e) => set('datum', e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Retour toggle */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.retour}
                      onChange={(e) => set('retour', e.target.checked)}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: p }}
                    />
                    <span className="text-sm font-medium text-gray-700">Retour</span>
                  </label>
                </div>

                {form.retour && (
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Terugkeer datum & tijd</label>
                    <input
                      type="datetime-local"
                      value={form.retourDatum}
                      onChange={(e) => set('retourDatum', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                )}

                {/* Bagage */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-2">Reis je met bagage?</p>
                  <div className="flex gap-4">
                    {[
                      { label: 'Ja', value: true },
                      { label: 'Nee, geen bagage', value: false },
                    ].map(({ label, value }) => (
                      <label key={label} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="bagage"
                          checked={form.bagage === value}
                          onChange={() => set('bagage', value)}
                          className="w-4 h-4"
                          style={{ accentColor: p }}
                        />
                        <span className="text-sm text-gray-700">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reizigers */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-2">Aantal reizigers</p>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => set('reizigers', Math.max(1, form.reizigers - 1))}
                      className="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-bold flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold w-6 text-center text-gray-800">{form.reizigers}</span>
                    <button
                      type="button"
                      onClick={() => set('reizigers', Math.min(8, form.reizigers + 1))}
                      className="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 font-bold text-white rounded-xl transition-all hover:opacity-90 shadow-lg mt-2"
                  style={{ backgroundColor: p }}
                >
                  Bereken mijn ritprijs →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USP strip ─────────────────────────────────── */}
      <section className="py-4 text-white text-sm font-medium" style={{ backgroundColor: amber }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
            {['✓ Vaste tarieven', '✓ 24/7 bereikbaar', '✓ Gecertificeerd chauffeurs', '✓ Vliegveld transfers', '✓ Takelservice'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Waarom ons ────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Waarom kiezen voor Grootveld?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ruim ervaring, een eerlijk tarief en altijd bereikbaar. Dat is onze belofte.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-4" style={{ borderColor: p }}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diensten preview ──────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Onze Diensten
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Van dagelijks taxivervoer tot spoedberging na een ongeluk — wij bieden het allemaal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="group border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="text-2xl w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold" style={{ color: config.colors.text }}>{s.name}</h3>
                      {s.priceLabel && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: config.colors.primaryLight, color: p }}>
                          {s.priceLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Alle Diensten Bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base" style={{ color: amber }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: config.colors.text }}>{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Takelservice CTA ──────────────────────────── */}
      <section className="py-16 text-white" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Autopech of ongeluk?</h2>
            <p className="text-gray-300 max-w-lg">
              Onze takelwagens staan dag en nacht klaar. Bel ons direct voor snelle hulp — wij zijn er binnen 30 minuten.
            </p>
          </div>
          <a
            href={`tel:${config.contact.phone}`}
            className="flex-shrink-0 flex items-center gap-2 px-8 py-4 font-bold rounded-xl transition-all hover:opacity-90 text-white shadow-xl"
            style={{ backgroundColor: amber }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {config.contact.phone}
          </a>
        </div>
      </section>
    </Layout>
  );
};
