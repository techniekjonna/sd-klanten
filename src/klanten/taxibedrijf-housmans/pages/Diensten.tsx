import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const GREEN = config.colors.primary;
const GOLD = config.colors.accent;
const MUTED = '#78716C';

const diensten = [
  {
    icon: '🚖',
    title: 'Lokaal & Regionaal Vervoer',
    description: 'Of u nu naar de supermarkt, een vriend of een zakelijke afspraak moet — wij rijden u door Echt, Sittard-Geleen, Roermond en heel Limburg. Altijd stipt op tijd.',
    items: ['Ritten binnen Echt en omgeving', 'Regionaal vervoer door Limburg', 'Avond- en nachtritten', '24/7 beschikbaar', 'Vaste prijs, geen taxameter'],
  },
  {
    icon: '✈️',
    title: 'Luchthaven Vervoer',
    description: 'Stressvrij naar het vliegveld. Wij volgen uw vlucht live zodat we altijd op tijd zijn, ook bij vertragingen. Ruime bagageruimte vanzelfsprekend.',
    items: ['Eindhoven Airport', 'Maastricht Aachen Airport', 'Schiphol Amsterdam', 'Düsseldorf & Keulen', 'Vluchttracking bij ophaalritten', 'Retourritten met vaste prijs'],
  },
  {
    icon: '🏥',
    title: 'Zorgvervoer',
    description: 'Voor ziekenhuisbezoeken, fysiotherapie of andere medische afspraken rijden wij u rustig en veilig. Wij hebben geduld en zijn gewend aan passagiers die extra hulp nodig hebben.',
    items: ['Ziekenhuisritten (Roermond, Sittard e.o.)', 'Medische afspraken', 'Dialysevervoer op vaste tijden', 'Rollatorvriendelijk voertuig', 'Hulp in- en uitstappen'],
  },
  {
    icon: '💼',
    title: 'Zakelijk Vervoer',
    description: 'Betrouwbaar en representatief vervoer voor bedrijven. Vaste chauffeur, maandelijkse facturatie en altijd op tijd bij uw klant of vergadering.',
    items: ['Maandelijkse facturatie', 'Vaste chauffeur op aanvraag', 'Vervoer voor teams en delegaties', 'Discreet en professioneel', 'Ruime voertuigen beschikbaar'],
  },
  {
    icon: '🎉',
    title: 'Evenementen & Uitjes',
    description: 'Een bruiloft, concert, voetbalwedstrijd of stapdiner? Wij brengen u veilig heen én terug. Geen zorgen over parkeren of de filetijd.',
    items: ['Bruiloften en partijen', 'Concerten en festivals', 'Groepsvervoer (minibus)', 'Heen- en terugrit', 'Vroeg boeken = beste prijs'],
  },
  {
    icon: '👴',
    title: 'Seniorenvervoer',
    description: 'Wij rijden graag voor ouderen die geen auto (meer) hebben of liever niet zelf rijden. Vriendelijk, rustig en op uw tempo.',
    items: ['Boodschappenritten', 'Bezoek aan familie of vrienden', 'Hulp bij in- en uitstappen', 'Geduldig en vriendelijk', 'Vaste chauffeur indien gewenst'],
  },
];

export const Diensten = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Ons aanbod</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: GREEN }}>Onze Diensten</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: MUTED }}>
            Van een simpele rit naar het station tot een vlucht vanuit Schiphol — wij regelen het voor u.
          </p>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {diensten.map((d, i) => (
              <div key={i} className="rounded-2xl border border-stone-100 p-8 hover:border-stone-200 hover:shadow-sm transition-all">
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ backgroundColor: `${GREEN}10` }}
                  >
                    {d.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2" style={{ color: GREEN }}>{d.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>{d.description}</p>
                    <ul className="space-y-1.5">
                      {d.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
                          <span className="font-bold" style={{ color: GOLD }}>✓</span>
                          {item}
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

      {/* CTA */}
      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: GREEN }}>Rit aanvragen?</h2>
          <p className="mb-8 text-sm" style={{ color: MUTED }}>Bel ons direct of stuur een bericht. Wij zijn dag en nacht bereikbaar.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 transition-opacity hover:opacity-70"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
