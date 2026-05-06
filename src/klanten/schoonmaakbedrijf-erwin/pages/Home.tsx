import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

export const Home = () => (
  <Layout>
    {/* Hero */}
    <section
      className="relative min-h-[92vh] flex items-center"
      style={{
        backgroundImage: `url(${config.hero.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.88) 55%, rgba(15,23,42,0.35))' }} />
      <div className="relative container mx-auto px-4">
        <div className="max-w-xl">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 px-4 py-2 rounded-full border"
            style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)', backgroundColor: 'rgba(255,255,255,0.08)' }}
          >
            📍 Geleen · Zuid-Limburg · Actief sinds 2009
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-white">
            {config.hero.title}{' '}
            <span style={{ color: '#93C5FD' }}>{config.hero.highlight}</span>
          </h1>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed">
            {config.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={config.basePath + config.hero.ctaLink}
              className="px-8 py-4 font-bold text-white rounded-xl transition-all hover:scale-105 shadow-xl shadow-blue-900/40"
              style={{ backgroundColor: c.primary }}
            >
              {config.hero.cta}
            </Link>
            <Link
              to={config.basePath + config.hero.ctaSecondaryLink}
              className="px-8 py-4 font-semibold rounded-xl border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              {config.hero.ctaSecondary}
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 mt-12 text-sm text-blue-200">
            {['KvK 14110743', 'Eenmanszaak — persoonlijk contact', 'Streepvrij gegarandeerd'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Waarom Erwin — blauw met donkerblauwe cards */}
    <section style={{ backgroundColor: c.primary }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Waarom kiezen voor Erwin?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Vakmanschap dat u kunt vertrouwen
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 text-center hover:-translate-y-1 transition-transform"
              style={{ backgroundColor: c.primaryDark }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-blue-300 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Zo werkt het — donkerblauw */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Werkwijze</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">{config.werkwijze.title}</h2>
          <p className="text-blue-300 mt-3 max-w-lg mx-auto text-sm">{config.werkwijze.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.werkwijze.steps.map((step, i) => (
            <div key={i} className="relative">
              {i < config.werkwijze.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                />
              )}
              <div
                className="rounded-2xl p-7 text-center h-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 font-black text-white relative z-10"
                  style={{ backgroundColor: c.primary }}
                >
                  {step.icon}
                </div>
                <p className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-wide">Stap {i + 1}</p>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-300 text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Diensten — blauw */}
    <section style={{ backgroundColor: c.primary }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Wat wij doen</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">Onze Diensten</h2>
          <p className="text-blue-200 mt-3 max-w-xl mx-auto text-sm">{config.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.services.slice(0, 3).map((s) => (
            <div
              key={s.id}
              className="rounded-2xl p-7 hover:-translate-y-1 transition-transform"
              style={{ backgroundColor: c.primaryDark }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.name}</h3>
              <p className="text-blue-300 text-sm leading-relaxed mb-4 line-clamp-3">{s.description}</p>
              {s.priceLabel && (
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  {s.priceLabel}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to={config.basePath + '/diensten'}
            className="inline-block px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 text-white border-2 border-white/30 hover:bg-white/10"
          >
            Alle Diensten Bekijken →
          </Link>
        </div>
      </div>
    </section>

    {/* Werkgebied — donkerblauw */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Wij komen naar u toe</p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Werkgebied Zuid-Limburg</h2>
        <p className="text-blue-300 mb-10 max-w-lg mx-auto text-sm">
          Gevestigd in Geleen en actief in heel Zuid-Limburg. Staat uw gemeente er niet bij? Bel ons.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {config.werkgebied.map((stad) => (
            <span
              key={stad}
              className="px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              {stad}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials — blauw */}
    <section style={{ backgroundColor: c.primary }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Ervaringen</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">Wat klanten zeggen</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-7"
              style={{ backgroundColor: c.primaryDark }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-blue-100 italic mb-6 leading-relaxed text-sm">"{t.text}"</p>
              <div>
                <p className="font-bold text-white text-sm">{t.name}</p>
                {t.role && <p className="text-blue-400 text-xs mt-0.5">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — donkerblauw */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-20 text-center">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Direct starten</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Klaar voor kristalhelder schone ramen?</h2>
        <p className="text-blue-300 mb-10 max-w-lg mx-auto">
          Maak direct een afspraak of stuur een WhatsApp-bericht. Wij reageren altijd snel!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={config.basePath + '/afspraak'}
            className="px-10 py-4 font-bold text-white rounded-xl transition-all hover:scale-105 shadow-xl"
            style={{ backgroundColor: c.primary }}
          >
            Afspraak Maken
          </Link>
          <a
            href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 font-bold text-white rounded-xl transition-all hover:scale-105 shadow-xl"
            style={{ backgroundColor: '#25D366' }}
          >
            WhatsApp Ons
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
