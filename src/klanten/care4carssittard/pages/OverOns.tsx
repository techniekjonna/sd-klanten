import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const fontCondensed = "'Teko', sans-serif";
const fontBody = "'Barlow', sans-serif";

export const OverOns = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-20 text-white text-center"
        style={{ backgroundColor: '#1F2937' }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 uppercase tracking-wide"
            style={{ fontFamily: fontCondensed }}
          >
            Over Ons
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Al jaren uw betrouwbare partner voor APK en onderhoud in Sittard.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: p }}
              >
                RDW Erkend Garagebedrijf
              </p>
              <h2
                className="text-4xl font-extrabold text-gray-900 mb-6 uppercase"
                style={{ fontFamily: fontCondensed }}
              >
                Vakkundig & Betrouwbaar
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij voeren onderhoud, reparaties en APK uit voor alle merken personenauto's en
                bedrijfswagens. Wij hanteren daarbij de, door de fabrikant voorgeschreven,
                onderhoudsschema's.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Door onze jarenlange ervaring zijn wij in staat alle voorkomende reparaties aan uw
                auto vakkundig uit te voeren. Door onze efficiënte werkwijze voeren wij de
                werkzaamheden tegen aanzienlijk scherpere tarieven uit dan de meeste dealerbedrijven.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Onze moderne werkplaats is voorzien van alle benodigde en gespecialiseerde apparatuur
                om u optimaal van dienst te kunnen zijn.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&h=600&fit=crop"
                alt="Care4Cars Sittard werkplaats"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#E5E7EB' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-extrabold text-gray-900 mb-3 uppercase"
              style={{ fontFamily: fontCondensed }}
            >
              Onze Werkwijze
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {config.werkwijze.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5 border-2"
                  style={{ borderColor: p, backgroundColor: p, color: '#fff' }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: fontCondensed, letterSpacing: '0.02em' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 text-white" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '9.8', label: 'Gemiddeld klantcijfer', sub: '35+ beoordelingen' },
              { number: 'RDW', label: 'Erkend garagebedrijf', sub: 'APK benzine & diesel' },
              { number: '3.5T', label: 'Max. voertuiggewicht', sub: 'Personenauto & camper' },
            ].map((stat, i) => (
              <div key={i}>
                <p
                  className="text-5xl font-extrabold mb-1"
                  style={{ fontFamily: fontCondensed }}
                >
                  {stat.number}
                </p>
                <p className="text-lg font-semibold">{stat.label}</p>
                <p className="text-red-200 text-sm mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-extrabold text-gray-900 mb-4 uppercase"
            style={{ fontFamily: fontCondensed }}
          >
            Maak een Afspraak
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto" style={{ fontFamily: fontBody }}>
            Plan direct online uw APK of onderhoud in. Snel, makkelijk en vrijblijvend.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/agenda'}
              className="px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow"
              style={{ backgroundColor: p, fontFamily: fontBody }}
            >
              Online Afspraak Maken
            </Link>
            <a
              href={`mailto:${config.contact.email}`}
              className="px-8 py-4 font-semibold rounded-xl border-2 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors"
              style={{ borderColor: '#1F2937', fontFamily: fontBody }}
            >
              Stuur een E-mail
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
