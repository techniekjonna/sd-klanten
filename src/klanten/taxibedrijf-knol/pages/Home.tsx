import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const dark = config.colors.dark;

/* ── Booking widget ── */
const BookingWidget = () => {
  const [retour, setRetour] = useState(false);
  const [reizigers, setReizigers] = useState(1);
  const [form, setForm] = useState({ van: '', naar: '', datum: '', retourDatum: '' });

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full">
      <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: dark }}>
        <div>
          <p className="text-white font-bold text-base">Rit aanvragen</p>
          <p className="text-gray-500 text-xs mt-0.5">Wij bellen u terug ter bevestiging</p>
        </div>
        <a
          href={`tel:${config.contact.phone}`}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: p, color: 'white' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Direct bellen
        </a>
      </div>

      <div className="p-6 space-y-4">
        {/* Route inputs */}
        <div className="flex gap-3">
          <div className="flex flex-col items-center pt-3.5 gap-1 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-gray-300" />
            <div className="w-px h-5 bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p }} />
          </div>
          <div className="flex-1 space-y-2">
            <input
              type="text"
              value={form.van}
              onChange={(e) => setForm({ ...form, van: e.target.value })}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors"
              style={{ ['--tw-ring-color' as string]: p + '40' }}
              placeholder="Van — vertrekadres"
            />
            <input
              type="text"
              value={form.naar}
              onChange={(e) => setForm({ ...form, naar: e.target.value })}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors"
              style={{ ['--tw-ring-color' as string]: p + '40' }}
              placeholder="Naar — bestemmingsadres"
            />
          </div>
        </div>

        {/* Datum + opties */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-1.5">Datum & tijd</p>
            <input
              type="datetime-local"
              value={form.datum}
              onChange={(e) => setForm({ ...form, datum: e.target.value })}
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:bg-white transition-colors"
              style={{ ['--tw-ring-color' as string]: p + '40' }}
            />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-1.5">Reizigers</p>
            <div className="flex items-center gap-2 h-[42px] px-3 bg-gray-50 border border-gray-200 rounded-xl">
              <button type="button" onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                className="w-6 h-6 rounded-full border border-gray-300 text-gray-600 hover:bg-white flex items-center justify-center text-sm font-bold transition-colors">−</button>
              <span className="flex-1 text-center font-semibold text-sm">{reizigers}</span>
              <button type="button" onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                className="w-6 h-6 rounded-full border border-gray-300 text-gray-600 hover:bg-white flex items-center justify-center text-sm font-bold transition-colors">+</button>
            </div>
          </div>
        </div>

        {/* Retour toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setRetour(!retour)}
            className="flex items-center gap-2 text-xs font-semibold transition-all"
            style={{ color: retour ? p : '#9CA3AF' }}
          >
            <div className={`w-9 h-5 rounded-full transition-all flex items-center ${retour ? '' : 'bg-gray-200'}`}
              style={retour ? { backgroundColor: p } : {}}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all mx-0.5 ${retour ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
            Retour
          </button>
          {retour && (
            <input
              type="datetime-local"
              value={form.retourDatum}
              onChange={(e) => setForm({ ...form, retourDatum: e.target.value })}
              className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 transition-colors"
              style={{ ['--tw-ring-color' as string]: p + '40' }}
            />
          )}
        </div>

        <button
          type="button"
          onClick={() => { window.location.href = `tel:${config.contact.phone}`; }}
          className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ backgroundColor: p }}
        >
          Rit aanvragen →
        </button>
      </div>
    </div>
  );
};

/* ── Stats ── */
const stats = [
  { value: '20+', label: 'Jaar ervaring' },
  { value: '24/7', label: 'Bereikbaar' },
  { value: '100%', label: 'Vaste tarieven' },
  { value: '4.9', label: 'Beoordeling' },
];

/* ── Service icon SVG ── */
const ServiceIcon = ({ id }: { id: string }) => {
  const icons: Record<string, JSX.Element> = {
    straattaxi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M5 17H3a2 2 0 01-2-2v-4a2 2 0 012-2h2l2-4h10l2 4h2a2 2 0 012 2v4a2 2 0 01-2 2h-2" strokeLinecap="round"/>
        <circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/>
        <path d="M7.5 17.5h9" strokeLinecap="round"/>
      </svg>
    ),
    airport: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M22 16.21v-1.451a2 2 0 00-2-2H4a2 2 0 00-2 2v1.45" strokeLinecap="round"/>
        <path d="M2 20h20M10 12.759L4.857 5.343A1 1 0 015.7 3.75h12.6a1 1 0 01.843 1.593L14 12.759" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    zakelijk: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round"/>
        <path d="M12 12v4M10 14h4" strokeLinecap="round"/>
      </svg>
    ),
    zorgvervoer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };
  return icons[id] ?? null;
};

