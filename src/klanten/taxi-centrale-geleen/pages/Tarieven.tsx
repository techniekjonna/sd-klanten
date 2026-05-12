import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Tarieven = () => {
  const y = config.colors.primary;

  const airportPricing = [
    { dest: 'Eindhoven Airport', price: '€ 85', info: '±50 min' },
    { dest: 'Düsseldorf Airport', price: '€ 95', info: '±1u 10min' },
    { dest: 'Brussel Zaventem', price: '€ 120', info: '±1u 45min' },
    { dest: 'Keulen/Bonn Airport', price: '€ 110', info: '±1u 30min' },
    { dest: 'Schiphol Amsterdam', price: '€ 175', info: '±2u 15min' },
    { dest: 'Frankfurt Airport', price: '€ 195', info: '±2u 30min' },
  ];

  return (
    <Layout>
      {/* Page header */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarieven</h1>
          <p className="max-w-xl mx-auto" style={{ color: '#aaa' }}>
            Transparante en eerlijke prijzen. U weet vooraf wat uw rit kost — geen verrassingen achteraf.
          </p>
        </div>
      </section>

      {/* Regular tariff */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-2" style={{ color: config.colors.dark }}>Rijtarieven</h2>
            <p className="text-sm text-gray-500 mb-8">Geldig tarieven op de teller voor ritten in de regio.</p>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="px-6 py-4 font-bold text-sm uppercase tracking-widest" style={{ backgroundColor: config.colors.dark, color: y }}>
                Standaard Tarief
              </div>
              {config.pricing.map((item, i) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center px-6 py-4 text-sm"
                  style={{ borderBottom: i < config.pricing.length - 1 ? '1px solid #f0f0f0' : 'none' }}
                >
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-bold" style={{ color: config.colors.dark }}>{item.value}</span>
                </div>
              ))}
              <div className="px-6 py-4 text-xs text-gray-400" style={{ backgroundColor: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                * Nacht- en feestdagtoeslag van 25% geldt tussen 23:00–06:00 en op officiële feestdagen.
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl text-sm" style={{ backgroundColor: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.25)', color: '#333' }}>
              <strong style={{ color: config.colors.dark }}>💡 Vaste ritprijs?</strong> Voor vaste trajecten bieden wij graag een all-in vaste prijs aan.
              Vraag ernaar bij het bestellen van uw rit.
            </div>
          </div>
        </div>
      </section>

      {/* Airport tariffs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-2" style={{ color: config.colors.dark }}>Airport Vaste Prijzen</h2>
            <p className="text-sm text-gray-500 mb-8">Vaste all-in tarieven vanaf Sittard/Geleen. Inclusief wachttijd en tolkosten. Geen extra verrassingen.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {airportPricing.map((item) => (
                <div
                  key={item.dest}
                  className="flex items-center justify-between p-5 rounded-xl border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all"
                >
                  <div>
                    <p className="font-bold text-sm" style={{ color: config.colors.dark }}>✈️ {item.dest}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Reistijd: {item.info}</p>
                  </div>
                  <div
                    className="px-4 py-2 rounded-lg font-extrabold text-sm"
                    style={{ backgroundColor: y, color: '#111' }}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-5">* Prijzen zijn per voertuig (max. 4 personen). Vraag voor grotere groepen een offerte aan.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-extrabold mb-2 text-white">Klaar voor uw rit?</h2>
          <p className="text-sm mb-7" style={{ color: '#888' }}>Bel direct of gebruik ons bestelformulier.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-7 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: y, color: '#111' }}
            >
              📞 Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/bestellen'}
              className="px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Rit Bestellen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
