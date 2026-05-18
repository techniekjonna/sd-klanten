import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Tarieven = () => (
  <Layout>
    <section className="py-20 text-white" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Tarieven</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Eerlijke, transparante prijzen</h1>
        <p className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
          Geen verrassingen achteraf. U weet altijd vooraf wat de rit kost.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Tariefopbouw */}
        <div className="mb-12">
          <h2 className="text-2xl font-black mb-2" style={{ color: config.colors.text }}>Tariefopbouw</h2>
          <p className="text-gray-500 text-sm mb-8">Het rijtarief bestaat uit een starttarief, een prijs per kilometer en eventueel wachttijd.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Starttarief', value: `€ ${config.pricing.startRate.toFixed(2)}`, desc: 'Eenmalig bij aanvang rit' },
              { label: 'Per kilometer', value: `€ ${config.pricing.kmRate.toFixed(2)}`, desc: 'Per gereden kilometer' },
              { label: 'Wachttijd', value: `€ ${config.pricing.waitRate.toFixed(2)}/min`, desc: 'Per minuut wachttijd' },
            ].map(item => (
              <div
                key={item.label}
                className="rounded-2xl p-7 text-center border-2 hover:shadow-md transition-all"
                style={{ borderColor: config.colors.light }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">{item.label}</p>
                <p className="text-4xl font-black mb-2" style={{ color: config.colors.primary }}>{item.value}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-400 italic">{config.pricing.note}</p>
        </div>

        {/* Betaalmethoden */}
        <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: config.colors.light }}>
          <h2 className="text-xl font-black mb-4" style={{ color: config.colors.text }}>Betaalmethoden</h2>
          <div className="flex flex-wrap gap-3">
            {['💳 Pin', '💳 Creditcard', '💵 Contant', '📱 iDEAL'].map(method => (
              <span
                key={method}
                className="px-4 py-2 bg-white rounded-full text-sm font-semibold border-2 transition-colors"
                style={{ borderColor: config.colors.light, color: config.colors.text }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Luchthaven tabel */}
        <div className="mb-12">
          <h2 className="text-xl font-black mb-4" style={{ color: config.colors.text }}>Vaste luchthavenprijzen</h2>
          <p className="text-gray-500 text-sm mb-6">All-in vaste prijzen — geen extra kosten voor wachttijd, bagage of vluchtvertraging.</p>
          <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: config.colors.light }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: config.colors.primary, color: '#fff' }}>
                  <th className="text-left px-5 py-3 font-semibold">Luchthaven</th>
                  <th className="text-left px-5 py-3 font-semibold">Land</th>
                  <th className="text-left px-5 py-3 font-semibold">Rijtijd</th>
                  <th className="text-right px-5 py-3 font-semibold">Prijs op aanvraag</th>
                </tr>
              </thead>
              <tbody>
                {config.airports.map((a, i) => (
                  <tr key={a.name} className={i % 2 === 0 ? 'bg-white' : ''} style={i % 2 !== 0 ? { backgroundColor: config.colors.light } : {}}>
                    <td className="px-5 py-3.5 font-medium" style={{ color: config.colors.text }}>{a.flag} {a.name}</td>
                    <td className="px-5 py-3.5 text-gray-500">{a.country}</td>
                    <td className="px-5 py-3.5 text-gray-500">{a.time}</td>
                    <td className="px-5 py-3.5 text-right">
                      <a
                        href={`tel:${config.contact.phone}`}
                        className="text-xs font-bold hover:underline"
                        style={{ color: config.colors.primary }}
                      >
                        Bel voor prijs
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: config.colors.dark }}>
          <h2 className="text-xl font-black mb-3">Vaste prijs afspraken</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Voor regelmatige ritten, zakelijk vervoer en luchthavenstransfers bieden wij vaste prijsafspraken. Neem contact op voor een offerte op maat.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-6 py-3 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
