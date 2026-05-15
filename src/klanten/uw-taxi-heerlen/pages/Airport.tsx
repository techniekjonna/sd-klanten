import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const { darkBlue, yellow, lightBlue, bgLight, textLight } = config.colors;

export const Airport = () => (
  <Layout>
    {/* Page header */}
    <section className="py-16 text-white" style={{ backgroundColor: darkBlue }}>
      <div className="container mx-auto px-4 text-center">
        <div className="text-5xl mb-4">✈️</div>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Airport Transfer</h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: lightBlue }}>
          Stressvrij en op tijd naar het vliegveld. Wij monitoren uw vlucht en staan altijd klaar.
        </p>
      </div>
    </section>

    {/* USPs */}
    <section className="py-20" style={{ backgroundColor: bgLight }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🛫', title: 'Vlucht monitoring', desc: 'Wij houden uw vlucht in de gaten. Vertraging? Wij passen ons aan.' },
            { icon: '⏰', title: 'Altijd op tijd', desc: 'U wordt ruim op tijd opgehaald, zodat u zonder stress kunt inchecken.' },
            { icon: '🧳', title: 'Ruim voor bagage', desc: 'Onze ruime voertuigen bieden voldoende plek voor koffers en bagage.' },
            { icon: '💰', title: 'Vaste all-in prijs', desc: 'U weet vooraf wat de rit kost. Geen verrassingen achteraf.' },
            { icon: '🌍', title: 'Meerdere luchthavens', desc: 'Schiphol, Eindhoven, Düsseldorf, Brussel en meer — wij rijden overal.' },
            { icon: '📱', title: 'Gemakkelijk boeken', desc: 'Bel ons of stuur een bericht. Binnen no-time geregeld.' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border-2 hover:shadow-md transition-all" style={{ borderColor: lightBlue }}>
              <div className="text-3xl mb-3">{u.icon}</div>
              <h3 className="font-bold mb-2" style={{ color: darkBlue }}>{u.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: textLight }}>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Luchthavens */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-3 text-center" style={{ color: darkBlue }}>Luchthavens</h2>
        <p className="text-center mb-10" style={{ color: textLight }}>Wij rijden naar alle grote luchthavens in de regio.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {config.airports.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl border-2 hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ borderColor: lightBlue, backgroundColor: bgLight }}
            >
              <span className="text-3xl">{a.flag}</span>
              <div className="flex-1">
                <p className="font-bold text-sm" style={{ color: darkBlue }}>{a.name}</p>
                <p className="text-xs mt-0.5" style={{ color: textLight }}>{a.country}</p>
              </div>
              <span
                className="px-2 py-1 rounded-lg text-xs font-bold"
                style={{ backgroundColor: yellow, color: darkBlue }}
              >
                {a.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Hoe werkt het */}
    <section className="py-20" style={{ backgroundColor: lightBlue }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-10 text-center" style={{ color: darkBlue }}>Hoe werkt het?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { step: '1', title: 'Boek uw rit', desc: 'Bel ons of stuur een bericht met uw gegevens en vluchtinformatie.' },
            { step: '2', title: 'Bevestiging', desc: 'U ontvangt een bevestiging met de vaste prijs en ophaaltijd.' },
            { step: '3', title: 'Ophalen', desc: 'Wij staan stipt op het afgesproken tijdstip voor de deur.' },
            { step: '4', title: 'Aankomen', desc: 'U wordt comfortabel naar het vliegveld gebracht. Genieten!' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4"
                style={{ backgroundColor: darkBlue, color: yellow }}
              >
                {s.step}
              </div>
              <h3 className="font-bold mb-2" style={{ color: darkBlue }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: darkBlue + 'AA' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center" style={{ backgroundColor: darkBlue }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-4 text-white">Uw airport transfer plannen?</h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: lightBlue }}>
          Neem contact op en wij regelen alles voor u. Snel, eenvoudig en voordelig.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: yellow, color: darkBlue }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/tarieven'}
            className="px-8 py-4 font-bold rounded-xl text-sm border-2 hover:bg-white/10 transition-colors text-white"
            style={{ borderColor: lightBlue }}
          >
            Bekijk tarieven
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
