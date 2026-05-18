import { Link } from 'react-router-dom';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const DARK = config.colors.dark;

const requirements = [
  'Geldig rijbewijs B (rijbewijs D voor buschauffeurs is een pré)',
  'Taxipas of bereidheid deze te behalen',
  'Goede kennis van de regio Landgraaf en omstreken',
  'Klantgerichte en vriendelijke instelling',
  'Betrouwbaar, punctueel en representatief',
  'Beschikbaarheid voor avond- en weekendritten',
  'Goede beheersing van de Nederlandse taal',
];

const benefits = [
  { icon: '💰', title: 'Marktconform salaris', text: 'Een eerlijk loon passend bij uw ervaring en inzet.' },
  { icon: '🕐', title: 'Flexibele werktijden', text: 'Parttime of fulltime — wij kijken naar wat bij u past.' },
  { icon: '🚗', title: 'Moderne voertuigen', text: 'U rijdt in goed onderhouden en comfortabele auto\'s.' },
  { icon: '📚', title: 'Training & begeleiding', text: 'Wij begeleiden u in uw eerste weken en bieden bijscholing.' },
  { icon: '🤝', title: 'Goed team', text: 'Een hecht team van collega\'s die altijd voor elkaar klaarstaan.' },
  { icon: '📍', title: 'Lokaal bedrijf', text: 'Gevestigd in Landgraaf — dicht bij huis werken.' },
];

export const WerkenBij = () => {
  return (
    <>
      {/* Page header */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=600&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: PRIMARY }}>
            Vacatures
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Chauffeur worden bij Taxi Van Rooy
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Wij zijn altijd op zoek naar enthousiaste, betrouwbare chauffeurs die het leuk vinden om mensen te vervoeren.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Word onderdeel van ons team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bij Taxi Van Rooy werken mensen die trots zijn op hun vak. Wij zoeken collega's die dezelfde passie
              voor service en kwaliteit delen. Of je nu starter bent of ervaren chauffeur — als je betrouwbaar,
              vriendelijk en klantgericht bent, ben je bij ons op de juiste plek.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section style={{ backgroundColor: config.colors.surface }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Profiel</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-6">Wat wij zoeken</h2>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      <svg className="w-3.5 h-3.5" style={{ color: DARK }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>Arbeidsvoorwaarden</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-6">Wat wij bieden</h2>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                    <span className="text-2xl">{b.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900 text-sm mb-1">{b.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{b.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open application */}
      <section style={{ backgroundColor: DARK }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="inline-block text-4xl mb-4 p-4 rounded-2xl"
              style={{ backgroundColor: `${PRIMARY}28` }}
            >
              🚕
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Interesse? Neem contact op!
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Wij staan open voor open sollicitaties. Stuur ons een berichtje of bel gerust op — wij bespreken graag
              de mogelijkheden met u. Er is altijd wel een plekje voor de juiste persoon.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: PRIMARY, color: DARK }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Bel ons: {config.contact.phoneDisplay}
              </a>
              <Link
                to={config.basePath + '/contact'}
                className="px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:border-white transition-colors"
              >
                Stuur een bericht
              </Link>
            </div>
            <p className="text-white/40 text-xs mt-6">
              Of mail naar{' '}
              <a href={`mailto:${config.contact.email}`} className="text-white/60 hover:text-white transition-colors">
                {config.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
