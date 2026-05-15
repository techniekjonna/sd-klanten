import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;
const MUTED = '#64748B';

export const OverOns = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 text-white" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Wie zijn wij</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Over Housmans</h1>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Een klein, persoonlijk taxibedrijf uit Echt — met hart voor de regio en voor de klant.
          </p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Ons verhaal</p>
              <h2 className="text-3xl font-bold mb-5" style={{ color: PRIMARY }}>
                Taxibedrijf Housmans in Echt
              </h2>
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
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=550&fit=crop"
                alt="Taxibedrijf Housmans"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20" style={{ backgroundColor: '#F1F5F9' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Onze waarden</p>
            <h2 className="text-3xl font-bold" style={{ color: PRIMARY }}>Waar wij voor staan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { icon: '🤝', label: 'Betrouwbaarheid', desc: 'Afspraak is afspraak. U kunt op ons rekenen, altijd.' },
              { icon: '💶', label: 'Eerlijke prijzen', desc: 'Geen verborgen kosten. Wat we afspreken betaalt u.' },
              { icon: '❤️', label: 'Persoonlijk contact', desc: 'U belt een mens, geen callcenter. Wij kennen onze klanten.' },
              { icon: '📍', label: 'Lokale betrokkenheid', desc: 'Wij zijn trots op Echt en de regio. Dat merkt u.' },
            ].map(({ icon, label, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${PRIMARY}0D` }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: PRIMARY }}>{label}</h3>
                  <p className="text-sm" style={{ color: MUTED }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat ons onderscheidt */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Voordelen</p>
            <h2 className="text-3xl font-bold" style={{ color: PRIMARY }}>Waarom Housmans?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: PRIMARY }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Maak kennis met ons</h2>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Neem gerust contact op. Wij staan altijd voor u klaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-3.5 font-bold rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: '#fff' }}
            >
              Bel {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-3.5 font-bold rounded-xl border-2 text-white transition-all hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
