import { Link, useParams } from 'react-router-dom';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const DARK = config.colors.dark;

export const DienstDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = config.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Dienst niet gevonden</h1>
          <Link
            to={config.basePath + '/diensten'}
            className="px-6 py-3 rounded-xl font-bold text-sm"
            style={{ backgroundColor: PRIMARY, color: DARK }}
          >
            Terug naar diensten
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = config.services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link to={config.basePath + '/'} className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to={config.basePath + '/diensten'} className="hover:text-white transition-colors">Diensten</Link>
            <span>/</span>
            <span className="text-white">{service.name}</span>
          </nav>
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold mb-4"
              style={{ backgroundColor: PRIMARY, color: DARK }}
            >
              <span className="text-lg">{service.icon}</span>
              {service.name}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{service.name}</h1>
            <p className="text-lg text-white/80 leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Over {service.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">{service.description}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Wat is inbegrepen?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      <svg className="w-4 h-4" style={{ color: DARK }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>

            {/* Sidebar */}
            <div>
              <div
                className="rounded-2xl p-6 sticky top-24"
                style={{ backgroundColor: DARK }}
              >
                <h3 className="text-lg font-bold text-white mb-4">Boek {service.name}</h3>
                <p className="text-white/60 text-sm mb-5">
                  Bel ons direct of stuur een bericht voor een vrijblijvende offerte.
                </p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm mb-3 transition-all hover:opacity-90"
                  style={{ backgroundColor: PRIMARY, color: DARK }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {config.contact.phoneDisplay}
                </a>
                <Link
                  to={config.basePath + '/contact'}
                  className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm border-2 border-white/20 text-white hover:border-white/50 transition-colors"
                >
                  Stuur een bericht
                </Link>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {config.contact.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section style={{ backgroundColor: config.colors.surface }} className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Bekijk ook onze andere diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                to={config.basePath + '/diensten/' + s.slug}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-5 hover:border-yellow-400 hover:shadow-md transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                  style={{ backgroundColor: `${PRIMARY}28` }}
                >
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
