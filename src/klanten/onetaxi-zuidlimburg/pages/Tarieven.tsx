import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Tarieven = () => {
  const yellow = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-center" style={{ backgroundColor: '#111' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Tarieven <span style={{ color: yellow }}>Taxi</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Transparante en eerlijke tarieven — u weet altijd wat u betaalt, zonder verrassingen achteraf.
          </p>
        </div>
      </section>

      {/* Standaard tarieven */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-black mb-8 text-center">Standaard Taxitarieven</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Starttarief', value: '€ 4,15', sub: 'Per rit', icon: '🚕' },
              { label: 'Kilometertarief', value: '€ 3,05', sub: 'Per kilometer', icon: '🛣️' },
              { label: 'Tijdtarief', value: '€ 0,50', sub: 'Per minuut', icon: '⏱️' },
            ].map(({ label, value, sub, icon }) => (
              <div
                key={label}
                className="text-center p-8 rounded-2xl border-2 hover:shadow-xl transition-all"
                style={{ borderColor: yellow }}
              >
                <div className="text-4xl mb-3">{icon}</div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{label}</p>
                <p className="text-4xl font-black text-black mb-1">{value}</p>
                <p className="text-xs text-gray-400">{sub}</p>
              </div>
            ))}
          </div>

          {/* Info */}
          <div
            className="rounded-2xl p-6 text-sm text-black/80 leading-relaxed space-y-2"
            style={{ backgroundColor: config.colors.primaryLight }}
          >
            <p><strong>ℹ️ Let op:</strong> Bovenstaande tarieven zijn de standaard taxametertarieven. Voor vliegveldritten en zakelijk vervoer hanteren wij vaste prijzen — vraag een offerte aan.</p>
            <p>Betalen kan per <strong>pin</strong> of <strong>contant</strong> bij aankomst.</p>
          </div>
        </div>
      </section>

      {/* Vliegveld tarieven */}
      <section className="py-16" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-black mb-2 text-center">Vliegveld Vaste Prijzen</h2>
          <p className="text-gray-500 text-center text-sm mb-8">Op aanvraag — bel of WhatsApp voor uw persoonlijke offerte</p>

          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#111' }}>
                  <th className="text-left px-6 py-4 font-bold text-white">Bestemming</th>
                  <th className="text-left px-6 py-4 font-bold text-white">Afstand</th>
                  <th className="text-right px-6 py-4 font-bold" style={{ color: yellow }}>Prijs</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dest: 'Maastricht Aachen Airport (MST)', afstand: '± 15 km', prijs: 'Op aanvraag' },
                  { dest: 'Eindhoven Airport (EIN)', afstand: '± 80 km', prijs: 'Op aanvraag' },
                  { dest: 'Düsseldorf Airport (DUS)', afstand: '± 75 km', prijs: 'Op aanvraag' },
                  { dest: 'Schiphol Amsterdam (AMS)', afstand: '± 225 km', prijs: 'Op aanvraag' },
                ].map(({ dest, afstand, prijs }, i) => (
                  <tr key={dest} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-black">{dest}</td>
                    <td className="px-6 py-4 text-gray-500">{afstand}</td>
                    <td className="px-6 py-4 text-right font-bold" style={{ color: '#CC0000' }}>{prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Neem contact op voor een vaste prijs op maat.
          </p>
        </div>
      </section>

      {/* Openingstijden */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-black text-black mb-8 text-center">Openingstijden</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            {[
              { dag: 'Maandag', tijd: '06:00 – 20:00' },
              { dag: 'Dinsdag', tijd: '06:00 – 20:00' },
              { dag: 'Woensdag', tijd: '06:00 – 20:00' },
              { dag: 'Donderdag', tijd: '06:00 – 20:00' },
              { dag: 'Vrijdag', tijd: '06:00 – 20:00' },
              { dag: 'Zaterdag', tijd: '06:00 – 15:30' },
              { dag: 'Zondag', tijd: 'Gesloten', gesloten: true },
            ].map(({ dag, tijd, gesloten }, i) => (
              <div
                key={dag}
                className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <span className="font-semibold text-black">{dag}</span>
                <span
                  className={`font-bold text-sm ${gesloten ? 'text-red-500' : ''}`}
                  style={!gesloten ? { color: '#CC0000' } : {}}
                >
                  {tijd}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ backgroundColor: yellow }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-black text-black mb-3">Klaar voor uw rit?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/reserveren'}
              className="px-8 py-3.5 font-bold text-white rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#CC0000' }}
            >
              Direct Reserveren
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold text-black bg-white rounded-xl hover:bg-gray-100 transition-colors"
            >
              📞 {config.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
