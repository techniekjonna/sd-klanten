import { Link, useParams } from 'react-router-dom';
import { config } from '../config';

const yellow = config.colors.primary;
const dark = config.colors.dark;

export const DienstDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = config.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: dark }}>Dienst niet gevonden</h2>
        <Link to={config.basePath + '/diensten'} className="text-sm font-semibold underline" style={{ color: yellow }}>
          Terug naar diensten
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="py-20 text-white" style={{ backgroundColor: dark }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to={config.basePath + '/diensten'} className="hover:text-white transition-colors">Diensten</Link>
            <span>›</span>
            <span className="text-white">{service.name}</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold">{service.name}</h1>
              <p className="text-gray-400 mt-2 max-w-xl">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-2xl font-extrabold mb-5" style={{ color: dark }}>Over deze dienst</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
              <h3 className="text-lg font-bold mb-4" style={{ color: dark }}>Wat is inbegrepen</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: yellow, color: dark }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${config.contact.phone}`}
                  className="px-6 py-3 font-bold rounded-xl hover:opacity-90 text-sm transition-opacity"
                  style={{ backgroundColor: yellow, color: dark }}>
                  📞 Bel direct
                </a>
                <Link to={config.basePath + '/contact'}
                  className="px-6 py-3 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-400 text-sm text-gray-700 transition-colors">
                  Offerte aanvragen
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
                <img src={service.image} alt={service.name} className="w-full h-72 object-cover" />
              </div>
              <div className="rounded-2xl p-6 border-2" style={{ borderColor: yellow, backgroundColor: '#FFFDE7' }}>
                <h4 className="font-bold mb-2" style={{ color: dark }}>Direct reserveren?</h4>
                <p className="text-sm text-gray-600 mb-4">Bel ons direct of stuur een bericht. We reageren snel.</p>
                <a href={`tel:${config.contact.phone}`} className="block text-center py-2.5 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: yellow, color: dark }}>
                  {config.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: config.colors.surface }}>
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-6" style={{ color: dark }}>Andere diensten</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {config.services.filter((s) => s.slug !== slug).slice(0, 5).map((s) => (
              <Link key={s.id} to={config.basePath + '/diensten/' + s.slug}
                className="text-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="text-xs font-semibold" style={{ color: dark }}>{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
