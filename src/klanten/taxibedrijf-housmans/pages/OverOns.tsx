import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const GREEN = config.colors.primary;
const GOLD = config.colors.accent;
const MUTED = '#78716C';

export const OverOns = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Wie zijn wij</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: GREEN }}>Over Housmans</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: MUTED }}>
            Een persoonlijk taxibedrijf uit Echt — met hart voor de regio en voor de klant.
          </p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-extrabold mb-5" style={{ color: GREEN }}>Taxibedrijf Housmans in Echt</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                Taxibedrijf Housmans is een lokaal taxibedrijf gevestigd in Echt, in het hart van Limburg. Vanuit onze thuisbasis rijden wij dagelijks voor particulieren, senioren, patiënten en bedrijven door de hele regio.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                Onze kracht zit in de persoonlijke benadering. U belt ons, wij zijn er. Geen lange wachttijden, geen gedoe met apps — gewoon bellen en wij regelen de rest.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                Met onze kennis van de lokale wegen en regio zorgen wij altijd voor de snelste en aangenaamste route. Of u nu naar het ziekenhuis moet, de trein wilt halen of een vlucht heeft — wij zijn er voor u.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=550&fit=crop"
                alt="Taxi Housmans"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>Onze waarden</p>
            <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Waar wij voor staan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: '🤝', label: 'Betrouwbaarheid', desc: 'Afspraak is afspraak. U kunt op ons rekenen, altijd.' },
              { icon: '💶', label: 'Eerlijke prijzen', desc: 'Geen verborgen kosten. Wat we afspreken betaalt u.' },
              { icon: '❤️', label: 'Persoonlijk contact', desc: 'U belt een mens, geen callcenter. Wij kennen onze klanten.' },
              { icon: '📍', label: 'Lokale betrokkenheid', desc: 'Wij zijn trots op Echt en de regio. Dat merkt u.' },
            ].map(({ icon, label, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: `${GREEN}10` }}>
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-base" style={{ color: GREEN }}>{label}</h3>
                  <p className="text-sm" style={{ color: MUTED }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>Voordelen</p>
            <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Waarom Housmans?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {config.features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl bg-stone-50 border border-stone-100">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: `${GREEN}10` }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: GREEN }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: GREEN }}>Maak kennis met ons</h2>
          <p className="mb-8 text-sm" style={{ color: MUTED }}>Neem gerust contact op. Wij staan altijd voor u klaar.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 transition-opacity hover:opacity-70"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
