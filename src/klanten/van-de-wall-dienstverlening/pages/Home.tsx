import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BookingWidget } from '../components/BookingWidget';
import { config } from '../config';

export const Home = () => {
  const gold = config.colors.primary;
  const dark = '#0E0D0B';

  return (
    <Layout>
      {/* Hero with overlay + booking widget */}
      <section
        className="relative min-h-screen flex flex-col justify-end"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />

        {/* Hero text */}
        <div className="relative container mx-auto px-4 pt-32 pb-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 text-[#B8972A]">
              {config.tagline}
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] text-white mb-6">
              {config.hero.title}{' '}
              <span style={{ color: gold }}>{config.hero.highlight}</span>
              <br />
              <span className="text-white">in Maastricht</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              {config.hero.subtitle}
            </p>
          </div>

          {/* Booking widget */}
          <div className="max-w-4xl">
            <BookingWidget />
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="relative h-8 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Stats strip */}
      <section className="bg-[#0E0D0B] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Bereikbaar' },
              { value: '100%', label: 'Stipt & Betrouwbaar' },
              { value: '4+', label: 'Voertuigen' },
              { value: '★★★★★', label: 'Klantbeoordeling' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold" style={{ color: gold }}>{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: gold }}>
              Waarom Vandewall?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: dark }}>
              Kwaliteit die u voelt
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="group border border-gray-100 p-8 hover:border-[#B8972A] hover:shadow-lg transition-all"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-2xl mb-5 border group-hover:bg-[#B8972A] group-hover:border-[#B8972A] transition-all"
                  style={{ borderColor: gold, color: gold }}
                >
                  {f.icon}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: dark }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="py-20" style={{ backgroundColor: '#F9F6EE' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: gold }}>
              Wat wij aanbieden
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: dark }}>
              Onze Diensten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config.services.slice(0, 4).map((s) => (
              <div
                key={s.id}
                className="bg-white border border-gray-100 p-7 hover:border-[#B8972A] hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <h3 className="text-base font-bold mb-1" style={{ color: dark }}>{s.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                    <p className="mt-3 text-xs font-semibold" style={{ color: gold }}>{s.priceLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-9 py-3.5 text-sm font-bold uppercase tracking-widest border-2 transition-colors"
              style={{ borderColor: gold, color: gold }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = gold;
                (e.currentTarget as HTMLAnchorElement).style.color = dark;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = gold;
              }}
            >
              Alle Diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* About strip with image */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="min-h-72 lg:min-h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(https://www.vandewalldienstverlening.nl/img/mainsfr06_xl.jpg)` }}
          />
          <div className="bg-[#0E0D0B] px-10 py-16 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: gold }}>
              Over Ons
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Vervoer met karakter
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {config.about.story}
            </p>
            <ul className="space-y-2 mb-8">
              {config.about.values.map((v, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <span style={{ color: gold }}>✦</span> {v}
                </li>
              ))}
            </ul>
            <Link
              to={config.basePath + '/over-ons'}
              className="self-start px-7 py-3 text-sm font-bold uppercase tracking-widest text-[#0E0D0B] transition-opacity hover:opacity-90"
              style={{ backgroundColor: gold }}
            >
              Meer Over Ons
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: gold }}>
              Ervaringen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: dark }}>
              Wat onze klanten zeggen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div key={t.id} className="border border-gray-100 p-8 hover:border-[#B8972A] transition-colors">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-sm" style={{ color: gold }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8972A]/20 flex items-center justify-center text-xs font-bold" style={{ color: gold }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: dark }}>{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(https://www.vandewalldienstverlening.nl/img/mainsfr09_xl.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0E0D0B]/85" />
        <div className="relative container mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: gold }}>
            Klaar voor vertrek?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Boek vandaag uw rit
          </h2>
          <p className="text-gray-300 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            Bereikbaar dag en nacht. Bel ons direct of stuur een bericht via WhatsApp voor een snelle bevestiging.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#0E0D0B] transition-opacity hover:opacity-90"
              style={{ backgroundColor: gold }}
            >
              Bel Nu: {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-10 py-4 text-sm font-bold uppercase tracking-widest text-white border border-white hover:bg-white hover:text-[#0E0D0B] transition-colors"
            >
              Stuur Bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
