import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const p = config.colors.primary;
  const pd = config.colors.primaryDark;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: pd }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{config.about.title}</h1>
          <p className="text-blue-200 max-w-xl mx-auto">{config.tagline}</p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
                style={{ backgroundColor: config.colors.primaryLight, color: p }}
              >
                Actief sinds {config.opgericht}
              </div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: config.colors.text }}>
                Het Verhaal van Erwin
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl text-center" style={{ backgroundColor: config.colors.primaryLight }}>
                  <p className="text-3xl font-extrabold mb-1" style={{ color: p }}>15+</p>
                  <p className="text-sm text-gray-600">Jaar ervaring</p>
                </div>
                <div className="p-4 rounded-xl text-center" style={{ backgroundColor: config.colors.primaryLight }}>
                  <p className="text-3xl font-extrabold mb-1" style={{ color: p }}>100%</p>
                  <p className="text-sm text-gray-600">Tevreden klanten</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={config.about.image}
                alt="Schoonmaakbedrijf Erwin aan het werk"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bedrijfsgegevens */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: pd }}>
            Bedrijfsgegevens
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
            {[
              { label: 'Bedrijfsnaam', value: 'Schoonmaakbedrijf Erwin' },
              { label: 'KvK-nummer', value: config.kvk },
              { label: 'Rechtsvorm', value: 'Eenmanszaak' },
              { label: 'Hoofdbranche', value: 'Glazenwassen (SBI 81221)' },
              { label: 'Nevenbranche 1', value: 'Schilderwerk (SBI 43340)' },
              { label: 'Nevenbranche 2', value: 'Schoonmaak gebouwen (SBI 8121)' },
              { label: 'Organisatiegrootte', value: '1 werknemer' },
              { label: 'COROP-regio', value: 'Zuid-Limburg' },
              { label: 'Oprichtingsdatum', value: '1 februari 2009' },
              { label: 'Vestigingsplaats', value: 'Geleen' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
              >
                <span className="font-medium text-gray-500">{label}</span>
                <span className="font-semibold text-right" style={{ color: config.colors.text }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Onze Kernwaarden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
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

      {/* Werkgebied */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: config.colors.text }}>
            Ons Werkgebied
          </h2>
          <p className="text-gray-500 text-center max-w-lg mx-auto mb-10">
            Gevestigd in Geleen bedienen wij heel Zuid-Limburg. Hieronder de plaatsen waar wij actief zijn.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {config.werkgebied.map((stad) => (
              <span
                key={stad}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{ borderColor: p, color: p, backgroundColor: config.colors.primaryLight }}
              >
                {stad}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Staat uw gemeente er niet bij? Neem contact op — we kijken graag mee!
          </p>
        </div>
      </section>

      {/* Wat ons onderscheidt */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat ons onderscheidt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
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

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Maak kennis met Erwin</h2>
          <p className="text-lg opacity-90 mb-8">
            Plan een afspraak en ontdek wat wij voor uw ramen kunnen betekenen.
          </p>
          <Link
            to={config.basePath + '/afspraak'}
            className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Afspraak Maken
          </Link>
        </div>
      </section>
    </Layout>
  );
};
