import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;
const gradDark   = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;

const mercedesPhotos = [
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop',
];

const voordelen = [
  { stat: '🛡️', text: 'Geavanceerde veiligheidssystemen' },
  { stat: '❄️', text: 'Winterbanden in koude maanden' },
  { stat: '🌬️', text: 'Airconditioning voor de zomer' },
  { stat: '🌿', text: 'Rookvrij voertuig' },
  { stat: '🚪', text: 'Open schuifdak' },
  { stat: '🪑', text: 'Instelbaar voor 146–210 cm' },
  { stat: '📱', text: 'Moderne technologie & display' },
  { stat: '✅', text: 'CBR-goedgekeurd voor rijexamen' },
];

export const Auto = () => (
  <Layout>
    {/* Hero banner */}
    <section className="relative h-72 flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=600&fit=crop"
        alt="Lesauto" className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: gradDark, opacity: 0.82 }} />
      <div className="relative container mx-auto px-4 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">De lesauto</h1>
      </div>
    </section>

    {/* Tekst + fotogrid */}
    <section className="py-20" style={{ backgroundColor: c.primaryLight }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Tekst */}
          <div>
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: c.primary }}>
              Mercedes · Lesauto
            </span>
            <h2 className="text-4xl font-extrabold leading-tight mb-6" style={{ color: c.text }}>
              De modernste lesauto van Sittard-Geleen.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: c.textBody }}>
              <p>
                Waar veel autorijscholen bezuinigen op de lesauto, rijd je bij Autorijschool van der Sande in een <strong style={{ color: c.text }}>gloednieuwe Mercedes</strong> voorzien van de modernste technologie en veiligheidssystemen van nu.
              </p>
              <p>
                In de wintermaanden zijn er winterbanden gemonteerd — dit vergroot ook de kans dat je rijexamen gewoon doorgaat bij slecht weer.
              </p>
              <p>
                Rookvrij, airco, open schuifdak. En de auto past écht iedereen: mijn grootste leerling was <strong style={{ color: c.text }}>210 cm</strong>, de kleinste <strong style={{ color: c.text }}>146 cm</strong>.
              </p>
              <p>
                Een goede lesauto geeft jou de grip en het vertrouwen dat nodig is in de eerste fase van je opleiding — zodat je je sneller kunt richten op de weg om je heen.
              </p>
            </div>

            {/* Voordelen als strakke lijst */}
            <div className="mt-8 grid grid-cols-2 gap-2">
              {voordelen.map((v, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium" style={{ color: c.textBody }}>
                  <span>{v.stat}</span>
                  <span>{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fotogrid 2×2 */}
          <div className="grid grid-cols-2 gap-3">
            {mercedesPhotos.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md aspect-video">
                <img
                  src={src}
                  alt={`Mercedes lesauto ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={e => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-white text-center" style={{ background: gradDark }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-4">Wil je kennismaken?</h2>
        <p className="text-white/70 mb-8 text-lg">Rij binnenkort in de mooiste lesauto van Sittard-Geleen.</p>
        <Link
          to={config.basePath + '/contact'}
          className="inline-block px-10 py-4 font-bold rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          style={{ backgroundColor: 'white', color: c.accent }}
        >
          Neem contact op
        </Link>
      </div>
    </section>
  </Layout>
);
