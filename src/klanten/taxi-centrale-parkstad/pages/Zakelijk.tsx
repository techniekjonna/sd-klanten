import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Zakelijk = () => (
  <Layout>
    <section className="py-20 text-white" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Zakelijk vervoer</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Professioneel zakelijk taxivervoer</h1>
        <p className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
          Voor bedrijven in regio Parkstad en heel Nederland. Betrouwbaar, discreet en altijd op tijd.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Voor uw bedrijf</span>
            <h2 className="text-2xl font-black mt-2 mb-4" style={{ color: config.colors.text }}>Zakelijk taxivervoer op maat</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Taxi Centrale Parkstad biedt betrouwbaar zakelijk taxivervoer voor bedrijven, ZZP'ers en executives in de regio. Van woon-werkverkeer tot klantbezoeken en business travel naar luchthavens.
            </p>
            <ul className="space-y-3">
              {[
                'Factuur op bedrijfsnaam',
                'Vaste maandelijkse afrekening mogelijk',
                'Vaste chauffeur op aanvraag',
                'Stipte tijdsplanning — altijd op tijd',
                'Discreet en professioneel',
                'WiFi-verbinding op aanvraag',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: config.colors.text }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                    style={{ backgroundColor: config.colors.primary }}
                  >✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
              alt="Zakelijk taxivervoer"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
            <div
              className="absolute -bottom-4 -right-4 rounded-2xl p-5 shadow-xl"
              style={{ backgroundColor: config.colors.accent }}
            >
              <p className="font-black text-2xl" style={{ color: config.colors.dark }}>B2B</p>
              <p className="text-xs mt-0.5" style={{ color: config.colors.dark }}>op maat</p>
            </div>
          </div>
        </div>

        {/* Voordelen grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { icon: '📋', title: 'Facturatie', desc: 'Maandelijkse factuur op bedrijfsnaam' },
            { icon: '🔒', title: 'Discreet', desc: 'Vertrouwelijk en professioneel' },
            { icon: '⏰', title: 'Stipt', desc: 'Altijd op tijd, gegarandeerd' },
            { icon: '📞', title: 'Vast contact', desc: 'Direct met uw vaste chauffeur' },
          ].map(item => (
            <div key={item.title} className="rounded-2xl p-5 text-center" style={{ backgroundColor: config.colors.light }}>
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="font-bold text-sm mb-1" style={{ color: config.colors.text }}>{item.title}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: config.colors.dark }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black mb-2">Zakelijk account aanvragen?</h3>
              <p className="text-white/60 text-sm">Neem contact op voor een voorstel op maat voor uw bedrijf.</p>
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
                to={config.basePath + '/contact'}
                className="px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
