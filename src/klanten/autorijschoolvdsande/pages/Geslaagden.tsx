import { Layout } from '../components/Layout';
import { config } from '../config';
import { Link } from 'react-router-dom';

const c = config.colors;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;
const gradDark   = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;

export const Geslaagden = () => {
  const jaren = [...new Set(config.geslaagden.map(g => g.jaar))].sort((a, b) => b - a);
  return (
    <Layout>
      {/* Banner */}
      <section className="py-16 text-white text-center" style={{ background: gradBanner }}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-3">Geslaagden</h1>
          <p className="text-white/65 max-w-xl mx-auto text-sm">Trots op al onze leerlingen die hun rijbewijs hebben behaald!</p>
        </div>
      </section>

      {/* Intro stat */}
      <section className="py-16 text-center" style={{ backgroundColor: c.primaryLight }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-7xl font-extrabold mb-3" style={{ color: c.gradientFrom }}>{config.geslaagden.length}+</div>
          <p className="text-base font-bold mb-1" style={{ color: c.text }}>leerlingen geslaagd de afgelopen jaren</p>
          <p className="text-sm" style={{ color: c.textBody }}>90% slaagt de eerste keer. Jij straks ook?</p>
        </div>
      </section>

      {/* Geslaagden per jaar */}
      <section className="py-16" style={{ background: gradDark }}>
        <div className="container mx-auto px-4 max-w-5xl">
          {jaren.map(jaar => {
            const namen = config.geslaagden.filter(g => g.jaar === jaar);
            return (
              <div key={jaar} className="mb-14">
                <div className="flex items-center gap-4 mb-7">
                  <h2 className="text-3xl font-extrabold text-white">{jaar}</h2>
                  <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                    {namen.length} geslaagd
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {namen.map((g, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                      <span className="font-bold text-white/40">✓</span>
                      <span className="text-white/80 text-xs font-medium">{g.naam}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: gradBanner }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Binnenkort ook op de lijst?</h2>
          <p className="text-white/70 mb-8 text-lg">Haal jouw rijbewijs bij de rijschool met het hoogste slagingspercentage van Sittard-Geleen.</p>
          <Link to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 font-bold rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            style={{ backgroundColor: 'white', color: c.accent }}>
            Aanmelden
          </Link>
        </div>
      </section>
    </Layout>
  );
};
