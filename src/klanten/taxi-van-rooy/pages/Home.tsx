import { useState } from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';
import type { BookingFormState } from '../types';

const PRIMARY = config.colors.primary;
const DARK = config.colors.dark;

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const Home = () => {
  const [form, setForm] = useState<BookingFormState>({
    from: '',
    to: '',
    date: '',
    time: '',
    passengers: 1,
    returnTrip: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `tel:${config.contact.phone}`;
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ backgroundColor: PRIMARY, color: DARK }}
              >
                Taxicentrale Landgraaf
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
                {config.hero.title}
              </h1>
              <h2
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6"
                style={{ color: PRIMARY }}
              >
                {config.hero.titleHighlight}
              </h2>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-lg">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-2 px-7 py-4 font-bold rounded-xl transition-all hover:opacity-90 shadow-lg text-base"
                  style={{ backgroundColor: PRIMARY, color: DARK }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Bel direct: {config.contact.phoneDisplay}
                </a>
                <Link
                  to={config.basePath + '/diensten'}
                  className="px-7 py-4 font-bold rounded-xl border-2 border-white/70 text-white hover:bg-white hover:text-gray-900 transition-colors text-base"
                >
                  Onze diensten
                </Link>
              </div>
            </div>

            {/* Booking widget */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-5">Boek uw taxi</h3>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Van</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Van: straat + huisnummer"
                      value={form.from}
                      onChange={(e) => setForm({ ...form, from: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Naar</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: PRIMARY }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Naar: straat + huisnummer"
                      value={form.to}
                      onChange={(e) => setForm({ ...form, to: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Datum</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Tijd</label>
                    <input
                      type="time"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Passagiers</label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, passengers: Math.max(1, form.passengers - 1) })}
                      className="w-10 h-10 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 flex items-center justify-center text-lg"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-bold text-gray-900 text-lg">{form.passengers}</span>
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, passengers: Math.min(8, form.passengers + 1) })}
                      className="w-10 h-10 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 flex items-center justify-center text-lg"
                    >
                      +
                    </button>
                    <span className="text-sm text-gray-400 ml-1">personen</span>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.returnTrip}
                      onChange={(e) => setForm({ ...form, returnTrip: e.target.checked })}
                      className="w-4 h-4 rounded accent-yellow-400"
                    />
                    <span className="text-sm text-gray-600">Ik heb ook een retourrit nodig</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 shadow-md"
                  style={{ backgroundColor: PRIMARY, color: DARK }}
                >
                  Bereken ritprijs
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Of bel direct:{' '}
                  <a href={`tel:${config.contact.phone}`} className="font-semibold text-gray-600">
                    {config.contact.phoneDisplay}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section style={{ backgroundColor: DARK }} className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="text-2xl font-extrabold mb-1" style={{ color: PRIMARY }}>{f.stat}</div>
                <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
                <div className="text-white/50 text-xs leading-relaxed hidden md:block">{f.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Wat wij doen</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Onze diensten</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Van taxivervoer tot groepsreizen door heel Europa — Taxi Van Rooy regelt het voor u.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((service) => (
              <div
                key={service.id}
                className="group border-2 border-gray-100 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-200 hover:shadow-md"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: `${PRIMARY}28` }}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                <Link
                  to={config.basePath + '/diensten/' + service.slug}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 transition-colors"
                >
                  Meer info
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section style={{ backgroundColor: config.colors.surface }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Over ons</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-5">
                Al 40+ jaar uw betrouwbare partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{config.about.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {config.about.stats.map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="text-2xl font-extrabold mb-1" style={{ color: PRIMARY }}>{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to={config.basePath + '/over-ons'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ backgroundColor: DARK }}
              >
                Lees meer over ons
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src={config.about.image}
                alt="Over Taxi Van Rooy"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-extrabold" style={{ color: PRIMARY }}>40+</div>
                <div className="text-xs text-gray-500 font-medium">Jaar directievervoer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: `${PRIMARY}1A` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Ervaringen</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Wat klanten zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4" style={{ color: PRIMARY }}>
                  {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: PRIMARY, color: DARK }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ backgroundColor: DARK }} className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Klaar om te boeken?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Bel ons direct of stuur een bericht. Wij zijn 24/7 bereikbaar voor al uw vervoersvragen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: PRIMARY, color: DARK }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Bel ons nu: {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 rounded-xl font-bold text-base border-2 border-white/30 text-white hover:border-white transition-colors"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
