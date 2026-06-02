import { useMemo, useState } from 'react';
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
  categorie: Categorie;
}

type Categorie =
  | 'Taxi & Vervoer'
  | 'Automotive'
  | 'Beauty & Verzorging'
  | 'Schoonmaak'
  | 'Fotografie'
  | 'Tattoo & Piercing'
  | 'Overig';

const klanten: KlantCard[] = [
  {
    naam: 'Taxi Comfort Maastricht',
    branche: 'Taxivervoer · Maastricht',
    beschrijving: 'Familiebedrijf voor comfortabel en betrouwbaar taxivervoer in Maastricht en omgeving. Persoonlijk vervoer, luchthavenvervoer, zorgvervoer en zakelijk vervoer. 24/7 bereikbaar.',
    pad: '/preview/taxi-comfort-maastricht',
    kleur: '#1A3A6B',
    accent: '#C9972A',
    icon: '🚕',
    status: 'concept',
    categorie: 'Taxi & Vervoer',
  },
  {
    naam: 'Taxibedrijf Renierkens',
    branche: 'Taxivervoer · Zuid-Limburg',
    beschrijving: 'Betrouwbaar taxivervoer in Zuid-Limburg vanuit Margraten. Particulier, zorgvervoer, luchthavenvervoer en zakelijk contractvervoer. 28+ jaar ervaring.',
    pad: '/preview/taxibedrijf-renierkens',
    kleur: '#1A5C38',
    accent: '#C8963E',
    icon: '🚕',
    status: 'concept',
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Automotive',
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
    categorie: 'Automotive',
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
    categorie: 'Tattoo & Piercing',
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
    categorie: 'Beauty & Verzorging',
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
    categorie: 'Schoonmaak',
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
    categorie: 'Schoonmaak',
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
    categorie: 'Fotografie',
  },
  {
    naam: 'Visser Driving Services',
    branche: 'Directiechauffeurs · Nederland',
    beschrijving: 'Gecertificeerde directiechauffeurs voor de private en publieke sector. CCV-D1, CCV-D2 & CORTEX SRO-D3 gecertificeerd. 365 dagen per jaar beschikbaar.',
    pad: '/preview/visser-driving-services',
    kleur: '#1A1A1A',
    accent: '#C9A84C',
    icon: '🚘',
    status: 'concept',
    categorie: 'Taxi & Vervoer',
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
    categorie: 'Overig',
  },
];

const CATEGORIE_VOLGORDE: Categorie[] = [
  'Taxi & Vervoer',
  'Automotive',
  'Beauty & Verzorging',
  'Tattoo & Piercing',
  'Schoonmaak',
  'Fotografie',
  'Overig',
];

const CATEGORIE_ICOON: Record<Categorie, string> = {
  'Taxi & Vervoer': '🚖',
  Automotive: '🚗',
  'Beauty & Verzorging': '💅',
  'Tattoo & Piercing': '🖋️',
  Schoonmaak: '🧹',
  Fotografie: '📸',
  Overig: '📋',
};

type Weergave = 'grid' | 'lijst';

