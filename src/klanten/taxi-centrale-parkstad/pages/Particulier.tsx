import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Particulier = () => (
  <Layout>
    <section className="py-20 text-white" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Particulier vervoer</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Comfortabel van A naar B</h1>
        <p className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
          Of u nu naar de trein, het ziekenhuis, een evenement of de luchthaven wilt — Taxi Centrale Parkstad brengt u veilig en stipt op uw bestemming.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: '🚕',
              title: 'Lokale ritten',
              desc: 'Snel en betrouwbaar vervoer binnen Heerlen, Landgraaf, Kerkrade en heel de regio Parkstad.',
              items: ['Station, ziekenhuis, centrum', 'Avond- en nachtritten', 'Op afroep beschikbaar', 'Vaste prijsafspraak mogelijk'],
            },
            {
              icon: '🏥',
              title: 'Zorgvervoer',
              desc: 'Speciaal vervoer voor ziekenhuisbezoeken en behandelingen. Geduldig, zorgzaam en betrouwbaar.',
              items: ['Hulp bij in- en uitstappen', 'Terugrit inplannen', 'Discreet en vriendelijk', 'Heerlen UMC & CZL'],
            },
            {
              icon: '🎉',
              title: 'Evenementen & uitjes',
              desc: 'Stap zorgeloos in na een feestje, concert of avondje uit. Wij rijden u veilig naar huis.',
              items: ['Geen parkeerstress', 'Avond- en weekendritten', 'Groepsvervoer mogelijk', 'Vaste afspraken welkom'],
            },
          ].map(item => (
            <div
              key={item.title}
              className="rounded-2xl p-7 border-2 hover:shadow-md transition-all"
              style={{ borderColor: config.colors.light }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: config.colors.light }}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.items.map(i => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: config.colors.accent }} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: config.colors.light }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '🕐', label: '24/7 bereikbaar', sub: 'Altijd voor u klaar' },
              { icon: '📍', label: 'Regio Parkstad', sub: 'Heerlen & omgeving' },
              { icon: '💬', label: 'Direct contact', sub: 'Persoonlijk met chauffeur' },
            ].map(item => (
              <div key={item.label}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-sm" style={{ color: config.colors.text }}>{item.label}</p>
                <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: config.colors.primary }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black mb-2">Direct een taxi bestellen?</h3>
              <p className="text-white/70 text-sm">Bel ons of vraag online een rit aan. Wij bellen u terug ter bevestiging.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
              >
                📞 Bel direct
              </a>
              <Link
                to={config.basePath + '/bestellen'}
                className="px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Rit aanvragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
