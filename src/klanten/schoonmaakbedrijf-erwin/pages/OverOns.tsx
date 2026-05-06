import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

const bedrijfsgegevens = [
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
];

export const OverOns = () => (
  <Layout>
    {/* Page header */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-24 text-center">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Wie zijn wij</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{config.about.title}</h1>
        <p className="text-blue-300 max-w-xl mx-auto">{config.tagline}</p>
      </div>
    </section>

    {/* Verhaal */}
    <section style={{ backgroundColor: c.primary }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-6 px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              Actief sinds {config.opgericht}
            </span>
            <h2 className="text-3xl font-black text-white mb-6">Het Verhaal van Erwin</h2>
            <p className="text-blue-100 leading-relaxed mb-5">{config.about.story}</p>
            <p className="text-blue-100 leading-relaxed">{config.about.mission}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { getal: '15+', label: 'Jaar ervaring' },
                { getal: '100%', label: 'Persoonlijk contact' },
              ].map(({ getal, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl text-center"
                  style={{ backgroundColor: c.primaryDark }}
                >
                  <p className="text-3xl font-black text-white mb-1">{getal}</p>
                  <p className="text-blue-300 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={config.about.image}
              alt="Professioneel glazenwassen"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Bedrijfsgegevens */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Officieel</p>
          <h2 className="text-2xl font-black text-white">Bedrijfsgegevens</h2>
        </div>
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
          {bedrijfsgegevens.map(({ label, value }, i) => (
            <div
              key={label}
              className="flex justify-between px-6 py-4 text-sm"
              style={{ borderBottom: i < bedrijfsgegevens.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <span className="text-blue-400">{label}</span>
              <span className="font-semibold text-white text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Kernwaarden */}
    <section style={{ backgroundColor: c.primary }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Waar wij voor staan</p>
          <h2 className="text-3xl font-black text-white">Onze Kernwaarden</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {config.about.values.map((value, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl p-5"
              style={{ backgroundColor: c.primaryDark }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0 text-sm"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                {i + 1}
              </div>
              <p className="font-semibold text-white text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Werkgebied */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Werkgebied</p>
        <h2 className="text-2xl font-black text-white mb-3">Actief in heel Zuid-Limburg</h2>
        <p className="text-blue-300 max-w-lg mx-auto mb-10 text-sm">
          Gevestigd in Geleen bedienen wij de hele regio. Staat uw gemeente er niet bij? Neem contact op.
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
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

    {/* Wat ons onderscheidt */}
    <section style={{ backgroundColor: c.primary }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Voordelen</p>
          <h2 className="text-3xl font-black text-white">Wat ons onderscheidt</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div
              key={i}
              className="text-center p-7 rounded-2xl"
              style={{ backgroundColor: c.primaryDark }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
              <p className="text-blue-300 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-white mb-4">Maak kennis met Erwin</h2>
        <p className="text-blue-300 mb-8">
          Plan een afspraak en ontdek wat wij voor uw ramen kunnen betekenen.
        </p>
        <Link
          to={config.basePath + '/afspraak'}
          className="inline-block px-10 py-4 font-bold text-white rounded-xl transition-all hover:scale-105"
          style={{ backgroundColor: c.primary }}
        >
          Afspraak Maken
        </Link>
      </div>
    </section>
  </Layout>
);
