export const config = {
  basePath: '/preview/davies-taxi-service',
  id: 'davies-taxi-service',
  name: 'Davies Taxi Service',
  tagline: 'Veilig, comfortabel en professioneel taxivervoer in Zuid-Limburg',
  description: 'Davies Taxi Service verzorgt premium taxivervoer in de regio Heerlen en heel Zuid-Limburg. Zakelijk vervoer, luchthaventritten, groepsvervoer en meer. 24/7 bereikbaar.',

  colors: {
    primary: '#C9A84C',
    primaryDark: '#0B0C10',
    accent: '#E8C96A',
    bg: '#F9F7F2',
    text: '#111111',
  },

  contact: {
    address: 'Heerlen, Zuid-Limburg',
    phone: '+31456666666',
    phoneDisplay: '045 6666 666',
    email: 'info@daviestaxiservice.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  vehicles: [
    {
      id: 'e-klasse',
      name: 'Mercedes E-Klasse AMG Line',
      badge: 'Zakelijk',
      capacity: '1–4 personen',
      description: 'Onze premium zakelijke sedan voor comfortabel en stijlvol vervoer. Perfect voor VIP-gasten, directievervoer en zakenreizigers.',
      services: ['VIP & Directievervoer', 'Zakelijk vervoer', 'Hotel service', 'Groepsvervoer klein'],
      images: [
        'https://daviestaxiservice.nl/wp-content/uploads/2025/01/E-klasse-e1736334223497-600x600.jpg',
        'https://daviestaxiservice.nl/wp-content/uploads/2024/12/469297826_8161524953948175_1025366756568343170_n-600x338.jpg',
      ],
    },
    {
      id: 'eqv',
      name: 'Mercedes EQV Vol Electrisch',
      badge: 'Electrisch',
      capacity: '4–8 personen',
      description: 'Onze volledig elektrische ruime MPV voor groepsvervoer. Geruisloos, milieuvriendelijk en uiterst comfortabel voor grotere gezelschappen.',
      services: ['Bedrijven & Events', 'Airport service', 'Pilot drive', 'Expressdienst'],
      images: [
        'https://daviestaxiservice.nl/wp-content/uploads/2025/01/472542890_8319577058142963_2670192867561533670_n-2-e1736333873140-600x600.jpg',
        'https://daviestaxiservice.nl/wp-content/uploads/2025/12/vito-600x356.jpg',
      ],
    },
  ],

  features: [
    {
      icon: '⭐',
      title: 'Premium Service',
      description: 'Eerste klas behandeling voor elke passagier. Uw comfort staat altijd centraal.',
    },
    {
      icon: '🕐',
      title: '24/7 Bereikbaar',
      description: 'Dag en nacht voor u klaar. Vroeg vliegtuig of laat avondje? Geen probleem.',
    },
    {
      icon: '⚡',
      title: 'Vol Elektrisch',
      description: 'Duurzaam rijden in onze Mercedes EQV. Geruisloos, schoon en comfortabel.',
    },
    {
      icon: '🛡️',
      title: 'Volledig Verzekerd',
      description: 'Gecertificeerde chauffeurs en volledig verzekerd vervoer voor uw gemoedsrust.',
    },
  ],

  services: [
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      icon: '💼',
      description: 'Professioneel directie- en zakelijk vervoer in stijlvolle Mercedes voertuigen. Stipt, discreet en altijd representatief.',
      features: ['Directievervoer', 'Bedrijfsafspraken', 'Factuur op naam', 'Vaste chauffeur mogelijk'],
    },
    {
      id: 'airport',
      name: 'Airport Transfer',
      icon: '✈️',
      description: 'Ontspannen naar Schiphol, Eindhoven, Brussel, Düsseldorf of Frankfurt. Wij volgen uw vlucht.',
      features: ['Vlucht monitoring', 'Vaste all-in prijs', 'Grote bagage welkom', 'Op tijd gegarandeerd'],
    },
    {
      id: 'groepsvervoer',
      name: 'Groepsvervoer',
      icon: '👥',
      description: 'Voor groepen tot 8 personen in onze ruime Mercedes EQV. Ideaal voor evenementen, bedrijfsuitjes en families.',
      features: ['Tot 8 personen', 'Evenementen', 'Bedrijfsuitjes', 'Comfortabele ruimte'],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      icon: '🏥',
      description: 'Zorgzaam en geduldig vervoer voor medische afspraken, behandelingen en ziekenhuisbezoek.',
      features: ['Hulp bij in- en uitstappen', 'Geduldig & zorgzaam', 'Retourrit mogelijk', 'Discreet & betrouwbaar'],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Mark Hendriksen',
      role: 'Directeur, Heerlen',
      rating: 5,
      text: 'Davies rijdt mijn directie altijd stipt en in stijl. De Mercedes E-Klasse is indrukwekkend en de chauffeur is uiterst professioneel. Aanrader!',
    },
    {
      id: 2,
      name: 'Sandra Wilmsen',
      role: 'Airport transfer',
      rating: 5,
      text: 'Vroege vlucht van Düsseldorf, Davies stond om 4 uur keurig voor de deur. Comfortabel, op tijd en geen stress. Nooit meer anders!',
    },
    {
      id: 3,
      name: 'Pieter & Familie',
      role: 'Groepsvervoer',
      rating: 5,
      text: 'Met 7 personen naar een bruiloft in Maastricht — de elektrische EQV was perfect. Stil, ruim en erg duurzaam. Top service!',
    },
  ],

  airports: [
    { name: 'Schiphol Amsterdam', flag: '🇳🇱', time: '±2u' },
    { name: 'Eindhoven Airport', flag: '🇳🇱', time: '±45min' },
    { name: 'Brussel Airport', flag: '🇧🇪', time: '±1u30' },
    { name: 'Düsseldorf Airport', flag: '🇩🇪', time: '±1u' },
    { name: 'Frankfurt Airport', flag: '🇩🇪', time: '±2u' },
  ],

  about: {
    story: 'Davies Taxi Service is opgericht met één doel: het bieden van de hoogste kwaliteit taxivervoer in Zuid-Limburg. Vanuit Heerlen bedienen wij de hele regio met twee premium Mercedes-voertuigen — een E-Klasse AMG Line voor zakelijk en VIP-vervoer, en een volledig elektrische EQV voor groepen tot 8 personen.',
    mission: 'Wij geloven dat taxivervoer meer kan zijn dan puur transport. Het is een ervaring. Iedere rit verdient een professionele chauffeur, een comfortabel voertuig en een stipte aankomst. Dat is de Davies-belofte.',
    values: [
      'Veiligheid boven alles',
      'Punctualiteit als standaard',
      'Premium comfort in elk voertuig',
      'Duurzaam rijden met de elektrische EQV',
      'Persoonlijke aandacht voor elke klant',
    ],
  },
};
