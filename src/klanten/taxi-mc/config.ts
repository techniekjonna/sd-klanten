export const config = {
  basePath: '/preview/taxi-mc',
  id: 'taxi-mc',
  name: 'Taxi MC',
  tagline: 'Betrouwbaar, comfortabel & veilig vervoer op maat',
  description: 'Taxi MC verzorgt professioneel personenvervoer vanuit de regio Heerlen naar heel Europa. 24/7 bereikbaar voor zakelijk vervoer, luchthaventritten, treinstation transfers en meer.',

  colors: {
    primary: '#F5C200',
    primaryHover: '#E0AE00',
    dark: '#0F0F0F',
    darkAlt: '#1A1A1A',
    text: '#111111',
    background: '#FFFFFF',
    surface: '#FAF8F0',
    muted: '#6B6B6B',
  },

  contact: {
    phone: '+31644016044',
    phoneDisplay: '06 – 440 160 44',
    email: 'info@taximc.nl',
    kvk: '14090461',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Zakelijk vervoer', path: '/zakelijk-vervoer' },
    { label: 'Airportvervoer', path: '/airportvervoer' },
    { label: 'Treinvervoer', path: '/treinvervoer' },
    { label: 'Diversen', path: '/diversen' },
    { label: 'Over ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    subtitle: 'Uw betrouwbare partner voor comfortabel vervoer. Van zakelijke ritten tot luchthavens — wij brengen u veilig en op tijd.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 bereikbaar',
      description: 'Op elk moment van de dag klaar voor u. Geen tijdstip is te vroeg of te laat.',
    },
    {
      icon: '🌍',
      title: 'Heel Europa',
      description: 'Ritten door heel Europa. Van Heerlen tot aan de Middellandse Zee.',
    },
    {
      icon: '🗣️',
      title: 'Meertalig',
      description: 'Onze chauffeurs spreken Nederlands, Engels en Duits vloeiend.',
    },
    {
      icon: '💳',
      title: 'Pinnen & creditcard',
      description: 'Betaal eenvoudig met pin, creditcard of op factuur.',
    },
  ],

  services: [
    {
      id: 'zakelijk-vervoer',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel en discreet vervoer voor executives en zakenreizigers. Wij zorgen dat u altijd op tijd en uitgerust aankomt.',
      icon: '💼',
      features: ['Factuur op bedrijfsnaam', 'Vaste chauffeur mogelijk', 'Discreet en professioneel', 'Op aanvraag geprijsd'],
      path: '/zakelijk-vervoer',
    },
    {
      id: 'airportvervoer',
      name: 'Airportvervoer',
      description: 'Ontspannen naar alle grote luchthavens in Nederland, België en Duitsland. Vaste tarieven, geen verrassingen.',
      icon: '✈️',
      features: ['Vluchtmonitoring inbegrepen', 'Grote bagage welkom', 'Vaste all-in prijzen', 'Alle grote luchthavens'],
      path: '/airportvervoer',
    },
    {
      id: 'treinvervoer',
      name: 'Treinvervoer',
      description: 'Van en naar alle grote treinstations in de Benelux en Duitsland. Wij halen u op en brengen u weg.',
      icon: '🚆',
      features: ['Maastricht, Amsterdam, Brussel', 'Luik, Düsseldorf, Keulen', 'Vaste tarieven', 'Comfortabele voertuigen'],
      path: '/treinvervoer',
    },
    {
      id: 'diversen',
      name: 'Diversen',
      description: 'Congressen, concerten, evenementen en persoonlijk Europees vervoer. Wij regelen het voor u.',
      icon: '🎭',
      features: ['Congres & evenementen', 'Groepsvervoer mogelijk', 'Persoonlijk Europees vervoer', 'Op maat'],
      path: '/diversen',
    },
  ],

  airports: [
    { name: 'Maastricht', code: 'MST', price: 80 },
    { name: 'Eindhoven Airport', code: 'EIN', price: 155 },
    { name: 'Schiphol Amsterdam', code: 'AMS', price: 320 },
    { name: 'Brussel Airport', code: 'BRU', price: 175 },
    { name: 'Charleroi', code: 'CRL', price: 190 },
    { name: 'Düsseldorf Airport', code: 'DUS', price: 155 },
    { name: 'Cologne Bonn', code: 'CGN', price: 155 },
    { name: 'Frankfurt Airport', code: 'FRA', price: 395 },
    { name: 'Weeze Airport', code: 'NRN', price: 180 },
  ],

  trainStations: [
    { name: 'Maastricht Centraal', price: 80 },
    { name: 'Amsterdam Centraal', price: 320 },
    { name: 'Luik (Liège)', price: 135 },
    { name: 'Brussel Midi', price: 200 },
    { name: 'Düsseldorf Hbf', price: 155 },
    { name: 'Keulen Hbf', price: 155 },
  ],

  vehicleFeatures: [
    'Leren bekleding',
    'Airconditioning',
    'Koude mineraalwater',
    'Satelietnavigatie',
    'WiFi verbinding',
    'Creditcard betaling',
  ],

  testimonials: [
    {
      id: 1,
      name: 'Robert van den Berg',
      role: 'Directeur, zakelijke klant',
      rating: 5,
      text: 'Taxi MC rijdt al jaren onze directie naar de luchthaven. Altijd stipt, professioneel en de chauffeurs zijn discreet. Meer kunnen we niet wensen.',
    },
    {
      id: 2,
      name: 'Sandra Hofmann',
      role: 'Frequent traveller',
      rating: 5,
      text: 'Vroeg vliegtuig van Schiphol en nooit stress. Taxi MC staat altijd op tijd voor de deur en de auto is comfortabel. Absoluut aanrader!',
    },
    {
      id: 3,
      name: 'Marc Willems',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Vriendelijke chauffeur, schone auto en een eerlijke vaste prijs vooraf. Geen meter die doorloopt — gewoon duidelijkheid. Top!',
    },
  ],

  about: {
    story: 'Taxi MC is gevestigd in de regio Heerlen en actief door heel Europa. Met jarenlange ervaring in professioneel personenvervoer staan wij garant voor betrouwbaarheid en kwaliteit. Of u nu zakelijk onderweg bent, een vlucht haalt of naar een evenement gaat — wij zorgen voor een comfortabele en stressvrije rit.',
    mission: 'Onze missie is eenvoudig: duidelijkheid en eerlijkheid bieden. Vaste prijzen, professionele chauffeurs en altijd op tijd. Dat is de belofte van Taxi MC.',
    values: ['Betrouwbaar en punctueel', 'Vaste eerlijke tarieven', 'Professionele chauffeurs', '24/7 bereikbaar'],
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=1200&h=800&fit=crop',
  },
};
