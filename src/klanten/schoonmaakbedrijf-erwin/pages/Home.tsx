import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Home = () => {
  const p = config.colors.primary;
  const pd = config.colors.primaryDark;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,23,42,0.65)' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
              style={{ backgroundColor: `${p}30`, border: `1px solid ${p}60`, color: config.colors.primaryLight }}
            >
              <span>📍</span> Geleen · Zuid-Limburg · Actief sinds 2009
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {config.hero.title}{' '}
              <span style={{ color: config.colors.primaryLight }}>{config.hero.highlight}</span>
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

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>KvK {config.kvk}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Eenmanszaak — persoonlijk contact</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Geen strepen gegarandeerd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Erwin */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Waarom kiezen voor Schoonmaakbedrijf Erwin?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Meer dan 15 jaar ervaring in Zuid-Limburg. Persoonlijk, betrouwbaar en altijd kristalhelder resultaat.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="text-center p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: pd }}>
              {config.werkwijze.title}
            </h2>
            <p className="text-blue-700 max-w-xl mx-auto">{config.werkwijze.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.werkwijze.steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {i < config.werkwijze.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-blue-200" />
                )}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 relative z-10 bg-white shadow-md"
                >
                  {step.icon}
                </div>
                <div
                  className="text-xs font-bold mb-1"
                  style={{ color: p }}
                >
                  Stap {i + 1}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: pd }}>{step.title}</h3>
                <p className="text-blue-700 text-sm leading-relaxed">{step.description}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.services.slice(0, 3).map((s) => (
              <div
                key={s.id}
                className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="h-2" style={{ backgroundColor: p }} />
                <div className="p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: config.colors.text }}>
                    {s.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">{s.description}</p>
                  {s.priceLabel && (
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: config.colors.primaryLight, color: p }}
                    >
                      {s.priceLabel}
                    </span>
                  )}
                </div>
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

      {/* Werkgebied */}
      <section className="py-16" style={{ backgroundColor: pd }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Werkgebied Zuid-Limburg</h2>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">
            Wij zijn actief in Geleen en omliggende gemeenten. Twijfelt u of wij bij u in de buurt komen? Neem gerust contact op.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {config.werkgebied.map((stad) => (
              <span
                key={stad}
                className="px-4 py-2 rounded-full text-sm font-medium text-white border border-blue-600"
                style={{ backgroundColor: `${p}40` }}
              >
                {stad}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" style={{ color: p }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: config.colors.text }}>{t.name}</p>
                  {t.role && <p className="text-sm text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kristalhelder resultaat?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-xl mx-auto">
            Maak direct een afspraak of stuur een WhatsApp-bericht. Wij reageren snel!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/afspraak'}
              className="px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: p }}
            >
              Afspraak Maken
            </Link>
            <a
              href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-colors text-white"
            >
              WhatsApp Ons
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
