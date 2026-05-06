import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

const faq = [
  {
    v: 'Hoe vaak moet ik mijn ramen laten wassen?',
    a: 'Voor particulieren adviseren wij elke 6 tot 8 weken. In een drukke omgeving of bij veel verkeer kan elke 4 weken nodig zijn. Voor bedrijfspanden kijken wij naar de specifieke situatie.',
  },
  {
    v: 'Wat is osmosewater en waarom gebruikt u het?',
    a: 'Osmosewater is gezuiverd water waaruit alle mineralen zijn verwijderd. Hierdoor laat het geen kalkvlekken of strepen achter als het opdroogt. Professionele glazenwassers werken hiermee voor een gegarandeerd streepvrij resultaat — zonder chemische middelen.',
  },
  {
    v: 'Komen jullie ook bij hoog werk of moeilijk bereikbare plekken?',
    a: 'Ja. Wij werken met uitschuifbare telescoopstangen waarmee wij ramen tot meerdere verdiepingen hoog kunnen bereiken, ook zonder ladder. Veilig voor onszelf en voor uw eigendom.',
  },
  {
    v: 'Is er een abonnement mogelijk?',
    a: 'Zeker. Wij bieden onderhoudsabonnementen aan waarbij u kiest hoe vaak wij langskomen — elke 4, 6 of 8 weken. U bent nooit gebonden aan een langdurig contract.',
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

export const Diensten = () => (
  <Layout>
    {/* Page header */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-24 text-center">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Wat wij doen</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Onze Diensten</h1>
        <p className="text-blue-300 max-w-xl mx-auto">{config.description}</p>
      </div>
    </section>

    {/* Services grid */}
    <section style={{ backgroundColor: c.primary }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl p-8 hover:-translate-y-1 transition-transform"
              style={{ backgroundColor: c.primaryDark }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-white">{s.name}</h3>
                    {s.priceLabel && (
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white flex-shrink-0"
                        style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                      >
                        {s.priceLabel}
                      </span>
                    )}
                  </div>
                  <p className="text-blue-300 text-sm leading-relaxed mb-5">{s.description}</p>
                  {s.features && s.features.length > 0 && (
                    <ul className="space-y-1.5">
                      {s.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-blue-200">
                          <span className="text-green-400 font-bold">✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Osmosewater uitleg */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-5">💧</div>
          <h2 className="text-2xl font-black text-white mb-4">Waarom Osmosewater?</h2>
          <p className="text-blue-300 leading-relaxed mb-4">
            Gewoon leidingwater bevat mineralen die na het drogen witte vlekken achterlaten op glas.
            Osmosewater is gezuiverd en mineraalvrij — wanneer het opdroogt trekt het alle resterende
            vuil van het glas mee en laat het geen enkel spoor achter.
          </p>
          <p className="text-blue-300 leading-relaxed">
            In combinatie met onze professionele telescoopborstel bereiken wij elk raam veilig en
            efficiënt, zonder ladder — minder risico, beter resultaat.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section style={{ backgroundColor: c.primary }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Vragen</p>
          <h2 className="text-3xl font-black text-white">Veelgestelde Vragen</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faq.map(({ v, a }, i) => (
            <details
              key={i}
              className="group rounded-xl overflow-hidden"
              style={{ backgroundColor: c.primaryDark }}
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-sm text-white list-none">
                {v}
                <span className="ml-4 flex-shrink-0 text-blue-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-6 pb-5 text-sm text-blue-300 leading-relaxed border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <p className="pt-4">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ backgroundColor: c.primaryDark }} className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-white mb-4">Niet zeker welke dienst bij u past?</h2>
        <p className="text-blue-300 mb-8 max-w-xl mx-auto">
          Bel of app ons voor vrijblijvend advies. Wij helpen u graag de juiste keuze te maken en geven altijd een eerlijke prijs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={config.basePath + '/afspraak'}
            className="px-10 py-4 font-bold text-white rounded-xl transition-all hover:scale-105"
            style={{ backgroundColor: c.primary }}
          >
            Afspraak Aanvragen
          </Link>
          <a
            href={`tel:${config.contact.phone}`}
            className="px-10 py-4 font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Bel Direct
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