export const Home = () => (
  <Layout>

    {/* ── HERO: split layout ── */}
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: content */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-20 lg:py-0" style={{ backgroundColor: dark }}>
        <div className="max-w-lg">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-8 border"
            style={{ borderColor: p + '40', color: p, backgroundColor: p + '15' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: p }} />
            Beschikbaar in Brunssum & omgeving
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-none text-white mb-6 tracking-tight">
            {config.hero.title}<br />
            <span style={{ color: p }}>{config.hero.highlight}.</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            {config.hero.subtitle}
          </p>

          <div className="space-y-3 mb-10">
            {['Vaste, transparante tarieven', 'Gecertificeerde chauffeurs', '24/7 bereikbaar voor u'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: p }}>
                  <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {item}
              </div>
            ))}
          </div>

          <BookingWidget />
        </div>
      </div>

      {/* Right: image */}
      <div className="relative hidden lg:block">
        <img
          src={config.hero.image}
          alt="Taxi Brunssum"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,15,15,0.3) 0%, transparent 40%)' }} />
        {/* Floating phone card */}
        <a
          href={`tel:${config.contact.phone}`}
          className="absolute bottom-10 right-10 flex items-center gap-3 bg-white rounded-2xl p-4 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1"
        >
          <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: p }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-400 leading-none mb-0.5">Bel direct</p>
            <p className="font-black text-gray-900 text-sm">{config.contact.phoneDisplay}</p>
          </div>
        </a>
      </div>
    </section>

    {/* ── STATS BAR ── */}
    <section className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-8 px-6 text-center ${i < stats.length - 1 ? 'border-r border-gray-100' : ''}`}
            >
              <p className="text-3xl font-black mb-1" style={{ color: p }}>{s.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── DIENSTEN: bento grid ── */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Wat wij bieden</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: dark }}>
              Onze diensten
            </h2>
          </div>
          <Link
            to={config.basePath + '/diensten'}
            className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70 whitespace-nowrap"
            style={{ color: dark }}
          >
            Alle diensten
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {config.services.map((s, i) => (
            <div
              key={s.id}
              className={`group rounded-2xl p-7 flex flex-col transition-all hover:-translate-y-1 ${
                i === 0 ? 'lg:col-span-2' : ''
              }`}
              style={{
                backgroundColor: i === 0 ? dark : '#F9FAFB',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{
                  backgroundColor: i === 0 ? p : p + '15',
                  color: i === 0 ? 'white' : p,
                }}
              >
                <ServiceIcon id={s.id} />
              </div>
              {s.priceLabel && (
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 self-start"
                  style={{
                    backgroundColor: i === 0 ? p + '25' : p + '15',
                    color: i === 0 ? p : p,
                  }}
                >
                  {s.priceLabel}
                </span>
              )}
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: i === 0 ? 'white' : dark }}
              >
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: i === 0 ? '#9CA3AF' : '#6B7280' }}>
                {s.description}
              </p>
              {i === 0 && s.features && (
                <ul className="mt-5 space-y-2">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-gray-400">
                      <span style={{ color: p }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── WAAROM KNOL ── */}
    <section className="py-24" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: p }}>Waarom Knol?</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={{ color: dark }}>
              Meer dan alleen een rit
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Bij Taxibedrijf Knol staat service voorop. We kennen de regio, we kennen onze klanten en we weten wat punctualiteit betekent.
            </p>
            <div className="space-y-5">
              {config.features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: p + '15' }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: dark }}>{f.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/15785325/pexels-photo-15785325.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Taxi vloot"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl"
              style={{ borderLeft: `4px solid ${p}` }}
            >
              <p className="font-black text-2xl" style={{ color: dark }}>20+</p>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">Jaar ervaring<br/>in Zuid-Limburg</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── TESTIMONIALS ── */}
    <section className="py-24" style={{ backgroundColor: dark }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>Ervaringen</p>
            <h2 className="text-4xl font-black text-white">Wat klanten zeggen</h2>
          </div>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <span key={i} className="text-xl" style={{ color: p }}>★</span>)}
            <span className="text-gray-500 text-sm ml-2 self-center">4.9 gemiddeld</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {config.testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-7 flex flex-col"
              style={{ backgroundColor: '#FFFFFF08', border: '1px solid #FFFFFF0D' }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: p }} className="text-base">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ backgroundColor: p + '30', color: p }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  {t.role && <p className="text-gray-600 text-xs">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA BANNER ── */}
    <section className="py-20" style={{ backgroundColor: p }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Direct een taxi nodig?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
          Bel ons nu of vraag een rit aan. We staan klaar.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="flex items-center gap-2 px-8 py-4 bg-white rounded-xl font-black text-base transition-all hover:scale-[1.02] shadow-lg"
            style={{ color: p }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={p}>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-all"
          >
            Rit aanvragen
          </Link>
        </div>
      </div>
    </section>

  </Layout>
);
