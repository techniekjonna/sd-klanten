import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Schoolvervoer = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section className="relative py-24 text-white" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">🎒 Schoolvervoer</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Julliard's Schoolvervoer</h1>
            <p className="text-white/70 text-lg max-w-xl">Veilig, betrouwbaar en vriendelijk vervoer voor uw kinderen. Elke dag op tijd op school.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: primary }}>Veilig naar school</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wij begrijpen dat de veiligheid van uw kind het allerbelangrijkste is. Onze chauffeurs zijn ervaren, betrouwbaar en bekend met het verzorgen van schoolvervoer. Uw kind wordt elke dag op tijd en veilig thuis opgehaald en naar school gebracht.
              </p>
              <ul className="space-y-3">
                {[
                  'Gecertificeerde en gescreende chauffeurs',
                  'Vaste chauffeur voor vertrouwdheid',
                  'Dagelijks vaste tijden — ook bij afwijkende schooltijden',
                  'Direct contact met ouders bij wijzigingen',
                  'Verzekerd schoolvervoer',
                  'Maandelijkse factuur voor eenvoudig beheer',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: accent }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                alt="Schoolvervoer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: primary }}>Hoe werkt het?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Neem contact op', desc: 'Bel of mail ons met uw wensen: school, tijden en bijzonderheden over uw kind.' },
              { step: '2', title: 'Offerte & afspraak', desc: 'Wij stellen een aanbod op maat op en bespreken alle details met u door.' },
              { step: '3', title: 'Veilig vervoerd', desc: 'Uw kind wordt elke dag stipt opgehaald en veilig op school afgezet.' },
            ].map(item => (
              <div key={item.step} className="bg-white rounded-2xl p-7 border border-gray-100 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-black text-white mb-4 mx-auto" style={{ backgroundColor: primary }}>
                  {item.step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: primary }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Schoolvervoer aanvragen?</h2>
          <p className="text-white/70 mb-7 max-w-md mx-auto">Neem contact op voor een persoonlijk gesprek over de mogelijkheden.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${config.contact.phone}`} className="px-7 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
              📞 {config.contact.phoneDisplay}
            </a>
            <Link to={config.basePath + '/contact'} className="px-7 py-3.5 font-bold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors">
              Meer informatie
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
