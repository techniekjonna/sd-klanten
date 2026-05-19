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

  const p = config.colors.primary;
  const a = config.colors.accent;

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4" style={{ borderColor: a }}>
      <div className="px-6 py-5" style={{ backgroundColor: p }}>
        <h2 className="text-white font-bold text-xl">Rit aanvragen</h2>
        <p className="text-blue-200 text-sm mt-0.5">Vul uw gegevens in — wij bellen u terug</p>
      </div>

      <div className="p-6">
        {/* Route */}
        <div className="space-y-3 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Van</label>
            <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-blue-300 transition-colors"
              style={{ ['--focus-color' as string]: p }}>
              <span className="px-3 text-gray-400 text-base border-r border-gray-100 bg-gray-50 py-3">📍</span>
              <input
                type="text"
                placeholder="Vertrekadres met huisnummer"
                value={van}
                onChange={e => setVan(e.target.value)}
                className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-300"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => { const tmp = van; setVan(naar); setNaar(tmp); }}
              className="w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all text-sm font-bold"
              style={{ borderColor: p, color: p }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = p; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = p; }}
              title="Omwisselen"
            >
              ⇅
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naar</label>
            <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden focus-within:border-blue-300 transition-colors">
              <span className="px-3 text-gray-400 text-base border-r border-gray-100 bg-gray-50 py-3">🏁</span>
              <input
                type="text"
                placeholder="Bestemmingsadres"
                value={naar}
                onChange={e => setNaar(e.target.value)}
                className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-300"
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
              className="w-full border-2 border-gray-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-blue-300 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-blue-300 transition-colors"
            />
          </div>
        </div>

        {/* Passagiers */}
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Aantal passagiers</label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
              className="w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all font-bold text-lg"
              style={{ borderColor: p, color: p }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = p; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = p; }}
            >
              −
            </button>
            <span className="text-xl font-bold w-6 text-center" style={{ color: config.colors.text }}>{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all font-bold text-lg"
              style={{ borderColor: p, color: p }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = p; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = p; }}
            >
              +
            </button>
          </div>
        </div>

        {/* Opties */}
        <div className="flex gap-6 mb-6">
          {[
            { label: 'Retour', val: retour, set: setRetour },
            { label: 'Bagage', val: bagage, set: setBagage },
          ].map(({ label, val, set }) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => set(!val)}
                className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer"
                style={val ? { backgroundColor: p, borderColor: p } : { borderColor: '#D1D5DB' }}
              >
                {val && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </label>
          ))}
        </div>

        <a
          href={`tel:${config.contact.phone}`}
          className="block w-full text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
          style={{ backgroundColor: a }}
        >
          📞 Bel direct voor uw rit
        </a>

        <p className="text-center text-xs text-gray-400 mt-3">
          Of stuur een bericht via{' '}
          <Link to={config.basePath + '/contact'} className="font-semibold hover:underline" style={{ color: p }}>
            ons contactformulier
          </Link>
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  const p = config.colors.primary;
  const a = config.colors.accent;

  return (
    <Layout>
      {/* Hero met booking widget */}
      <section
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: `url(${config.photos.car1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${config.colors.text}E0 0%, ${p}99 100%)` }} />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: tekst */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold"
                style={{ backgroundColor: `${a}33`, border: `1px solid ${a}66`, color: '#F5D88A' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: a }} />
                24/7 bereikbaar
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-none mb-5 tracking-tight">
                Taxi Comfort<br />
                <span style={{ color: a }}>Maastricht</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-md">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {config.serviceArea.slice(0, 6).map(place => (
                  <span key={place} className="px-3 py-1 rounded-full text-sm text-blue-200"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    {place}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full text-sm text-blue-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  & meer
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="px-7 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: a }}
                >
                  📞 Bel direct
                </a>
                <Link
                  to={config.basePath + '/diensten'}
                  className="px-7 py-3.5 font-bold rounded-xl border-2 border-white text-white hover:bg-white transition-colors"
                  style={{ ['--hover-color' as string]: p }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = p; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                >
                  Onze diensten
                </Link>
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
      <section className="py-5" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '24/7', label: 'Bereikbaar' },
              { value: 'Familie', label: 'Bedrijf' },
              { value: '5★', label: 'Beoordeling' },
              { value: '100%', label: 'Betrouwbaar' },
            ].map(s => (
              <div key={s.label} className="py-3">
                <div className="text-2xl font-black" style={{ color: a }}>{s.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: config.colors.text }}>
              Waarom Taxi Comfort Maastricht?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Als familiebedrijf zetten wij de klant altijd op de eerste plaats. Persoonlijk, betrokken en betrouwbaar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="rounded-2xl p-7 text-center border-2 border-transparent hover:border-blue-100 hover:shadow-lg transition-all group"
                style={{ backgroundColor: config.colors.primaryLight }}>
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foto sectie — familiebedrijf */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: a }}>Familiebedrijf</span>
              <h2 className="text-3xl md:text-4xl font-black mt-2 mb-5" style={{ color: config.colors.text }}>
                Een taxi met een persoonlijk tintje
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {config.about.story}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {config.about.mission}
              </p>
              <Link
                to={config.basePath + '/over-ons'}
                className="inline-block px-7 py-3.5 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: p }}
              >
                Leer ons kennen →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={config.photos.team1} alt="Team Taxi Comfort Maastricht" className="rounded-2xl w-full h-52 object-cover shadow-md" />
              <img src={config.photos.car2} alt="Taxi Comfort Maastricht voertuig" className="rounded-2xl w-full h-52 object-cover shadow-md mt-8" />
              <img src={config.photos.car3} alt="Taxi Comfort Maastricht" className="rounded-2xl w-full h-52 object-cover shadow-md" />
              <img src={config.photos.team2} alt="Chauffeur Taxi Comfort Maastricht" className="rounded-2xl w-full h-52 object-cover shadow-md mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: config.colors.text }}>Onze diensten</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Van lokale ritten tot luchthavens — voor elk traject de juiste service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map(s => (
              <div key={s.id} className="rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features?.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: a }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-3.5 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Alle diensten bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-white">Wat klanten over ons zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map(t => (
              <div key={t.id} className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" style={{ color: a }}>★</span>
                  ))}
                </div>
                <p className="text-blue-100 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: a }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Rit nodig? Bel ons direct!</h2>
          <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">
            Wij zijn 24 uur per dag, 7 dagen per week bereikbaar voor uw ritaanvraag.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 bg-white font-bold rounded-xl transition-opacity hover:opacity-90 text-lg"
              style={{ color: a }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white transition-colors"
              style={{ ['--hover-color' as string]: a }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = a; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
