import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BookingWidget } from '../components/BookingWidget';
import { config } from '../config';

export const Home = () => {
  const y = config.colors.primary;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.5))' }} />

        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ backgroundColor: 'rgba(245,197,24,0.15)', color: y, border: '1px solid rgba(245,197,24,0.3)' }}>
                🚕 Regio Westelijke Mijnstreek
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                {config.hero.title}{' '}
                <span style={{ color: y }}>{config.hero.highlight}</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                {config.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="px-7 py-3.5 font-bold rounded-xl text-sm transition-opacity hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: y, color: '#111' }}
                >
                  📞 Bel {config.contact.phoneDisplay}
                </a>
                <Link
                  to={config.basePath + '/bestellen'}
                  className="px-7 py-3.5 font-bold text-sm border-2 border-white text-white rounded-xl hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Rit Bestellen
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-10">
                {['KIWA gecertificeerd', '24/7 beschikbaar', 'Vaste ritprijzen'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm" style={{ color: '#aaa' }}>
                    <span style={{ color: y }}>✓</span> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: booking widget */}
            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-sm mb-1.5" style={{ color: '#ffffff' }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#888' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: config.colors.dark }}>
              Onze Diensten
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Van particulier vervoer tot zakelijke ritten en airport transfers — wij zorgen dat u veilig en comfortabel aankomt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all group border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-colors"
                  style={{ backgroundColor: '#f5f5f5' }}
                >
                  {s.icon}
                </div>
                <h3 className="font-bold text-base mb-2.5" style={{ color: config.colors.dark }}>{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features?.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                      <span style={{ color: y }}>✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: '#fff' }}>Ons werkgebied</h2>
          <p className="text-sm mb-8" style={{ color: '#888' }}>Wij rijden door heel Zuid-Limburg, inclusief:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {config.serviceArea.map((place) => (
              <span
                key={place}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: '#1e1e1e', color: '#ccc', border: '1px solid #333' }}
              >
                📍 {place}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm" style={{ color: '#666' }}>En alle overige bestemmingen op aanvraag</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-14" style={{ color: config.colors.dark }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="p-7 rounded-2xl relative" style={{ backgroundColor: '#f9f9f9', border: '1px solid #eeeeee' }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: y }} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-5 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: y, color: '#111' }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: config.colors.dark }}>{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 text-center" style={{ backgroundColor: y }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#111' }}>
            Direct een rit boeken?
          </h2>
          <p className="mb-8 max-w-md mx-auto text-sm" style={{ color: '#333' }}>
            Bel ons direct of stuur een bericht. Wij reageren zo snel mogelijk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-colors shadow-lg"
            >
              📞 Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 font-bold rounded-xl border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Stuur een Bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
