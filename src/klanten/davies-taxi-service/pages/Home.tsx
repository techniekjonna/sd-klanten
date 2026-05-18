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

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#C9A84C]/20">
      {/* Widget header */}
      <div className="bg-[#0B0C10] px-6 py-5">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-1 h-6 bg-[#C9A84C] rounded-full" />
          <h2 className="text-white font-bold text-lg tracking-wide">Offerte aanvragen</h2>
        </div>
        <p className="text-gray-400 text-sm pl-4">Vul uw gegevens in en wij bellen u terug</p>
      </div>

      <div className="p-6">
        {/* Van / Naar */}
        <div className="space-y-3 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Van</label>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#C9A84C] transition-colors">
              <span className="px-3 text-[#C9A84C] border-r border-gray-200 bg-[#F9F7F2] py-3 text-sm">📍</span>
              <input
                type="text"
                placeholder="Ophaaladres (straat + huisnr)"
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
              className="w-8 h-8 rounded-full border-2 border-[#C9A84C]/30 flex items-center justify-center hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B0C10] transition-all text-gray-400 text-xs font-bold"
              title="Omwisselen"
            >
              ⇅
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naar</label>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#C9A84C] transition-colors">
              <span className="px-3 text-[#C9A84C] border-r border-gray-200 bg-[#F9F7F2] py-3 text-sm">🏁</span>
              <input
                type="text"
                placeholder="Bestemming (straat + huisnr)"
                value={naar}
                onChange={e => setNaar(e.target.value)}
                className="flex-1 px-3 py-3 text-sm outline-none placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Datum & Tijd */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Datum</label>
            <input
              type="date"
              value={datum}
              onChange={e => setDatum(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Tijd</label>
            <input
              type="time"
              value={tijd}
              onChange={e => setTijd(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors"
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
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B0C10] transition-all font-bold text-lg text-gray-500"
            >
              −
            </button>
            <span className="text-xl font-black text-[#0B0C10] w-8 text-center">{passagiers}</span>
            <button
              type="button"
              onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B0C10] transition-all font-bold text-lg text-gray-500"
            >
              +
            </button>
            <span className="text-xs text-gray-400 ml-1">max. 8 pers.</span>
          </div>
        </div>

        {/* Retour checkbox */}
        <div className="mb-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => setRetour(!retour)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
                retour ? 'bg-[#C9A84C] border-[#C9A84C]' : 'border-gray-300 group-hover:border-[#C9A84C]'
              }`}
            >
              {retour && <span className="text-[#0B0C10] text-xs font-black">✓</span>}
            </div>
            <span className="text-sm font-medium text-gray-700">Retour rit</span>
          </label>
        </div>

        {/* CTA */}
        <a
          href={`tel:${config.contact.phone}`}
          className="block w-full bg-[#C9A84C] text-[#0B0C10] text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#E8C96A] transition-colors shadow-md"
        >
          Offerte aanvragen →
        </a>

        <p className="text-center text-xs text-gray-400 mt-4">
          Of bel direct:{' '}
          <a href={`tel:${config.contact.phone}`} className="font-bold text-[#C9A84C] hover:underline">
            {config.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
};

export const Home = () => (
  <Layout>
    {/* Hero */}
    <section
      className="relative min-h-[92vh] flex items-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1514041181368-bca62cceffcd?q=80&w=1632&auto=format&fit=crop)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#0B0C10]/75" />
      {/* Gold diagonal accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/40 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#C9A84C]">24/7 Premium Taxivervoer</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-none mb-6 tracking-tight">
              <span className="text-white">DAVIES</span>
              <br />
              <span className="text-[#C9A84C]">TAXI</span>
              <span className="text-white"> SERVICE</span>
            </h1>

            <div className="w-20 h-1 bg-[#C9A84C] mb-6 rounded-full" />

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-md">
              {config.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Heerlen', 'Kerkrade', 'Landgraaf', 'Maastricht', 'Schiphol'].map(place => (
                <span key={place} className="px-3 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-full text-sm text-[#E8C96A]">
                  {place}
                </span>
              ))}
              <span className="px-3 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-full text-sm text-[#E8C96A]">& meer</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-7 py-3.5 bg-[#C9A84C] text-[#0B0C10] font-black rounded-xl hover:bg-[#E8C96A] transition-colors text-sm uppercase tracking-wider shadow-lg"
              >
                📞 Bel Nu
              </a>
              <Link
                to={config.basePath + '/diensten'}
                className="px-7 py-3.5 border-2 border-[#C9A84C]/60 text-white font-bold rounded-xl hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors text-sm uppercase tracking-wider"
              >
                Onze Diensten
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
    <section className="bg-[#C9A84C] py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '24/7', label: 'Bereikbaar' },
            { value: '2', label: 'Premium voertuigen' },
            { value: '8', label: 'Passagiers max.' },
            { value: '100%', label: 'Elektrisch EQV' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-black text-[#0B0C10]">{s.value}</div>
              <div className="text-[10px] text-[#0B0C10]/70 uppercase tracking-widest mt-1 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-[#F9F7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Waarom Davies?</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 text-[#0B0C10] tracking-tight">Premium Taxivervoer</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Wij onderscheiden ons met luxe voertuigen, vakkundige chauffeurs en onberispelijke service.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#C9A84C] hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#C9A84C]/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-base font-bold mb-2 text-[#0B0C10]">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Vehicles */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Onze Vloot</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 text-[#0B0C10] tracking-tight">Premium Mercedes Voertuigen</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Kies het voertuig dat bij uw rit past — van elegante zakelijke sedan tot ruime elektrische MPV.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {config.vehicles.map((v) => (
            <div key={v.id} className="group bg-[#F9F7F2] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A84C] hover:shadow-xl transition-all">
              {/* Photo */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={v.images[0]}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = v.images[1];
                  }}
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C9A84C] text-[#0B0C10] text-xs font-black uppercase tracking-widest rounded-full shadow">
                    {v.badge}
                  </span>
                </div>
                {/* Passenger badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0B0C10]/80 text-[#C9A84C] text-xs font-bold rounded-full border border-[#C9A84C]/40">
                    👤 {v.capacity}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-[#0B0C10] mb-2">{v.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{v.description}</p>

                <div className="w-10 h-0.5 bg-[#C9A84C] mb-4" />

                <ul className="grid grid-cols-2 gap-2">
                  {v.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>

                <a
                  href={`tel:${config.contact.phone}`}
                  className="mt-5 block w-full text-center py-3 rounded-xl bg-[#0B0C10] text-[#C9A84C] font-bold text-sm uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0B0C10] transition-colors border border-[#C9A84C]/30"
                >
                  Boek {v.name.split(' ').slice(0, 2).join(' ')} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services preview */}
    <section className="py-20 bg-[#F9F7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Wat wij bieden</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 text-[#0B0C10] tracking-tight">Onze Diensten</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Van zakelijk directievervoer tot zorgritten — wij bieden de juiste oplossing voor u.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map(s => (
            <div key={s.id} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#C9A84C] hover:shadow-lg transition-all group">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-base font-bold mb-2 text-[#0B0C10]">{s.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <ul className="space-y-1.5">
                {s.features?.map((feat, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full flex-shrink-0" />
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
            className="inline-block px-8 py-3 bg-[#0B0C10] text-[#C9A84C] font-bold rounded-xl hover:bg-[#C9A84C] hover:text-[#0B0C10] transition-colors border border-[#C9A84C]/30"
          >
            Alle diensten bekijken →
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Reviews</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 text-[#0B0C10] tracking-tight">Wat klanten zeggen</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map(t => (
            <div key={t.id} className="bg-[#F9F7F2] rounded-xl p-7 border border-gray-100 hover:border-[#C9A84C] transition-colors">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#C9A84C] text-base">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C9A84C]/20 rounded-full flex items-center justify-center text-[#C9A84C] font-black text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0B0C10]">{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-[#0B0C10] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-50" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Klaar om te rijden?</span>
        <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4 tracking-tight">Boek uw premium taxirit</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
          Bel ons direct of vraag een offerte aan. Wij zijn dag en nacht voor u bereikbaar.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 bg-[#C9A84C] text-[#0B0C10] font-black rounded-xl hover:bg-[#E8C96A] transition-colors shadow-lg text-sm uppercase tracking-wider"
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 border-2 border-[#C9A84C]/60 text-[#C9A84C] font-bold rounded-xl hover:bg-[#C9A84C] hover:text-[#0B0C10] transition-colors text-sm uppercase tracking-wider"
          >
            Offerte aanvragen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
