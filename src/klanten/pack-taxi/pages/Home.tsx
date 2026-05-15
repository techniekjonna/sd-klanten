import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [reizigers, setReizigers] = useState(1);
  const [retour, setRetour] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div
      id="boeken"
      className="rounded-2xl shadow-2xl overflow-hidden"
      style={{ backgroundColor: config.colors.accent }}
    >
      <div className="px-6 pt-5 pb-4">
        <h2 className="text-xl font-extrabold mb-1" style={{ color: config.colors.primary }}>
          Boek uw taxirit
        </h2>
        <p className="text-sm font-medium opacity-70" style={{ color: config.colors.primary }}>
          Snel, eenvoudig en voor een vaste prijs
        </p>
      </div>

      {submitted ? (
        <div className="px-6 pb-6 text-center py-8">
          <div className="text-4xl mb-3">✅</div>
          <p className="font-bold text-lg" style={{ color: config.colors.primary }}>
            Aanvraag ontvangen!
          </p>
          <p className="text-sm mt-1 opacity-70" style={{ color: config.colors.primary }}>
            Wij nemen zo snel mogelijk contact op.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 opacity-70" style={{ color: config.colors.primary }}>
                Van
              </label>
              <input
                type="text"
                required
                value={van}
                onChange={(e) => setVan(e.target.value)}
                placeholder="Straatnaam met huisnummer"
                className="w-full px-3 py-2.5 rounded-lg text-sm bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                style={{ color: config.colors.text }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 opacity-70" style={{ color: config.colors.primary }}>
                Naar
              </label>
              <input
                type="text"
                required
                value={naar}
                onChange={(e) => setNaar(e.target.value)}
                placeholder="Bestemming of luchthaven"
                className="w-full px-3 py-2.5 rounded-lg text-sm bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                style={{ color: config.colors.text }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 opacity-70" style={{ color: config.colors.primary }}>
                Datum & tijd
              </label>
              <input
                type="datetime-local"
                required
                value={datum}
                onChange={(e) => setDatum(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-sm bg-white border-0 focus:outline-none"
                style={{ color: config.colors.text }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 opacity-70" style={{ color: config.colors.primary }}>
                Reizigers
              </label>
              <div className="flex items-center bg-white rounded-lg overflow-hidden h-[42px]">
                <button
                  type="button"
                  onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                  className="px-3 text-lg font-bold hover:bg-gray-100 h-full transition-colors"
                  style={{ color: config.colors.primary }}
                >
                  −
                </button>
                <span className="flex-1 text-center text-sm font-semibold" style={{ color: config.colors.text }}>
                  {reizigers}
                </span>
                <button
                  type="button"
                  onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                  className="px-3 text-lg font-bold hover:bg-gray-100 h-full transition-colors"
                  style={{ color: config.colors.primary }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={retour}
              onChange={(e) => setRetour(e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <span className="text-sm font-medium" style={{ color: config.colors.primary }}>
              Retour
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-3 font-bold rounded-xl text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: config.colors.primary }}
          >
            Rit Aanvragen →
          </button>

          <p className="text-center text-xs opacity-60" style={{ color: config.colors.primary }}>
            Of bel direct:{' '}
            <a href={`tel:${config.contact.phone}`} className="font-bold underline">
              {config.contact.phone}
            </a>
          </p>
        </form>
      )}
    </div>
  );
};

export const Home = () => {
  const accent = config.colors.accent;
  const primary = config.colors.primary;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,26,46,0.80)' }} />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="text-white">
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                style={{ backgroundColor: accent, color: primary }}
              >
                📍 Heerlen & omgeving
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                {config.hero.title}{' '}
                <span style={{ color: accent }}>{config.hero.highlight}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#boeken"
                  className="px-8 py-4 font-bold rounded-xl transition-opacity hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: accent, color: primary }}
                >
                  {config.hero.cta}
                </a>
                <Link
                  to={config.basePath + config.hero.ctaSecondaryLink}
                  className="px-8 py-4 font-semibold text-white border-2 border-white/40 rounded-xl hover:bg-white/10 transition-colors"
                >
                  {config.hero.ctaSecondary}
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <span>✅ Vaste prijs</span>
                <span>✅ 24/7 beschikbaar</span>
                <span>✅ Pin betaling</span>
              </div>
            </div>

            {/* Right: booking widget */}
            <div className="lg:max-w-md w-full">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section style={{ backgroundColor: primary }} className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white">{f.title}</p>
                  <p className="text-xs text-gray-400 leading-snug hidden md:block">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primary }}>
              Onze Diensten
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Van stadsrit tot luchthaven transfer — wij rijden u overal heen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  {s.icon}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: primary }}>
                  {s.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{s.description}</p>
                {s.priceLabel && (
                  <span
                    className="inline-block text-xs font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: config.colors.primaryLight, color: primary }}
                  >
                    {s.priceLabel}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-4 font-semibold rounded-xl transition-opacity hover:opacity-90 text-white"
              style={{ backgroundColor: primary }}
            >
              Alle Diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Luchthavens strip */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: primary }}>
              ✈️ Luchthaven Transfers
            </h2>
            <p className="text-gray-500 text-sm">Vaste prijs naar alle grote luchthavens</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {config.airports.map((a) => (
              <div key={a.name} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-bold text-sm mb-1" style={{ color: primary }}>{a.city}</p>
                <p className="text-xs text-gray-400 mb-2">{a.name}</p>
                <p className="text-xs font-semibold" style={{ color: accent }}>{a.duration}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to={config.basePath + '/luchthaven'}
              className="inline-block px-6 py-3 text-sm font-semibold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent, color: primary }}
            >
              Meer over luchthaven transfers →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: primary }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: primary }}>{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar voor uw rit?</h2>
          <p className="text-lg mb-8 opacity-80 max-w-xl mx-auto">
            Bel of app ons direct. Wij staan 24/7 voor u klaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-block px-10 py-4 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent, color: primary }}
            >
              📞 Bel {config.contact.phone}
            </a>
            <a
              href={`https://wa.me/${config.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-semibold text-white rounded-xl border-2 border-white/40 hover:bg-white/10 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
