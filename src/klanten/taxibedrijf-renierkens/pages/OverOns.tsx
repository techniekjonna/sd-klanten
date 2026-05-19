import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const accent = config.colors.accent;

export const OverOns = () => {
  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{ backgroundColor: config.colors.text }}
      >
        {/* Decorative circle */}
        <div
          className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: p }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: accent }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide"
            style={{ backgroundColor: 'rgba(200,150,62,0.2)', color: accent, border: `1px solid ${accent}` }}
          >
            Ons verhaal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{config.about.title}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">{config.tagline}</p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: p }} className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { value: '28+', label: 'Jaar ervaring' },
              { value: 'TX', label: 'Keurmerk gecertificeerd' },
              { value: '24/7', label: 'Bereikbaar' },
              { value: 'ZL', label: 'Regio Zuid-Limburg' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-extrabold" style={{ color: accent }}>{value}</p>
                <p className="text-sm opacity-80 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: accent }} />
              <h2 className="text-3xl font-bold mb-6" style={{ color: config.colors.text }}>
                Ons Verhaal
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{config.about.mission}</p>

              {/* KVK badge */}
              <div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border"
                style={{ borderColor: config.colors.primaryLight, backgroundColor: config.colors.primaryLight }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: p }}>
                  <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-xs text-gray-500">KVK-nummer</p>
                  <p className="font-bold text-sm" style={{ color: config.colors.text }}>
                    Taxibedrijf Renierkens B.V. &mdash; {config.contact.kvk}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={config.about.image}
                alt="Taxibedrijf Renierkens"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TX-Keurmerk highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 text-4xl font-extrabold text-white"
                  style={{ backgroundColor: p }}
                >
                  TX
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-2" style={{ color: config.colors.text }}>
                    TX-Keurmerk Gecertificeerd
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Het TX-Keurmerk is het kwaliteitskeurmerk voor de taxibranche in Nederland. Als gecertificeerd bedrijf voldoen wij aan strenge eisen op het gebied van veiligheid, hygi&euml;ne, opleiding van chauffeurs en klantvriendelijkheid. U rijdt met de zekerheid dat alles in orde is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1530675669163-6f4c0f2bafd5?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ons team - Taxibedrijf Renierkens"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: accent }} />
              <h2 className="text-3xl font-bold mb-6" style={{ color: config.colors.text }}>
                Onze Kernwaarden
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wij rijden niet zomaar van A naar B. Elke rit begint met aandacht voor de persoon die instapt. Of het nu een spoedrit naar het ziekenhuis is of een ontspannen airportrit &mdash; wij behandelen elke passagier met respect en persoonlijke aandacht.
              </p>
              <div className="space-y-4">
                {config.about.values.map((value, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gray-50 rounded-xl p-4"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: p }}
                    >
                      {i + 1}
                    </div>
                    <p className="font-medium text-sm" style={{ color: config.colors.text }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: config.colors.text }}>
            Wat ons onderscheidt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-sm font-extrabold text-white"
                  style={{ backgroundColor: p }}
                >
                  {i + 1}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>
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
          <h2 className="text-3xl font-bold mb-3">Maak kennis met Renierkens</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Neem contact op voor meer informatie of een vrijblijvende offerte voor contractvervoer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0455327470"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: accent, color: '#fff' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
              </svg>
              045 532 7470
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="inline-block px-8 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: p }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
