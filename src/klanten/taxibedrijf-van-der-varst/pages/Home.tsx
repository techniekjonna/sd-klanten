import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;

interface QuickBookForm {
  van: string;
  naar: string;
  datum: string;
  reizigers: number;
  retour: boolean;
}

export const Home = () => {
  const [form, setForm] = useState<QuickBookForm>({
    van: '',
    naar: '',
    datum: '',
    reizigers: 1,
    retour: false,
  });
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [tussenstop, setTussenstop] = useState('');
  const [booked, setBooked] = useState(false);

  const set = <K extends keyof QuickBookForm>(k: K, v: QuickBookForm[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${config.hero.image})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(27,79,138,0.88) 0%, rgba(13,31,60,0.75) 100%)' }} />

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: tekst */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ backgroundColor: 'rgba(245,158,11,0.18)', color: ACCENT, border: `1px solid rgba(245,158,11,0.35)` }}
              >
                🚕 Opgericht in 1987 · Echt, Limburg
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                {config.hero.title}{' '}
                <span style={{ color: ACCENT }}>{config.hero.highlight}</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={config.basePath + config.hero.ctaLink}
                  className="px-7 py-3.5 rounded-xl font-bold text-white text-sm shadow-lg hover:scale-105 transition-transform"
                  style={{ backgroundColor: ACCENT }}
                >
                  {config.hero.cta}
                </Link>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:bg-white hover:text-gray-900"
                  style={{ border: '2px solid rgba(255,255,255,0.4)', color: 'white' }}
                >
                  📞 {config.contact.phoneDisplay}
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-10">
                {[
                  { value: '35+', label: 'Jaar ervaring' },
                  { value: '49', label: 'Chauffeurs' },
                  { value: '24/7', label: 'Bereikbaar' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black" style={{ color: ACCENT }}>{s.value}</p>
                    <p className="text-xs text-white/60 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: boekingswidget */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#F0FDFA' }}>
                {/* Header boekingswidget */}
                <div className="px-6 py-5" style={{ backgroundColor: PRIMARY }}>
                  <h2 className="text-white font-extrabold text-xl">Bestel je taxi</h2>
                  <p className="text-white/70 text-xs mt-1">Snel en eenvoudig — wij bevestigen binnen 30 min.</p>
                </div>

                {booked ? (
                  <div className="px-6 py-10 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style={{ backgroundColor: `${ACCENT}20` }}>✅</div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Aanvraag ontvangen!</h3>
                    <p className="text-sm text-gray-500">We nemen zo spoedig mogelijk contact met u op.</p>
                    <button
                      onClick={() => { setBooked(false); setForm({ van: '', naar: '', datum: '', reizigers: 1, retour: false }); }}
                      className="mt-6 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      Nieuwe aanvraag
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                    {/* Waar wil je heen */}
                    <div>
                      <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Waar wil je heen?</p>
                      <div className="relative flex flex-col">
                        {/* Van */}
                        <div className="relative flex items-center">
                          <div className="absolute left-3 w-2.5 h-2.5 rounded-full border-2 z-10" style={{ borderColor: PRIMARY }} />
                          <input
                            type="text"
                            required
                            value={form.van}
                            onChange={(e) => set('van', e.target.value)}
                            placeholder="Van   straatnaam + huisnummer"
                            className="w-full pl-8 pr-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all"
                            style={{ borderColor: '#D1D5DB', borderRadius: '10px 10px 0 0', fontSize: '0.85rem', focusRingColor: PRIMARY }}
                          />
                          {/* swap */}
                          <button
                            type="button"
                            onClick={() => setForm((p) => ({ ...p, van: p.naar, naar: p.van }))}
                            className="absolute right-3 w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 text-white"
                            style={{ backgroundColor: PRIMARY }}
                            title="Omwisselen"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                          </button>
                        </div>

                        {/* Tussenstop */}
                        <button
                          type="button"
                          onClick={() => setShowTussenstop(!showTussenstop)}
                          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border-l border-r transition-colors"
                          style={{ borderColor: '#D1D5DB', backgroundColor: '#F9FAFB', color: PRIMARY }}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                          tussenstop toevoegen
                        </button>

                        {showTussenstop && (
                          <input
                            type="text"
                            value={tussenstop}
                            onChange={(e) => setTussenstop(e.target.value)}
                            placeholder="Tussenstop adres"
                            className="w-full px-4 py-3 text-sm border-l border-r border-b focus:outline-none"
                            style={{ borderColor: '#D1D5DB', fontSize: '0.85rem' }}
                          />
                        )}

                        {/* Naar */}
                        <div className="relative flex items-center">
                          <div className="absolute left-3 z-10">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: ACCENT }}>
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            required
                            value={form.naar}
                            onChange={(e) => set('naar', e.target.value)}
                            placeholder="Naar   straatnaam + huisnummer"
                            className="w-full pl-8 pr-4 py-3 text-sm border focus:outline-none transition-all"
                            style={{ borderColor: '#D1D5DB', borderRadius: '0 0 10px 10px', borderTop: 'none', fontSize: '0.85rem' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Datum/tijd & retour */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1.5">Ophaalmoment</p>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">📅</span>
                          <input
                            type="datetime-local"
                            required
                            value={form.datum}
                            onChange={(e) => set('datum', e.target.value)}
                            className="w-full pl-9 pr-3 py-2.5 text-xs border rounded-xl focus:outline-none"
                            style={{ borderColor: '#D1D5DB' }}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1.5">Reizigers</p>
                        <div className="flex items-center gap-2 px-3 py-2 border rounded-xl" style={{ borderColor: '#D1D5DB' }}>
                          <button type="button" onClick={() => set('reizigers', Math.max(1, form.reizigers - 1))}
                            className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-white text-xs"
                            style={{ backgroundColor: form.reizigers > 1 ? PRIMARY : '#D1D5DB' }}>−</button>
                          <span className="flex-1 text-center text-sm font-bold text-gray-800">{form.reizigers}</span>
                          <button type="button" onClick={() => set('reizigers', Math.min(8, form.reizigers + 1))}
                            className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-white text-xs"
                            style={{ backgroundColor: PRIMARY }}>+</button>
                        </div>
                      </div>
                    </div>

                    {/* Retour */}
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div
                        className="w-10 h-5 rounded-full relative transition-all flex-shrink-0"
                        style={{ backgroundColor: form.retour ? ACCENT : '#D1D5DB' }}
                        onClick={() => set('retour', !form.retour)}
                      >
                        <div
                          className="w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all shadow"
                          style={{ left: form.retour ? '22px' : '2px' }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Retour</span>
                    </label>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-white text-sm shadow-md hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: ACCENT }}
                    >
                      Bereken mijn ritprijs
                    </button>
                    <p className="text-center text-xs text-gray-400">Of bel direct: <a href={`tel:${config.contact.phone}`} className="font-bold" style={{ color: PRIMARY }}>{config.contact.phoneDisplay}</a></p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16" style={{ backgroundColor: config.colors.light }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: config.colors.text }}>
              Waarom kiezen voor <span style={{ color: PRIMARY }}>Van der Varst?</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Al meer dan 35 jaar de vertrouwde keuze in Echt en omgeving.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {config.features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: config.colors.text }}>{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIENSTEN PREVIEW ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Ons aanbod</p>
            <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: config.colors.text }}>
              Onze <span style={{ color: PRIMARY }}>Diensten</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl p-6 hover:shadow-lg transition-all group border"
                style={{ borderColor: '#E5E7EB' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: config.colors.light }}
                >
                  {s.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: config.colors.text }}>{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition"
              style={{ backgroundColor: PRIMARY }}
            >
              Alle diensten bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WERKGEBIED BANNER ── */}
      <section className="py-10" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70 text-xs uppercase tracking-widest mb-3">Werkgebied</p>
          <h3 className="text-white font-bold text-lg mb-5">Wij rijden door heel Midden-Limburg</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {config.serviceArea.map((place) => (
              <span
                key={place}
                className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
              >
                {place}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Ervaringen</p>
            <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: config.colors.text }}>
              Wat klanten zeggen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-sm" style={{ color: ACCENT }}>★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-xs" style={{ color: config.colors.text }}>{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14" style={{ backgroundColor: ACCENT }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Klaar voor uw rit?</h2>
          <p className="text-white/85 mb-7 text-sm">Bestel online of bel ons direct. 24/7 bereikbaar.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/bestellen'}
              className="px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-transform"
              style={{ backgroundColor: PRIMARY, color: 'white' }}
            >
              Direct Bestellen
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-7 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-gray-50 transition-colors"
              style={{ color: PRIMARY }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
