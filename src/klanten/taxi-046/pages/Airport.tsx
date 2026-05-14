import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Airport = () => (
  <Layout>
    <section
      className="relative py-28 text-white text-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=800&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative container mx-auto px-4">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">
          ✈️ Luchthaven transfers
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Airport Transfer</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Ontspannen naar het vliegveld — wij zorgen dat u op tijd aankomt. Vaste all-in prijzen, geen verrassingen.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-12 tracking-tight">Wij rijden naar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {config.airports.map(airport => (
            <div key={airport.name} className="border-2 border-gray-100 rounded-xl p-6 hover:border-black transition-all group flex items-center gap-4">
              <span className="text-3xl">{airport.flag}</span>
              <div className="flex-1">
                <h3 className="font-black text-sm">{airport.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{airport.country}</p>
              </div>
              <div className="bg-gray-100 group-hover:bg-black group-hover:text-white rounded-lg px-3 py-1.5 transition-colors">
                <span className="text-xs font-bold">{airport.time}</span>
              </div>
            </div>
          ))}
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex items-center gap-4">
            <span className="text-3xl">🌍</span>
            <div>
              <h3 className="font-black text-sm">Andere luchthaven?</h3>
              <p className="text-xs text-gray-400">Neem contact op voor een offerte</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-black text-center mb-10 tracking-tight">Waarom kiezen voor onze airport transfer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: '💰', title: 'Vaste all-in prijs', desc: 'Geen verrassingen achteraf. U betaalt wat afgesproken is.' },
            { icon: '🛫', title: 'Vlucht monitoring', desc: 'Wij houden uw vlucht in de gaten bij vertragingen.' },
            { icon: '🧳', title: 'Ruime bagageruimte', desc: 'Veel bagage? Geen probleem — wij hebben de ruimte.' },
            { icon: '⏰', title: 'Altijd op tijd', desc: 'Stipte planning zodat u nooit een vlucht mist.' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-black transition-colors">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-black text-sm mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-black mb-4 tracking-tight">Prijs opvragen</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Bel ons voor een vaste prijs naar uw luchthaven. We zijn 24/7 bereikbaar.</p>
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
            Online bestellen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
