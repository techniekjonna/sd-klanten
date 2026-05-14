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
  const [bagage, setBagage] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-black px-6 py-4">
        <h2 className="text-white font-bold text-lg tracking-wide">Boek uw taxirit</h2>
        <p className="text-gray-400 text-sm">Vul uw gegevens in en wij bellen u terug</p>
      </div>

      <div className="p-6">
        {/* Route */}
        <div className="space-y-3 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Van</label>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-black transition-colors">
              <span className="px-3 text-gray-400 text-sm border-r border-gray-200 bg-gray-50 py-3">📍</span>
              <input
                type="text"
                placeholder="Straatnaam met huisnummer"
                value={van}
                onChange={e => setVan(e.target.value)}
                className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => { const tmp = van; setVan(naar); setNaar(tmp); }}
              className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all text-gray-500 text-xs font-bold"
              title="Omwisselen"
            >
              ⇅
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naar</label>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-black transition-colors">
              <span className="px-3 text-gray-400 text-sm border-r border-gray-200 bg-gray-50 py-3">🏁</span>
              <input
                type="text"
                placeholder="Straatnaam met huisnummer"
                value={naar}
                onChange={e => setNaar(e.target.value)}
                className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Datum & tijd */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Datum</label>
            <input
              type="date"
              value={datum}
              onChange={e => setDatum(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

        {/* Passagiers */}
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Aantal passagiers</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all font-bold text-lg"
            >
              −
            </button>
            <span className="text-lg font-bold w-6 text-center">{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all font-bold text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Opties */}
        <div className="flex gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div
              onClick={() => setRetour(!retour)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${retour ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-500'}`}
            >
              {retour && <span className="text-white text-xs font-bold">✓</span>}
            </div>
            <span className="text-sm font-medium text-gray-700">Retour</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <div
              onClick={() => setBagage(!bagage)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${bagage ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-500'}`}
            >
              {bagage && <span className="text-white text-xs font-bold">✓</span>}
            </div>
            <span className="text-sm font-medium text-gray-700">Bagage</span>
          </label>
        </div>

        <Link
          to={config.basePath + '/bestel'}
          className="block w-full bg-black text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          Rit aanvragen →
        </Link>

        <p className="text-center text-xs text-gray-400 mt-3">
          Of bel direct:{' '}
          <a href={`tel:${config.contact.phone}`} className="font-semibold text-black hover:underline">
            {config.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
};

export const Home = () => (
  <Layout>
    {/* Hero met booking widget */}
    <section
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${config.hero.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: tekst */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">24/7 beschikbaar</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-none mb-6 tracking-tight">
              TAXI<br />
              <span className="text-gray-300">046</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-md">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              {config.serviceArea.slice(0, 5).map(place => (
                <span key={place} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300">
                  {place}
                </span>
              ))}
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300">& meer</span>
            </div>
          </div>

          {/* Right: booking widget */}
          <div>
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '24/7', label: 'Bereikbaar' },
            { value: '5–20 min', label: 'Responstijd' },
            { value: '5 landen', label: 'Luchthavens' },
            { value: '100%', label: 'Betrouwbaar' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-black">{s.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">Waarom Taxi 046?</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Wij onderscheiden ons door snelheid, betrouwbaarheid en persoonlijke service.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-black hover:shadow-md transition-all group">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-base font-bold mb-2 group-hover:text-black transition-colors">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Diensten */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">Onze diensten</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Van straattaxi tot zakelijk vervoer — wij hebben de juiste oplossing voor u.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map(s => (
            <div key={s.id} className="group border-2 border-gray-100 rounded-xl p-6 hover:border-black transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2">{s.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <ul className="space-y-1">
                {s.features?.map((feat, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to={config.basePath + '/vervoer'}
            className="inline-block px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
          >
            Meer over ons vervoer →
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tight">Wat klanten zeggen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map(t => (
            <div key={t.id} className="bg-white rounded-xl p-7 border border-gray-100 hover:border-black transition-colors">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-base text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Klaar om te rijden?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Bel ons direct of vraag een rit aan. Wij zijn er altijd voor u — dag en nacht.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/bestel'}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-colors"
          >
            Rit aanvragen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
