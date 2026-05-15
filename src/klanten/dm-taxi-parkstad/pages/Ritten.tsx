import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = '#1B3F6E';
const ORANGE = '#F97316';
const NAVY_LIGHT = '#EEF4FB';

const ritten = [
  {
    categorie: 'Vliegvelden',
    icon: '✈️',
    routes: [
      { van: 'Parkstad', naar: 'Maastricht-Aachen Airport (MST)', duur: '±25 min', prijs: 'Vanaf € 45' },
      { van: 'Parkstad', naar: 'Eindhoven Airport (EIN)', duur: '±75 min', prijs: 'Vanaf € 85' },
      { van: 'Parkstad', naar: 'Schiphol (AMS)', duur: '±2,5 uur', prijs: 'Vanaf € 175' },
      { van: 'Parkstad', naar: 'Düsseldorf Airport (DUS)', duur: '±60 min', prijs: 'Vanaf € 90' },
      { van: 'Parkstad', naar: 'Keulen-Bonn Airport (CGN)', duur: '±70 min', prijs: 'Vanaf € 95' },
    ],
  },
  {
    categorie: 'Ziekenhuizen & Zorg',
    icon: '🏥',
    routes: [
      { van: 'Parkstad', naar: 'Atrium MC Heerlen', duur: '±15 min', prijs: 'Vaste prijs' },
      { van: 'Parkstad', naar: 'Zuyderland Heerlen', duur: '±15 min', prijs: 'Vaste prijs' },
      { van: 'Parkstad', naar: 'Zuyderland Brunssum', duur: '±20 min', prijs: 'Vaste prijs' },
      { van: 'Parkstad', naar: 'MUMC+ Maastricht', duur: '±35 min', prijs: 'Vaste prijs' },
    ],
  },
  {
    categorie: 'Stations',
    icon: '🚉',
    routes: [
      { van: 'Parkstad', naar: 'Station Heerlen', duur: '±10 min', prijs: 'Vaste prijs' },
      { van: 'Parkstad', naar: 'Station Sittard', duur: '±25 min', prijs: 'Vaste prijs' },
      { van: 'Parkstad', naar: 'Station Maastricht', duur: '±40 min', prijs: 'Vaste prijs' },
    ],
  },
];

export const Ritten = () => (
  <Layout>
    <section className="py-16" style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Populaire Ritten</p>
        <h1 className="text-4xl font-extrabold text-white mb-4">Vaste Trajecten</h1>
        <p className="text-blue-200 max-w-xl mx-auto">Bekijk onze meest gevraagde ritten met vaste prijzen — geen verassingen onderweg.</p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-14 max-w-4xl mx-auto">
          {ritten.map(({ categorie, icon, routes }) => (
            <div key={categorie}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{icon}</span>
                <h2 className="text-2xl font-bold" style={{ color: NAVY }}>{categorie}</h2>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="grid grid-cols-4 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: NAVY }}>
                  <span className="col-span-2">Traject</span>
                  <span>Reistijd</span>
                  <span>Prijs</span>
                </div>
                {routes.map((r, i) => (
                  <div key={i} className={`grid grid-cols-4 px-5 py-4 border-b border-gray-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <div className="col-span-2">
                      <span className="text-xs text-gray-400 block">{r.van} →</span>
                      <span className="text-sm font-semibold" style={{ color: NAVY }}>{r.naar}</span>
                    </div>
                    <span className="text-sm text-gray-500 self-center">{r.duur}</span>
                    <span className="text-sm font-bold self-center" style={{ color: ORANGE }}>{r.prijs}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 p-8 rounded-2xl max-w-2xl mx-auto" style={{ backgroundColor: NAVY_LIGHT }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Rit niet gevonden?</h3>
          <p className="text-gray-600 text-sm mb-5">Wij rijden naar vrijwel elke bestemming in Nederland en buurlanden. Vraag een offerte aan via telefoon of het contactformulier.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+31455700300" className="px-6 py-3 font-bold text-white rounded-xl hover:opacity-90 transition" style={{ backgroundColor: ORANGE }}>
              📞 045 570 03 00
            </a>
            <Link to={config.basePath + '/contact'} className="px-6 py-3 font-bold text-white rounded-xl hover:opacity-90 transition" style={{ backgroundColor: NAVY }}>
              Offerte Aanvragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
