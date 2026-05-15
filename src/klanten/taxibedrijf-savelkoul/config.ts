export const config = {
  basePath: '/preview/taxibedrijf-savelkoul',
  id: 'taxibedrijf-savelkoul',
  name: 'Taxibedrijf Savelkoul',
  tagline: 'Betrouwbaar vervoer in Heerlen & omgeving',
  description: 'Taxibedrijf Savelkoul biedt betrouwbaar en betaalbaar taxivervoer in Heerlen en de hele Parkstad-regio. Van lokale ritten tot luchthaventrips — altijd op tijd, altijd verzorgd.',

  colors: {
    primary: '#1a3c2e',
    primaryHover: '#142e23',
    accent: '#c9952a',
    accentHover: '#b5831f',
    text: '#1a1a1a',
    background: '#ffffff',
  },

  contact: {
    address: 'Kampstraat 28, Heerlen',
    region: 'Heerlen & Parkstad',
    phone: '+31455715050',
    phoneDisplay: '045 571 5050',
    email: 'info@taxisavelkoul.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Zakelijk Vervoer', path: '/zakelijk' },
    { label: 'Luchthavenvervoer', path: '/luchthaven' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop',
  },

  features: [
    {
      icon: '🏅',
      title: 'Vaste lage prijs',
      description: 'Geen verrassingen. U weet vooraf wat uw rit kost.',
    },
    {
      icon: '🕐',
      title: '24/7 beschikbaar',
      description: 'Dag en nacht, ook in het weekend en op feestdagen.',
    },
    {
      icon: '📍',
      title: 'Heerlen & regio',
      description: 'Lokale specialist in Parkstad Limburg en omstreken.',
    },
    {
      icon: '✈️',
      title: 'Luchthaven transfer',
      description: 'All-in vaste prijs naar Eindhoven, Schiphol, Düsseldorf en meer.',
    },
  ],

  services: [
    {
      id: 'lokaal',
      name: 'Lokale Taxirit',
      description: 'Snel en comfortabel door Heerlen, Kerkrade, Landgraaf en heel Parkstad. Klaar wanneer u klaar bent.',
      icon: '🚖',
      features: ['Heerlen & omgeving', 'Vaste prijs op aanvraag', 'Nette voertuigen', '24/7 bereikbaar'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel vervoer voor bedrijven en zakelijke reizigers. Factuur mogelijk, stipte planning gegarandeerd.',
      icon: '💼',
      features: ['Factuur op bedrijfsnaam', 'Vaste chauffeur mogelijk', 'Discreet en punctueel', 'Maandelijkse afrekening'],
    },
    {
      id: 'luchthaven',
      name: 'Luchthaventransfer',
      description: 'Ontspannen naar het vliegveld met een vaste all-in prijs. Ruime kofferruimte, vluchtbewaking inbegrepen.',
      icon: '✈️',
      features: ['All-in vaste prijs', 'Vluchtbewaking', 'Grote bagage welkom', 'Op tijd gegarandeerd'],
    },
    {
      id: 'zorg',
      name: 'Zorgvervoer',
      description: 'Zorgvuldig en geduldig vervoer voor ouderen en mensen met een beperking. Hulp bij in- en uitstappen vanzelfsprekend.',
      icon: '🫶',
      features: ['Hulp bij in-/uitstappen', 'Geduldig en respectvol', 'Rolstoel op aanvraag', 'Vergoeding mogelijk'],
    },
  ],

  airports: [
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±50min', price: 'v.a. €85' },
    { name: 'Schiphol Amsterdam', country: 'Nederland', flag: '🇳🇱', time: '±2u30', price: 'v.a. €230' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±45min', price: 'v.a. €79' },
    { name: 'Keulen/Bonn Airport', country: 'Duitsland', flag: '🇩🇪', time: '±55min', price: 'v.a. €89' },
    { name: 'Brussel Zaventem', country: 'België', flag: '🇧🇪', time: '±1u30', price: 'v.a. €130' },
    { name: 'Frankfurt Airport', country: 'Duitsland', flag: '🇩🇪', time: '±2u', price: 'v.a. €200' },
  ],

  pricing: {
    startRate: 3.50,
    kmRate: 2.35,
    waitRate: 0.55,
    note: 'Vaste ritprijs altijd op aanvraag. Luchthaventarieven zijn all-in inclusief wachttijd.',
  },

  serviceArea: ['Heerlen', 'Kerkrade', 'Landgraaf', 'Brunssum', 'Hoensbroek', 'Voerendaal', 'Simpelveld', 'Sittard', 'Maastricht', 'Roermond'],

  testimonials: [
    {
      id: 1,
      name: 'Ans Willems',
      role: 'Vaste klant',
      rating: 5,
      text: 'Al jaren rijd ik met Savelkoul naar het ziekenhuis. Altijd vriendelijk, altijd op tijd. Ze denken echt met je mee.',
    },
    {
      id: 2,
      name: 'Thomas Geraets',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Wij gebruiken Savelkoul voor al ons zakenvervoer in de regio. Betrouwbaar, professioneel en de facturatie klopt altijd.',
    },
    {
      id: 3,
      name: 'Sandra Meijers',
      role: 'Reiziger',
      rating: 5,
      text: 'Naar Eindhoven Airport met twee grote koffers — geen enkel probleem. Ruim op tijd en voor een eerlijke prijs. Aanrader!',
    },
  ],

  about: {
    story: 'Taxibedrijf Savelkoul is al jarenlang een vertrouwde naam in Heerlen en de Parkstad-regio. Wij kennen de wegen, weten wat klanten verwachten en staan altijd klaar — of het nu gaat om een korte rit naar de stad of een vroege vlucht.',
    values: ['Altijd op tijd', 'Eerlijke vaste prijzen', '24/7 bereikbaar', 'Lokale expertise'],
  },
};
