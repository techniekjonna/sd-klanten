import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = config.colors.navy;
const ORANGE = config.colors.orange;
const MUTED = config.colors.muted;
const BGLIGHT = config.colors.bgLight;

export const OverOns = () => (
  <Layout>
    {/* Header */}
    <section
      className="relative py-28 text-white text-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27,58,107,0.88)' }} />
      <div className="relative container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
          Ons verhaal
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{config.about.title}</h1>
        <p className="max-w-xl mx-auto text-blue-200 opacity-80">{config.tagline}</p>
      </div>
    </section>

    {/* Verhaal + afbeelding */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-5" style={{ color: NAVY }}>Wie zijn wij?</h2>
            <p className="leading-relaxed mb-5 text-sm" style={{ color: MUTED }}>
              {config.about.story}
            </p>
            <p className="leading-relaxed text-sm" style={{ color: MUTED }}>
              {config.about.mission}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={config.about.image}
              alt={config.name}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Kernwaarden */}
    <section className="py-20" style={{ backgroundColor: BGLIGHT }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>
            Kernwaarden
          </p>
          <h2 className="text-3xl font-bold" style={{ color: NAVY }}>De Mitax belofte</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {config.about.values.map((v, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                style={{ backgroundColor: ORANGE }}
              >
                {i + 1}
              </div>
              <p className="font-semibold text-sm" style={{ color: NAVY }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold" style={{ color: NAVY }}>Wat ons onderscheidt</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {config.features.map((f, i) => (
            <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center" style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Klaar voor uw eerste rit met Mitax?</h2>
        <p className="text-blue-200 opacity-70 mb-8 max-w-md mx-auto">
          Boek direct online of bel ons. 24/7 bereikbaar voor uw taxivervoer.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={config.basePath + '/boeken'}
            className="px-10 py-4 font-bold text-white rounded-xl transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: ORANGE }}
          >
            Rit Boeken
          </Link>
          <a
            href={`tel:${config.contact.phone}`}
            className="px-10 py-4 font-bold rounded-xl border-2 border-white/30 text-white hover:border-white/60 transition-all"
          >
            {config.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
