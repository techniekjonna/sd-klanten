import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Luchthaven = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: primary }}
      >
        <div className="container mx-auto px-4">
          <div className="text-4xl mb-4">✈️</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Luchthaven Transfers</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Comfortabel en op tijd naar uw vlucht. Wij rijden u naar alle grote luchthavens voor een vaste prijs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: primary }}>
              Onze luchthavens
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Vraag een vaste prijs op voor uw bestemming. Geen verrassingen achteraf.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {config.airports.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: primary }}>{a.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{a.city}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Reistijd: <strong>{a.duration}</strong></span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: config.colors.primaryLight, color: primary }}
                  >
                    {a.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🔔', title: 'Vluchttracking', desc: 'Wij volgen uw vlucht live. Ook bij vertraging staan wij voor u klaar.' },
              { icon: '🧳', title: 'Bagage hulp', desc: 'Onze chauffeur helpt u met in- en uitladen van uw bagage.' },
              { icon: '⏰', title: 'Altijd op tijd', desc: 'Wij halen u ruim op tijd op, zodat u nooit uw vlucht mist.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: primary }}>{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-white text-center" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vlucht gepland?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Boek uw transfer zo vroeg mogelijk voor de beste beschikbaarheid.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-block px-10 py-4 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent, color: primary }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: primary }}
            >
              Offerte Aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
