import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [tussenstop, setTussenstop] = useState('');
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [datetime, setDatetime] = useState('');
  const [retour, setRetour] = useState(false);
  const [bagage, setBagage] = useState(true);
  const [reizigers, setReizigers] = useState(1);
  const p = config.colors.primary;

  const swap = () => { const tmp = van; setVan(naar); setNaar(tmp); };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
      {/* Widget header */}
      <div className="px-6 py-4" style={{ backgroundColor: p }}>
        <h2 className="text-white font-bold text-lg">Boek uw TaxiFrans rit</h2>
        <p className="text-white/60 text-xs mt-0.5">Vul in en wij nemen contact op</p>
      </div>

      <div className="p-6 space-y-4">
        {/* Route */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: p }}>
            Waar wil je heen?
          </p>
          <div className="relative flex flex-col gap-2">
            {/* Van */}
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-400 transition-colors bg-gray-50">
              <span className="px-3 py-3 text-gray-400 text-sm">📍</span>
              <input
                type="text"
                placeholder="Van — straatnaam met huisnummer"
                value={van}
                onChange={e => setVan(e.target.value)}
                className="flex-1 pr-3 py-3 text-sm outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            {/* Tussenstop toggle */}
            {!showTussenstop ? (
              <button
                type="button"
                onClick={() => setShowTussenstop(true)}
                className="self-start text-xs font-medium flex items-center gap-1 transition-colors hover:opacity-70"
                style={{ color: p }}
              >
                <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center text-xs" style={{ borderColor: p }}>+</span>
                tussenstop toevoegen
              </button>
            ) : (
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-400 transition-colors bg-gray-50">
                <span className="px-3 py-3 text-gray-400 text-sm">🔄</span>
                <input
                  type="text"
                  placeholder="Tussenstop — straatnaam met huisnummer"
                  value={tussenstop}
                  onChange={e => setTussenstop(e.target.value)}
                  className="flex-1 pr-3 py-3 text-sm outline-none bg-transparent placeholder-gray-400"
                />
              </div>
            )}

            {/* Swap + Naar row */}
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-400 transition-colors bg-gray-50">
                <span className="px-3 py-3 text-gray-400 text-sm">🏁</span>
                <input
                  type="text"
                  placeholder="Naar — straatnaam met huisnummer"
                  value={naar}
                  onChange={e => setNaar(e.target.value)}
                  className="flex-1 pr-3 py-3 text-sm outline-none bg-transparent placeholder-gray-400"
                />
              </div>
              <button
                type="button"
                onClick={swap}
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all hover:text-white text-sm font-bold"
                style={{ borderColor: p, color: p }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = p; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = p; }}
                title="Omwisselen"
              >
                ⇅
              </button>
            </div>
          </div>
        </div>

        {/* Datum & tijd */}
        <div>
          <label className="text-xs font-bold uppercase tracking-widest mb-1.5 block" style={{ color: p }}>
            Ophaalmoment taxi
          </label>
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-400 transition-colors bg-gray-50">
            <span className="px-3 py-3 text-gray-400 text-sm">📅</span>
            <input
              type="datetime-local"
              value={datetime}
              onChange={e => setDatetime(e.target.value)}
              className="flex-1 pr-3 py-3 text-sm outline-none bg-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Retour */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setRetour(!retour)}
            className={`w-10 h-6 rounded-full transition-all relative flex-shrink-0 ${retour ? '' : 'bg-gray-200'}`}
            style={retour ? { backgroundColor: p } : {}}
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${retour ? 'left-5' : 'left-1'}`} />
          </button>
          <span className="text-sm font-medium text-gray-700">Retour</span>
          {retour && (
            <input
              type="datetime-local"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-blue-400 bg-gray-50"
              placeholder="Terugrit datum & tijd"
            />
          )}
        </div>

        {/* Bagage */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: p }}>Reis je met bagage?</p>
          <div className="flex gap-4">
            {['Ja', 'Nee, ik heb geen bagage'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <div
                  onClick={() => setBagage(opt === 'Ja')}
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer flex-shrink-0`}
                  style={{ borderColor: p }}
                >
                  {bagage === (opt === 'Ja') && (
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p }} />
                  )}
                </div>
                <span className="text-sm text-gray-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Reizigers */}
        <div>
          <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: p }}>
            Aantal reizigers
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setReizigers(Math.max(1, reizigers - 1))}
              className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all"
              style={{ borderColor: p, color: p }}
            >
              −
            </button>
            <span className="text-lg font-bold w-6 text-center" style={{ color: config.colors.text }}>{reizigers}</span>
            <button
              type="button"
              onClick={() => setReizigers(Math.min(8, reizigers + 1))}
              className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all"
              style={{ borderColor: p, color: p }}
            >
              +
            </button>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="w-full py-3.5 font-bold text-white rounded-xl text-sm transition-all hover:brightness-110 shadow-md mt-1"
          style={{ backgroundColor: '#16A34A' }}
        >
          Bereken mijn ritprijs →
        </button>

        <p className="text-center text-xs text-gray-400">
          Of bel direct:{' '}
          <a href={`tel:${(config as any).contact.phone}`} className="font-semibold hover:underline" style={{ color: p }}>
            {(config as any).contact.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  const p = config.colors.primary;
  const cfg = config as any;

  return (
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,44,110,0.92) 0%, rgba(28,44,110,0.75) 50%, rgba(28,44,110,0.60) 100%)' }} />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Tekst */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">24/7 beschikbaar in Maastricht</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4 tracking-tight">
                {config.hero.title}<br />
                <span style={{ color: '#E8A020' }}>{config.hero.highlight}</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-md">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cfg.serviceArea.slice(0, 5).map((place: string) => (
                  <span key={place} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/80">
                    {place}
                  </span>
                ))}
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/80">& meer</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${cfg.contact.phone}`}
                  className="px-6 py-3 font-bold rounded-xl text-sm transition-all hover:brightness-110 shadow-lg"
                  style={{ backgroundColor: '#E8A020', color: p }}
                >
                  📞 Bel direct
                </a>
                <Link
                  to={config.basePath + '/diensten'}
                  className="px-6 py-3 font-bold rounded-xl text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Onze diensten
                </Link>
              </div>
            </div>

            {/* Booking widget */}
            <div className="flex justify-center lg:justify-end">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-5" style={{ backgroundColor: '#E8A020' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Bereikbaar' },
              { value: '< 15 min', label: 'Responstijd' },
              { value: '4 landen', label: 'Europa service' },
              { value: '100%', label: 'Vergund & verzekerd' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-black" style={{ color: p }}>{s.value}</div>
                <div className="text-xs font-medium uppercase tracking-wider mt-0.5" style={{ color: p + 'CC' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom TaxiFrans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: config.colors.text }}>
              Waarom TaxiFrans?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Al jaren de meest betrouwbare en voordeligste keuze in Maastricht en Limburg.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border-2 border-transparent hover:shadow-lg transition-all group"
                style={{ borderColor: 'transparent' }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = '#E8A020')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'transparent')}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>{f.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: config.colors.text }}>
              Onze Diensten
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Van lokale taxi tot Europa-rit — voor elk vervoer bent u bij ons aan het juiste adres.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map(s => (
              <div
                key={s.id}
                className="rounded-2xl p-6 border-2 border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                {s.priceLabel && (
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#E8A020' + '22', color: '#B87300' }}
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
              className="inline-block px-8 py-3.5 font-bold text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: p }}
            >
              Alle diensten bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" style={{ color: config.colors.text }}>
            Wat klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map(t => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: config.colors.text }}>{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Klaar om te rijden?</h2>
          <p className="text-lg mb-8 opacity-80 max-w-xl mx-auto">
            Bel ons direct of stuur een e-mail. Wij zijn dag en nacht beschikbaar voor al uw taxiritten.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${cfg.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl text-sm transition-all hover:brightness-110 shadow-lg"
              style={{ backgroundColor: '#E8A020', color: p }}
            >
              📞 {cfg.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${config.contact.email}`}
              className="px-8 py-4 font-bold rounded-xl text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              ✉️ {config.contact.email}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
