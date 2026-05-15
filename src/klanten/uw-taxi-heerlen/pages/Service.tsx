import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const { darkBlue, yellow, lightBlue, bgLight, text, textLight } = config.colors;

export const Service = () => (
  <Layout>
    {/* Page header */}
    <section className="py-16 text-white" style={{ backgroundColor: darkBlue }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Onze Service</h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: lightBlue }}>
          Comfortabel, betrouwbaar en op maat — voor elk vervoersverzoek staan wij klaar.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="py-20" style={{ backgroundColor: bgLight }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.services.map((s, i) => (
            <div
              key={s.id}
              className="bg-white rounded-2xl p-8 border-2 hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ borderColor: i % 2 === 0 ? lightBlue : yellow }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: bgLight }}
                >
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black mb-2" style={{ color: darkBlue }}>{s.name}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: textLight }}>{s.description}</p>
                  <ul className="space-y-2">
                    {s.features?.map((feat, fi) => (
                      <li key={fi} className="text-sm flex items-center gap-2" style={{ color: text }}>
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: yellow }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Kenmerken */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-3" style={{ color: darkBlue }}>Waarom onze service verschilt</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div key={i} className="text-center p-6 rounded-2xl" style={{ backgroundColor: bgLight }}>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold mb-2" style={{ color: darkBlue }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: textLight }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Servicegebied */}
    <section className="py-16" style={{ backgroundColor: lightBlue }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-black mb-4" style={{ color: darkBlue }}>Ons servicegebied</h2>
        <p className="mb-8" style={{ color: textLight }}>Wij rijden in en rondom de volgende plaatsen:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {config.serviceArea.map(place => (
            <span
              key={place}
              className="px-5 py-2 rounded-full font-bold text-sm"
              style={{ backgroundColor: darkBlue, color: yellow }}
            >
              {place}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="py-20" style={{ backgroundColor: darkBlue }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-5 text-white">Over Uw Taxi Heerlen</h2>
            <p className="mb-4 leading-relaxed" style={{ color: lightBlue }}>{config.about.story}</p>
            <p className="mb-6 leading-relaxed" style={{ color: lightBlue }}>{config.about.mission}</p>
            <ul className="space-y-3">
              {config.about.values.map((v, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: yellow, color: darkBlue }}>✓</span>
                  <span className="text-sm font-medium text-white">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={config.about.image} alt="Uw Taxi Heerlen" className="w-full h-72 object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center" style={{ backgroundColor: yellow }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-4" style={{ color: darkBlue }}>Direct een rit boeken?</h2>
        <p className="mb-8" style={{ color: darkBlue + 'AA' }}>Bel ons of stuur een bericht — wij reageren snel.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: darkBlue, color: yellow }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 font-bold rounded-xl text-sm border-2 hover:bg-black/10 transition-colors"
            style={{ borderColor: darkBlue, color: darkBlue }}
          >
            Contactformulier
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
