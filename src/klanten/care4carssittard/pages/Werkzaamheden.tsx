import { Layout } from '../components/Layout';
import { config } from '../config';

const fontCondensed = "'Barlow Condensed', sans-serif";

export const Werkzaamheden = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-20 text-white text-center"
        style={{ backgroundColor: '#1F2937' }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 uppercase tracking-wide"
            style={{ fontFamily: fontCondensed }}
          >
            Auto Werkzaamheden
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Vakkundige service voor alle merken personenauto's en bedrijfswagens.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.werkzaamheden.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: '#FEE2E2' }}
                    >
                      {item.icon}
                    </div>
                    <h2
                      className="text-2xl font-bold text-gray-900 uppercase"
                      style={{ fontFamily: fontCondensed, letterSpacing: '0.03em' }}
                    >
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.full}</p>
                </div>
                <div
                  className="px-8 py-4 border-t border-gray-50 flex justify-between items-center"
                  style={{ backgroundColor: '#FAFAFA' }}
                >
                  <span className="text-sm text-gray-400">RDW erkend garagebedrijf</span>
                  <a
                    href={config.hero.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: p }}
                  >
                    Maak een afspraak →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: '#1F2937' }}>
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 uppercase"
            style={{ fontFamily: fontCondensed }}
          >
            Klaar om te starten?
          </h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Plan direct online uw afspraak of neem telefonisch contact op.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={config.hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow"
              style={{ backgroundColor: p }}
            >
              Online Afspraak Maken
            </a>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-semibold rounded-xl border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Bel Ons Direct
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
