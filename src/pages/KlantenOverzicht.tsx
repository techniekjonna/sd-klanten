import { Link } from 'react-router-dom';

interface KlantCard {
  naam: string;
  branche: string;
  beschrijving: string;
  pad: string;
  kleur: string;
  accent: string;
  icon: string;
  status: 'live' | 'concept';
}

const klanten: KlantCard[] = [
  {
    naam: 'Taxibedrijf Renierkens',
    branche: 'Taxivervoer · Zuid-Limburg',
    beschrijving: 'Betrouwbaar taxivervoer in Zuid-Limburg vanuit Margraten. Particulier, zorgvervoer, luchthavenvervoer en zakelijk contractvervoer. 28+ jaar ervaring.',
    pad: '/preview/taxibedrijf-renierkens',
    kleur: '#1A5C38',
    accent: '#C8963E',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'Taxiservice Julliard',
    branche: 'Taxivervoer · Limburg',
    beschrijving: 'Professioneel taxivervoer voor particulieren, zakelijk, groepen en luchthavens. Airportservice, schoolvervoer en kortingskaart. 24/7 bereikbaar.',
    pad: '/preview/taxi-service-julliard',
    kleur: '#0C2D6B',
    accent: '#C8963E',
    icon: '✈️',
    status: 'concept',
  },
  {
    naam: 'Taxi Nelissen',
    branche: 'Taxivervoer · Maastricht',
    beschrijving: 'Betrouwbare taxipartner in de regio Maastricht – sinds 1962. Particulier, zakelijk, WMO, ziekenvervoer, luchthavenvervoer en groepsvervoer.',
    pad: '/preview/taxi-nelissen',
    kleur: '#E05A1C',
    accent: '#FFF',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Taxibedrijf Van der Varst',
    branche: 'Taxivervoer · Echt',
    beschrijving: 'Betrouwbaar taxivervoer in Echt en Midden-Limburg. Opgericht in 1987 met 49 chauffeurs. Personenvervoer, luchthaventritten, zakelijk en zorgvervoer. 24/7 bereikbaar.',
    pad: '/preview/taxibedrijf-van-der-varst',
    kleur: '#1B4F8A',
    accent: '#F59E0B',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'TaxiFrans',
    branche: 'Taxivervoer · Maastricht',
    beschrijving: 'Betaalbaar en betrouwbaar taxivervoer in Maastricht en omgeving. Taxi Service, Airport Taxi, Europa Service en Zorgvervoer. 24/7 bereikbaar.',
    pad: '/preview/taxi-frans',
    kleur: '#1C2C6E',
    accent: '#E8A020',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'Davies Taxi Service',
    branche: 'Taxivervoer · Heerlen',
    beschrijving: 'Veilig, comfortabel en professioneel taxivervoer in Zuid-Limburg. Mercedes E-Klasse AMG Line en volledig elektrische EQV. Zakelijk, VIP, airport en groepsvervoer. 24/7 beschikbaar.',
    pad: '/preview/davies-taxi-service',
    kleur: '#0B0C10',
    accent: '#C9A84C',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Taxi Centrale Parkstad',
    branche: 'Taxivervoer · Heerlen',
    beschrijving: 'Veilig, comfortabel én stipt vervoer in Heerlen, Landgraaf, Kerkrade en omgeving. Particulier, zakelijk en luchthaventritten. 24/7 bereikbaar.',
    pad: '/preview/taxi-centrale-parkstad',
    kleur: '#1A6B58',
    accent: '#C9A84C',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'Taxi MC',
    branche: 'Taxivervoer · Heerlen',
    beschrijving: 'Betrouwbaar, comfortabel & veilig vervoer op maat. Zakelijk vervoer, airportritten, treinstation transfers en Europees vervoer. 24/7 bereikbaar.',
    pad: '/preview/taxi-mc',
    kleur: '#0F0F0F',
    accent: '#F5C200',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Taxi Sittard',
    branche: 'Taxivervoer · Sittard-Geleen',
    beschrijving: 'Hoge service, lage prijs. Betrouwbaar taxivervoer 24/7 in Sittard-Geleen. Luchthaventrips, zakelijk vervoer en rolstoeltaxi.',
    pad: '/preview/taxi-sittard',
    kleur: '#0f2044',
    accent: '#3db8e4',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'Taxibedrijf Knol',
    branche: 'Taxivervoer · Brunssum',
    beschrijving: 'Betrouwbaar personen- en zakelijk vervoer in Brunssum en omgeving. Straattaxi, vliegveld transfers, zorgvervoer en zakelijk vervoer. Online rit aanvragen.',
    pad: '/preview/taxibedrijf-knol',
    kleur: '#1C1C2E',
    accent: '#F97316',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'OneTaxi Zuid-Limburg',
    branche: 'Taxivervoer · Heerlen',
    beschrijving: 'Betrouwbaar taxivervoer in Zuid-Limburg. Straattaxi, vliegveld transfers naar MST, Eindhoven en Düsseldorf, zakelijk vervoer en retourritten.',
    pad: '/preview/onetaxi-zuidlimburg',
    kleur: '#111111',
    accent: '#FFB800',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'Taxi Centrale Geleen',
    branche: 'Taxivervoer · Sittard-Geleen',
    beschrijving: 'Betrouwbaar taxivervoer in de regio Westelijke Mijnstreek. Particulier, zakelijk, airport transfers en groepsvervoer. 24/7 beschikbaar.',
    pad: '/preview/taxi-centrale-geleen',
    kleur: '#111111',
    accent: '#F5C518',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Taxi 046',
    branche: 'Taxivervoer · Geleen',
    beschrijving: 'Betrouwbaar taxivervoer in Zuid-Limburg. Straat taxi, zorgvervoer, airport transfers en zakelijk vervoer. 24/7 beschikbaar.',
    pad: '/preview/taxi-046',
    kleur: '#111111',
    accent: '#FFFFFF',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'Omega Taxi',
    branche: 'Taxivervoer · Sittard',
    beschrijving: 'Betrouwbaar taxivervoer vanuit Sittard. Taxi Service, Zakelijke Service, Airport Service en online boekingsformulier. 24/7 bereikbaar.',
    pad: '/preview/omega-taxi',
    kleur: '#2E2E2E',
    accent: '#F5C842',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Uw Taxi Heerlen',
    branche: 'Taxivervoer · Heerlen',
    beschrijving: 'Betrouwbaar taxivervoer in Heerlen en de Parkstad regio. Lokaal vervoer, airport transfers, zakelijk vervoer en zorgvervoer. 24/7 beschikbaar.',
    pad: '/preview/uw-taxi-heerlen',
    kleur: '#1B3472',
    accent: '#F5C200',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Taxi Van Rooy',
    branche: 'Taxivervoer · Landgraaf',
    beschrijving: 'Taxicentrale Cor van Rooy B.V. — al 40+ jaar betrouwbaar vervoer in Zuid-Limburg. Taxi, groepsvervoer, rolstoel, medisch, directievervoer en airportservice.',
    pad: '/preview/taxi-van-rooy',
    kleur: '#111111',
    accent: '#FFD600',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Pack Taxi',
    branche: 'Taxivervoer · Heerlen',
    beschrijving: 'Comfortabel en betrouwbaar taxivervoer in Heerlen en omgeving. Vaste prijzen, luchthaven transfers, 24/7 beschikbaar. Mercedes-voertuigen, pin betaling.',
    pad: '/preview/pack-taxi',
    kleur: '#1A1A2E',
    accent: '#C9A84C',
    icon: '🚘',
    status: 'concept',
  },
  {
    naam: 'Taxibedrijf Mitax',
    branche: 'Taxivervoer · Urmond',
    beschrijving: 'Modern taxibedrijf gevestigd in Urmond. Lokaal & regionaal vervoer, vliegveldtransfers, zakelijk en evenementenvervoer. Inclusief online boekingsformulier.',
    pad: '/preview/taxibedrijf-mitax',
    kleur: '#1B3A6B',
    accent: '#E85D04',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'Taxibedrijf Savelkoul',
    branche: 'Taxivervoer · Heerlen',
    beschrijving: 'Betrouwbaar taxibedrijf in Heerlen en de Parkstad-regio. Lokale ritten, luchthaventransfers, zakelijk vervoer en zorgvervoer. Met online boekingswidget.',
    pad: '/preview/taxibedrijf-savelkoul',
    kleur: '#1a3c2e',
    accent: '#c9952a',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Taxi Compleet Maastricht',
    branche: 'Taxivervoer · Maastricht',
    beschrijving: 'Betrouwbaar taxibedrijf in Maastricht en omstreken. 24/7 beschikbaar voor stadsritten, luchthavens, zorgvervoer en groepsvervoer. Met online boekingswidget.',
    pad: '/preview/taxi-compleet-maastricht',
    kleur: '#1B3A6B',
    accent: '#D4960A',
    icon: '🚕',
    status: 'concept',
  },
  {
    naam: 'Taxibedrijf Housmans',
    branche: 'Taxivervoer · Echt',
    beschrijving: 'Betrouwbaar taxibedrijf gevestigd in Echt, Limburg. Lokale ritten, luchthaventransfers, zorgvervoer en seniorenvervoer. Met online boekingswidget.',
    pad: '/preview/taxibedrijf-housmans',
    kleur: '#0F2044',
    accent: '#F97316',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Alfa Taxi',
    branche: 'Taxivervoer',
    beschrijving: 'Betrouwbaar en comfortabel taxivervoer 24/7. Vaste tarieven voor particulieren en zakelijk.',
    pad: '/preview/alfa-taxi',
    kleur: '#0B1D3E',
    accent: '#F59E0B',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Care4Cars Sittard',
    branche: 'Garage & APK',
    beschrijving: 'RDW erkend garagebedrijf in Sittard. APK, onderhoud, banden, airco, diagnose en campers.',
    pad: '/preview/care4carssittard',
    kleur: '#1F2937',
    accent: '#DC2626',
    icon: '🔧',
    status: 'concept',
  },
  {
    naam: 'Dutch Ink',
    branche: 'Tattoo & Piercing',
    beschrijving: 'The Tattoo Company — 15+ vestigingen door heel Nederland. Tattoo, piercing, PMU en laser.',
    pad: '/preview/dutch-ink',
    kleur: '#0D0D0D',
    accent: '#DC2626',
    icon: '🖋️',
    status: 'concept',
  },
  {
    naam: 'Beatrix Nails & Beauty',
    branche: 'Nagelstudio & Beauty',
    beschrijving: 'Professionele nagelstudio in Sittard. Gellak, acrylnagels, nailart en meer. Mooie nagels voor elke verzorgde vrouw.',
    pad: '/preview/beatrix-nails',
    kleur: '#2D0F1E',
    accent: '#C2185B',
    icon: '💅',
    status: 'concept',
  },
  {
    naam: 'Autorijschool van der Sande',
    branche: 'Autorijschool',
    beschrijving: '30+ jaar ervaring in Sittard-Geleen. 90% slaagt de eerste keer. Moderne Mercedes lesauto, reguliere en spoedopleiding.',
    pad: '/preview/autorijschoolvdsande',
    kleur: '#1B2D80',
    accent: '#7878B2',
    icon: '🚗',
    status: 'concept',
  },
  {
    naam: 'Cleanfirm Stylesatlife',
    branche: 'Schoonmaakbedrijf',
    beschrijving: 'Professioneel schoonmaakbedrijf voor particulieren en bedrijven in de regio Limburg en Brabant. Gevestigd in Geleen.',
    pad: '/preview/stylesatlife',
    kleur: '#1A2B1A',
    accent: '#2D6A2D',
    icon: '🧹',
    status: 'concept',
  },
  {
    naam: 'Schoonmaakbedrijf Erwin',
    branche: 'Glazenwassen · Schilderwerk · Geleen',
    beschrijving: 'Professioneel glazenwassen voor particulieren en bedrijven in Zuid-Limburg. Al actief sinds 2009. KvK 14110743.',
    pad: '/preview/schoonmaakbedrijf-erwin',
    kleur: '#1E3A8A',
    accent: '#1D4ED8',
    icon: '🪟',
    status: 'concept',
  },
  {
    naam: 'Global Taxi Heerlen',
    branche: 'Taxivervoer · Heerlen',
    beschrijving: 'Modern taxibedrijf met 10 jaar ervaring. Airport service, particulier vervoer, hotelvervoer en vervoer op maat. Online boekingswidget en dropdown navigatie.',
    pad: '/preview/global-taxi-heerlen',
    kleur: '#1a1a1a',
    accent: '#f5c800',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Grootveld',
    branche: 'Taxi & Takelservice · Noord-Nederland',
    beschrijving: 'Takel- en Taxibedrijf Grootveld B.V. — betrouwbaar taxivervoer én professionele takelservice. 24/7 bereikbaar, vaste tarieven. Inclusief boekingswidget op de homepage.',
    pad: '/preview/grootveld',
    kleur: '#1A2B1E',
    accent: '#1A5C38',
    icon: '🚛',
    status: 'concept',
  },
  {
    naam: 'D&M Taxi Parkstad',
    branche: 'Taxivervoer · Landgraaf',
    beschrijving: 'Betrouwbaar taxivervoer in de Parkstad-regio. Lokaal vervoer, vliegveldtransfers, ziekenhuisvervoer en zakelijk vervoer. 24/7 beschikbaar met vaste tarieven.',
    pad: '/preview/dm-taxi-parkstad',
    kleur: '#1B3F6E',
    accent: '#F97316',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Sjabloon',
    branche: 'Generiek Template',
    beschrijving: 'Het basis-sjabloon voor nieuwe klanten. Kopieer deze map en pas config.ts aan om te starten.',
    pad: '/preview/sjabloon',
    kleur: '#1E3A8A',
    accent: '#2563EB',
    icon: '📋',
    status: 'concept',
  },
  {
    naam: 'Fotografie Ton Dirkx',
    branche: 'Fotografie & Pasfoto\'s',
    beschrijving: "Vakkundige fotostudio in Sittard. Officiële pasfoto's zonder afspraak, fotolijsten, 3D crystal en reportages.",
    pad: '/preview/ton-dirkx-fotografie',
    kleur: '#1a4d0e',
    accent: '#3e8c28',
    icon: '📸',
    status: 'concept',
  },
];

