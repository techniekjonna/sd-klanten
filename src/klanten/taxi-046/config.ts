export const config = {
  basePath: '/preview/taxi-046',
  id: 'taxi-046',
  name: 'Taxi 046',
  tagline: 'Kwaliteit, betrouwbaarheid en scherpe prijzen',
  description: 'Taxi 046 verzorgt veilig, betrouwbaar en vriendelijk vervoer vanuit heel Zuid-Limburg. 24/7 beschikbaar voor ritten in en rondom Sittard, Born, Geleen, Beek en Stein.',

  colors: {
    primary: '#111111',
    primaryHover: '#333333',
    accent: '#111111',
    text: '#111111',
    background: '#FFFFFF',
    lightGray: '#F7F7F7',
    midGray: '#E5E5E5',
  },

  contact: {
    address: 'Bedrijfsweg 54, 6163 CZ Geleen',
    phone: '+31645802334',
    phoneDisplay: '06 - 458 023 34',
    email: 'info@taxi-046.nl',
    kvk: '65073614',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Het Bedrijf', path: '/het-bedrijf' },
    { label: 'Vervoer', path: '/vervoer' },
    { label: 'Punten', path: '/punten' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Airport', path: '/airport' },
    { label: 'Bestel', path: '/bestel' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    subtitle: 'Veilig, betrouwbaar en vriendelijk taxivervoer door heel Zuid-Limburg. Binnen 5 tot 20 minuten bij u.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop',
  },

  features: [
    {
      icon: '⚡',
      title: '5–20 minuten',
      description: 'Snel ter plaatse in Sittard, Geleen, Born, Beek en Stein.',
    },
    {
      icon: '🕐',
      title: '24/7 beschikbaar',
      description: 'Dag en nacht bereikbaar. Geen tijdstip is te vroeg of te laat.',
    },
    {
      icon: '💳',
      title: 'Pin & creditcard',
      description: 'Gemakkelijk betalen met pin of creditcard. Contant ook mogelijk.',
    },
    {
      icon: '🛡️',
      title: 'Veilig & verzekerd',
      description: 'Professionele chauffeurs, volledig verzekerd voor uw veiligheid.',
    },
  ],

  services: [
    {
      id: 'straat-taxi',
      name: 'Straat Taxi',
      description: 'Gewone taxiritten door heel Zuid-Limburg. Snel, comfortabel en betrouwbaar van A naar B.',
      icon: '🚕',
      features: ['Korte en lange afstanden', 'Vaste prijsafspraak mogelijk', 'Comfortabele voertuigen', '24/7 beschikbaar'],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      description: 'Speciaal vervoer voor ziekenhuisbezoek, behandelingen en andere medische afspraken.',
      icon: '🏥',
      features: ['Hulp bij in- en uitstappen', 'Geduldig en zorgzaam', 'Terugritten mogelijk', 'Discreet en vriendelijk'],
    },
    {
      id: 'airport-transfer',
      name: 'Luchthaven Transfer',
      description: 'Ontspannen naar Schiphol, Eindhoven, Brussel, Düsseldorf of Frankfurt. Op tijd gegarandeerd.',
      icon: '✈️',
      features: ['Vaste vluchtprijzen', 'Vlucht monitoring', 'Grote bagage mogelijk', 'Zakelijk & privé'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel zakelijk taxivervoer voor bedrijven en executives in Zuid-Limburg.',
      icon: '💼',
      features: ['Factuur op bedrijfsnaam', 'Vaste chauffeur mogelijk', 'Stipte tijdsplanning', 'Discreet en professioneel'],
    },
  ],

  airports: [
    { name: 'Schiphol Amsterdam', country: 'Nederland', flag: '🇳🇱', time: '±2u' },
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±45min' },
    { name: 'Brussel Airport', country: 'België', flag: '🇧🇪', time: '±1u30' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u' },
    { name: 'Frankfurt Airport', country: 'Duitsland', flag: '🇩🇪', time: '±2u' },
  ],

  serviceArea: ['Sittard', 'Geleen', 'Born', 'Beek', 'Stein', 'Maastricht', 'Heerlen', 'Roermond'],

  keyPoints: [
    { title: 'Kwaliteit', description: 'Wij rijden in goed onderhouden, comfortabele voertuigen en staan voor een hoogwaardig rijcomfort.' },
    { title: 'Betrouwbaarheid', description: 'Afspraak is afspraak. Wij komen altijd op tijd en communiceren helder over de rit.' },
    { title: 'Scherpe prijzen', description: 'Eerlijke tarieven zonder verrassingen. U weet vooraf wat de rit kost.' },
    { title: 'Vriendelijk personeel', description: 'Onze chauffeurs zijn gastvrij, behulpzaam en spreken Nederlands en Engels.' },
    { title: '24/7 Service', description: 'Vroeg vliegtuig? Late nacht? Geen probleem. We zijn altijd voor u klaar.' },
    { title: 'Regio Zuid-Limburg', description: 'Wij kennen de regio als onze broekzak. Van Sittard tot Maastricht.' },
  ],

  pricing: {
    startRate: 3.25,
    kmRate: 2.35,
    waitRate: 0.55,
    note: 'Vaste prijs op aanvraag mogelijk. Luchthaventarieven zijn all-in vaste prijs.',
  },

  testimonials: [
    {
      id: 1,
      name: 'Henk van Dijk',
      role: 'Vaste klant',
      rating: 5,
      text: 'Al jaren rijd ik met Taxi 046. Altijd op tijd, vriendelijke chauffeurs en een eerlijke prijs. Meer heb je niet nodig!',
    },
    {
      id: 2,
      name: 'Mariëlle Puts',
      role: 'Zorgvervoer',
      rating: 5,
      text: 'Voor mijn wekelijkse behandelingen gebruik ik het zorgvervoer van Taxi 046. Altijd geduldig, hulpvaardig en betrouwbaar.',
    },
    {
      id: 3,
      name: 'Thomas Roelands',
      role: 'Airport transfer',
      rating: 5,
      text: 'Vroeg vliegtuig, geen probleem. Taxi 046 stond stipt op tijd voor de deur. Aanrader voor luchthaventritten!',
    },
  ],

  about: {
    story: 'Taxi 046 is gevestigd in Geleen en actief in heel Zuid-Limburg. Met jarenlange ervaring in het taxivervoer staan wij garant voor kwaliteit, veiligheid en betrouwbaarheid. Of u nu naar de dokter moet, een vlucht haalt of zakelijk onderweg bent — wij zorgen dat u op tijd en comfortabel aankomt.',
    mission: 'Onze missie is eenvoudig: de beste taxiservice in Zuid-Limburg bieden. Dat betekent vriendelijke chauffeurs, schone auto\'s, eerlijke prijzen en altijd beschikbaar zijn wanneer u ons nodig heeft.',
    values: ['Kwaliteit staat voorop', 'Betrouwbaar en punctueel', 'Eerlijke en transparante tarieven', 'Persoonlijke aandacht voor elke klant'],
    image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=1200&h=800&fit=crop',
  },
};
