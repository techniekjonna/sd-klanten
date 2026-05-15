import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const ZakelijkVervoer = () => (
  <Layout>
    <section
      className="py-16 text-white"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: config.colors.accent }}>
          💼 Zakelijk Vervoer
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Vervoer voor bedrijven</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
          Betrouwbaar en professioneel vervoer voor uw medewerkers, klanten en relaties. Flexibel, discreet en altijd op tijd.
        </p>
      </div>
    </section>

    {/* Voordelen */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-extrabold text-center mb-10" style={{ color: config.colors.primary }}>
          Waarom zakelijk rijden met Savelkoul?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🧾', title: 'Factuur op naam', desc: 'Alle ritten worden netjes gefactureerd op uw bedrijfsnaam inclusief BTW-specificatie.' },
            { icon: '👔', title: 'Vaste chauffeur', desc: 'Op aanvraag altijd dezelfde vertrouwde chauffeur voor uw medewerkers of relaties.' },
            { icon: '📅', title: 'Flexibele planning', desc: 'Langdurige afspraken, last-minute ritten of vaste route — wij passen ons aan u aan.' },
            { icon: '💳', title: 'Maandelijkse afrekening', desc: 'Geen gedoe met contant geld. Wij sturen aan het eind van de maand één overzichtelijke factuur.' },
            { icon: '🤫', title: 'Discreet & punctueel', desc: 'Uw zakelijke gasten verdienen de best mogelijke indruk. Dat begint bij het vervoer.' },
            { icon: '📞', title: 'Eigen contactpersoon', desc: 'U heeft altijd één aanspreekpunt. Snel schakelen, duidelijke communicatie.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: `${config.colors.accent}18` }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1" style={{ color: config.colors.primary }}>{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Toepassingen */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: config.colors.primary }}>
          Voor welke situaties?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Zakenreizen & klantbezoeken',
            'Luchthaventransfer voor medewerkers',
            'Vervoer van bedrijfsrelaties',
            'Congressen en evenementen',
            'Pendeldiensten tussen locaties',
            'Medisch transport (zorgverleners)',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100">
              <span className="font-extrabold text-sm" style={{ color: config.colors.accent }}>✓</span>
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Offerte aanvragen */}
    <section className="py-16" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">Zakelijk contract aanvragen?</h2>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Neem contact op voor een vrijblijvend gesprek over uw zakelijke vervoersbehoefte. Wij stellen een passend aanbod samen.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-7 py-3.5 font-bold rounded-xl text-sm transition-opacity hover:opacity-90 text-white"
            style={{ backgroundColor: config.colors.accent }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-7 py-3.5 border-2 border-white text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-colors"
          >
            Offerte aanvragen →
          </Link>
        </div>
        <p className="text-gray-500 text-xs mt-6">{config.contact.email}</p>
      </div>
    </section>
  </Layout>
);
