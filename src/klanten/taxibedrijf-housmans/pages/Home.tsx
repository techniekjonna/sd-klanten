import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;
const MUTED = '#64748B';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [retour, setRetour] = useState(false);
  const [reizigers, setReizigers] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-3">🚖</div>
        <h3 className="text-xl font-bold text-white mb-2">Aanvraag ontvangen!</h3>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Wij bellen u zo snel mogelijk terug om de rit te bevestigen.
        </p>
        <button
          className="mt-4 text-sm font-semibold underline"
          style={{ color: ACCENT }}
          onClick={() => setSubmitted(false)}
        >
          Nieuwe aanvraag
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Van
          </label>
          <input
            type="text"
            required
            value={van}
            onChange={(e) => setVan(e.target.value)}
            placeholder="Vertrekadres"
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Naar
          </label>
          <input
            type="text"
            required
            value={naar}
            onChange={(e) => setNaar(e.target.value)}
            placeholder="Bestemmingsadres"
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Datum
          </label>
          <input
            type="date"
            required
            value={datum}
            onChange={(e) => setDatum(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Tijd
          </label>
          <input
            type="time"
            required
            value={tijd}
            onChange={(e) => setTijd(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <div
            className="relative w-10 h-5 rounded-full transition-colors flex-shrink-0"
            style={{ backgroundColor: retour ? ACCENT : 'rgba(255,255,255,0.2)' }}
            onClick={() => setRetour(!retour)}
          >
            <div
              className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all"
              style={{ left: retour ? '1.25rem' : '0.125rem' }}
            />
          </div>
          <span className="text-sm font-medium text-white">Retour</span>
        </label>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Reizigers:</span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setReizigers(Math.max(1, reizigers - 1))}
              className="w-7 h-7 rounded-lg font-bold text-white flex items-center justify-center transition-opacity hover:opacity-75"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              −
            </button>
            <span className="text-white font-bold w-5 text-center">{reizigers}</span>
            <button
              type="button"
              onClick={() => setReizigers(Math.min(8, reizigers + 1))}
              className="w-7 h-7 rounded-lg font-bold text-white flex items-center justify-center transition-opacity hover:opacity-75"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 font-bold rounded-lg text-white transition-opacity hover:opacity-90 text-sm"
        style={{ backgroundColor: ACCENT }}
      >
        Rit Aanvragen →
      </button>
      <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
        Of bel direct: <a href={`tel:${config.contact.phone}`} className="font-semibold" style={{ color: ACCENT }}>{config.contact.phoneDisplay}</a>
      </p>
    </form>
  );
};

export const Home = () => {
  return (
    <Layout>
      {/* Hero with booking widget */}
      <section
        id="boeken"
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(100deg, rgba(15,32,68,0.95) 45%, rgba(15,32,68,0.6) 100%)' }}
        />

        <div className="relative container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: hero copy */}
            <div className="flex-1 text-white">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${ACCENT}25`, color: ACCENT }}
              >
                {config.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-5">
                {config.hero.title}
              </h1>
              <p className="text-lg mb-8 leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: '🕐', label: '24/7 bereikbaar' },
                  { icon: '💶', label: 'Vaste tarieven' },
                  { icon: '✓', label: 'Geen verborgen kosten' },
                ].map(({ icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)' }}>
                    <span>{icon}</span> {label}
                  </span>
                ))}
              </div>
              <a
                href={`tel:${config.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Direct bellen: {config.contact.phoneDisplay}
              </a>
            </div>

            {/* Right: booking widget */}
            <div
              className="w-full lg:w-[420px] flex-shrink-0 rounded-2xl p-6 shadow-2xl"
              style={{ backgroundColor: 'rgba(15,32,68,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h2 className="text-lg font-bold text-white mb-5">
                🚖 Rit aanvragen
              </h2>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section style={{ backgroundColor: ACCENT }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 py-5 gap-4">
            {[
              { value: '24/7', label: 'Beschikbaar' },
              { value: 'Vaste prijs', label: 'Geen meter' },
              { value: 'Echt e.o.', label: 'Lokale kennis' },
              { value: config.contact.phoneDisplay, label: 'Bel direct' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-extrabold text-white text-base">{value}</p>
                <p className="text-xs mt-0.5 text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
              Waarom Housmans
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: PRIMARY }}>
              Uw betrouwbare taxipartner
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{ backgroundColor: `${PRIMARY}0D` }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: PRIMARY }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Onze services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Wat kunnen wij voor u doen?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { icon: '🚖', label: 'Lokaal & Regionaal', desc: 'Ritten door Echt, Sittard, Roermond en heel Limburg. Snel en betrouwbaar.', path: '/diensten' },
              { icon: '✈️', label: 'Luchthaven Vervoer', desc: 'Naar Eindhoven, Schiphol, Maastricht of Düsseldorf. Vluchttracking inbegrepen.', path: '/diensten' },
              { icon: '🏥', label: 'Zorgvervoer', desc: 'Ziekenhuisritten, medische afspraken en rollator-vriendelijk vervoer op maat.', path: '/diensten' },
            ].map(({ icon, label, desc, path }) => (
              <Link
                key={label}
                to={config.basePath + path}
                className="group p-7 rounded-2xl transition-all hover:scale-[1.02]"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:opacity-80 transition-opacity">{label}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>Meer info →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: '#fff' }}
            >
              Alle diensten bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* Tarieven snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Transparant</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: PRIMARY }}>Vaste Tarieven</h2>
              <p className="mt-3 text-sm" style={{ color: MUTED }}>
                Geen taxameter. De prijs die we afspreken is de prijs die u betaalt.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Starttarief', value: '€ 3,50' },
                { label: 'Per km (dag)', value: '€ 2,25' },
                { label: 'Per km (nacht)', value: '€ 2,85' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="text-center p-7 rounded-2xl"
                  style={{ backgroundColor: '#F8FAFC', border: `2px solid ${PRIMARY}15` }}
                >
                  <p className="text-3xl font-extrabold mb-1" style={{ color: PRIMARY }}>{value}</p>
                  <p className="text-xs font-medium uppercase tracking-wide" style={{ color: MUTED }}>{label}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to={config.basePath + '/tarieven'}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:opacity-80"
                style={{ borderColor: PRIMARY, color: PRIMARY }}
              >
                Alle tarieven bekijken →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#F1F5F9' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Ervaringen</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: PRIMARY }}>Wat klanten zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: ACCENT }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-5" style={{ color: MUTED }}>"{t.text}"</p>
                <p className="font-bold text-sm" style={{ color: PRIMARY }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Klaar voor uw rit?</h2>
          <p className="mb-8 text-sm max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Bel ons direct of vraag online een rit aan. Wij zijn dag en nacht bereikbaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl transition-opacity hover:opacity-90 text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 font-bold rounded-xl border-2 transition-all hover:bg-white/10 text-white"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
