import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Tarieven = () => (
  <Layout>
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Tarieven</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Eerlijke en transparante tarieven. U weet altijd vooraf wat de rit kost.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Tariefopbouw */}
        <div className="mb-12">
          <h2 className="text-2xl font-black mb-6 tracking-tight">Tariefopbouw</h2>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            Het rijtarief bestaat uit drie onderdelen: een starttarief, een prijs per kilometer en een wachttijdtarief.
            Voor vaste bestemmingen kunnen vaste prijsafspraken worden gemaakt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Starttarief', value: `€ ${config.pricing.startRate.toFixed(2)}`, desc: 'Eenmalig bij aanvang rit' },
              { label: 'Per kilometer', value: `€ ${config.pricing.kmRate.toFixed(2)}`, desc: 'Per gereden kilometer' },
              { label: 'Wachttijd', value: `€ ${config.pricing.waitRate.toFixed(2)}/min`, desc: 'Per minuut wachttijd' },
            ].map(item => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 text-center hover:border-black transition-colors">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                <p className="text-3xl font-black mb-1">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-400 italic">{config.pricing.note}</p>
        </div>

        {/* Betaalmethoden */}
        <div className="mb-12 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-xl font-black mb-4 tracking-tight">Betaalmethoden</h2>
          <div className="flex flex-wrap gap-3">
            {['💳 Pin', '💳 Creditcard', '💵 Contant'].map(method => (
              <span key={method} className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-sm font-semibold hover:border-black transition-colors">
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Vaste prijs info */}
        <div className="bg-black text-white rounded-2xl p-8">
          <h2 className="text-xl font-black mb-4 tracking-tight">Vaste prijs afspraken</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Voor regelmatige ritten, luchthaventransfers en zakelijk vervoer bieden wij vaste prijsafspraken.
            Neem contact op voor een offerte op maat.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors text-sm"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
