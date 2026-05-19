import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Kortingskaart = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  return (
    <Layout>
      <section className="relative py-24 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">🎫 Voordelen voor vaste klanten</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Julliard's Kortingskaart</h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">Rijdt u regelmatig met ons? Profiteer van exclusieve voordelen met de Julliard Kortingskaart.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            {/* Kaart visualisatie */}
            <div
              className="rounded-2xl p-8 text-white aspect-video flex flex-col justify-between shadow-xl"
              style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}
            >
              <div className="flex justify-between items-start">
                <img src={config.logo} alt="Taxiservice Julliard" className="h-8 brightness-0 invert" />
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: accent }}>KORTINGSKAART</span>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Kaartnummer</p>
                <p className="text-xl font-bold tracking-widest">**** **** **** ****</p>
                <p className="text-white/60 text-xs mt-3">Taxiservice Julliard — {config.contact.phoneDisplay}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: primary }}>Wat houdt de kortingskaart in?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{config.kortingskaart.description}</p>
              <ul className="space-y-3">
                {config.kortingskaart.voordelen.map(v => (
                  <li key={v} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: accent }}>✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '💰', title: '10% korting', desc: 'Op elke rit die u boekt — of u nu privé of zakelijk reist.' },
              { icon: '⚡', title: 'Voorrang', desc: 'Bij drukte gaat u voor. Uw rit wordt altijd als prioriteit behandeld.' },
              { icon: '📋', title: 'Maandfactuur', desc: 'Geen gedoe met losse betalingen. Één overzichtelijke factuur per maand.' },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-2xl border-2 border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: primary }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl text-center" style={{ backgroundColor: `${primary}08`, border: `2px solid ${primary}20` }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: primary }}>Kortingskaart aanvragen</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Neem contact op via telefoon of e-mail om uw kortingskaart aan te vragen. Wij sturen deze kosteloos naar u op.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${config.contact.phone}`} className="px-7 py-3.5 font-bold rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
                📞 {config.contact.phoneDisplay}
              </a>
              <Link to={config.basePath + '/contact'} className="px-7 py-3.5 font-bold rounded-xl border-2 transition-colors" style={{ borderColor: primary, color: primary }}>
                Aanvragen via formulier
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
