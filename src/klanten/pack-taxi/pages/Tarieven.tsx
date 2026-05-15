import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Tarieven = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: primary }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarieven</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Transparante en eerlijke tarieven. Geen verborgen kosten — u weet altijd wat u betaalt.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Standaard tarief */}
            <div className="rounded-2xl border-2 p-8" style={{ borderColor: config.colors.primaryLight }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: primary }}>Metertarief</h2>
              <p className="text-gray-500 text-sm mb-6">Ideaal voor korte ritten in de stad</p>
              <div className="space-y-4">
                {[
                  { label: 'Starttarief', value: '€3,50' },
                  { label: 'Per kilometer', value: '€2,40' },
                  { label: 'Wachttijd per uur', value: '€35,00' },
                  { label: 'Nacht toeslag (23:00–06:00)', value: '20%' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-bold text-sm" style={{ color: primary }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vaste prijs */}
            <div
              className="rounded-2xl p-8 text-white"
              style={{ backgroundColor: primary }}
            >
              <div
                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: accent, color: primary }}
              >
                Aanbevolen
              </div>
              <h2 className="text-2xl font-bold mb-2">Vaste Prijs</h2>
              <p className="text-gray-300 text-sm mb-6">Ideaal voor luchthavens en lange ritten</p>
              <div className="space-y-4">
                {[
                  { label: 'Prijs vooraf afgesproken', value: '✓' },
                  { label: 'Geen toeslag bij file', value: '✓' },
                  { label: 'Inclusief bagage', value: '✓' },
                  { label: 'Geschikt voor groepen', value: '✓' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300 text-sm">{row.label}</span>
                    <span className="font-bold" style={{ color: accent }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <a
                href={`tel:${config.contact.phone}`}
                className="mt-6 block text-center py-3 font-bold rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent, color: primary }}
              >
                Vraag vaste prijs op
              </a>
            </div>
          </div>

          {/* Payment methods */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: config.colors.primaryLight }}>
            <h2 className="text-xl font-bold mb-6 text-center" style={{ color: primary }}>
              Betaalmethoden
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: '💳', label: 'Pin (debit)' },
                { icon: '💵', label: 'Contant' },
                { icon: '📄', label: 'Factuur (zakelijk)' },
                { icon: '📱', label: 'Tikkie / iDEAL' },
              ].map((m) => (
                <div key={m.label} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">{m.icon}</div>
                  <p className="text-xs font-semibold" style={{ color: primary }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 text-white text-center" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Vaste prijs berekenen?</h2>
          <p className="opacity-80 mb-6">Bel of app ons met uw route voor een directe offerte.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-block px-8 py-3 font-bold rounded-xl"
              style={{ backgroundColor: accent, color: primary }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="inline-block px-8 py-3 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: primary }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
