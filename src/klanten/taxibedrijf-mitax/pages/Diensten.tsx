import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = config.colors.navy;
const ORANGE = config.colors.orange;
const MUTED = config.colors.muted;
const BGLIGHT = config.colors.bgLight;

export const Diensten = () => (
  <Layout>
    {/* Header */}
    <section
      className="relative py-28 text-white text-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1493238792000-8113da705763?w=1920&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27,58,107,0.88)' }} />
      <div className="relative container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
          Onze services
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Diensten</h1>
        <p className="max-w-xl mx-auto text-blue-200 opacity-80 text-lg">
          {config.description}
        </p>
      </div>
    </section>

    {/* Diensten */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {config.diensten.map((d) => (
            <div
              key={d.id}
              className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-5">
                <div
                  className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${ORANGE}15` }}
                >
                  {d.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>
                    {d.description}
                  </p>
                  <ul className="space-y-1.5">
                    {d.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
                        <span className="font-bold" style={{ color: ORANGE }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16" style={{ backgroundColor: BGLIGHT }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY }}>
          Direct een rit boeken?
        </h2>
        <p className="mb-8 max-w-lg mx-auto text-sm" style={{ color: MUTED }}>
          Bel ons of boek snel online. Wij bevestigen uw rit zo snel mogelijk — 24/7 bereikbaar.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={config.basePath + '/boeken'}
            className="px-8 py-4 font-bold text-white rounded-xl transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: ORANGE }}
          >
            Online Boeken
          </Link>
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 font-bold rounded-xl border-2 transition-all hover:bg-gray-50"
            style={{ borderColor: NAVY, color: NAVY }}
          >
            {config.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
