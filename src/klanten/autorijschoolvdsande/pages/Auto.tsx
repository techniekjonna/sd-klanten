import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;
const gradDark   = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;

const voordelen = [
  { icon: '🛡️', text: 'Geavanceerde veiligheidssystemen' },
  { icon: '❄️', text: 'Winterbanden in koude maanden' },
  { icon: '🌬️', text: 'Airconditioning voor de zomer' },
  { icon: '🌿', text: 'Rookvrij voertuig' },
  { icon: '🚪', text: 'Open schuifdak' },
  { icon: '🔧', text: 'Moderne stuurbekrachtiging' },
  { icon: '📱', text: 'Touchscreen infotainment' },
  { icon: '✅', text: 'CBR-goedgekeurd voor rijexamen' },
];

export const Auto = () => (
  <Layout>
    {/* Hero banner */}
    <section className="relative h-72 flex items-end overflow-hidden">
      <img src="https://images.unsplash.com/photo-1555353540-64580b51c258?w=1920&h=600&fit=crop"
        alt="Lesauto" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: gradDark, opacity: 0.85 }} />
      <div className="relative container mx-auto px-4 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">De lesauto</h1>
      </div>
    </section>

    {/* De lesauto — tekst */}
    <section className="py-20" style={{ backgroundColor: c.primaryLight }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: c.primary }}>Mercedes · Lesauto</span>
            <h2 className="text-4xl font-extrabold leading-tight mb-6" style={{ color: c.text }}>
              De modernste lesauto van Sittard-Geleen.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: c.textBody }}>
              <p>
                Waar veel autorijscholen bezuinigen op de lesauto ben je bij Autorijschool van der Sande van alle gemakken voorzien. Zo rijd je in een <strong style={{ color: c.text }}>gloednieuwe Mercedes</strong> voorzien van de modernste technologie en veiligheidssystemen van nu.
              </p>
              <p>
                In de wintermaanden is de auto uiteraard voorzien van winterbanden — dit vergroot ook de kans dat je tussentijdse toets of rijexamen gewoon doorgaat ondanks slecht weer.
              </p>
              <p>
                De auto is rookvrij en voorzien van airco voor de hete zomermaanden. Iedereen vindt in deze auto een perfecte zit- en stuurhouding. Mijn grootste leerling was <strong style={{ color: c.text }}>210 cm</strong> en de kleinste <strong style={{ color: c.text }}>146 cm</strong>!
              </p>
              <p>
                Een goede lesauto is zeker in de eerste fase van groot belang om de auto onder controle te krijgen — hierdoor kun je je sneller richten op de verkeerssituaties om je heen.
              </p>
            </div>
          </div>

          {/* Foto */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop"
                alt="Witte lesauto" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Voordelen grid */}
    <section className="py-20 relative overflow-hidden" style={{ background: gradBanner }}>
      <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"
        style={{ backgroundColor: 'white' }} />
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white mb-14">De voordelen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {voordelen.map((v, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">{v.icon}</span>
              <p className="text-sm font-semibold text-white/85 leading-snug pt-1">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-white text-center" style={{ background: gradDark }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-4">Wil je kennismaken?</h2>
        <p className="text-white/70 mb-8 text-lg">Rij binnenkort in de mooiste lesauto van Sittard-Geleen.</p>
        <Link to={config.basePath + '/contact'}
          className="inline-block px-10 py-4 font-bold rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          style={{ backgroundColor: 'white', color: c.accent }}>
          Neem contact op
        </Link>
      </div>
    </section>
  </Layout>
);