export const KlantenOverzicht = () => {
  const [zoek, setZoek] = useState('');
  const [actieveCategorie, setActieveCategorie] = useState<Categorie | 'Alle'>('Alle');
  const [weergave, setWeergave] = useState<Weergave>('grid');

  const aantalPerCategorie = useMemo(() => {
    const t: Record<string, number> = {};
    for (const k of klanten) t[k.categorie] = (t[k.categorie] ?? 0) + 1;
    return t;
  }, []);

  const gefilterd = useMemo(() => {
    const q = zoek.trim().toLowerCase();
    return klanten.filter((k) => {
      if (actieveCategorie !== 'Alle' && k.categorie !== actieveCategorie) return false;
      if (!q) return true;
      return (
        k.naam.toLowerCase().includes(q) ||
        k.branche.toLowerCase().includes(q) ||
        k.beschrijving.toLowerCase().includes(q)
      );
    });
  }, [zoek, actieveCategorie]);

  const gegroepeerd = useMemo(() => {
    const groepen = new Map<Categorie, KlantCard[]>();
    for (const cat of CATEGORIE_VOLGORDE) groepen.set(cat, []);
    for (const k of gefilterd) groepen.get(k.categorie)!.push(k);
    return Array.from(groepen.entries()).filter(([, items]) => items.length > 0);
  }, [gefilterd]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-5 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur z-20">
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
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-white/40">
              {klanten.length} klanten totaal
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
              Intern — Niet delen
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-14 pb-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-4">
            Acquisitie Bibliotheek
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            Klanten{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Preview
            </span>
          </h1>
          <p className="text-white/50 max-w-lg mx-auto text-sm">
            Klik op een klant om de preview-website te bekijken.
          </p>
        </div>
      </section>

      {/* Toolbar: zoek + filters + weergave */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Zoek + weergave */}
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">🔍</span>
              <input
                type="text"
                value={zoek}
                onChange={(e) => setZoek(e.target.value)}
                placeholder="Zoek op naam, branche of plaats…"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
              {zoek && (
                <button
                  onClick={() => setZoek('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-sm px-2"
                  aria-label="Wis zoekopdracht"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
              <button
                onClick={() => setWeergave('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  weergave === 'grid' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                ▦ Grid
              </button>
              <button
                onClick={() => setWeergave('lijst')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  weergave === 'lijst' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                ☰ Lijst
              </button>
            </div>
          </div>

          {/* Categorie chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActieveCategorie('Alle')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                actieveCategorie === 'Alle'
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              Alle <span className="opacity-60">({klanten.length})</span>
            </button>
            {CATEGORIE_VOLGORDE.map((cat) => {
              const aantal = aantalPerCategorie[cat] ?? 0;
              if (aantal === 0) return null;
              const actief = actieveCategorie === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActieveCategorie(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                    actief
                      ? 'bg-white text-black border-white'
                      : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>{CATEGORIE_ICOON[cat]}</span>
                  {cat} <span className="opacity-60">({aantal})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resultaten */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {gefilterd.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
              <p className="text-3xl mb-3 opacity-40">🔎</p>
              <p className="text-white/60 text-sm">Geen klanten gevonden voor deze zoekopdracht.</p>
              <button
                onClick={() => {
                  setZoek('');
                  setActieveCategorie('Alle');
                }}
                className="mt-4 text-xs text-white/40 hover:text-white underline"
              >
                Filters wissen
              </button>
            </div>
          ) : (
            gegroepeerd.map(([categorie, items]) => (
              <div key={categorie} className="mb-12 last:mb-0">
                {/* Categorie header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{CATEGORIE_ICOON[categorie]}</span>
                  <h2 className="text-lg font-bold text-white">{categorie}</h2>
                  <span className="text-xs text-white/40 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {items.length}
                  </span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                {weergave === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((k) => (
                      <KlantGridCard key={k.pad} klant={k} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    {items.map((k) => (
                      <KlantLijstItem key={k.pad} klant={k} />
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
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
};

const naarViewer = (pad: string) => {
  const slug = pad.replace(/^\/preview\//, '').replace(/\/$/, '');
  return `/viewer/${slug}`;
};

const KlantGridCard = ({ klant: k }: { klant: KlantCard }) => (
  <Link
    to={naarViewer(k.pad)}
    className="group block rounded-xl overflow-hidden border border-white/8 hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5 bg-[#141414]"
  >
    <div className="h-1" style={{ backgroundColor: k.accent }} />
    <div className="p-5">
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
          style={{ backgroundColor: `${k.accent}20` }}
        >
          {k.icon}
        </div>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={{
            backgroundColor: k.status === 'live' ? '#16a34a20' : '#f59e0b20',
            color: k.status === 'live' ? '#4ade80' : '#fbbf24',
          }}
        >
          {k.status === 'live' ? '● Live' : '○ Concept'}
        </span>
      </div>
      <h3 className="text-base font-bold text-white mb-1 leading-snug">{k.naam}</h3>
      <p className="text-[11px] font-medium mb-2" style={{ color: k.accent }}>
        {k.branche}
      </p>
      <p className="text-xs leading-relaxed text-white/45 line-clamp-2">{k.beschrijving}</p>
      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-white/40 group-hover:text-white transition-colors">
        <span>Preview bekijken</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  </Link>
);

const KlantLijstItem = ({ klant: k }: { klant: KlantCard }) => (
  <Link
    to={naarViewer(k.pad)}
    className="group flex items-center gap-4 rounded-xl border border-white/8 hover:border-white/25 bg-[#141414] px-4 py-3 transition-colors"
  >
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
      style={{ backgroundColor: `${k.accent}20` }}
    >
      {k.icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-0.5">
        <h3 className="text-sm font-bold text-white truncate">{k.naam}</h3>
        <span
          className="text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0"
          style={{
            backgroundColor: k.status === 'live' ? '#16a34a20' : '#f59e0b20',
            color: k.status === 'live' ? '#4ade80' : '#fbbf24',
          }}
        >
          {k.status === 'live' ? 'Live' : 'Concept'}
        </span>
      </div>
      <p className="text-[11px] font-medium truncate" style={{ color: k.accent }}>
        {k.branche}
      </p>
    </div>
    <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all text-sm shrink-0">
      →
    </span>
  </Link>
);