export const KlantenOverzicht = () => (
  <div className="min-h-screen bg-[#0a0a0a] text-white">
    {/* Header */}
    <header className="border-b border-white/10 px-6 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png"
            alt="SandeDesign"
            className="w-8 h-8 opacity-80"
          />
          <div>
            <p className="text-sm font-bold text-white">SandeDesign</p>
            <p className="text-xs text-white/40">Klanten Bibliotheek</p>
          </div>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
          Intern — Niet delen
        </span>
      </div>
    </header>

    {/* Hero */}
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-4">
          Acquisitie Bibliotheek
        </p>
        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Klanten{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Preview
          </span>
        </h1>
        <p className="text-white/50 max-w-lg mx-auto">
          Klik op een klant om de preview-website te bekijken. Elke site is direct klaar om te presenteren.
        </p>
      </div>
    </section>

    {/* Klanten grid */}
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {klanten.map((k) => (
            <Link
              key={k.pad}
              to={k.pad}
              className="group block rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ backgroundColor: '#141414' }}
            >
              {/* Color band */}
              <div
                className="h-2"
                style={{ backgroundColor: k.accent }}
              />

              <div className="p-7">
                {/* Icon + status */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${k.accent}20` }}
                  >
                    {k.icon}
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: k.status === 'live' ? '#16a34a20' : '#f59e0b20',
                      color: k.status === 'live' ? '#4ade80' : '#fbbf24',
                    }}
                  >
                    {k.status === 'live' ? '● Live' : '○ Concept'}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-1">{k.naam}</h2>
                <p className="text-xs font-medium mb-3" style={{ color: k.accent }}>
                  {k.branche}
                </p>
                <p className="text-sm leading-relaxed text-white/45">{k.beschrijving}</p>

                {/* CTA */}
                <div
                  className="mt-6 flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  <span className="group-hover:text-white transition-colors">Preview bekijken</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Nieuwe klant toevoegen card */}
          <div
            className="rounded-2xl border-2 border-dashed border-white/10 p-7 flex flex-col items-center justify-center text-center min-h-[220px] hover:border-white/20 transition-colors cursor-default"
          >
            <div className="text-4xl mb-4 opacity-30">+</div>
            <p className="text-sm font-medium text-white/30">Nieuwe klant toevoegen</p>
            <p className="text-xs text-white/20 mt-1">
              Kopieer src/klanten/sjabloon/ naar een nieuwe map
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-white/5 py-8 text-center">
      <p className="text-xs text-white/20">
        © {new Date().getFullYear()} SandeDesign — Interne tool
      </p>
    </footer>
  </div>
);
