export const config = {
  basePath: '/preview/taxi-service-julliard',
  id: 'taxi-service-julliard',
  name: 'Taxiservice Julliard',
  tagline: 'Uw betrouwbare taxipartner in de regio',
  description: 'Taxiservice Julliard verzorgt professioneel taxivervoer voor particulieren, zakelijke klanten, groepen en luchthavens. Met jarenlange ervaring en een moderne vloot staan wij 24/7 voor u klaar.',

  colors: {
    primary: '#0C2D6B',
    primaryHover: '#0A2255',
    accent: '#C8963E',
    accentHover: '#B3821F',
    text: '#0C2D6B',
    background: '#FFFFFF',
    lightBg: '#F4F6FA',
    darkBg: '#071A3E',
  },

  contact: {
    address: 'Regio Limburg',
    phone: '+31638986635',
    phoneDisplay: '+31 6 3898 6635',
    email: 'info@taxiservicejulliard.nl',
    kvk: '',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Taxiservice Julliard', path: '/' },
    { label: "Julliard's Airportservice", path: '/airportservice' },
    { label: 'Zakelijk Vervoer', path: '/zakelijk' },
    { label: 'Particulier Vervoer', path: '/particulier' },
    { label: 'Groepsvervoer', path: '/groepsvervoer' },
    { label: 'Schoolvervoer', path: '/schoolvervoer' },
    { label: 'Kortingskaart', path: '/kortingskaart' },
    { label: 'Reserveer Airporttaxi', path: '/reserveer-airporttaxi' },
    { label: 'Prijzen Airportservice', path: '/prijzen-airportservice' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    image: 'https://images.unsplash.com/photo-1607765782528-6adc51455bab?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    subtitle: 'Professioneel taxivervoer voor particulieren, zakelijke klanten, groepen en luchthavens. Dag en nacht bereikbaar.',
  },

  logo: 'https://taxiservicejulliard.nl/wp-content/uploads/2019/01/Taxiservice_Julliard_zw.png',

  features: [
    { icon: '✈️', title: 'Luchthaven transfers', description: 'Vaste all-in prijzen naar Schiphol, Eindhoven, Brussel, Düsseldorf en meer.' },
    { icon: '👔', title: 'Zakelijk vervoer', description: 'Stijlvol en betrouwbaar voor meetings, events en zakelijke afspraken.' },
    { icon: '🚌', title: 'Groepsvervoer', description: 'Ruime bus voor groepen tot 16 personen. Ideaal voor uitjes en evenementen.' },
    { icon: '🕐', title: '24/7 beschikbaar', description: 'Altijd bereikbaar — ook vroeg in de ochtend of laat in de avond.' },
  ],

  services: [
    {
      id: 'airportservice',
      name: "Julliard's Airportservice",
      description: 'Comfortabele en stipte transfers naar alle grote luchthavens. Vaste all-in prijzen, zonder verrassingen.',
      icon: '✈️',
      features: ['Schiphol, Eindhoven, Brussel', 'Düsseldorf, Frankfurt, Keulen', 'Vluchtmonitoring inbegrepen', 'Bagage geen probleem'],
      path: '/airportservice',
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel vervoer voor het bedrijfsleven. Discreet, punctueel en met oog voor detail.',
      icon: '💼',
      features: ['Facturering op bedrijfsnaam', 'Vaste chauffeur op aanvraag', 'Stipte tijdsplanning', 'Representatieve voertuigen'],
      path: '/zakelijk',
    },
    {
      id: 'particulier',
      name: 'Particulier Vervoer',
      description: 'Voor al uw dagelijkse ritten. Van ziekenhuisbezoek tot stationsrit — betrouwbaar en comfortabel.',
      icon: '🚗',
      features: ['Korte en lange ritten', 'Zorgvervoer mogelijk', 'Hulp bij in- en uitstappen', 'Vriendelijke chauffeurs'],
      path: '/particulier',
    },
    {
      id: 'groepsvervoer',
      name: 'Groepsvervoer',
      description: 'Ruime bus voor groepen tot 16 personen. Perfect voor uitjes, evenementen of teamreizen.',
      icon: '🚌',
      features: ['Tot 16 passagiers', 'Ruime bagageruimte', 'Ideaal voor evenementen', 'Maatwerk routes'],
      path: '/groepsvervoer',
    },
  ],

  fleet: {
    bus: {
      title: 'Opel Bus',
      description: 'Ruime en comfortabele Opel bus met capaciteit voor tot 16 passagiers. Ideaal voor groepsvervoer, luchthaventritten met veel bagage en evenementen.',
      capacity: '16 passagiers',
      features: ['Airconditioning', 'Ruime bagageruimte', 'Comfortabele stoelen', 'USB-laders'],
      images: [
        'https://taxiservicejulliard.nl/wp-content/uploads/2021/03/Taxiservice_Julliard_bus.jpg',
        'https://taxiservicejulliard.nl/wp-content/uploads/2021/03/Taxiservice_Julliard_bus2.jpg',
        'https://taxiservicejulliard.nl/wp-content/uploads/2021/03/Taxiservice_Julliard_bus4.jpg',
      ],
    },
    wagen: {
      title: 'BMW Stationwagen',
      description: 'Stijlvolle en representatieve BMW stationwagen voor uw dagelijkse ritten, zakelijk vervoer en kleinere luchthaventritten.',
      capacity: '4 passagiers',
      features: ['Airconditioning', 'Leder interieur', 'WiFi beschikbaar', 'Stil en comfortabel'],
      images: [
        'https://taxiservicejulliard.nl/wp-content/uploads/2020/07/Taxiservice-Julliard-wagenpark-3.jpg',
        'https://taxiservicejulliard.nl/wp-content/uploads/2020/07/Taxiservice-Julliard-wagenpark-2.jpg',
        'https://taxiservicejulliard.nl/wp-content/uploads/2020/07/Taxiservice-Julliard-wagenpark-1.jpg',
      ],
    },
  },

  airports: [
    { name: 'Schiphol Amsterdam', country: 'Nederland', flag: '🇳🇱', time: '±2u', price: 'Vanaf €175' },
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±45min', price: 'Vanaf €95' },
    { name: 'Brussel Airport', country: 'België', flag: '🇧🇪', time: '±1u30', price: 'Vanaf €140' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u', price: 'Vanaf €120' },
    { name: 'Frankfurt Airport', country: 'Duitsland', flag: '🇩🇪', time: '±2u15', price: 'Vanaf €195' },
    { name: 'Keulen/Bonn Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u30', price: 'Vanaf €145' },
  ],

  airportPricing: [
    { airport: 'Eindhoven Airport', car4: '€ 95', car8: '€ 120', bus16: '€ 150' },
    { airport: 'Brussel Airport', car4: '€ 140', car8: '€ 170', bus16: '€ 210' },
    { airport: 'Schiphol Amsterdam', car4: '€ 175', car8: '€ 210', bus16: '€ 260' },
    { airport: 'Düsseldorf Airport', car4: '€ 120', car8: '€ 145', bus16: '€ 180' },
    { airport: 'Frankfurt Airport', car4: '€ 195', car8: '€ 230', bus16: '€ 285' },
    { airport: 'Keulen/Bonn Airport', car4: '€ 145', car8: '€ 175', bus16: '€ 215' },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Peter Claes',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Al jaren gebruik ik Taxiservice Julliard voor mijn zakenreizen. Altijd stipt, professioneel en de chauffeur kent de weg als geen ander.',
    },
    {
      id: 2,
      name: 'Sandra Martens',
      role: 'Airport transfer',
      rating: 5,
      text: 'Vroeg vlucht, geen probleem. Julliard stond op tijd voor de deur en bezorgde me ontspannen bij de terminal. Aanrader!',
    },
    {
      id: 3,
      name: 'Familie Hermans',
      role: 'Groepsvervoer',
      rating: 5,
      text: 'Met onze groep van 12 personen naar Schiphol — het was geweldig. Ruime bus, vriendelijke chauffeur en een eerlijke prijs.',
    },
  ],

  about: {
    story: 'Taxiservice Julliard is al jarenlang een vertrouwde naam in de regio. Wij bieden professioneel taxivervoer voor particulieren, zakelijke klanten, groepen en luchthavens. Met een moderne vloot en ervaren chauffeurs garanderen wij een comfortabele en stipte rit.',
    mission: 'Onze missie: elk transport een zorgeloze ervaring maken. Of u nu naar de luchthaven moet, een zakelijke afspraak heeft of een groepsuitje plant — wij zijn er voor u.',
    values: ['Stiptheid en betrouwbaarheid', 'Persoonlijke service', 'Vaste en eerlijke prijzen', 'Moderne en schone voertuigen'],
  },

  kortingskaart: {
    description: 'Rijdt u regelmatig met Taxiservice Julliard? Met onze kortingskaart profiteert u van aantrekkelijke voordelen bij elk ritje.',
    voordelen: [
      '10% korting op alle ritten',
      'Voorrang bij drukte',
      'Vaste chauffeur op aanvraag',
      'Maandelijkse factuur mogelijk',
    ],
  },
};
