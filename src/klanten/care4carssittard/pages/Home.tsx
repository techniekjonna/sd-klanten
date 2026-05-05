import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const fontCondensed = "'Barlow Condensed', sans-serif";

const FlipCard = ({ item }: { item: (typeof config.werkzaamheden)[number] }) => {
  const [flipped, setFlipped] = useState(false);
  const p = config.colors.primary;

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: '1000px', height: '230px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div>
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3
              className="text-xl font-bold text-gray-900 mb-2 uppercase"
              style={{ fontFamily: fontCondensed, letterSpacing: '0.03em' }}
            >
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.short}</p>
          </div>
          <p className="text-xs font-semibold mt-3 uppercase tracking-wide" style={{ color: p }}>
            Klik voor meer info →
          </p>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#1F2937',
          }}
          className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between text-white"
        >
          <div>
            <h3
              className="text-xl font-bold mb-3 uppercase"
              style={{ fontFamily: fontCondensed, letterSpacing: '0.03em' }}
            >
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">{item.full}</p>
          </div>
          <p className="text-xs font-semibold mt-3 uppercase tracking-wide" style={{ color: p }}>
            ← Klik om terug te gaan
          </p>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  const p = config.colors.primary;

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
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(31,41,55,0.78)' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full inline-block"
              style={{ backgroundColor: p }}
            >
              RDW Erkend Garagebedrijf · Sittard
            </p>
            <h1
              className="text-5xl md:text-7xl font-extrabold leading-none mb-6 uppercase"
              style={{ fontFamily: fontCondensed, letterSpacing: '0.02em' }}
            >
              {config.hero.title}
            </h1>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-xl">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={config.hero.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow-lg"
                style={{ backgroundColor: p }}
              >
                {config.hero.cta}
              </a>
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

      {/* Auto Werkzaamheden */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 uppercase"
              style={{ fontFamily: fontCondensed }}
            >
              Auto Werkzaamheden
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Klik op een kaart voor meer informatie over de dienst.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.werkzaamheden.map((item) => (
              <FlipCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={config.hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow"
              style={{ backgroundColor: p }}
            >
              Direct een Afspraak Maken →
            </a>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&h=600&fit=crop"
                alt="Care4Cars Sittard werkplaats"
                className="w-full h-72 object-cover"
              />
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 uppercase"
                style={{ fontFamily: fontCondensed }}
              >
                Werkwijze
              </h2>
              <div className="space-y-8">
                {config.werkwijze.map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 border-2"
                      style={{ borderColor: p, backgroundColor: '#FEF2F2' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-gray-900 mb-1 uppercase"
                        style={{ fontFamily: fontCondensed, letterSpacing: '0.02em' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-3 uppercase"
              style={{ fontFamily: fontCondensed }}
            >
              Contact
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Heeft u vragen of wilt u een afspraak? Neem gerust contact op.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            {[
              { icon: '📍', label: 'Adres', value: 'Nusterweg 67', sub: '6136 KT Sittard' },
              { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
              { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              { icon: '🕐', label: 'Openingstijden', value: 'Ma–Do: 08:30–17:00', sub: 'Vr: 08:30–16:30 | Za–Zo: Gesloten' },
            ].map(({ icon, label, value, sub, href }) => (
              <div key={label} className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#374151' }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl mx-auto mb-4"
                  style={{ backgroundColor: p }}
                >
                  {icon}
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                {href ? (
                  <a href={href} className="font-semibold text-white text-sm hover:underline block">
                    {value}
                  </a>
                ) : (
                  <p className="font-semibold text-white text-sm">{value}</p>
                )}
                {sub && <p className="text-gray-400 text-xs mt-1">{sub}</p>}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={config.hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow"
              style={{ backgroundColor: p }}
            >
              Online Afspraak Maken
            </a>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-semibold rounded-xl border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Bel Ons Direct
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
