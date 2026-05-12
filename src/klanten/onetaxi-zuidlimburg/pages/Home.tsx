import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [tussenstop, setTussenstop] = useState('');
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [ophaalDatum, setOphaalDatum] = useState('');
  const [retour, setRetour] = useState(false);
  const [retourDatum, setRetourDatum] = useState('');
  const [bagage, setBagage] = useState(true);
  const [reizigers, setReizigers] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = config.contact.phone.replace(/\s/g, '');
    const msg = `Hallo, ik wil een taxi reserveren:\n\nVan: ${van}\nNaar: ${naar}${tussenstop ? `\nTussenstop: ${tussenstop}` : ''}\nOphaalmoment: ${ophaalDatum}${retour ? `\nRetour: ${retourDatum}` : ''}\nReizigers: ${reizigers}\nBagage: ${bagage ? 'Ja' : 'Nee'}`;
    window.open(`https://wa.me/31647727247?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      className="rounded-2xl shadow-2xl overflow-hidden"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-black text-black mb-6">Boek eenvoudig uw taxirit</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: route */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-black">Waar wil je heen?</p>

              {/* Van */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                <span className="text-gray-400 text-lg">○</span>
                <div className="flex-1">
                  <span className="text-xs text-gray-400 font-medium">van</span>
                  <input
                    type="text"
                    value={van}
                    onChange={(e) => setVan(e.target.value)}
                    placeholder="straatnaam met huisnummer"
                    className="block w-full text-sm text-gray-800 focus:outline-none placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Tussenstop */}
              {showTussenstop ? (
                <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                  <span className="text-gray-400 text-lg">⊕</span>
                  <div className="flex-1">
                    <span className="text-xs text-gray-400 font-medium">tussenstop</span>
                    <input
                      type="text"
                      value={tussenstop}
                      onChange={(e) => setTussenstop(e.target.value)}
                      placeholder="straatnaam met huisnummer"
                      className="block w-full text-sm text-gray-800 focus:outline-none placeholder-gray-400"
                    />
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowTussenstop(true)}
                  className="flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black transition-colors"
                >
                  <span className="text-xl">⊕</span> tussenstop toevoegen
                </button>
              )}

              {/* Naar */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                <span style={{ color: '#CC0000' }} className="text-lg">📍</span>
                <div className="flex-1">
                  <span className="text-xs text-gray-400 font-medium">naar</span>
                  <input
                    type="text"
                    value={naar}
                    onChange={(e) => setNaar(e.target.value)}
                    placeholder="straatnaam met huisnummer"
                    className="block w-full text-sm text-gray-800 focus:outline-none placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Bagage */}
              <div>
                <p className="text-sm font-bold text-black mb-2">Reis je met bagage?</p>
                <div className="flex gap-5">
                  {[true, false].map((val) => (
                    <label key={String(val)} className="flex items-center gap-2 cursor-pointer text-sm font-medium text-black">
                      <span
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors"
                        style={{
                          borderColor: '#CC0000',
                          backgroundColor: bagage === val ? '#CC0000' : 'white',
                        }}
                        onClick={() => setBagage(val)}
                      >
                        {bagage === val && <span className="w-2 h-2 rounded-full bg-white block" />}
                      </span>
                      {val ? 'Ja' : 'Nee, ik heb geen bagage'}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: date/passengers */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-black mb-2">Ophaalmoment taxi</p>
                <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                  <span className="text-gray-400">📅</span>
                  <input
                    type="datetime-local"
                    value={ophaalDatum}
                    onChange={(e) => setOphaalDatum(e.target.value)}
                    className="flex-1 text-sm text-gray-800 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Retour */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-6 h-6 rounded border-2 flex items-center justify-center transition-colors"
                    style={{
                      borderColor: retour ? '#CC0000' : '#999',
                      backgroundColor: retour ? '#CC0000' : 'white',
                    }}
                    onClick={() => setRetour(!retour)}
                  >
                    {retour && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                  <span className="text-sm font-bold text-black">Retour</span>
                </label>
              </div>

              {retour ? (
                <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                  <span className="text-gray-400">📅</span>
                  <input
                    type="datetime-local"
                    value={retourDatum}
                    onChange={(e) => setRetourDatum(e.target.value)}
                    className="flex-1 text-sm text-gray-800 focus:outline-none"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: '#FFE57A' }}>
                  <span className="text-gray-400">📅</span>
                  <span className="text-sm text-gray-500">Enkele reis</span>
                </div>
              )}

              {/* Reizigers */}
              <div>
                <p className="text-sm font-bold text-black mb-2">Aantal reizigers</p>
                <div className="flex items-center gap-4 bg-white rounded-xl px-4 py-3 w-fit">
                  <button
                    type="button"
                    onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 transition-colors text-lg"
                  >
                    −
                  </button>
                  <span className="text-lg font-bold text-black w-6 text-center">{reizigers}</span>
                  <button
                    type="button"
                    onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 transition-colors text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 text-white font-bold rounded-xl text-base hover:opacity-90 transition-opacity shadow-lg"
              style={{ backgroundColor: '#22C55E' }}
            >
              Bereken mijn ritprijs →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Home = () => {
  const yellow = config.colors.primary;

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
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero text */}
            <div className="text-white">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: yellow, color: '#111' }}
              >
                Zuid-Limburg's taxibedrijf
              </span>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                {config.hero.title}{' '}
                <span style={{ color: yellow }}>{config.hero.highlight}</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="px-7 py-3.5 font-bold text-black rounded-xl transition-opacity hover:opacity-90 shadow-lg text-base"
                  style={{ backgroundColor: yellow }}
                >
                  📞 Bel Direct
                </a>
                <a
                  href="https://wa.me/31647727247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 font-bold text-white rounded-xl hover:opacity-90 transition-opacity text-base"
                  style={{ backgroundColor: '#25D366' }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Booking widget */}
            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="py-5" style={{ backgroundColor: '#111' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-300">
            {['✅ Geen boekingskosten', '✅ Vaste prijzen', '✅ Ma–Za beschikbaar', '✅ Vliegveld specialist'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-black">
              Waarom kiezen voor <span style={{ color: '#CC0000' }}>OneTaxi</span>?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Al jaren de betrouwbare taxipartner van Heerlen en omgeving.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="text-center p-7 rounded-2xl border-2 border-transparent hover:border-yellow-400 transition-all hover:shadow-lg group"
                style={{ backgroundColor: '#FAFAFA' }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-black">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-black">Onze Diensten</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">{config.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-7 hover:shadow-xl transition-all border-l-4 hover:-translate-y-1"
                style={{ borderColor: yellow }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{s.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-1.5 text-black">{s.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.description}</p>
                    {s.features && (
                      <ul className="space-y-1 mb-4">
                        {s.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                            <span style={{ color: '#CC0000' }}>✓</span> {feat}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.priceLabel && (
                      <span
                        className="text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: config.colors.primaryLight, color: '#111' }}
                      >
                        {s.priceLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarieven highlight */}
      <section className="py-16" style={{ backgroundColor: '#111' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">
            Onze <span style={{ color: yellow }}>Tarieven</span>
          </h2>
          <p className="text-gray-400 mb-8 text-sm">Transparant en eerlijk — geen verrassingen</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { label: 'Starttarief', value: '€ 4,15' },
              { label: 'Per kilometer', value: '€ 3,05' },
              { label: 'Per minuut', value: '€ 0,50' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur rounded-2xl px-8 py-6 min-w-[160px] border border-white/10"
              >
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-3xl font-black" style={{ color: yellow }}>{value}</p>
              </div>
            ))}
          </div>
          <Link
            to={config.basePath + '/tarieven'}
            className="inline-block px-8 py-3.5 font-bold rounded-xl text-black hover:opacity-90 transition-opacity"
            style={{ backgroundColor: yellow }}
          >
            Alle tarieven bekijken →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-black">
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="rounded-2xl p-7 border-2 border-gray-100 hover:border-yellow-300 transition-all">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: yellow }} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-black"
                    style={{ backgroundColor: yellow }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#CC0000' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Klaar om te vertrekken?</h2>
          <p className="text-red-100 mb-8 text-lg">Bel ons of boek direct via WhatsApp — snel, makkelijk en betrouwbaar.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-bold text-black rounded-xl hover:opacity-90 transition-opacity text-base"
              style={{ backgroundColor: yellow }}
            >
              📞 {config.contact.phone}
            </a>
            <a
              href="https://wa.me/31647727247"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-bold text-white rounded-xl hover:opacity-90 transition-opacity text-base bg-white/20 border-2 border-white"
            >
              💬 WhatsApp ons
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
