import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Zakelijk = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section
        className="relative py-28 text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: `${config.colors.darkBg}cc` }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">
              💼 Zakelijk vervoer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Julliard's Zakelijk Vervoer</h1>
            <p className="text-white/70 text-lg max-w-xl">
              Discreet, stipt en professioneel taxivervoer voor bedrijven en executives. Wij begrijpen dat zakelijke afspraken niet wachten.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: primary }}>Vervoer dat past bij uw bedrijf</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Of het nu gaat om een klant ophalen van de luchthaven, een dagelijkse woon-werkrit of vervoer naar een zakelijk event — Taxiservice Julliard regelt het professioneel en op tijd.
              </p>
              <ul className="space-y-3">
                {[
                  'Facturering op bedrijfsnaam (maandelijks of per rit)',
                  'Vaste chauffeur op aanvraag voor continuïteit',
                  'Stille, nette voertuigen voor een goede indruk',
                  'Flexibel in planning en routes',
                  'Professionele chauffeurs met zakelijke etiquette',
                  'Zakelijke rekeningrijden mogelijkheden',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: accent }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop"
                alt="Zakelijk vervoer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: primary }}>Zakelijke dienstverlening</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '🏢', title: 'Airport transfers', desc: 'Uw klanten of medewerkers comfortabel ophalen van of brengen naar de luchthaven.' },
              { icon: '📋', title: 'Event vervoer', desc: 'Vervoer voor bedrijfsuitjes, teambuilding, congressen en zakelijke bijeenkomsten.' },
              { icon: '🔄', title: 'Vaste contracten', desc: 'Structureel vervoer met maandelijkse facturering en vaste tarieven voor uw bedrijf.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: primary }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Zakelijk afspreken?</h2>
          <p className="text-white/70 mb-7 max-w-md mx-auto">Neem contact op voor een zakelijk contract of een offerte op maat.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={config.basePath + '/contact'} className="px-7 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
              Neem contact op
            </Link>
            <a href={`tel:${config.contact.phone}`} className="px-7 py-3.5 font-bold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors">
              📞 {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
