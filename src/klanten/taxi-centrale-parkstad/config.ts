export const config = {
  basePath: '/preview/taxi-centrale-parkstad',
  id: 'taxi-centrale-parkstad',
  name: 'Taxi Centrale Parkstad',
  tagline: 'Veilig, comfortabel én stipt vervoer',
  description: 'Taxi Centrale Parkstad is uw betrouwbare taxibedrijf in Heerlen, Landgraaf, Kerkrade en omgeving. Dag en nacht voor u klaar voor ritten in heel Zuid-Limburg.',

  colors: {
    primary: '#1A6B58',
    primaryHover: '#145448',
    accent: '#C9A84C',
    accentHover: '#B8963E',
    light: '#EAF3F0',
    text: '#1C2B26',
    background: '#FFFFFF',
    dark: '#0F2820',
  },

  contact: {
    address: 'Heerlen, Zuid-Limburg',
    phone: '+31629308546',
    phoneDisplay: '+316 - 293 085 46',
    email: 'info@taxicentraleparkstad.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Particulier', path: '/particulier' },
    { label: 'Zakelijk', path: '/zakelijk' },
    { label: 'Vliegvelden', path: '/vliegvelden' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Taxi bestellen', path: '/bestellen' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    subtitle: 'Uw betrouwbare taxibedrijf in Heerlen, Landgraaf, Kerkrade en omgeving. Dag en nacht voor u beschikbaar.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&h=1080&fit=crop',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 beschikbaar',
      description: 'Geen tijdstip is te vroeg of te laat. Wij staan dag en nacht voor u klaar.',
    },
    {
      icon: '📍',
      title: 'Regio Parkstad',
      description: 'Heerlen, Landgraaf, Kerkrade, Brunssum, Simpelveld en heel Zuid-Limburg.',
    },
    {
      icon: '✈️',
      title: 'Luchthaven transfers',
      description: 'Stipt naar Schiphol, Eindhoven, Brussel, Düsseldorf of Frankfurt.',
    },
    {
      icon: '💼',
      title: 'Zakelijk vervoer',
      description: 'Professioneel en discreet zakelijk taxivervoer op maat voor bedrijven.',
    },
  ],

  services: [
    {
      id: 'particulier',
      name: 'Particulier Vervoer',
      description: 'Van en naar het station, ziekenhuis, evenement of waar u ook naartoe wilt. Snel en comfortabel.',
      icon: '🚕',
      features: ['Korte en lange ritten', 'Vaste prijsafspraak mogelijk', 'Ruime en comfortabele auto\'s', '24/7 bereikbaar'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Betrouwbaar zakelijk taxivervoer voor bedrijven, meetings en zakenreizen in heel Nederland.',
      icon: '💼',
      features: ['Factuur op bedrijfsnaam', 'Vaste chauffeur op aanvraag', 'Stipte tijdsplanning', 'Discreet en professioneel'],
    },
    {
      id: 'vliegveld',
      name: 'Luchthaven Transfer',
      description: 'Ontspannen naar alle grote luchthavens. Vluchtmonitoring inbegrepen, zodat u altijd op tijd vertrekt.',
      icon: '✈️',
      features: ['Vaste all-in prijzen', 'Vluchtmonitoring', 'Grote bagageruimte', 'Zakelijk & privé'],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      description: 'Zorgzaam en betrouwbaar vervoer voor ziekenhuisbezoeken, behandelingen en andere medische afspraken.',
      icon: '🏥',
      features: ['Hulp bij in- en uitstappen', 'Geduldig en attent', 'Terugritten mogelijk', 'Discreet en vriendelijk'],
    },
  ],

  serviceArea: ['Heerlen', 'Landgraaf', 'Kerkrade', 'Brunssum', 'Simpelveld', 'Voerendaal', 'Nuth', 'Maastricht'],

  airports: [
    { name: 'Schiphol Amsterdam', country: 'Nederland', flag: '🇳🇱', time: '±2u 15min' },
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±1u' },
    { name: 'Brussel Zaventem', country: 'België', flag: '🇧🇪', time: '±1u 30min' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u' },
    { name: 'Frankfurt Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u 45min' },
    { name: 'Köln/Bonn Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u 30min' },
  ],

  pricing: {
    startRate: 3.50,
    kmRate: 2.45,
    waitRate: 0.60,
    note: 'Luchthaventarieven zijn vaste all-in prijzen. Vaste prijs op aanvraag mogelijk.',
  },

  testimonials: [
    {
      id: 1,
      name: 'Ria Janssen',
      role: 'Vaste klant, Heerlen',
      rating: 5,
      text: 'Al jaren rij ik met Taxi Centrale Parkstad. De chauffeurs zijn altijd vriendelijk, op tijd en de prijs is eerlijk. Kan ik iedereen aanraden!',
    },
    {
      id: 2,
      name: 'Marco de Leeuw',
      role: 'Zakelijke rit',
      rating: 5,
      text: 'Voor onze zakelijke ritten naar vliegvelden is TCP altijd een uitstekende keuze. Stipt, professioneel en comfortabel.',
    },
    {
      id: 3,
      name: 'Sandra Houben',
      role: 'Zorgvervoer',
      rating: 5,
      text: 'Voor mijn wekelijkse behandelingen in het ziekenhuis gebruik ik TCP. Ze zijn altijd geduldig en begripvol. Heel fijn bedrijf.',
    },
  ],

  about: {
    story: 'Taxi Centrale Parkstad is al jaren hét taxibedrijf in de regio Parkstad Limburg. Vanuit Heerlen en omgeving verzorgen wij dagelijks ritten voor particulieren en bedrijven, door heel Nederland en naar luchthavens in de regio. Bij ons kunt u direct contact hebben met de chauffeur — geen callcenters, gewoon persoonlijk contact.',
    mission: 'Wij geloven dat goed taxivervoer draait om vertrouwen. Duidelijke afspraken, eerlijke prijzen en een vriendelijke chauffeur die u veilig van A naar B brengt. Dag en nacht, altijd voor u klaar.',
    values: ['Altijd stipt en betrouwbaar', 'Directe communicatie met de chauffeur', 'Eerlijke en transparante tarieven', 'Persoonlijke aandacht voor elke klant'],
    image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=1200&h=800&fit=crop',
  },
};
