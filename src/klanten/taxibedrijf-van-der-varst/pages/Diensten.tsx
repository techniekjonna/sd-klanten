import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;

export const Diensten = () => (
  <Layout>
    {/* Header */}
    <section
      className="py-20 text-white text-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #0D1F3C 100%)` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1565933717318-77b4b61d6d63?q=80&w=1200&auto=format&fit=crop)` }}
      />
      <div className="relative container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Wat wij aanbieden</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Onze Diensten</h1>
        <p className="max-w-xl mx-auto text-white/75 text-lg">
          Van een simpele rit naar het station tot een comfortabele luchthaventrip — wij staan voor u klaar.
        </p>
      </div>
    </section>

    {/* Diensten grid */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.services.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border p-7 hover:shadow-lg transition-all group"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: config.colors.light }}
                >
                  {s.icon}
                </div>
                <div>
                  <h2 className="text-xl font-extrabold mb-1" style={{ color: config.colors.text }}>{s.name}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style={{ backgroundColor: PRIMARY }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12" style={{ backgroundColor: config.colors.light }}>
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-extrabold mb-3" style={{ color: config.colors.text }}>Klaar voor uw rit?</h3>
        <p className="text-sm text-gray-500 mb-6">Bestel eenvoudig online of neem direct contact op.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={config.basePath + '/bestellen'}
            className="px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition"
            style={{ backgroundColor: ACCENT }}
          >
            Direct Bestellen
          </Link>
          <Link
            to={config.basePath + '/contact'}
            className="px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition"
            style={{ backgroundColor: PRIMARY }}
          >
            Neem Contact Op
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
