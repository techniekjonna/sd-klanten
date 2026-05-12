import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const dark = config.colors.dark;

const BookingWidget = () => {
  const [retour, setRetour] = useState(false);
  const [reizigers, setReizigers] = useState(1);
  const [form, setForm] = useState({ van: '', naar: '', datum: '', retourDatum: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `tel:${config.contact.phone}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
      {/* Widget header */}
      <div className="px-7 py-4 flex items-center gap-3" style={{ backgroundColor: dark }}>
        <span className="text-2xl">🚖</span>
        <div>
          <p className="text-white font-bold text-lg leading-none">Rit aanvragen</p>
          <p className="text-gray-400 text-xs mt-0.5">Vul uw gegevens in en wij bellen u terug</p>
        </div>
        <a
          href={`tel:${config.contact.phone}`}
          className="ml-auto hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: p, color: 'white' }}
        >
          📞 Direct bellen
        </a>
      </div>

      <form onSubmit={handleSubmit} className="p-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: route */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-700">Route</p>

            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center pt-3 flex-shrink-0">
                <div className="w-3 h-3 rounded-full border-2 border-gray-400" />
                <div className="w-0.5 h-8 bg-gray-200 my-1" />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p }} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">VAN</span>
                  <input
                    type="text"
                    value={form.van}
                    onChange={(e) => setForm({ ...form, van: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ ['--tw-ring-color' as string]: p }}
                    placeholder="Vertrekadres met huisnummer"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">NAAR</span>
                  <input
                    type="text"
                    value={form.naar}
                    onChange={(e) => setForm({ ...form, naar: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ ['--tw-ring-color' as string]: p }}
                    placeholder="Bestemmingsadres met huisnummer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: datetime + options */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-700">Datum & opties</p>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Ophaalmoment</label>
              <input
                type="datetime-local"
                value={form.datum}
                onChange={(e) => setForm({ ...form, datum: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ ['--tw-ring-color' as string]: p }}
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRetour(!retour)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                  retour ? 'text-white border-transparent' : 'text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
                style={retour ? { backgroundColor: p, borderColor: p } : {}}
              >
                <span className="text-base">↩️</span> Retour
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-gray-500">Reizigers:</span>
                <button
                  type="button"
                  onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                  className="w-7 h-7 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm font-bold"
                >−</button>
                <span className="w-6 text-center font-semibold text-sm">{reizigers}</span>
                <button
                  type="button"
                  onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                  className="w-7 h-7 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm font-bold"
                >+</button>
              </div>
            </div>

            {retour && (
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Retour datum & tijd</label>
                <input
                  type="datetime-local"
                  value={form.retourDatum}
                  onChange={(e) => setForm({ ...form, retourDatum: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ ['--tw-ring-color' as string]: p }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 py-3.5 font-bold text-white rounded-xl transition-opacity hover:opacity-90 text-sm"
            style={{ backgroundColor: p }}
          >
            🚖 Rit aanvragen
          </button>
          <a
            href={`tel:${config.contact.phone}`}
            className="flex-1 py-3.5 font-bold rounded-xl border-2 text-center text-sm transition-colors hover:bg-gray-50"
            style={{ borderColor: dark, color: dark }}
          >
            📞 Of bel direct: {config.contact.phoneDisplay}
          </a>
        </div>
        <p className="text-xs text-gray-400 text-center mt-3">
          Na uw aanvraag nemen wij zo snel mogelijk contact met u op ter bevestiging.
        </p>
      </form>
    </div>
  );
};

export const Home = () => (
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
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(28,28,46,0.92) 0%, rgba(28,28,46,0.60) 60%, rgba(0,0,0,0.3) 100%)' }} />
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-xl mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-semibold mb-6"
            style={{ backgroundColor: `${p}33`, border: `1px solid ${p}55` }}
          >
            <span style={{ color: p }}>●</span>
            <span style={{ color: p }}>Beschikbaar in Brunssum & omgeving</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
            {config.hero.title}{' '}
            <span style={{ color: p }}>{config.hero.highlight}</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {config.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><span style={{ color: p }}>✓</span> Vaste tarieven</span>
            <span className="flex items-center gap-1.5"><span style={{ color: p }}>✓</span> Gecertificeerde chauffeurs</span>
            <span className="flex items-center gap-1.5"><span style={{ color: p }}>✓</span> 24/7 beschikbaar</span>
          </div>
        </div>

        <BookingWidget />
      </div>
    </section>

    {/* Waarom Knol */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: dark }}>
            Waarom kiezen voor Knol?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Al jaren dé vertrouwde naam in taxivervoer rondom Brunssum.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: config.colors.primaryLight }}
              >
                {f.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: dark }}>{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Diensten */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: dark }}>Onze diensten</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md">Van straattaxi tot vliegveld transfers en zorgvervoer.</p>
          </div>
          <Link
            to={config.basePath + '/diensten'}
            className="text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: p }}
          >
            Alle diensten bekijken →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map((s) => (
            <div
              key={s.id}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="h-2" style={{ backgroundColor: p }} />
              <div className="p-6">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: dark }}>{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{s.description}</p>
                {s.priceLabel && (
                  <span
                    className="inline-block mt-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: config.colors.primaryLight, color: p }}
                  >
                    {s.priceLabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20" style={{ backgroundColor: dark }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">Wat klanten zeggen</h2>
        <p className="text-center text-gray-400 text-sm mb-12">Tevreden klanten in Brunssum en omgeving</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: p }} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-5 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                {t.role && <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA banner */}
    <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Direct een taxi nodig?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-md mx-auto">
          Bel ons nu of vraag een rit aan. Wij zijn snel bij u.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
            style={{ color: p }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 bg-white/20 font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/40"
          >
            Rit aanvragen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
