import { Layout } from '../components/Layout';
import { config } from '../config';

export const Tarieven = () => (
  <Layout>
    <section
      className="py-16 text-white text-center"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Taxi Tarieven</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Eerlijke, transparante prijzen. U weet vooraf wat uw rit kost.
        </p>
      </div>
    </section>

    {/* Metertarieven */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold mb-8 text-center" style={{ color: config.colors.primary }}>
          Standaard metertarief
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'Instapkosten', value: `€${config.pricing.startRate.toFixed(2)}`, desc: 'Eenmalig per rit' },
            { label: 'Per kilometer', value: `€${config.pricing.kmRate.toFixed(2)}`, desc: 'Gereden afstand' },
            { label: 'Wachttijd', value: `€${config.pricing.waitRate.toFixed(2)}/min`, desc: 'Per minuut wachten' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm"
            >
              <p className="text-sm text-gray-500 mb-2">{item.label}</p>
              <p className="text-3xl font-extrabold mb-1" style={{ color: config.colors.accent }}>
                {item.value}
              </p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          {config.pricing.note}
        </p>
      </div>
    </section>

    {/* Luchthaven tarieven */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold mb-8 text-center" style={{ color: config.colors.primary }}>
          Luchthaventarieven (all-in)
        </h2>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead style={{ backgroundColor: config.colors.primary }}>
              <tr className="text-white">
                <th className="px-6 py-4 text-left font-semibold">Luchthaven</th>
                <th className="px-6 py-4 text-center font-semibold">Reistijd</th>
                <th className="px-6 py-4 text-right font-semibold">Prijs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {config.airports.map((a, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {a.flag} {a.name}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-500">{a.time}</td>
                  <td
                    className="px-6 py-4 text-right font-bold"
                    style={{ color: config.colors.accent }}
                  >
                    {a.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-gray-600">
          <strong>Let op:</strong> Luchthaventarieven zijn vaste all-in prijzen inclusief tol en brandstof.
          Bij groepen of grote bagage graag vooraf contact opnemen.
        </div>
      </div>
    </section>

    {/* CTA */}
    <section
      className="py-14 text-center"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-4">Offerte op maat?</h3>
        <p className="text-gray-400 mb-6">Bel ons voor een vrijblijvende prijsopgave.</p>
        <a
          href={`tel:${config.contact.phone}`}
          className="inline-block px-8 py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
          style={{ backgroundColor: config.colors.accent }}
        >
          📞 {config.contact.phoneDisplay}
        </a>
      </div>
    </section>
  </Layout>
);
