import { Link } from 'react-router-dom';
import { config } from '../config';

const yellow = config.colors.primary;
const dark = config.colors.dark;

export const OverOns = () => (
  <div>
    <section className="py-20 text-white" style={{ backgroundColor: dark }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{config.about.title}</h1>
        <p className="text-gray-400 max-w-xl">{config.tagline}</p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ backgroundColor: yellow, color: dark }}>
              Ons verhaal
            </span>
            <h2 className="text-3xl font-extrabold mb-5" style={{ color: dark }}>Familiebedrijf uit Landgraaf</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{config.about.description}</p>
            <p className="text-gray-600 leading-relaxed">
              Wij geloven in persoonlijk contact. Elke klant is uniek en verdient vervoer dat aansluit bij zijn of haar situatie. Of het nu gaat om een dagelijkse rit naar het ziekenhuis of een groepsreis door Europa — bij Taxi Van Rooy bent u in goede handen.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={config.about.image} alt="Taxi Van Rooy" className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section style={{ backgroundColor: dark }} className="py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {config.about.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-extrabold" style={{ color: yellow }}>{stat.value}</div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20" style={{ backgroundColor: config.colors.surface }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-14" style={{ color: dark }}>Onze kernwaarden</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { icon: '🤝', title: 'Betrouwbaarheid', text: 'Afspraak is afspraak. U kunt altijd op ons rekenen.' },
            { icon: '⏱️', title: 'Punctualiteit', text: 'Op tijd komen is voor ons de norm, niet de uitzondering.' },
            { icon: '💛', title: 'Persoonlijke aandacht', text: 'Elke klant verdient individuele zorg en aandacht.' },
            { icon: '🚗', title: 'Kwaliteit & comfort', text: 'Goed onderhouden, moderne voertuigen voor uw comfort.' },
          ].map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="text-3xl w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FFF9C4' }}>
                {v.icon}
              </div>
              <div>
                <h3 className="font-bold mb-1" style={{ color: dark }}>{v.title}</h3>
                <p className="text-sm text-gray-500">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Werken bij CTA */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-extrabold mb-3" style={{ color: dark }}>Werken bij Taxi Van Rooy?</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">Wij zijn altijd op zoek naar gedreven chauffeurs. Bekijk onze vacatures.</p>
        <Link to={config.basePath + '/werken-bij'}
          className="inline-block px-7 py-3 font-bold rounded-xl hover:opacity-90 text-sm transition-opacity"
          style={{ backgroundColor: yellow, color: dark }}>
          Bekijk vacatures
        </Link>
      </div>
    </section>
  </div>
);
