import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Luchthaven = () => (
  <Layout>
    <section
      className="py-16 text-white"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: config.colors.accent }}
          >
            ✈️ Airport Transfer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Luchthavenvervoer</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Zorgeloos naar het vliegveld. Vaste all-in prijs, vluchtmonitoring en altijd op tijd.
            Wij brengen u van Sittard-Geleen naar alle grote luchthavens.
          </p>
        </div>
      </div>
    </section>

    {/* Luchthavens tabel */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-extrabold mb-8 text-center" style={{ color: config.colors.primary }}>
          Bestemmingen & prijzen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {config.airports.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{a.flag}</span>
              <div className="flex-1">
                <p className="font-bold" style={{ color: config.colors.primary }}>{a.name}</p>
                <p className="text-xs text-gray-400">{a.country} · Reistijd {a.time}</p>
              </div>
              <div className="text-right">
                <p className="font-extrabold text-lg" style={{ color: config.colors.accent }}>{a.price}</p>
                <p className="text-xs text-gray-400">all-in</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Voordelen */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-center mb-10" style={{ color: config.colors.primary }}>
          Waarom onze airporttransfer?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '💰', title: 'Vaste prijs', desc: 'Geen meter, geen verrassing. Betaal wat afgesproken is.' },
            { icon: '✈️', title: 'Vlucht monitoring', desc: 'Bij vertraging wachten wij gewoon op u, zonder extra kosten.' },
            { icon: '🧳', title: 'Ruime kofferruimte', desc: 'Groot gezin of veel bagage? Geen probleem.' },
            { icon: '🕐', title: 'Op tijd gegarandeerd', desc: 'Wij plannen ruim vooruit. U mist nooit uw vlucht.' },
          ].map((v) => (
            <div key={v.title} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-bold mb-2 text-sm" style={{ color: config.colors.primary }}>{v.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 text-center" style={{ backgroundColor: config.colors.accent }}>
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-3">Luchthaven transfer boeken?</h3>
        <p className="text-white/80 mb-6">Boek minstens 24 uur van tevoren voor de beste prijs.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-7 py-3.5 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: config.colors.primary }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-7 py-3.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            Online boeken →
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
