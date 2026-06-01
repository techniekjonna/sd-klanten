import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Clientele = () => {
  const accent = config.colors.accent || '#C9A84C';

  return (
    <Layout>
      <section
        className="relative py-28 flex items-end"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Cliëntèle</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Voor wie wij rijden</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Onze cliënten</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Private en publieke sector
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Visser Driving Services bedient zowel de private als de publieke sector. Wij zijn vertrouwd door executives, overheidsinstanties en internationale organisaties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Corporate', desc: 'CEO\'s, bestuurders, executives en directieleden die stijlvol en discreet vervoerd willen worden.', icon: '💼' },
              { title: 'Overheid', desc: 'Ministeries, gemeenten en overheidsinstanties die vertrouwen op gecertificeerd vervoer.', icon: '🏛️' },
              { title: 'Internationaal', desc: 'Buitenlandse delegaties, ambassades en internationale organisaties in Nederland.', icon: '🌍' },
            ].map((c) => (
              <div key={c.title} className="p-8 border border-gray-100 hover:border-gray-900 transition-all">
                <div className="text-3xl mb-5">{c.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-gray-900">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Ervaringen</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Wat onze cliënten zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div key={t.id} className="border border-gray-100 p-8">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed text-sm">"{t.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  {t.role && <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#111111' }}>
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Neem contact op</p>
          <h2 className="text-3xl font-bold text-white mb-6">Maakt u graag gebruik van onze diensten?</h2>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: accent }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
