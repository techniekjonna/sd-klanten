import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Home = () => {
  const p = config.colors.primary;
  const hours = config.contact.hours;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[88vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
              {config.tagline}
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {config.hero.title}{' '}
              <span style={{ color: config.colors.primary }}>{config.hero.highlight}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow-lg"
                style={{ backgroundColor: p }}
              >
                {config.hero.cta}
              </Link>
              <Link
                to={config.basePath + config.hero.ctaSecondaryLink}
                className="px-8 py-4 font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-gray-900 transition-colors"
              >
                {config.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Openingstijden + Diensten overzicht */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Openingstijden */}
            <div className="text-center">
              <div className="text-5xl mb-4" style={{ color: p }}>🕐</div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: p }}>Openingstijden</h2>
              <ul className="space-y-2 text-sm max-w-[220px] mx-auto">
                {(
                  [
                    ['Maandag', hours.maandag],
                    ['Dinsdag', hours.dinsdag],
                    ['Woensdag', hours.woensdag],
                    ['Donderdag', hours.donderdag],
                    ['Vrijdag', hours.vrijdag],
                    ['Zaterdag', hours.zaterdag],
                  ] as [string, string][]
                ).map(([day, time]) => (
                  <li key={day} className="flex justify-between gap-4">
                    <span className="text-gray-500">{day}</span>
                    <span className={time === 'Gesloten' ? 'text-red-500 font-medium' : 'font-medium text-gray-800'}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diensten tabs preview */}
            <div className="lg:col-span-2">
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {/* Tab headers */}
                <div className="flex border-b border-gray-200 overflow-x-auto">
                  {config.services.map((s, i) => (
                    <div
                      key={s.id}
                      className="px-5 py-3 text-sm font-semibold whitespace-nowrap flex-shrink-0"
                      style={
                        i === 0
                          ? { color: p, borderBottom: `2px solid ${p}` }
                          : { color: '#6b7280', borderBottom: '2px solid transparent' }
                      }
                    >
                      {s.name}
                    </div>
                  ))}
                </div>
                {/* First service content */}
                <div className="p-6">
                  <p className="font-semibold text-gray-700 mb-3">Zonder afspraak!</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 mb-4">
                    {config.services[0].features?.map((f) => (
                      <p key={f} className="text-sm text-gray-600 flex items-center gap-2">
                        <span style={{ color: p }}>•</span> {f}
                      </p>
                    ))}
                  </div>
                  {config.services[0].priceLabel && (
                    <p className="text-sm font-bold mt-3" style={{ color: p }}>
                      {config.services[0].priceLabel}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4 text-right">
                <Link
                  to={config.basePath + '/diensten'}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: p }}
                >
                  Alle diensten bekijken →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Waarom kiezen voor {config.name}?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Vakkundigheid, betrouwbaarheid en persoonlijk contact — dat is waar wij voor staan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Onze Diensten
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{config.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                  {s.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{s.description}</p>
                {s.priceLabel && (
                  <p className="font-semibold text-sm" style={{ color: p }}>
                    {s.priceLabel}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Alle Diensten Bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryDark }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" style={{ color: p }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold" style={{ color: config.colors.text }}>{t.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-green-200 text-sm">
            ★ 4.4 / 5 — gebaseerd op 27 beoordelingen
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kom langs of neem contact op</h2>
          <p className="text-xl mb-2 opacity-90">Paardestraat 16, 6131 HC Sittard</p>
          <p className="text-lg mb-8 opacity-80">
            {config.contact.phone} &nbsp;|&nbsp; {config.contact.mobile}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/contact'}
              className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: p }}
            >
              Neem Contact Op
            </Link>
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-10 py-4 border-2 border-white font-semibold rounded-xl hover:bg-white transition-colors text-white hover:text-green-700"
            >
              Bekijk Diensten
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
