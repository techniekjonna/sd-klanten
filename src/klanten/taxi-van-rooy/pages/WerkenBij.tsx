import { Link } from 'react-router-dom';
import { config } from '../config';

const yellow = config.colors.primary;
const dark = config.colors.dark;

export const WerkenBij = () => (
  <div>
    <section className="py-20 text-white" style={{ backgroundColor: dark }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Werken bij Taxi Van Rooy</h1>
        <p className="text-gray-400 max-w-xl">Word chauffeur bij een van de betrouwbaarste taxibedrijven in Zuid-Limburg.</p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-2xl font-extrabold mb-5" style={{ color: dark }}>Kom ons team versterken</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Taxi Van Rooy is altijd op zoek naar vriendelijke, betrouwbare chauffeurs voor zowel fulltime als parttime posities. Of je nu al ervaring hebt of net wilt beginnen — we kijken graag wat we voor elkaar kunnen betekenen.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Als chauffeur bij Taxi Van Rooy werk je in een prettige, professionele omgeving met een vast team. We werken met goed onderhouden voertuigen en bieden flexibele werktijden.
            </p>

            <h3 className="text-lg font-bold mb-4" style={{ color: dark }}>Wat wij vragen</h3>
            <ul className="space-y-2 mb-8">
              {['Geldig rijbewijs B (of hoger)', 'Goede beheersing van het Nederlands', 'Klantvriendelijk en punctueel', 'Beschikbaarheid in overleg (fulltime of parttime)', 'Taxipas of bereidheid om deze te halen'].map((req, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: yellow, color: dark }}>✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-2xl p-8 mb-6" style={{ backgroundColor: config.colors.surface }}>
              <h3 className="text-lg font-bold mb-5" style={{ color: dark }}>Wat wij bieden</h3>
              <ul className="space-y-3">
                {[
                  { icon: '💰', text: 'Marktconform salaris' },
                  { icon: '📅', text: 'Flexibele werktijden' },
                  { icon: '🚗', text: 'Moderne, goed onderhouden voertuigen' },
                  { icon: '👥', text: 'Prettig en collegiaal team' },
                  { icon: '📍', text: 'Werkzaam in de regio Landgraaf / Zuid-Limburg' },
                ].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-lg">{b.icon}</span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8 border-2" style={{ borderColor: yellow }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: dark }}>Interesse?</h3>
              <p className="text-sm text-gray-600 mb-5">Stuur ons een bericht of bel direct. We horen graag van je!</p>
              <div className="flex flex-col gap-3">
                <a href={`tel:${config.contact.phone}`}
                  className="block text-center py-3 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: yellow, color: dark }}>
                  📞 {config.contact.phoneDisplay}
                </a>
                <Link to={config.basePath + '/contact'}
                  className="block text-center py-3 font-semibold rounded-xl text-sm border-2 border-gray-200 hover:border-gray-400 text-gray-700 transition-colors">
                  Stuur een bericht
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
