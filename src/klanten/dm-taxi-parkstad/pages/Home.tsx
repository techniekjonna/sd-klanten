import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = '#1B3F6E';
const ORANGE = '#F97316';
const NAVY_LIGHT = '#EEF4FB';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [passagiers, setPassagiers] = useState(1);
  const [retour, setRetour] = useState(false);
  const [bagage, setBagage] = useState(false);

  const handleSubmit = () => {
    const body = `Van: ${van}\nNaar: ${naar}\nDatum: ${datum}\nTijd: ${tijd}\nPassagiers: ${passagiers}\nRetour: ${retour ? 'Ja' : 'Nee'}\nBagage: ${bagage ? 'Ja' : 'Nee'}`;
    window.location.href = `mailto:${config.contact.email}?subject=Taxirit aanvraag&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-2xl mx-auto">
      <div className="px-6 py-4" style={{ backgroundColor: NAVY }}>
        <h2 className="text-white font-bold text-lg">Bereken uw ritprijs</h2>
        <p className="text-blue-200 text-sm">Vul de gegevens in — wij bellen u terug met een vaste prijs</p>
      </div>

      <div className="p-6">
        {/* Route inputs */}
        <div className="space-y-3 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Van</label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-orange-400 transition-colors">
              <span className="px-3 text-gray-400 py-3 bg-gray-50 border-r border-gray-200">🟢</span>
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
              onClick={() => { const t = van; setVan(naar); setNaar(t); }}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition-all text-gray-400 font-bold"
              title="Omwisselen"
            >
              ⇅
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naar</label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-orange-400 transition-colors">
              <span className="px-3 text-gray-400 py-3 bg-gray-50 border-r border-gray-200">📍</span>
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

        {/* Date & time */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Datum</label>
            <input
              type="date"
              value={datum}
              onChange={e => setDatum(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-xl px-3 py-3 text-sm outline-none focus:border-orange-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-xl px-3 py-3 text-sm outline-none focus:border-orange-400 transition-colors"
            />
          </div>
        </div>

        {/* Passengers */}
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Aantal reizigers</label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition-all font-bold text-lg text-gray-600"
            >
              −
            </button>
            <span className="text-xl font-bold w-6 text-center" style={{ color: NAVY }}>{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition-all font-bold text-lg text-gray-600"
            >
              +
            </button>
          </div>
        </div>

        {/* Toggles */}
        <div className="flex gap-6 mb-6">
          {[
            { label: 'Retour', value: retour, set: setRetour },
            { label: 'Bagage', value: bagage, set: setBagage },
          ].map(({ label, value, set }) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer group">
              <button
                type="button"
                onClick={() => set(!value)}
                className={`w-11 h-6 rounded-full transition-colors relative ${value ? '' : 'bg-gray-200'}`}
                style={value ? { backgroundColor: ORANGE } : {}}
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${value ? 'left-6' : 'left-1'}`}
                />
              </button>
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full py-4 font-bold text-white rounded-xl transition-all hover:opacity-90 hover:scale-[1.01] text-base shadow-lg"
          style={{ backgroundColor: ORANGE }}
        >
          Bereken mijn ritprijs →
        </button>
        <p className="text-center text-xs text-gray-400 mt-3">Of bel direct: <a href="tel:+31455700300" className="font-semibold" style={{ color: NAVY }}>045 570 03 00</a></p>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[75vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(110deg, rgba(27,63,110,0.90) 45%, rgba(27,63,110,0.50) 100%)` }}
        />
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-xl text-white">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(249,115,22,0.25)', color: '#FED7AA' }}>
              {config.tagline}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
              {config.hero.title}{' '}
              <span style={{ color: ORANGE }}>{config.hero.highlight}</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-md">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={config.basePath + '/contact'}
                className="px-7 py-3.5 font-bold text-white rounded-xl transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: ORANGE }}
              >
                Direct Boeken
              </Link>
              <a
                href="tel:+31455700300"
                className="px-7 py-3.5 font-bold text-white border-2 border-white/40 rounded-xl hover:bg-white hover:text-gray-900 transition-all"
              >
                📞 045 570 03 00
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm hidden md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 py-4 divide-x divide-white/20">
              {[
                { icon: '🕐', label: '24/7 Beschikbaar' },
                { icon: '📍', label: 'Heel Parkstad' },
                { icon: '💶', label: 'Vaste Tarieven' },
              ].map(({ icon, label }) => (
                <div key={label} className="text-center text-white px-6">
                  <span className="text-lg mr-2">{icon}</span>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-12" style={{ backgroundColor: NAVY_LIGHT }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold" style={{ color: NAVY }}>Boek eenvoudig uw taxirit</h2>
            <p className="text-gray-500 text-sm mt-1">Vul het formulier in en ontvang een vaste prijs zonder verrassingen</p>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: NAVY }}>
              Waarom D&amp;M Taxi?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">Betrouwbaar, punctueel en vriendelijk — dat is D&amp;M Taxi Parkstad.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: NAVY_LIGHT }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>Onze diensten</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>Waarvoor kunt u ons inschakelen?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.services.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>{s.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {(s.features || []).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <span style={{ color: ORANGE }} className="mt-0.5">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-bold" style={{ color: ORANGE }}>{s.priceLabel}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-3.5 font-bold text-white rounded-xl hover:opacity-90 transition"
              style={{ backgroundColor: NAVY }}
            >
              Alle Diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Ritten strip */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold" style={{ color: NAVY }}>Populaire Ritten</h2>
            <p className="text-gray-500 text-sm mt-1">Vaste trajecten met afgesproken prijs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { van: 'Landgraaf', naar: 'Maastricht-Aachen Airport', icon: '✈️' },
              { van: 'Heerlen', naar: 'Atrium MC', icon: '🏥' },
              { van: 'Kerkrade', naar: 'Eindhoven Airport', icon: '✈️' },
            ].map(({ van, naar, icon }) => (
              <Link
                key={naar}
                to={config.basePath + '/ritten'}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-orange-300 hover:bg-orange-50 transition-all group"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-xs text-gray-400">{van} →</p>
                  <p className="text-sm font-bold" style={{ color: NAVY }}>{naar}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to={config.basePath + '/ritten'} className="text-sm font-semibold" style={{ color: ORANGE }}>
              Alle vaste ritten bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>Ervaringen</p>
            <h2 className="text-3xl font-bold text-white">Wat onze klanten zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white/10 border border-white/10 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: ORANGE }}>★</span>
                  ))}
                </div>
                <p className="text-blue-100 text-sm italic leading-relaxed mb-5">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  {t.role && <p className="text-blue-300 text-xs">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: ORANGE }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-3">Klaar voor uw rit?</h2>
          <p className="text-orange-100 mb-8 max-w-md mx-auto">Bel ons direct of stuur een bericht — wij zorgen voor een snelle vaste prijs.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+31455700300"
              className="px-9 py-4 bg-white font-extrabold rounded-xl hover:bg-gray-50 transition text-lg"
              style={{ color: ORANGE }}
            >
              📞 045 570 03 00
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-9 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition"
            >
              Stuur een Bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
