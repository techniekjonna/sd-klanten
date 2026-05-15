import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const { darkBlue, yellow, lightBlue, bgLight, text, textLight } = config.colors;

const airportPrices = [
  { from: 'Heerlen', to: 'Schiphol Amsterdam', price: '±€120', time: '±2u' },
  { from: 'Heerlen', to: 'Eindhoven Airport', price: '±€60', time: '±45min' },
  { from: 'Heerlen', to: 'Brussel Airport', price: '±€90', time: '±1u30' },
  { from: 'Heerlen', to: 'Düsseldorf Airport', price: '±€65', time: '±45min' },
  { from: 'Heerlen', to: 'Köln/Bonn Airport', price: '±€75', time: '±1u' },
  { from: 'Heerlen', to: 'Frankfurt Airport', price: '±€150', time: '±2u' },
];

export const Tarieven = () => (
  <Layout>
    {/* Page header */}
    <section className="py-16 text-white" style={{ backgroundColor: darkBlue }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Onze Tarieven</h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: lightBlue }}>
          Eerlijke en transparante prijzen — geen verrassingen achteraf.
        </p>
      </div>
    </section>

    {/* Standaard tarieven */}
    <section className="py-20" style={{ backgroundColor: bgLight }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center" style={{ color: darkBlue }}>Standaard taxitarief</h2>
          <div className="bg-white rounded-2xl border-2 overflow-hidden" style={{ borderColor: lightBlue }}>
            {[
              { label: 'Starttarief', value: `€${config.pricing.startRate.toFixed(2)}`, desc: 'Bij aanvang van de rit' },
              { label: 'Tarief per km', value: `€${config.pricing.kmRate.toFixed(2)}`, desc: 'Per gereden kilometer' },
              { label: 'Wachttarief', value: `€${config.pricing.waitRate.toFixed(2)}/min`, desc: 'Bij wachten op klant' },
            ].map((row, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-6 py-5 border-b last:border-b-0"
                style={{ borderColor: bgLight }}
              >
                <div>
                  <p className="font-bold" style={{ color: darkBlue }}>{row.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: textLight }}>{row.desc}</p>
                </div>
                <span className="text-2xl font-black" style={{ color: yellow }}>{row.value}</span>
              </div>
            ))}
          </div>
          <div
            className="mt-4 p-4 rounded-xl text-sm text-center"
            style={{ backgroundColor: lightBlue, color: darkBlue }}
          >
            💡 {config.pricing.note}
          </div>
        </div>
      </div>
    </section>

    {/* Luchthaven tarieven */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-3 text-center" style={{ color: darkBlue }}>Airport transfer tarieven</h2>
        <p className="text-center mb-10" style={{ color: textLight }}>
          Vaste all-in prijzen vanuit Heerlen. Inclusief vlucht monitoring — geen verrassingen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {airportPrices.map((a, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border-2 hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ borderColor: lightBlue, backgroundColor: bgLight }}
            >
              <div className="text-2xl mb-3">✈️</div>
              <p className="font-bold text-sm mb-1" style={{ color: text }}>{a.from} → {a.to}</p>
              <p className="text-xs mb-3" style={{ color: textLight }}>Reistijd: {a.time}</p>
              <p className="text-3xl font-black" style={{ color: darkBlue }}>{a.price}</p>
              <p className="text-xs mt-1" style={{ color: textLight }}>all-in vaste prijs</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Betaalmethodes */}
    <section className="py-16" style={{ backgroundColor: lightBlue }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-black mb-4" style={{ color: darkBlue }}>Betaalmethodes</h2>
        <p className="mb-8" style={{ color: darkBlue + 'AA' }}>Wij accepteren diverse betaalmethodes — uw keuze.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {['💳 Pinpas', '💳 Mastercard', '💶 Contant', '🧾 Factuur (zakelijk)'].map(m => (
            <div
              key={m}
              className="px-6 py-3 rounded-xl font-bold text-sm"
              style={{ backgroundColor: 'white', color: darkBlue }}
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center" style={{ backgroundColor: darkBlue }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-4 text-white">Vaste prijs op aanvraag?</h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: lightBlue }}>
          Vraag vrijblijvend een vaste prijs aan voor uw rit. Wij geven u een eerlijke offerte.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: yellow, color: darkBlue }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 font-bold rounded-xl text-sm border-2 hover:bg-white/10 transition-colors text-white"
            style={{ borderColor: lightBlue }}
          >
            Offerte aanvragen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
