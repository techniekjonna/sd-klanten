import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const accent = config.colors.accent || '#C9A84C';

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 flex items-end"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1604425008631-5ed841ff749c?q=80&w=1470&auto=format&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>
            Diensten
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Onze Service
          </h1>
        </div>
      </section>

      {/* Diensten grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>
              Wat wij bieden
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Professioneel vervoer voor elke situatie
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Wij leveren maatwerk. Of het nu gaat om dagelijks directievervoer, luchthaventransfers of begeleiding bij bijzondere gelegenheden — wij staan voor u klaar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => (
              <div key={s.id} className="border border-gray-100 p-10 hover:border-gray-900 transition-all group">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h3 className="text-base font-bold uppercase tracking-wide mb-3 text-gray-900">{s.name}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{s.description}</p>
                {s.features && (
                  <ul className="space-y-2.5 mb-6">
                    {s.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}
                {s.priceLabel && (
                  <span
                    className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                    style={{ backgroundColor: '#F7F5F1', color: '#1A1A1A' }}
                  >
                    {s.priceLabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-24" style={{ backgroundColor: '#111111' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>
              Onze werkwijze
            </p>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Zo werkt het
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Aanvraag', desc: 'U stuurt uw aanvraag via het formulier of belt ons direct.' },
              { num: '02', title: 'Intake', desc: 'Wij bespreken uw wensen en stellen een maatwerkoplossing samen.' },
              { num: '03', title: 'Bevestiging', desc: 'U ontvangt een bevestiging met uw gecertificeerde chauffeur.' },
              { num: '04', title: 'Vervoer', desc: 'Uw chauffeur staat stipt op tijd klaar. Discreet en professioneel.' },
            ].map((step) => (
              <div key={step.num} className="border-t-2 pt-6" style={{ borderColor: accent }}>
                <p className="text-4xl font-black mb-3" style={{ color: accent }}>{step.num}</p>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-white">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>
            Offerte aanvragen
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interesse in onze diensten?</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
            Neem contact op voor een vrijblijvende offerte op maat. Wij reageren binnen 24 uur.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            Offerte Aanvragen
          </Link>
        </div>
      </section>
    </Layout>
  );
};
