import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;

export const OverOns = () => (
  <Layout>
    {/* Header */}
    <section
      className="py-20 text-white text-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #0D1F3C 100%)` }}
    >
      <div className="relative container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Ons verhaal</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Over Van der Varst</h1>
        <p className="max-w-xl mx-auto text-white/75 text-lg">
          Meer dan 35 jaar uw betrouwbare taxipartner in Echt en Midden-Limburg.
        </p>
      </div>
    </section>

    {/* Verhaal */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Opgericht 1987</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: config.colors.text }}>
              {config.about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
            <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Opgericht', value: '1987' },
                { label: 'Chauffeurs', value: '49' },
                { label: 'Beschikbaar', value: '24/7' },
                { label: 'KvK', value: '13042287' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: config.colors.light }}>
                  <p className="text-xl font-black" style={{ color: PRIMARY }}>{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={config.about.image}
              alt="Van der Varst taxi"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Waarden */}
    <section className="py-14" style={{ backgroundColor: config.colors.light }}>
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Onze kernwaarden</p>
        <h2 className="text-2xl font-extrabold mb-8" style={{ color: config.colors.text }}>Waar wij voor staan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.about.values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ backgroundColor: PRIMARY }}
              >
                {i + 1}
              </div>
              <span className="text-sm font-semibold" style={{ color: config.colors.text }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Foto banner */}
    <section className="relative h-56 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1519566657253-e37fbcf36dfb?q=80&w=1200&auto=format&fit=crop"
        alt="Taxi"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(27,79,138,0.7)' }}>
        <div className="text-center text-white px-4">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4">Klaar om te rijden?</h3>
          <Link
            to={config.basePath + '/bestellen'}
            className="inline-block px-7 py-3 rounded-xl font-bold text-white text-sm hover:opacity-90 transition"
            style={{ backgroundColor: ACCENT }}
          >
            Bestel uw taxi
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
