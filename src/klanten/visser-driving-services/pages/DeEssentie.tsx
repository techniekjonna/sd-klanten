import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const DeEssentie = () => {
  const accent = config.colors.accent || '#C9A84C';

  return (
    <Layout>
      <section
        className="relative py-28 flex items-end"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>De essentie</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Wat ons drijft</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accent }}>Onze kernwaarden</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
            Gedrevenheid, vakmanschap & integriteit
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Bij Visser Driving Services staat de cliënt altijd centraal. Wij geloven dat uitstekend chauffeursdienstverlening meer is dan simpelweg rijden van A naar B. Het gaat om vertrouwen, discretie en de zekerheid dat u altijd in goede handen bent.
            </p>
            <p>
              Onze chauffeurs worden geselecteerd op vakmanschap, professionaliteit en integriteit. Elke chauffeur is in het bezit van de hoogste certificeringen in de branche: CCV-D1, CCV-D2 en CORTEX SRO-D3.
            </p>
            <p>
              Wij anticiperen op uw behoeften en leveren all-encompassing support — zodat u zich volledig kunt focussen op wat voor u belangrijk is.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F7F5F1' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Gedrevenheid', desc: 'Wij gaan altijd de extra stap voor onze cliënten. Geen compromissen op kwaliteit.' },
              { title: 'Vakmanschap', desc: 'Gecertificeerde professionals met jarenlange ervaring in directievervoer.' },
              { title: 'Integriteit', desc: 'Absolute discretie en eerlijkheid zijn de basis van elke samenwerking.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 border-t-2" style={{ borderColor: accent }}>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
