import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;
const gradDark   = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;
const gradMid    = `linear-gradient(135deg, ${c.gradientFrom}EE 0%, ${c.gradientMid}EE 100%)`;

const btnStyle = {
  backgroundColor: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.25)',
  color: 'white',
};

export const PraktijkTheorie = () => (
  <Layout>
    {/* Hero banner */}
    <section className="relative h-72 flex items-end overflow-hidden">
      <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=600&fit=crop"
        alt="Rijles" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: gradDark, opacity: 0.85 }} />
      <div className="relative container mx-auto px-4 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">Praktijk / Theorie</h1>
      </div>
    </section>

    {/* Twee kolommen */}
    <section className="py-20" style={{ backgroundColor: c.primaryLight }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Praktijk */}
          <div>
            <h2 className="text-2xl font-extrabold mb-3" style={{ color: c.text }}>Praktijk</h2>
            <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: c.gradientFrom }} />
            <p className="text-sm leading-relaxed mb-4" style={{ color: c.textBody }}>
              Bij Autorijschool van der Sande kun je met een goed gevoel starten aan je rijopleiding. Met een slagingspercentage van <strong style={{ color: c.text }}>80%</strong> ben je bij mij aan het juiste adres. Ik bied zowel een reguliere opleiding aan als een spoedopleiding.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: c.textBody }}>
              Voor een compleet overzicht van wat de praktijklessen inhouden klik je op onderstaande button!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to={config.basePath + '/contact'}
                className="px-5 py-3 text-sm font-bold rounded-xl text-center transition-all hover:-translate-y-0.5"
                style={{ background: gradDark, color: 'white' }}>
                Meer praktijk informatie
              </Link>
              <a href="https://www.cbr.nl/nl/rijbewijs-auto.htm" target="_blank" rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-semibold rounded-xl text-center transition-all hover:-translate-y-0.5"
                style={{ border: `2px solid ${c.gradientFrom}`, color: c.primary }}>
                Rijschool machtigen
              </a>
            </div>
          </div>

          {/* Theorie */}
          <div>
            <h2 className="text-2xl font-extrabold mb-3" style={{ color: c.text }}>Theorie</h2>
            <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: c.gradientFrom }} />
            <p className="text-sm leading-relaxed mb-4" style={{ color: c.textBody }}>
              Vanaf <strong style={{ color: c.text }}>16 jaar</strong> mag je het theorie-examen afleggen. Als je eenmaal je theorie behaald hebt is deze 1,5 jaar geldig.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: c.textBody }}>
              Om je theorie te oefenen bied ik een zelfsturend lesprogramma aan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://www.theorie.nl" target="_blank" rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-bold rounded-xl text-center transition-all hover:-translate-y-0.5"
                style={{ background: gradDark, color: 'white' }}>
                Meer theorie informatie
              </a>
              <a href="https://www.digid.nl/aanvragen-en-activeren/digid-aanvragen" target="_blank" rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-semibold rounded-xl text-center transition-all hover:-translate-y-0.5"
                style={{ border: `2px solid ${c.gradientFrom}`, color: c.primary }}>
                DigiD aanvragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Leeftijdsinfo */}
    <section className="py-20" style={{ background: gradMid }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { age: '16', title: 'Theorie-examen', desc: 'Vanaf 16 jaar mag je je theorie-examen afleggen. Geldig voor 1,5 jaar.' },
            { age: '17', title: '2toDrive', desc: 'Vanaf 17 jaar kun je starten met 2toDrive en onder begeleiding rijden.' },
            { age: '18', title: 'Rijexamen (B)', desc: 'Vanaf 18 jaar doe je je officieel rijexamen voor rijbewijs categorie B.' },
            { age: '80%', title: 'Slagingspercentage', desc: 'Van onze leerlingen slaagt een groot deel de eerste keer voor hun praktijkexamen.' },
          ].map(({ age, title, desc }) => (
            <div key={age} className="rounded-2xl p-7 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
              <div className="text-5xl font-extrabold mb-2">{age}</div>
              <p className="font-bold text-sm mb-2">{title}</p>
              <p className="text-xs text-white/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-white text-center" style={{ background: gradDark }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-4">Direct starten?</h2>
        <p className="text-white/70 mb-8 text-lg">Neem contact op voor een vrijblijvend gesprek over jouw rijopleiding.</p>
        <Link to={config.basePath + '/contact'}
          className="inline-block px-10 py-4 font-bold rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          style={{ backgroundColor: 'white', color: c.accent }}>
          Neem contact op
        </Link>
      </div>
    </section>
  </Layout>
);
