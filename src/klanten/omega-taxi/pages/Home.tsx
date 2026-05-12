import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = '#3A3A3A';
const LIGHT = '#4A4A4A';
const ACCENT = '#F5C842';
const CARD = 'rgba(255,255,255,0.06)';
const BORDER = 'rgba(255,255,255,0.09)';
const MUTED = 'rgba(255,255,255,0.55)';

export const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[88vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(120deg, rgba(42,42,42,0.92) 55%, rgba(42,42,42,0.6) 100%)' }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.25em] mb-6 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
            >
              {config.tagline}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.07] mb-6 text-white">
              {config.hero.title}
            </h1>
            <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-lg" style={{ color: MUTED }}>
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 shadow-lg text-gray-900 text-base"
                style={{ backgroundColor: ACCENT }}
              >
                {config.hero.cta}
              </Link>
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center gap-2 px-8 py-4 font-semibold rounded-xl border-2 transition-all hover:bg-white hover:text-gray-900 text-white text-base"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Bel Nu
              </a>
            </div>
          </div>
        </div>

        {/* Stat-strip */}
        <div
          className="absolute bottom-0 left-0 right-0 hidden md:block"
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 py-5" style={{ borderTop: `1px solid ${BORDER}` }}>
              {[
                { value: '24/7', label: 'Bereikbaar' },
                { value: 'Vaste prijs', label: 'Geen verrassingen' },
                { value: '046-2 600 600', label: 'Direct bellen' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center px-6">
                  <p className="font-extrabold text-lg" style={{ color: ACCENT }}>{value}</p>
                  <p className="text-xs mt-0.5" style={{ color: MUTED }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Omega Taxi */}
      <section className="py-24" style={{ backgroundColor: LIGHT }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
              Onze beloftes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Waarom Omega Taxi?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: MUTED }}>
              Al jaren rijden wij betrouwbaar en veilig voor particulieren en zakelijke klanten in Sittard en omgeving.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="flex gap-5 p-7 rounded-2xl transition-all hover:scale-[1.01]"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${ACCENT}18`, border: `1px solid ${ACCENT}30` }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="py-24" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
              Onze services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Wat kunnen wij voor u doen?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: '🚖',
                label: 'Taxi Service',
                desc: 'Lokaal en regionaal vervoer voor particulieren. Van station tot ziekenhuis — wij zijn er altijd.',
                path: '/taxi-service',
              },
              {
                icon: '💼',
                label: 'Zakelijke Service',
                desc: 'Vaste chauffeurs, maandfacturatie en groepsvervoer voor bedrijven en evenementen.',
                path: '/zakelijke-service',
              },
              {
                icon: '✈️',
                label: 'Airport Service',
                desc: 'Vluchttracking, vroegboekkorting en ruime bagageruimte. Stressvrij naar elk vliegveld.',
                path: '/airport-service',
              },
            ].map(({ icon, label, desc, path }) => (
              <Link
                key={path}
                to={config.basePath + path}
                className="group p-8 rounded-2xl transition-all hover:scale-[1.02]"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {label}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>{desc}</p>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
                  Meer info →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tarieven sneak peek */}
      <section className="py-24" style={{ backgroundColor: LIGHT }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
              Transparant
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Vaste Tarieven
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: MUTED }}>
              Geen taxameter, geen verborgen kosten. Afgesproken prijs = eindprijs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
            {[
              { label: 'Starttarief', value: '€ 3,50' },
              { label: 'Per km (dag)', value: '€ 2,35' },
              { label: 'Per km (nacht)', value: '€ 3,00' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <p className="text-4xl font-extrabold mb-2" style={{ color: ACCENT }}>{value}</p>
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: MUTED }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to={config.basePath + '/bestellen'}
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 text-gray-900"
              style={{ backgroundColor: ACCENT }}
            >
              Rit Aanvragen →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
              Ervaringen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Wat klanten zeggen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {config.testimonials.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-2xl flex flex-col"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: ACCENT }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: MUTED }}>
                  "{t.text}"
                </p>
                <p className="font-semibold text-sm text-white">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: LIGHT }}>
        <div className="container mx-auto px-4">
          <div
            className="max-w-2xl mx-auto p-12 rounded-3xl"
            style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Klaar voor uw rit?
            </h2>
            <p className="mb-10 max-w-md mx-auto text-sm leading-relaxed" style={{ color: MUTED }}>
              Boek eenvoudig online of bel ons direct. Wij staan 24/7 voor u klaar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to={config.basePath + '/bestellen'}
                className="px-10 py-4 font-bold rounded-xl transition-all hover:scale-105 text-gray-900"
                style={{ backgroundColor: ACCENT }}
              >
                Direct Bestellen
              </Link>
              <a
                href={`tel:${config.contact.phone}`}
                className="px-10 py-4 font-bold rounded-xl border-2 transition-all hover:opacity-80 text-white"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                {config.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
