import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const fullServices = [
  {
    id: 'zakelijk',
    name: 'Zakelijk Vervoer',
    icon: '💼',
    description: 'Professioneel directie- en zakelijk vervoer in onze stijlvolle Mercedes E-Klasse AMG Line. Wij begrijpen dat uw tijd kostbaar is en behandelen elke rit met de hoogste discretie en punctualiteit.',
    features: [
      'Directievervoer op maat',
      'Bedrijfsafspraken & vergaderingen',
      'Factuur op bedrijfsnaam',
      'Vaste chauffeur mogelijk',
      'Vaste rijtijdafspraken',
      'Representatieve voertuigen',
    ],
    vehicle: 'Mercedes E-Klasse AMG Line',
    image: 'https://daviestaxiservice.nl/wp-content/uploads/2025/01/E-klasse-e1736334223497-600x600.jpg',
  },
  {
    id: 'airport',
    name: 'Airport Transfer',
    icon: '✈️',
    description: 'Ontspannen reizen begint al voor het vliegtuig. Wij brengen u stressvrij naar Schiphol, Eindhoven, Düsseldorf, Brussel of Frankfurt — op tijd, gegarandeerd.',
    features: [
      'Schiphol Amsterdam',
      'Eindhoven Airport',
      'Düsseldorf Airport',
      'Brussel Zaventem',
      'Frankfurt Airport',
      'Vlucht monitoring inbegrepen',
      'Vaste all-in prijs',
      'Ruime bagageruimte',
    ],
    vehicle: 'Mercedes E-Klasse of EQV',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop',
  },
  {
    id: 'groepsvervoer',
    name: 'Groepsvervoer',
    icon: '👥',
    description: 'Voor groepen tot 8 personen bieden wij comfortabel vervoer in de volledig elektrische Mercedes EQV. Ideaal voor bedrijfsuitjes, evenementen, familiebijeenkomsten en meer.',
    features: [
      'Tot 8 passagiers',
      'Volledig elektrisch & stil',
      'Evenementen & feesten',
      'Bedrijfsuitjes',
      'Bruiloften & partijen',
      'Sportevents & concerten',
    ],
    vehicle: 'Mercedes EQV Vol Electrisch',
    image: 'https://daviestaxiservice.nl/wp-content/uploads/2025/01/472542890_8319577058142963_2670192867561533670_n-2-e1736333873140-600x600.jpg',
  },
  {
    id: 'zorgvervoer',
    name: 'Zorgvervoer',
    icon: '🏥',
    description: 'Zorgzaam en geduldig vervoer voor mensen die medische afspraken, behandelingen of ziekenhuisbezoek nodig hebben. Wij behandelen u met respect en aandacht.',
    features: [
      'Ziekenhuisbezoek',
      'Medische behandelingen',
      'Fysiotherapie & revalidatie',
      'Hulp bij in- en uitstappen',
      'Retourrit planbaar',
      'Discreet & betrouwbaar',
    ],
    vehicle: 'Mercedes E-Klasse of EQV',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=500&fit=crop',
  },
];

export const Diensten = () => (
  <Layout>
    {/* Page header */}
    <section className="bg-[#0B0C10] py-16">
      <div className="container mx-auto px-4 text-center">
        <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Wat wij bieden</span>
        <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4 tracking-tight">Onze Diensten</h1>
        <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-6" />
        <p className="text-gray-400 max-w-lg mx-auto">
          Van zakelijk vervoer tot zorgritten, van airport transfers tot groepsvervoer — Davies Taxi Service biedt premium vervoer voor elke gelegenheid.
        </p>
      </div>
    </section>

    {/* Services list */}
    <section className="py-20 bg-[#F9F7F2]">
      <div className="container mx-auto px-4">
        <div className="space-y-14">
          {fullServices.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#C9A84C] text-[#0B0C10] text-xs font-black uppercase tracking-widest rounded-full">
                      {service.vehicle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Davies Taxi Service</span>
                </div>
                <h2 className="text-3xl font-black text-[#0B0C10] mb-4 tracking-tight">{service.name}</h2>
                <div className="w-10 h-0.5 bg-[#C9A84C] mb-5" />
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <ul className="grid grid-cols-2 gap-2.5 mb-7">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-[#C9A84C] rounded-full flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0B0C10] font-black rounded-xl hover:bg-[#E8C96A] transition-colors text-sm uppercase tracking-wider shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Boek nu: {config.contact.phoneDisplay}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Airports */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Airport transfers</span>
          <h2 className="text-2xl md:text-3xl font-black mt-2 text-[#0B0C10] tracking-tight">Wij rijden naar alle grote luchthavens</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {config.airports.map(a => (
            <div key={a.name} className="text-center bg-[#F9F7F2] rounded-xl p-5 border border-gray-100 hover:border-[#C9A84C] transition-colors">
              <div className="text-3xl mb-2">{a.flag}</div>
              <div className="font-bold text-sm text-[#0B0C10] mb-1">{a.name}</div>
              <div className="text-xs text-[#C9A84C] font-semibold">{a.time} rijden</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-[#0B0C10] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Heeft u een specifieke wens?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">Neem contact met ons op voor maatwerk. Wij denken graag met u mee over de beste oplossing.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-4 bg-[#C9A84C] text-[#0B0C10] font-black rounded-xl hover:bg-[#E8C96A] transition-colors text-sm uppercase tracking-wider"
          >
            📞 {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-4 border-2 border-[#C9A84C]/60 text-[#C9A84C] font-bold rounded-xl hover:bg-[#C9A84C] hover:text-[#0B0C10] transition-colors text-sm uppercase tracking-wider"
          >
            Contactformulier
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
