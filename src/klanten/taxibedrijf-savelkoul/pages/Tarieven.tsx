import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Tarieven = () => (
  <Layout>
    <section
      className="py-16 text-white"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Taxi Tarieven</h1>
        <p className="text-gray-300 max-w-lg mx-auto text-sm">
          Transparante prijzen zonder verborgen kosten. Vraag altijd een vaste prijs op — dan weet u vooraf wat uw rit kost.
        </p>
      </div>
    </section>

    {/* Metertarief */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: config.colors.primary }}>
          Standaard metertarief
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {[
            { label: 'Instapkosten', value: `€${config.pricing.startRate.toFixed(2)}`, desc: 'Eenmalig per rit' },
            { label: 'Per kilometer', value: `€${config.pricing.kmRate.toFixed(2)}`, desc: 'Gereden kilometers' },
            { label: 'Wachttijd', value: `€${config.pricing.waitRate.toFixed(2)}/min`, desc: 'Per minuut wachten' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm"
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{item.label}</p>
              <p className="text-3xl font-extrabold mb-1" style={{ color: config.colors.accent }}>
                {item.value}
              </p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm">{config.pricing.note}</p>
      </div>
    </section>

    {/* Luchthaven tarieven */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: config.colors.primary }}>
          Luchthaventarieven (all-in)
        </h2>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead style={{ backgroundColor: config.colors.primary }}>
              <tr className="text-white">
                <th className="px-6 py-4 text-left font-semibold">Luchthaven</th>
                <th className="px-6 py-4 text-center font-semibold">Reistijd</th>
                <th className="px-6 py-4 text-right font-semibold">Prijs (v.v.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {config.airports.map((a, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {a.flag} {a.name}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-500">{a.time}</td>
                  <td className="px-6 py-4 text-right font-bold" style={{ color: config.colors.accent }}>
                    {a.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-400 text-xs mt-4">
          Alle luchthaventarieven zijn all-in. Geen bijkomende kosten voor bagage, tolwegen of wachttijd bij vertraging.
        </p>
      </div>
    </section>

    {/* Inbegrepen */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: config.colors.primary }}>
          Altijd inbegrepen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '🧳', text: 'Bagage zonder extra kosten' },
            { icon: '🛬', text: 'Vluchtbewaking bij luchthavenritten' },
            { icon: '🕐', text: 'Wachttijd bij vertraging (luchthaven)' },
            { icon: '🚗', text: 'Nette en goed onderhouden voertuigen' },
            { icon: '💳', text: 'Betalen per pin of contant' },
            { icon: '🧾', text: 'Factuur op aanvraag (zakelijk)' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 text-white text-center" style={{ backgroundColor: config.colors.accent }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold mb-3">Vaste prijs aanvragen?</h2>
        <p className="text-white/80 text-sm mb-7">Bel ons of boek online — wij geven u direct een prijs op maat.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-7 py-3.5 bg-white font-bold rounded-xl text-sm transition-colors hover:bg-gray-100"
            style={{ color: config.colors.primary }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-7 py-3.5 border-2 border-white text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-colors"
          >
            Boek online →
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
