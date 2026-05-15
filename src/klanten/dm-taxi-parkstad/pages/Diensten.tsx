import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = '#1B3F6E';
const ORANGE = '#F97316';
const NAVY_LIGHT = '#EEF4FB';

export const Diensten = () => (
  <Layout>
    {/* Page header */}
    <section className="py-16" style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Wat wij bieden</p>
        <h1 className="text-4xl font-extrabold text-white mb-4">Onze Diensten</h1>
        <p className="text-blue-200 max-w-xl mx-auto">Van een snelle lokale rit tot een vluchtrit naar Schiphol — D&amp;M Taxi Parkstad staat voor u klaar.</p>
      </div>
    </section>

    {/* Services grid */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {config.services.map((s) => (
            <div key={s.id} className="rounded-2xl border-2 border-gray-100 p-8 hover:border-orange-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-5">
                <div className="text-5xl">{s.icon}</div>
                <div>
                  <h2 className="text-xl font-bold mb-1" style={{ color: NAVY }}>{s.name}</h2>
                  <p className="text-sm font-semibold" style={{ color: ORANGE }}>{s.priceLabel}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.description}</p>
              <ul className="space-y-2">
                {(s.features || []).map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: ORANGE }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Tarieven */}
    <section className="py-20" style={{ backgroundColor: NAVY_LIGHT }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>Transparant</p>
          <h2 className="text-3xl font-bold" style={{ color: NAVY }}>Onze Tarieven</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">Vaste prijzen, geen taxameter. Wat wij afspreken is uw eindprijs.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {[
            { cat: 'Lokale ritten (Parkstad)', items: [
              { label: 'Rit binnen Landgraaf / Heerlen', prijs: 'Vanaf € 12,00' },
              { label: 'Rit Heerlen ↔ Kerkrade', prijs: 'Vanaf € 15,00' },
              { label: 'Rit Heerlen ↔ Brunssum', prijs: 'Vanaf € 18,00' },
              { label: 'Avond/nacht toeslag (22:00–06:00)', prijs: '+20%' },
            ]},
            { cat: 'Vliegveldritten', items: [
              { label: 'Parkstad → Maastricht-Aachen Airport', prijs: 'Vanaf € 45,00' },
              { label: 'Parkstad → Eindhoven Airport', prijs: 'Vanaf € 85,00' },
              { label: 'Parkstad → Schiphol Airport', prijs: 'Vanaf € 175,00' },
              { label: 'Parkstad → Düsseldorf Airport', prijs: 'Vanaf € 90,00' },
            ]},
            { cat: 'Zakelijk & Groep', items: [
              { label: 'Zakelijk maandaccount', prijs: 'Op aanvraag' },
              { label: 'Groepsvervoer (tot 8 pers.)', prijs: 'Op aanvraag' },
              { label: 'Evenementenvervoer', prijs: 'Op aanvraag' },
            ]},
          ].map(({ cat, items }) => (
            <div key={cat}>
              <div className="px-6 py-3 border-b border-gray-100" style={{ backgroundColor: NAVY }}>
                <p className="text-white font-bold text-sm">{cat}</p>
              </div>
              {items.map((item, i) => (
                <div key={i} className="flex justify-between items-center px-6 py-3.5 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <span className="text-sm font-bold" style={{ color: NAVY }}>{item.prijs}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">* Tarieven zijn richtprijzen. Neem contact op voor een exacte offerte.</p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center" style={{ backgroundColor: ORANGE }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-white mb-3">Direct een rit aanvragen?</h2>
        <p className="text-orange-100 mb-8">Bel ons of stuur een bericht — wij reageren snel.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+31455700300" className="px-8 py-4 bg-white font-bold rounded-xl text-lg hover:bg-gray-50 transition" style={{ color: ORANGE }}>
            📞 045 570 03 00
          </a>
          <Link to={config.basePath + '/contact'} className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition">
            Contactformulier
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
