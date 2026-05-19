import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Groepsvervoer = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section
        className="relative py-28 text-white text-center"
        style={{
          backgroundImage: `url(${config.fleet.bus.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: `${config.colors.darkBg}cc` }} />
        <div className="relative container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">🚌 Groepsvervoer</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Julliard's Groepsvervoer</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Ruime bus voor groepen tot 16 personen. Ideaal voor uitjes, evenementen en teamreizen.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: primary }}>Uw groep comfortabel vervoerd</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Met onze ruime Mercedes-Benz bus vervoeren wij groepen tot 16 personen in stijl en comfort. Of het nu om een familieuitje, een schoolreisje, een bedrijfsevenement of een luchthaventrip gaat — wij regelen het voor u.
              </p>
              <ul className="space-y-3 mb-7">
                {config.fleet.bus.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: accent }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: `${accent}15`, color: accent }}>
                👤 Capaciteit: tot {config.fleet.bus.capacity}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {config.fleet.bus.images.map((img, i) => (
                <div key={i} className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2' : ''} aspect-video`}>
                  <img src={img} alt="Bus" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: primary }}>Geschikt voor</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: '✈️', label: 'Airport groepen' },
              { icon: '🎉', label: 'Feesten & events' },
              { icon: '⚽', label: 'Sportclubs' },
              { icon: '🏢', label: 'Bedrijfsuitjes' },
              { icon: '👨‍👩‍👧', label: 'Familie-uitjes' },
              { icon: '🎓', label: 'Schoolreisjes' },
              { icon: '🎭', label: 'Theater & concerten' },
              { icon: '🍽️', label: 'Restaurantbezoek' },
            ].map(item => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 text-center hover:shadow-sm transition-shadow">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-semibold" style={{ color: primary }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Prijs opvragen?</h2>
          <p className="text-white/70 mb-7 max-w-md mx-auto">Neem contact op voor een vrijblijvende offerte voor uw groepsrit.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${config.contact.phone}`} className="px-7 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
              📞 {config.contact.phoneDisplay}
            </a>
            <Link to={config.basePath + '/contact'} className="px-7 py-3.5 font-bold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors">
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
