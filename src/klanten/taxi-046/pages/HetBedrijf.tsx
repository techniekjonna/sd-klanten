import { Layout } from '../components/Layout';
import { config } from '../config';

export const HetBedrijf = () => (
  <Layout>
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Het Bedrijf</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Leer ons kennen — wie wij zijn, wat we doen en waarom klanten op ons vertrouwen.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Over ons</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">Taxiservice in hart van Zuid-Limburg</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{config.about.story}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{config.about.mission}</p>
            <ul className="space-y-3">
              {config.about.values.map((v, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-sm font-medium text-gray-700">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={config.about.image}
              alt="Taxi 046"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-12 tracking-tight">Ons werkgebied</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {config.serviceArea.map(place => (
            <span key={place} className="px-5 py-2.5 bg-white border-2 border-gray-200 rounded-full font-semibold text-sm hover:border-black transition-colors">
              {place}
            </span>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">En heel Zuid-Limburg en omgeving</p>
      </div>
    </section>

    <section className="py-20 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-4 tracking-tight">Direct contact</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Vragen over ons bedrijf? Bel ons gerust — we staan altijd voor u klaar.</p>
        <a
          href={`tel:${config.contact.phone}`}
          className="inline-block px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
        >
          📞 {config.contact.phoneDisplay}
        </a>
      </div>
    </section>
  </Layout>
);
