import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BookingWidget } from '../components/BookingWidget';
import { config } from '../config';

export const Home = () => {
  const ac = config.colors.accent;
  const dk = config.colors.dark;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,15,15,0.72)' }} />
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-xl text-white mb-12">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ backgroundColor: ac, color: dk }}
            >
              24/7 Beschikbaar · {config.contact.phone}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              {config.hero.title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${config.contact.phoneTel}`}
                className="px-6 py-3.5 font-bold rounded-xl transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: ac, color: dk }}
              >
                📞 {config.contact.phone}
              </a>
              <Link
                to={config.basePath + '/over-ons'}
                className="px-6 py-3.5 font-semibold rounded-xl border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                Over ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section id="boeken" className="relative -mt-8 z-10 pb-4">
        <div className="container mx-auto px-4">
          <BookingWidget />
        </div>
      </section>

      {/* Kenmerken */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightGray }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: dk }}>
              Waarom Global Taxi Heerlen?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Meer dan 10 jaar ervaring, gediplomeerde chauffeurs en 24/7 beschikbaar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl text-center hover:shadow-md transition-shadow bg-white border border-gray-100"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: dk }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: dk }}>
                Onze diensten
              </h2>
              <p className="text-gray-500">Van airport transfer tot vervoer op maat.</p>
            </div>
            <Link
              to={config.basePath + '/diensten'}
              className="text-sm font-bold underline underline-offset-4 hover:opacity-70 transition-opacity whitespace-nowrap"
              style={{ color: dk }}
            >
              Alle diensten →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((s) => (
              <Link
                key={s.id}
                to={config.basePath + s.path}
                className="group block p-6 rounded-2xl border-2 border-gray-100 hover:border-current transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ '--tw-border-opacity': 1 } as React.CSSProperties}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: ac + '22' }}
                >
                  {s.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: dk }}>{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.description}</p>
                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: dk }}
                >
                  Meer info →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section
        className="py-20 text-white"
        style={{ backgroundColor: dk }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: ac }}
              >
                Over ons
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                Jong, dynamisch & 10 jaar ervaring
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {config.about.story}
              </p>
              <ul className="space-y-2.5">
                {config.about.values.map((v, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: ac, color: dk }}
                    >
                      ✓
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
              <Link
                to={config.basePath + '/over-ons'}
                className="inline-block mt-8 px-6 py-3 font-bold rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: ac, color: dk }}
              >
                Lees meer over ons
              </Link>
            </div>
            <div className="hidden lg:block">
              <img
                src={config.about.image}
                alt="Global Taxi Heerlen"
                className="rounded-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightGray }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12" style={{ color: dk }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: ac }} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: ac, color: dk }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: dk }}>{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: ac }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: dk }}>
            Klaar voor uw rit?
          </h2>
          <p className="text-sm mb-6 max-w-sm mx-auto" style={{ color: config.colors.gray }}>
            Bel ons direct of gebruik het boekingsformulier bovenaan deze pagina.
          </p>
          <a
            href={`tel:${config.contact.phoneTel}`}
            className="inline-block px-10 py-4 font-extrabold rounded-xl text-white transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: dk }}
          >
            📞 {config.contact.phone}
          </a>
        </div>
      </section>
    </Layout>
  );
};
