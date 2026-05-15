import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const SoortenVervoer = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-white" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Soorten vervoer</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Of u nu naar de dokter moet, het vliegtuig haalt of een avondje uit gaat — wij zorgen voor veilig en comfortabel vervoer.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s, i) => (
              <div
                key={s.id}
                className={`flex gap-6 p-8 rounded-2xl border-2 border-gray-100 hover:border-yellow-400 transition-all ${i % 2 === 0 ? 'bg-white' : ''}`}
                style={i % 2 !== 0 ? { backgroundColor: config.colors.lightBg } : {}}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style={{ backgroundColor: primary }}>
                  <span>{s.icon}</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2" style={{ color: primary }}>{s.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5">
                    {s.features?.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ backgroundColor: primary }}>✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto afbeelding */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://c625951.ssl.cf3.rackcdn.com/category/taxi/taxi-foto.jpg"
              alt="Taxi Compleet Maastricht vloot"
              className="w-full object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Rit aanvragen?</h2>
          <p className="text-blue-200 mb-8 max-w-md mx-auto">Bel ons direct of boek online — wij zijn 24/7 voor u bereikbaar.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3 rounded-xl font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent, color: '#fff' }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/rit-boeken'}
              className="px-8 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Rit boeken
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
