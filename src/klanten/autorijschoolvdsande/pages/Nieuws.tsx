import { Layout } from '../components/Layout';
import { config } from '../config';
import { Link } from 'react-router-dom';

const c = config.colors;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;
const gradDark   = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;

const nieuwsItems = [
  { id: 1, datum: '12 april 2025', titel: 'Nieuwe Mercedes lesauto in gebruik genomen', samenvatting: 'Autorijschool van der Sande heeft een gloednieuwe Mercedes in gebruik genomen, uitgerust met de nieuwste veiligheidssystemen voor een nog betere leerervaring.' },
  { id: 2, datum: '3 februari 2025', titel: '90% slagingspercentage gehandhaafd in 2024', samenvatting: 'Ook in 2024 slaagde 90% van de leerlingen de eerste keer voor hun rijexamen — ver boven het regionale gemiddelde van 55–60%.' },
  { id: 3, datum: '15 januari 2025', titel: 'Spoedopleidingen nu ook beschikbaar in het weekend', samenvatting: 'Vanaf februari 2025 zijn er weekendspoedopleidingen beschikbaar. Ideaal voor leerlingen die snel hun rijbewijs willen halen.' },
];

export const Nieuws = () => (
  <Layout>
    {/* Banner */}
    <section className="py-16 text-white text-center" style={{ background: gradBanner }}>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-3">Nieuws</h1>
        <p className="text-white/65 max-w-xl mx-auto text-sm">Blijf op de hoogte van het laatste nieuws van Autorijschool van der Sande.</p>
      </div>
    </section>

    {/* Nieuws items */}
    <section className="py-20" style={{ backgroundColor: c.primaryLight }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-1 divide-y" style={{ borderColor: `${c.gradientFrom}22` }}>
          {nieuwsItems.map((item) => (
            <article key={item.id} className="py-8 first:pt-0">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: c.primary }}>{item.datum}</p>
              <h2 className="text-xl font-extrabold mb-3 leading-snug" style={{ color: c.text }}>{item.titel}</h2>
              <p className="text-sm leading-relaxed" style={{ color: c.textBody }}>{item.samenvatting}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-white text-center" style={{ background: gradDark }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-4">Vragen of aanmelden?</h2>
        <p className="text-white/70 mb-8 text-lg">Neem vrijblijvend contact op — ik help je graag verder.</p>
        <Link to={config.basePath + '/contact'}
          className="inline-block px-10 py-4 font-bold rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          style={{ backgroundColor: 'white', color: c.accent }}>
          Neem contact op
        </Link>
      </div>
    </section>
  </Layout>
);
