import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => (
  <Layout>
    {/* Page header */}
    <section className="bg-[#0B0C10] py-16">
      <div className="container mx-auto px-4 text-center">
        <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Leer ons kennen</span>
        <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4 tracking-tight">Over Davies Taxi Service</h1>
        <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-6" />
        <p className="text-gray-400 max-w-lg mx-auto">
          Uw betrouwbare partner voor premium taxivervoer in Zuid-Limburg — met passie voor service, comfort en punctualiteit.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-[#F9F7F2]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Ons verhaal</span>
            <h2 className="text-3xl font-black text-[#0B0C10] mt-2 mb-5 tracking-tight">Wie zijn wij?</h2>
            <div className="w-10 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-5">
              {config.about.story}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Onze vloot bestaat uit twee zorgvuldig geselecteerde Mercedes-voertuigen: de slanke <strong className="text-[#0B0C10]">E-Klasse AMG Line</strong> voor zakelijk en VIP-vervoer, en de volledig elektrische <strong className="text-[#0B0C10]">EQV</strong> voor groepen tot 8 personen. Beide voertuigen zijn uitgerust met het hoogste comfortniveau.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&h=600&fit=crop"
              alt="Davies Taxi Service"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-5 -left-5 bg-[#C9A84C] text-[#0B0C10] rounded-xl p-5 shadow-xl">
              <div className="text-3xl font-black">24/7</div>
              <div className="text-xs font-bold uppercase tracking-widest">Bereikbaar</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 bg-[#0B0C10]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Onze belofte</span>
          <h2 className="text-3xl font-black text-white mt-3 mb-5 tracking-tight">Onze Missie</h2>
          <div className="w-10 h-0.5 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-gray-300 text-lg leading-relaxed">
            {config.about.mission}
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Waarvoor wij staan</span>
          <h2 className="text-3xl font-black text-[#0B0C10] mt-2 tracking-tight">Onze Waarden</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {config.about.values.map((value, i) => (
            <div key={i} className="flex items-start gap-4 bg-[#F9F7F2] rounded-xl p-6 border border-gray-100 hover:border-[#C9A84C] transition-colors">
              <div className="w-8 h-8 bg-[#C9A84C] rounded-full flex items-center justify-center text-[#0B0C10] font-black text-sm flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-gray-700 font-semibold text-sm leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Vehicles showcase */}
    <section className="py-20 bg-[#F9F7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Onze vloot</span>
          <h2 className="text-3xl font-black text-[#0B0C10] mt-2 tracking-tight">Premium Mercedes Voertuigen</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.vehicles.map(v => (
            <div key={v.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A84C] hover:shadow-lg transition-all">
              <img
                src={v.images[1] || v.images[0]}
                alt={v.name}
                className="w-full h-52 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = v.images[0];
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-black text-[#0B0C10]">{v.name}</h3>
                  <span className="px-3 py-1 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold rounded-full border border-[#C9A84C]/30">
                    {v.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">👤 {v.capacity}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-[#C9A84C] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-[#0B0C10] mb-4 tracking-tight">Maak kennis met Davies</h2>
        <p className="text-[#0B0C10]/70 mb-8 max-w-md mx-auto">Bel ons voor een persoonlijke afspraak of vraag direct een offerte aan voor uw rit.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 bg-[#0B0C10] text-[#C9A84C] font-black rounded-xl hover:bg-[#111] transition-colors text-sm uppercase tracking-wider"
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 border-2 border-[#0B0C10] text-[#0B0C10] font-bold rounded-xl hover:bg-[#0B0C10] hover:text-[#C9A84C] transition-colors text-sm uppercase tracking-wider"
          >
            Stuur een bericht
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
