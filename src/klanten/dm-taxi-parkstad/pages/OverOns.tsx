import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = '#1B3F6E';
const ORANGE = '#F97316';
const NAVY_LIGHT = '#EEF4FB';

export const OverOns = () => (
  <Layout>
    <section className="py-16" style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Wie zijn wij?</p>
        <h1 className="text-4xl font-extrabold text-white mb-4">Over D&amp;M Taxi Parkstad</h1>
        <p className="text-blue-200 max-w-xl mx-auto">Persoonlijk, betrouwbaar en altijd beschikbaar — dát is D&amp;M Taxi Parkstad.</p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Ons verhaal</p>
            <h2 className="text-3xl font-bold mb-5" style={{ color: NAVY }}>{config.about.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
            <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop"
              alt="D&M Taxi Parkstad voertuig"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20" style={{ backgroundColor: NAVY_LIGHT }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: NAVY }}>Onze Waarden</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {config.about.values.map((v, i) => (
            <div key={i} className="text-center bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-extrabold text-lg" style={{ backgroundColor: ORANGE }}>
                {i + 1}
              </div>
              <p className="font-semibold text-sm" style={{ color: NAVY }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service area */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Werkgebied</p>
          <h2 className="text-3xl font-bold mb-5" style={{ color: NAVY }}>Actief in heel Parkstad</h2>
          <p className="text-gray-600 mb-8">Wij rijden door de gehele Parkstad-regio en omliggende gebieden. Hieronder vindt u een overzicht van de gemeenten waar wij actief zijn.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Heerlen', 'Landgraaf', 'Kerkrade', 'Brunssum', 'Nuth', 'Simpelveld', 'Voerendaal', 'Beekdaelen', 'Sittard-Geleen', 'Maastricht'].map(place => (
              <span key={place} className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: NAVY_LIGHT, color: NAVY }}>
                📍 {place}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center" style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-3">Benieuwd wat wij voor u kunnen doen?</h2>
        <p className="text-blue-200 mb-8 max-w-md mx-auto">Neem contact op of boek direct uw taxirit via ons formulier.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+31455700300" className="px-8 py-4 font-bold rounded-xl text-white text-lg hover:opacity-90 transition" style={{ backgroundColor: ORANGE }}>
            📞 045 570 03 00
          </a>
          <Link to={config.basePath + '/contact'} className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition">
            Stuur een Bericht
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
