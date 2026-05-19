import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const PrijzenAirportservice = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section className="relative py-24 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 text-sm">
            💰 Transparante tarieven
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Prijzen Airportservice</h1>
          <p className="text-white/70 max-w-xl mx-auto">Vaste all-in prijzen — geen verborgen kosten. Tolwegen en parkeerkosten zijn inbegrepen.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: primary }}>Tarieven per luchthaven</h2>
            <p className="text-gray-500 text-sm">Alle prijzen zijn vaste all-in tarieven per rit (niet per persoon). Retour = 2× de prijs.</p>
          </div>

          {/* Pricing table */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid grid-cols-4 px-5 py-3 text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: primary, color: 'white' }}>
              <div>Luchthaven</div>
              <div className="text-center">Personenwagen<br /><span className="font-normal opacity-70">max. 4 pers.</span></div>
              <div className="text-center">Grote wagen<br /><span className="font-normal opacity-70">max. 8 pers.</span></div>
              <div className="text-center">Bus<br /><span className="font-normal opacity-70">max. 16 pers.</span></div>
            </div>
            {config.airportPricing.map((row, i) => (
              <div
                key={row.airport}
                className="grid grid-cols-4 px-5 py-4 items-center"
                style={{ backgroundColor: i % 2 === 0 ? '#fff' : config.colors.lightBg }}
              >
                <div className="font-semibold text-sm" style={{ color: primary }}>{row.airport}</div>
                <div className="text-center font-bold text-base" style={{ color: accent }}>{row.car4}</div>
                <div className="text-center font-bold text-base" style={{ color: accent }}>{row.car8}</div>
                <div className="text-center font-bold text-base" style={{ color: accent }}>{row.bus16}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-sm text-gray-500">
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span style={{ color: accent }}>ℹ</span> Prijzen zijn per rit, niet per persoon.</li>
              <li className="flex items-start gap-2"><span style={{ color: accent }}>ℹ</span> Alle prijzen zijn all-in: tolwegen, parkeerkosten en bagage inbegrepen.</li>
              <li className="flex items-start gap-2"><span style={{ color: accent }}>ℹ</span> Retour: 2× de genoemde prijs (10% retourkorting mogelijk bij gelijktijdige boeking).</li>
              <li className="flex items-start gap-2"><span style={{ color: accent }}>ℹ</span> Andere luchthaven of grootte? Neem contact op voor een offerte op maat.</li>
            </ul>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '✈️', title: 'Vluchtmonitoring', desc: 'Bij vertraging past uw chauffeur automatisch de ophaaltijd aan. Geen extra kosten.' },
              { icon: '🛡️', title: 'Vaste prijs garantie', desc: 'U betaalt altijd de afgesproken prijs, ongeacht files, omleidingen of wachttijden.' },
              { icon: '💳', title: 'Betaalopties', desc: 'Contant of pin bij de chauffeur. Zakelijke facturen mogelijk na aanvraag.' },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-2xl border border-gray-100">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: primary }}>{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to={config.basePath + '/reserveer-airporttaxi'}
              className="inline-block px-8 py-4 font-bold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}>
              Reserveer uw airporttaxi →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
