import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const p = config.colors.primary;
  const pd = config.colors.primaryDark;

  const faq = [
    {
      v: 'Hoe vaak moet ik mijn ramen laten wassen?',
      a: 'Voor particulieren adviseren wij elke 6 tot 8 weken. In een drukke omgeving of bij veel verkeer kan elke 4 weken nodig zijn. Voor bedrijfspanden kijken wij naar de specifieke situatie.',
    },
    {
      v: 'Wat is osmosewater en waarom gebruikt u het?',
      a: 'Osmosewater is gezuiverd water waaruit alle mineralen zijn verwijderd. Hierdoor laat het geen kalkvlekken of strepen achter als het opdroogt. Professionele glazenwassers werken hiermee voor een gegarandeerd streepvrij resultaat — en helemaal zonder chemische middelen.',
    },
    {
      v: 'Komen jullie ook bij hoog werk of moeilijk bereikbare plekken?',
      a: 'Ja. Wij werken met uitschuifbare telescoopstangen waarmee wij ramen tot meerdere verdiepingen hoog kunnen bereiken, ook zonder ladder. Veilig voor onszelf en voor uw eigendom.',
    },
    {
      v: 'Is er een abonnement mogelijk?',
      a: 'Zeker. Wij bieden onderhoudsabonnementen aan waarbij u kiest hoe vaak wij langskomen — elke 4, 6 of 8 weken. U bent nooit gebonden aan een langdurig contract en kunt altijd opzeggen.',
    },
    {
      v: 'Hoe kan ik betalen?',
      a: 'U kunt betalen per Tikkie, contant na afloop of per factuur (voor zakelijke klanten). Wij zijn flexibel in de betaalwijze.',
    },
    {
      v: 'Wat als ik niet tevreden ben?',
      a: 'Dan komen wij terug. Uw tevredenheid staat voorop. Als u na de beurt niet blij bent met het resultaat, lossen wij het kosteloos op.',
    },
  ];

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: pd }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Onze Diensten</h1>
          <p className="text-blue-200 max-w-xl mx-auto">{config.description}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="h-1.5" style={{ backgroundColor: p }} />
                <div className="p-8">
                  <div className="flex items-start gap-5">
                    <div
                      className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: config.colors.primaryLight }}
                    >
                      {s.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold" style={{ color: config.colors.text }}>
                          {s.name}
                        </h3>
                        {s.priceLabel && (
                          <span
                            className="text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: config.colors.primaryLight, color: p }}
                          >
                            {s.priceLabel}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                      {s.features && s.features.length > 0 && (
                        <ul className="space-y-1.5">
                          {s.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <span style={{ color: p }}>✓</span>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Osmosewater uitleg */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-5">💧</div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pd }}>
              Waarom Wij Werken met Osmosewater
            </h2>
            <p className="text-blue-800 leading-relaxed mb-4">
              Gewoon leidingwater bevat mineralen die na het drogen witte vlekken achterlaten op glas.
              Osmosewater is gezuiverd en mineraalvrij — wanneer het opdroogt, trekt het als een magneet
              alle resterende vuil van het glas mee en laat het geen enkel spoor achter.
            </p>
            <p className="text-blue-800 leading-relaxed">
              In combinatie met onze professionele telescoopborstel bereiken wij elk raam veilig en efficiënt,
              zonder ladder — minder risico, betere kwaliteit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Veelgestelde Vragen
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ v, a }, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 overflow-hidden">
                <summary
                  className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-sm list-none"
                  style={{ color: config.colors.text }}
                >
                  {v}
                  <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  <p className="pt-4">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: config.colors.text }}>
            Niet zeker welke dienst bij u past?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Bel of app ons voor een vrijblijvend advies. Wij helpen u graag de juiste keuze te maken en geven altijd een eerlijke prijs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/afspraak'}
              className="px-10 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Afspraak Aanvragen
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-10 py-4 font-semibold rounded-xl border-2 transition-colors"
              style={{ borderColor: p, color: p }}
            >
              Bel Direct
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
