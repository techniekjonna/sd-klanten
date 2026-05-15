import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const { darkBlue, yellow, lightBlue, bgLight, text, textLight } = config.colors;

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [passagiers, setPassagiers] = useState(1);
  const [retour, setRetour] = useState(false);
  const [bagage, setBagage] = useState(true);

  const swap = () => {
    const tmp = van;
    setVan(naar);
    setNaar(tmp);
  };

  return (
    <div className="rounded-2xl shadow-2xl overflow-hidden bg-white">
      <div className="px-6 py-4" style={{ backgroundColor: darkBlue }}>
        <h2 className="font-bold text-lg text-white">Boek uw taxirit</h2>
        <p className="text-sm mt-0.5" style={{ color: lightBlue }}>Vul uw gegevens in — wij bellen u terug</p>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: textLight }}>Van</label>
          <div className="flex items-center border-2 rounded-xl overflow-hidden" style={{ borderColor: lightBlue }}>
            <span className="px-3 py-3 text-sm border-r" style={{ borderColor: lightBlue, color: darkBlue }}>📍</span>
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
            onClick={swap}
            className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all hover:scale-110"
            style={{ borderColor: darkBlue, color: darkBlue }}
          >
            ⇅
          </button>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: textLight }}>Naar</label>
          <div className="flex items-center border-2 rounded-xl overflow-hidden" style={{ borderColor: lightBlue }}>
            <span className="px-3 py-3 text-sm border-r" style={{ borderColor: lightBlue, color: darkBlue }}>🏁</span>
            <input
              type="text"
              placeholder="Straatnaam met huisnummer"
              value={naar}
              onChange={e => setNaar(e.target.value)}
              className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: textLight }}>Datum</label>
            <input
              type="date"
              value={datum}
              onChange={e => setDatum(e.target.value)}
              className="w-full border-2 rounded-xl px-3 py-3 text-sm outline-none"
              style={{ borderColor: lightBlue }}
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: textLight }}>Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border-2 rounded-xl px-3 py-3 text-sm outline-none"
              style={{ borderColor: lightBlue }}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: textLight }}>Aantal passagiers</label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-lg"
              style={{ borderColor: darkBlue, color: darkBlue }}
            >
              −
            </button>
            <span className="text-lg font-bold w-6 text-center" style={{ color: text }}>{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-lg"
              style={{ borderColor: darkBlue, color: darkBlue }}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {([['Retour', retour, setRetour], ['Bagage', bagage, setBagage]] as const).map(([label, value, set]) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => (set as (v: boolean) => void)(!value)}
                className="w-5 h-5 rounded-md border-2 flex items-center justify-center cursor-pointer"
                style={value ? { backgroundColor: darkBlue, borderColor: darkBlue } : { borderColor: lightBlue }}
              >
                {value && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className="text-sm font-medium" style={{ color: text }}>{label}</span>
            </label>
          ))}
        </div>

        <a
          href={`tel:${config.contact.phone}`}
          className="flex w-full items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          style={{ backgroundColor: yellow, color: darkBlue }}
        >
          📞 Direct boeken: {config.contact.phoneDisplay}
        </a>

        <p className="text-center text-xs" style={{ color: textLight }}>
          Of stuur een bericht via de{' '}
          <Link to={config.basePath + '/contact'} className="font-semibold underline" style={{ color: darkBlue }}>
            contactpagina
          </Link>
        </p>
      </div>
    </div>
  );
};

export const Home = () => (
  <Layout>
    {/* Hero */}
    <section
      className="relative min-h-[90vh] flex items-center"
      style={{ backgroundImage: `url(${config.hero.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: darkBlue + 'CC' }} />
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border"
              style={{ borderColor: yellow + '60', backgroundColor: yellow + '20', color: yellow }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: yellow }} />
              24/7 Beschikbaar in Heerlen
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
              Uw betrouwbare<br />
              <span style={{ color: yellow }}>taxi in Heerlen</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-md">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {config.serviceArea.slice(0, 5).map(place => (
                <span key={place} className="px-3 py-1 rounded-full text-sm border" style={{ borderColor: lightBlue + '60', color: lightBlue }}>
                  {place}
                </span>
              ))}
              <span className="px-3 py-1 rounded-full text-sm border" style={{ borderColor: lightBlue + '60', color: lightBlue }}>& meer</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-6 py-3 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: yellow, color: darkBlue }}
              >
                📞 Direct bellen
              </a>
              <Link
                to={config.basePath + '/airport'}
                className="px-6 py-3 font-bold rounded-xl text-sm border-2 hover:bg-white/10 transition-colors"
                style={{ borderColor: 'white', color: 'white' }}
              >
                ✈️ Airport transfer
              </Link>
            </div>
          </div>
          <div>
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section style={{ backgroundColor: yellow }}>
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '24/7', label: 'Bereikbaar' },
            { value: '6+', label: 'Luchthavens' },
            { value: '100%', label: 'Betrouwbaar' },
            { value: 'Pin & CC', label: 'Betaalmethodes' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-black" style={{ color: darkBlue }}>{s.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: darkBlue + 'AA' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20" style={{ backgroundColor: bgLight }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: darkBlue }}>
            Waarom Uw Taxi Heerlen?
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: textLight }}>
            Wij onderscheiden ons door betrouwbaarheid, comfort en persoonlijke service.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border-2 hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ borderColor: lightBlue }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-base font-bold mb-2" style={{ color: darkBlue }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: textLight }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Diensten */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: darkBlue }}>Onze diensten</h2>
          <p className="max-w-lg mx-auto" style={{ color: textLight }}>
            Van lokale rit tot luchthaven — wij hebben de juiste oplossing voor elke situatie.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map(s => (
            <div
              key={s.id}
              className="rounded-2xl p-6 border-2 hover:-translate-y-1 hover:shadow-xl transition-all"
              style={{ borderColor: lightBlue, backgroundColor: bgLight }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: darkBlue }}>{s.name}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: textLight }}>{s.description}</p>
              <ul className="space-y-1.5">
                {s.features?.map((feat, i) => (
                  <li key={i} className="text-xs flex items-center gap-2" style={{ color: text }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: yellow }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to={config.basePath + '/service'}
            className="inline-block px-8 py-3 font-bold rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: darkBlue, color: 'white' }}
          >
            Meer over onze service →
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20" style={{ backgroundColor: lightBlue }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12" style={{ color: darkBlue }}>
          Wat klanten zeggen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map(t => (
            <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-lg" style={{ color: yellow }}>★</span>
                ))}
              </div>
              <p className="text-sm italic mb-5 leading-relaxed" style={{ color: textLight }}>"{t.text}"</p>
              <div>
                <p className="font-bold text-sm" style={{ color: darkBlue }}>{t.name}</p>
                {t.role && <p className="text-xs mt-0.5" style={{ color: textLight }}>{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 text-center" style={{ backgroundColor: darkBlue }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Klaar om te rijden?</h2>
        <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: lightBlue }}>
          Bel ons direct of stuur een bericht. Wij zijn er altijd voor u — dag en nacht.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: yellow, color: darkBlue }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 font-bold rounded-xl text-sm border-2 hover:bg-white/10 transition-colors text-white"
            style={{ borderColor: lightBlue }}
          >
            Stuur een bericht
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
