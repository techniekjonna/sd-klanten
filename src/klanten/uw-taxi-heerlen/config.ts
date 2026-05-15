export const config = {
  basePath: '/preview/uw-taxi-heerlen',
  id: 'uw-taxi-heerlen',
  name: 'Uw Taxi Heerlen',
  tagline: 'Betrouwbaar taxivervoer in en rondom Heerlen',
  description: 'Uw Taxi Heerlen verzorgt comfortabel en betrouwbaar taxivervoer voor particulieren en bedrijven. Van korte ritten tot luchthaventransfers — wij staan dag en nacht voor u klaar.',

  colors: {
    lightBlue: '#B8CEDF',
    darkBlue: '#1B3472',
    yellow: '#F5C200',
    yellowHover: '#DBA800',
    bgLight: '#EAF0F6',
    text: '#1A2744',
    textLight: '#4A5568',
  },

  contact: {
    address: 'Heerlen, Limburg',
    phone: '+31638393744',
    phoneDisplay: '+31 6 38393744',
    email: 'info@uwtaxiheerlen.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Onze Service', path: '/service' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Airport Transfer', path: '/airport' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    subtitle: 'Snel, veilig en comfortabel van A naar B. Dag en nacht beschikbaar in Heerlen en omgeving.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=1920&h=1080&fit=crop',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description: 'Altijd bereikbaar, ook op feestdagen, vroeg in de ochtend of laat in de nacht.',
    },
    {
      icon: '✈️',
      title: 'Airport Transfer',
      description: 'Betrouwbaar naar Schiphol, Eindhoven, Düsseldorf en meer. Vlucht monitoring inbegrepen.',
    },
    {
      icon: '💳',
      title: 'Pin & Creditcard',
      description: 'Betaal gemakkelijk met pin, creditcard (Mastercard) of contant. Uw keuze.',
    },
    {
      icon: '🚘',
      title: 'Comfortabele Wagens',
      description: 'Wij rijden in goed onderhouden, ruime voertuigen voor een aangename rit.',
    },
  ],

  services: [
    {
      id: 'lokaal',
      name: 'Lokaal Vervoer',
      description: 'Snelle ritten door Heerlen en de directe omgeving. Betrouwbaar en op tijd.',
      icon: '🏙️',
      features: ['Korte en lange afstanden', 'Vaste prijsafspraak mogelijk', 'Vriendelijke chauffeurs', 'Direct beschikbaar'],
    },
    {
      id: 'airport',
      name: 'Luchthaven Transfer',
      description: 'Stressvrij naar het vliegveld. Wij monitoren uw vlucht en zijn altijd op tijd.',
      icon: '✈️',
      features: ['Schiphol, Eindhoven, Düsseldorf', 'Vlucht monitoring', 'Ruim voor bagage', 'Vaste all-in prijs'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel vervoer voor bedrijven en executives. Discreet en punctueel.',
      icon: '💼',
      features: ['Factuur op bedrijfsnaam', 'Vaste chauffeur op aanvraag', 'Stipte tijdsplanning', 'Discreet en professioneel'],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      description: 'Zorgzaam vervoer naar ziekenhuis of behandeling. Geduldig en hulpvaardig.',
      icon: '🏥',
      features: ['Hulp bij in- en uitstappen', 'Geduldig en zorgzaam', 'Heen en terug mogelijk', 'Discreet'],
    },
  ],

  airports: [
    { name: 'Schiphol Amsterdam', country: 'Nederland', flag: '🇳🇱', time: '±2u' },
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±45min' },
    { name: 'Brussel Airport', country: 'België', flag: '🇧🇪', time: '±1u30' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±45min' },
    { name: 'Köln/Bonn Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u' },
    { name: 'Frankfurt Airport', country: 'Duitsland', flag: '🇩🇪', time: '±2u' },
  ],

  serviceArea: ['Heerlen', 'Kerkrade', 'Brunssum', 'Landgraaf', 'Voerendaal', 'Simpelveld', 'Maastricht', 'Sittard'],

  pricing: {
    startRate: 3.50,
    kmRate: 2.45,
    waitRate: 0.60,
    note: 'Vaste prijs op aanvraag. Luchthaventarieven zijn all-in vaste prijzen. Geen verrassingen achteraf.',
  },

  testimonials: [
    {
      id: 1,
      name: 'Riet Janssen',
      role: 'Vaste klant',
      rating: 5,
      text: 'Al jaren rij ik met Uw Taxi Heerlen. Altijd op tijd, vriendelijk en voor een eerlijke prijs. Echt een aanrader voor iedereen uit de regio.',
    },
    {
      id: 2,
      name: 'Marco Verstappen',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Voor onze zakelijke ritten zijn ze onmisbaar. Betrouwbaar, professioneel en altijd stipt op tijd. De bestuurder wacht ook altijd netjes op je.',
    },
    {
      id: 3,
      name: 'Linda Houben',
      role: 'Airport transfer',
      rating: 5,
      text: 'Vroeg vliegtuig vanuit Schiphol — geen enkel probleem. Uw Taxi Heerlen stond precies op tijd voor de deur. Reis was ontspannen en comfortabel.',
    },
  ],

  about: {
    story: 'Uw Taxi Heerlen is al jarenlang dé vertrouwde taxipartner voor inwoners en bedrijven in Heerlen en de Parkstad regio. Met een modern wagenpark en ervaren chauffeurs zorgen wij voor veilig en comfortabel vervoer — van een simpele rit naar het station tot een volledige luchthaven transfer.',
    mission: 'Ons doel is eenvoudig: u zo comfortabel en betrouwbaar mogelijk van A naar B brengen. Eerlijke prijzen, vriendelijke chauffeurs en 24/7 bereikbaarheid. Dat is de belofte van Uw Taxi Heerlen.',
    values: [
      'Betrouwbaarheid staat voorop',
      'Eerlijke en transparante tarieven',
      'Comfort en veiligheid in elk voertuig',
      'Persoonlijke aandacht voor elke klant',
    ],
    image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=1200&h=800&fit=crop',
  },
};
