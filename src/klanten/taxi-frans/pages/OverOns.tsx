import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const p = config.colors.primary;
  const cfg = config as any;

  return (
    <Layout>
      <section className="relative py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{config.about.title}</h1>
          <p className="text-white/70 max-w-xl mx-auto">{config.tagline}</p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6" style={{ color: config.colors.text }}>Ons Verhaal</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={config.about.image}
                alt={config.name}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bedrijfsgegevens */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10" style={{ color: config.colors.text }}>Algemene Gegevens</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: 'Bedrijfsnaam', value: 'TaxiFrans' },
                { label: 'Eigenaar', value: 'Frans C. Ritzerfeld' },
                { label: 'Adres', value: config.contact.address },
                { label: 'Telefoon', value: cfg.contact.phoneDisplay },
                { label: 'E-mail', value: config.contact.email },
                { label: 'KvK', value: cfg.kvk },
                { label: 'BTW nummer', value: cfg.btw },
                { label: 'Bankrekening BIC', value: 'RABONL2U' },
                { label: 'Bankrekening IBAN', value: 'NL96RABO0155014609' },
                { label: 'Vergunningsnummer', value: 'P-78231' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2">
                  <span className="text-gray-400 font-medium min-w-[140px]">{label}:</span>
                  <span className="font-semibold" style={{ color: config.colors.text }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: config.colors.text }}>Onze Kernwaarden</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0"
                  style={{ backgroundColor: p }}
                >
                  {i + 1}
                </div>
                <p className="font-medium" style={{ color: config.colors.text }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: config.colors.text }}>Wat ons onderscheidt</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Klaar om te rijden?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Wij staan 24 uur per dag voor u klaar. Bel of mail ons vandaag nog.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${cfg.contact.phone}`}
              className="px-8 py-4 font-bold rounded-xl text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: '#E8A020', color: p }}
            >
              📞 {cfg.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 font-bold rounded-xl text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
