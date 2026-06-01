import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [passagiers, setPassagiers] = useState(1);
  const [retour, setRetour] = useState(false);
  const accent = config.colors.accent || '#C9A84C';

  return (
    <div className="bg-white shadow-2xl" style={{ borderTop: `3px solid ${accent}` }}>
      <div className="px-7 py-5 border-b border-gray-100">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">Direct boeken</p>
        <h3 className="text-lg font-bold text-gray-900">Rit Aanvragen</h3>
      </div>
      <div className="p-7 space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">Van</label>
          <div className="flex items-center border border-gray-200 focus-within:border-gray-900 transition-colors">
            <span className="px-3 py-3 text-gray-400 text-sm bg-gray-50 border-r border-gray-200">↑</span>
            <input
              type="text"
              placeholder="Vertrekadres"
              value={van}
              onChange={e => setVan(e.target.value)}
              className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-300"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">Naar</label>
          <div className="flex items-center border border-gray-200 focus-within:border-gray-900 transition-colors">
            <span className="px-3 py-3 text-gray-400 text-sm bg-gray-50 border-r border-gray-200">↓</span>
            <input
              type="text"
              placeholder="Bestemmingsadres"
              value={naar}
              onChange={e => setNaar(e.target.value)}
              className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">Datum</label>
            <input
              type="date"
              value={datum}
              onChange={e => setDatum(e.target.value)}
              className="w-full border border-gray-200 px-3 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border border-gray-200 px-3 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Passagiers</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all font-bold"
            >−</button>
            <span className="text-base font-bold w-5 text-center">{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all font-bold"
            >+</button>
          </div>
        </div>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => setRetour(!retour)}
            className="w-5 h-5 border-2 flex items-center justify-center transition-all cursor-pointer"
            style={retour ? { backgroundColor: '#1A1A1A', borderColor: '#1A1A1A' } : { borderColor: '#D1D5DB' }}
          >
            {retour && <span className="text-white text-xs font-bold">✓</span>}
          </div>
          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Retour rit</span>
        </label>
        <Link
          to={config.basePath + '/contact'}
          className="block w-full text-white text-center py-4 text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          Aanvraag Versturen →
        </Link>
        <p className="text-center text-xs text-gray-400">
          Of bel:{' '}
          <a href={`tel:${config.contact.phone}`} className="font-semibold text-gray-700 hover:underline">
            {config.contact.phoneDisplay || config.contact.phone}
          </a>
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  const accent = config.colors.accent || '#C9A84C';

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: accent }}>
                {config.tagline}
              </p>
              <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
                {config.hero.title}<br />
                <span className="font-bold">{config.hero.highlight}</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-md font-light">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={config.basePath + config.hero.ctaLink}
                  className="px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: accent }}
                >
                  {config.hero.cta}
                </Link>
                <Link
                  to={config.basePath + config.hero.ctaSecondaryLink}
                  className="px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all"
                >
                  {config.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ backgroundColor: '#111111' }} className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Beschikbaar' },
              { value: '365', label: 'Dagen per jaar' },
              { value: 'CCV-D1/D2', label: 'Gecertificeerd' },
              { value: '100%', label: 'Discreet' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Waarom Visser</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              De standaard voor gecertificeerd directievervoer
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="border border-gray-100 p-8 hover:border-gray-900 transition-all hover:shadow-sm">
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-gray-900">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foto tussensectie */}
      <section className="relative h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604425008631-5ed841ff749c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxe chauffeursdienst"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: accent }}>
              Wij begrijpen de waarde van uw tijd
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-2xl">
              All-encompassing support,<br />
              <span className="font-bold">op maat voor u</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-24" style={{ backgroundColor: '#F7F5F1' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Onze diensten</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Professioneel vervoer voor elke gelegenheid
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((s) => (
              <div key={s.id} className="bg-white p-8 border border-transparent hover:border-gray-200 transition-all hover:shadow-md">
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-gray-900">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2">
                  {s.features?.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              Meer Over Onze Diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Over ons split-sectie */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={config.about.image}
                alt="Over Visser Driving Services"
                className="w-full h-[480px] object-cover grayscale"
              />
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 hidden lg:flex items-center justify-center text-white text-center p-4"
                style={{ backgroundColor: accent }}
              >
                <div>
                  <p className="text-2xl font-black">24/7</p>
                  <p className="text-xs uppercase tracking-widest leading-tight mt-1">Altijd beschikbaar</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accent }}>Over ons</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{config.about.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{config.about.mission}</p>
              <ul className="space-y-3 mb-10">
                {config.about.values.map((v, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                    {v}
                  </li>
                ))}
              </ul>
              <Link
                to={config.basePath + '/over-ons'}
                className="inline-block px-8 py-4 text-xs font-semibold uppercase tracking-widest border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              >
                Meer Over Ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ backgroundColor: '#111111' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Cliëntèle</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Wat onze cliënten zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div key={t.id} className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base" style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-gray-400 italic mb-6 leading-relaxed text-sm">"{t.text}"</p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  {t.role && <p className="text-xs text-gray-600 mt-0.5">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: accent }}>
            Neem contact op
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar voor een rit op niveau?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto font-light">
            Neem vandaag contact op voor een vrijblijvende offerte. Wij zijn 365 dagen per jaar beschikbaar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/contact'}
              className="px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: accent }}
            >
              Rit Aanvragen
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white border border-white/30 hover:border-white hover:bg-white/10 transition-all"
            >
              {config.contact.phoneDisplay || config.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
