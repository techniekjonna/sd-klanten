import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const destinations = [
  { city: 'Brussel', country: 'België', icon: '🇧🇪', distance: '~120 km' },
  { city: 'Parijs', country: 'Frankrijk', icon: '🇫🇷', distance: '~400 km' },
  { city: 'Keulen', country: 'Duitsland', icon: '🇩🇪', distance: '~130 km' },
  { city: 'Amsterdam', country: 'Nederland', icon: '🇳🇱', distance: '~220 km' },
  { city: 'Frankfurt', country: 'Duitsland', icon: '🇩🇪', distance: '~270 km' },
  { city: 'Luxemburg', country: 'Luxemburg', icon: '🇱🇺', distance: '~100 km' },
  { city: 'Düsseldorf', country: 'Duitsland', icon: '🇩🇪', distance: '~100 km' },
  { city: 'Barcelona', country: 'Spanje', icon: '🇪🇸', distance: '~1300 km' },
];

export const Europa = () => {
  const p = config.colors.primary;
  const cfg = config as any;

  return (
    <Layout>
      <section className="relative py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Europa Service</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Comfortabel en voordelig door heel Europa. Met TaxiFrans rijdt u stress-vrij naar uw bestemming.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6" style={{ color: config.colors.text }}>
                Van Maastricht naar heel Europa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vanuit onze thuisbasis in Maastricht zijn wij ideaal gepositioneerd voor ritten door Europa. Of u nu naar Brussel voor een zakelijke vergadering rijdt, of naar Parijs voor een weekendje weg — TaxiFrans brengt u er comfortabel en op tijd.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Onze ruime, airconditioned voertuigen zijn perfect voor lange ritten. Wij bieden vaste prijzen zonder verrassingen achteraf. Neem contact op voor een offerte op maat.
              </p>
              <ul className="space-y-3">
                {['Vaste prijs, geen verassingen', 'Ruime en comfortabele voertuigen', 'Ervaren chauffeurs met kennis van Europa', 'Meerdere tussenstops mogelijk', '24/7 bereikbaar voor vragen'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: '#E8A020' }}>✓</span>
                    <span style={{ color: config.colors.text }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop"
                alt="Europa Service"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bestemmingen */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: config.colors.text }}>
            Populaire Bestemmingen
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations.map((d) => (
              <div
                key={d.city}
                className="bg-white rounded-2xl p-5 text-center border-2 border-transparent hover:shadow-md transition-all"
                style={{ borderColor: 'transparent' }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = '#E8A020')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'transparent')}
              >
                <div className="text-3xl mb-2">{d.icon}</div>
                <h3 className="font-bold text-base" style={{ color: config.colors.text }}>{d.city}</h3>
                <p className="text-xs text-gray-400">{d.country}</p>
                <p className="text-xs font-semibold mt-1" style={{ color: p }}>{d.distance}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Uw bestemming staat er niet bij? Neem contact op — wij rijden overal naartoe.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Offerte aanvragen</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Bel ons voor een vaste prijs voor uw Europa-rit. Snel, eerlijk en zonder verrassingen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${cfg.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl text-sm hover:brightness-110 transition-all"
              style={{ backgroundColor: '#E8A020', color: p }}
            >
              📞 {cfg.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 font-bold rounded-xl text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
