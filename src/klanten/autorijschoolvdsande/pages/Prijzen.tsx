import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;
const gradDark   = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;

export const Prijzen = () => {
  const [tab, setTab] = useState<'kwaliteit' | 'rekensommetje'>('kwaliteit');
  return (
    <Layout>
      {/* Banner */}
      <section className="py-16 text-white text-center" style={{ background: gradBanner }}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-3">Prijzen</h1>
          <p className="text-white/65 max-w-xl mx-auto text-sm">Kwaliteit hoeft niet duur te zijn — het betaalt zich juist terug.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: c.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {config.stats.map((s, i) => (
              <div key={i} className="text-center rounded-3xl py-10 px-6"
                style={{ background: `linear-gradient(135deg, ${c.gradientFrom}18, ${c.primaryLight})`, border: `1px solid ${c.gradientFrom}22` }}>
                <div className="text-6xl font-extrabold mb-2" style={{ color: c.gradientFrom }}>{s.value}</div>
                <p className="text-xs font-medium" style={{ color: c.textBody }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 relative overflow-hidden" style={{ background: gradDark }}>
        <div className="absolute left-0 top-0 w-80 h-80 rounded-full opacity-[0.06] -translate-x-1/3 -translate-y-1/3"
          style={{ backgroundColor: 'white' }} />
        <div className="relative container mx-auto px-4 max-w-4xl">

          {/* Tab buttons */}
          <div className="flex rounded-2xl p-1 gap-1 mb-12 max-w-xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
            {([
              { key: 'kwaliteit', label: 'Kwaliteit VS Duurkoop' },
              { key: 'rekensommetje', label: 'Een rekensommetje' },
            ] as const).map(({ key, label }) => (
              <button key={key} onClick={() => setTab(key)}
                className="flex-1 py-3 text-sm font-bold rounded-xl transition-all"
                style={tab === key
                  ? { backgroundColor: 'white', color: c.accent }
                  : { color: 'rgba(255,255,255,0.55)' }}>
                {label}
              </button>
            ))}
          </div>

          {tab === 'kwaliteit' && (
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white mb-8">Kwaliteit VS Duurkoop</h2>
              <div className="space-y-5 text-sm leading-relaxed text-white/70">
                <p>
                  Als je voor het eerst op zoek gaat naar een rijschool, kom je vaak autorijscholen tegen met lagere prijzen dan bij van der Sande. Schijn bedriegt: dit zijn vaak scholen die pas gestart zijn of weinig leerlingen hebben. Door mijn <strong className="text-white">30+ jaar doorgewinterde ervaring</strong> als rij-instructeur hebben mijn leerlingen aantoonbaar minder rijlessen nodig.
                </p>
                <p>
                  Bij Autorijschool van der Sande slaagt <strong className="text-white">90% van de leerlingen de eerste keer</strong> voor hun rijexamen. Gemiddeld gaan mensen in Nederland twee à drie keer op rijexamen. Het slagingspercentage in de regio Sittard-Geleen ligt rond de 55 à 60 procent.
                </p>
                <p>
                  Klik{' '}
                  <a href="https://www.cbr.nl/nl/rijbewijs-auto/rijschool-vinden.htm" target="_blank" rel="noopener noreferrer"
                    className="underline text-white hover:text-white/80">hier</a>
                  {' '}om te zien hoe hoog de rijschool scoort die jij op het oog hebt!
                </p>
              </div>
            </div>
          )}

          {tab === 'rekensommetje' && (
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white mb-8">Een rekensommetje</h2>
              <div className="space-y-5 text-sm leading-relaxed text-white/70">
                <p>
                  Stel: Autorijschool X heeft 40 leerlingen per jaar voor het rijexamen. Hiervan slagen 20 à 24 de eerste keer. Van de overgebleven gezakte leerlingen slagen er de tweede keer nog eens 8 à 10. Bij deze school ga je gemiddeld 2 à 3 keer op examen — één keer zakken kost al gauw <strong className="text-white">€ 400 à € 500 extra</strong>.
                </p>
                <p>
                  Bij Autorijschool van der Sande slagen van diezelfde 40 leerlingen er <strong className="text-white">minimaal 36 de eerste keer</strong>. Dat scheelt enorm in tijd, geld en stress.
                </p>
                <p>
                  Door de juiste rijschool te kiezen bespaar je jezelf een hoop geld en stress. Bij Autorijschool van der Sande zijn er niet alleen maar woorden, maar zeker ook daden!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: gradBanner }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Vraag een prijsopgave aan</h2>
          <p className="text-white/70 mb-8 text-lg">Neem contact op voor een persoonlijk en vrijblijvend gesprek.</p>
          <Link to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 font-bold rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            style={{ backgroundColor: 'white', color: c.accent }}>
            Neem contact op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
