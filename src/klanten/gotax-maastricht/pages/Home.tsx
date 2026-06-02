import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const BookingWidget = () => {
  const p = config.colors.primary;
  const [reizigers, setReizigers] = useState(1);
  const [retour, setRetour] = useState(false);
  const [bagage, setBagage] = useState(true);
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [retourDatum, setRetourDatum] = useState('');

  const handleBoek = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Taxirit aanvraag GoTax Maastricht');
    const body = encodeURIComponent(
      `Van: ${van}\nNaar: ${naar}\nDatum/Tijd: ${datum}${retour ? `\nRetour: ${retourDatum}` : ''}\nReizigers: ${reizigers}\nBagage: ${bagage ? 'Ja' : 'Nee'}`
    );
    window.location.href = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white shadow-2xl p-6 md:p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-6 text-center" style={{ color: config.colors.text }}>
        Bereken uw ritprijs
      </h2>
      <form onSubmit={handleBoek}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Van / Naar */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Van</label>
              <input
                type="text"
                value={van}
                onChange={e => setVan(e.target.value)}
                placeholder="Vertrekadres"
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Naar</label>
              <input
                type="text"
                value={naar}
                onChange={e => setNaar(e.target.value)}
                placeholder="Bestemming"
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500"
              />
            </div>
          </div>

          {/* Datum / Retour */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Ophaalmoment</label>
              <input
                type="datetime-local"
                value={datum}
                onChange={e => setDatum(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRetour(!retour)}
                className={`w-10 h-5 rounded-full transition-colors relative flex-shrink-0 ${retour ? '' : 'bg-gray-200'}`}
                style={retour ? { backgroundColor: p } : {}}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${retour ? 'translate-x-5' : 'translate-x-0.5'}`}
                />
              </button>
              <span className="text-sm font-medium text-gray-700">Retour</span>
            </div>
            {retour && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Retour datum</label>
                <input
                  type="datetime-local"
                  value={retourDatum}
                  onChange={e => setRetourDatum(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500"
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center gap-6 mt-6 pt-5 border-t border-gray-100">
          {/* Bagage */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Bagage</p>
            <div className="flex gap-4">
              {[{ label: 'Ja', val: true }, { label: 'Nee', val: false }].map(opt => (
                <label key={opt.label} className="flex items-center gap-1.5 cursor-pointer text-sm">
                  <input
                    type="radio"
                    checked={bagage === opt.val}
                    onChange={() => setBagage(opt.val)}
                    className="sr-only"
                  />
                  <span
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: bagage === opt.val ? p : '#ccc' }}
                  >
                    {bagage === opt.val && (
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p }} />
                    )}
                  </span>
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* Reizigers */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Aantal reizigers</p>
            <div className="flex items-center gap-3 border border-gray-200 px-3 py-1.5">
              <button
                type="button"
                onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800 font-bold text-lg"
              >−</button>
              <span className="w-6 text-center text-sm font-semibold">{reizigers}</span>
              <button
                type="button"
                onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800 font-bold text-lg"
              >+</button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="ml-auto px-8 py-3 text-sm font-bold text-white tracking-wide transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            Rit Aanvragen →
          </button>
        </div>
      </form>
    </div>
  );
};

export const Home = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Hero with booking widget */}
      <section
        className="relative min-h-screen flex flex-col justify-between"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Hero text */}
        <div className="relative flex-1 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5 opacity-70">
                {config.tagline}
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
                {config.hero.title}
                <br />
                <span style={{ color: p }}>{config.hero.highlight}</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="px-8 py-4 font-bold text-sm text-black tracking-wide transition-opacity hover:opacity-90"
                  style={{ backgroundColor: p }}
                >
                  Bel Direct
                </a>
                <Link
                  to={config.basePath + config.hero.ctaSecondaryLink}
                  className="px-8 py-4 font-bold text-sm text-white border border-white/60 tracking-wide hover:bg-white/10 transition-colors"
                >
                  Onze Diensten
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Booking widget pinned at bottom of hero */}
        <div className="relative container mx-auto px-6 pb-0">
          <BookingWidget />
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '500+', label: 'Tevreden klanten' },
              { num: '24/7', label: 'Beschikbaar' },
              { num: '10+', label: 'Jaar ervaring' },
              { num: '100%', label: 'Punctueel' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black mb-1" style={{ color: p }}>{s.num}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: p }}>Waarom GoTax</p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: config.colors.text }}>
              Klasse in elk detail
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
              >
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="text-base font-bold mb-3" style={{ color: config.colors.text }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-24" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: p }}>Wat wij bieden</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Onze Diensten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.services.map((s, i) => (
              <div
                key={s.id}
                className="border border-white/10 p-7 hover:border-yellow-500/50 transition-colors group"
              >
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {s.name}
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{s.description}</p>
                {s.priceLabel && (
                  <p className="text-sm font-bold" style={{ color: p }}>{s.priceLabel}</p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + "/diensten"}
              className="inline-block px-8 py-3 text-sm font-bold text-black tracking-wide transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Bekijk Alle Diensten
            </Link>
          </div>
        </div>
      </section>

      {/* Over ons banner with image */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="h-72 lg:h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1631107452534-b8f9868a8b20?q=80&w=2348&auto=format&fit=crop)` }}
          />
          <div className="p-12 lg:p-20 flex flex-col justify-center bg-gray-50">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: p }}>Over ons</p>
            <h2 className="text-3xl font-black mb-6" style={{ color: config.colors.text }}>
              Luxe rijden is onze passie
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              {config.about.story}
            </p>
            <Link
              to={config.basePath + "/over-ons"}
              className="self-start text-sm font-bold tracking-wide border-b-2 pb-0.5 transition-colors hover:opacity-70"
              style={{ color: p, borderColor: p }}
            >
              Meer over GoTax →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: p }}>Ervaringen</p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: config.colors.text }}>
              Wat onze klanten zeggen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="border border-gray-100 p-8">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base" style={{ color: p }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-sm" style={{ color: config.colors.text }}>{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 opacity-50 text-white">Klaar voor uw rit?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Rijd vandaag nog in stijl
          </h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Bel ons direct of stuur een bericht — wij regelen de rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-10 py-4 font-bold text-sm text-black tracking-wide transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              {config.contact.phone}
            </a>
            <Link
              to={config.basePath + "/contact"}
              className="px-10 py-4 font-bold text-sm text-white border border-white/30 tracking-wide hover:border-white/60 transition-colors"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
