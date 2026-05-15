import type { TaxiCompleetConfig } from './types';

export const config: TaxiCompleetConfig = {
  basePath: '/preview/taxi-compleet-maastricht',
  id: 'taxi-compleet-maastricht',
  name: 'Taxi Compleet Maastricht',
  tagline: 'Uw betrouwbare taxipartner in Maastricht en omstreken',
  description: 'Taxi Compleet Maastricht verzorgt betrouwbaar en comfortabel vervoer in Maastricht en omstreken. 24/7 beschikbaar, van en naar luchthavens, ziekenhuizen en meer.',

  colors: {
    primary: '#1B3A6B',
    primaryHover: '#152e56',
    accent: '#D4960A',
    text: '#1a2340',
    background: '#FFFFFF',
    lightBg: '#F4F7FB',
  },

  contact: {
    address: 'Maastricht en omstreken',
    phone: '+31628816620',
    phoneDisplay: '06 288 166 20',
    email: 'info@taxicompleetmaastricht.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Soorten vervoer', path: '/soorten-vervoer' },
    { label: 'Rit boeken', path: '/rit-boeken' },
    { label: 'Luchthavens', path: '/luchthavens' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    subtitle: 'Brandschoon vervoer van A naar B in Maastricht en omstreken. Ruimte voor uw koffers, meerdere wagens en een busje beschikbaar.',
    image: 'https://c625951.ssl.cf3.rackcdn.com/category/taxi/taxi-foto.jpg',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 beschikbaar',
      description: 'Dag en nacht bereikbaar, van maandag tot en met zondag. Geen tijdstip is te vroeg of te laat.',
    },
    {
      icon: '🚐',
      title: 'Meerdere voertuigen',
      description: 'Wij beschikken over meerdere wagens, waaronder ook een busje — geschikt voor grotere groepen.',
    },
    {
      icon: '🧳',
      title: 'Ruimte voor bagage',
      description: 'Er is altijd genoeg ruimte voor uw koffers, zodat u gerust kunt beginnen aan uw reis.',
    },
    {
      icon: '🤝',
      title: 'Persoonlijk & betrouwbaar',
      description: 'Vriendelijke chauffeurs die u met zorg vervoeren. Afspraak is afspraak.',
    },
  ],

  services: [
    {
      id: 'stad-rit',
      name: 'Stadsritten',
      description: 'Snel en comfortabel door Maastricht en omgeving. Ideaal voor bezoeken, afspraken of een avond uit.',
      icon: '🏙️',
      features: ['Maastricht & omstreken', 'Vaste prijsafspraak', 'Comfortabele wagens', '24/7 beschikbaar'],
    },
    {
      id: 'luchthaven',
      name: 'Luchthavens',
      description: 'Ontspannen op tijd naar uw vlucht. Wij rijden naar alle grote luchthavens in de regio.',
      icon: '✈️',
      features: ['Schiphol, Eindhoven, Brussel', 'Düsseldorf, Frankfurt', 'Vaste all-in prijs', 'Vluchtmonitoring'],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      description: 'Betrouwbaar vervoer naar ziekenhuis, specialist of behandeling. Geduldig en zorgzaam.',
      icon: '🏥',
      features: ['Hulp bij in- en uitstappen', 'Terugritten mogelijk', 'Discreet & vriendelijk', 'Wachten indien nodig'],
    },
    {
      id: 'groepsvervoer',
      name: 'Groepsvervoer',
      description: 'Voor grotere gezelschappen hebben wij een busje beschikbaar. Ideaal voor uitjes en evenementen.',
      icon: '🚐',
      features: ['Busje beschikbaar', 'Tot 8 personen', 'Evenementen & uitjes', 'Maatwerk mogelijk'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk vervoer',
      description: 'Professioneel en punctueel vervoer voor zakenreizigers en bedrijven in de regio.',
      icon: '💼',
      features: ['Factuur op bedrijfsnaam', 'Stipte tijdsplanning', 'Vaste chauffeur mogelijk', 'Discreet & professioneel'],
    },
    {
      id: 'avond-nacht',
      name: 'Avond & Nacht',
      description: 'Veilig thuiskomen na een avondje uit. Wij rijden ook laat in de nacht en vroeg in de ochtend.',
      icon: '🌙',
      features: ['Tot diep in de nacht', 'Vroege ochtendritten', 'Veilig & vertrouwd', 'Altijd bereikbaar'],
    },
  ],

  airports: [
    { name: 'Schiphol Amsterdam', country: 'Nederland', flag: '🇳🇱', time: '±2u 15min' },
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±50min' },
    { name: 'Brussel Zaventem', country: 'België', flag: '🇧🇪', time: '±1u 45min' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u 15min' },
    { name: 'Frankfurt Airport', country: 'Duitsland', flag: '🇩🇪', time: '±2u 30min' },
    { name: 'Keulen/Bonn Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u 30min' },
  ],

  serviceArea: ['Maastricht', 'Valkenburg', 'Meerssen', 'Beek', 'Sittard', 'Geleen', 'Heerlen', 'Gulpen', 'Eijsden'],

  testimonials: [
    {
      id: 1,
      name: 'Sandra Brouns',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Altijd op tijd en vriendelijk. Ik rij al jaren met Taxi Compleet Maastricht naar het ziekenhuis. Ze zijn geduldig en helpen altijd mee.',
    },
    {
      id: 2,
      name: 'Marc Willems',
      role: 'Luchthaven transfer',
      rating: 5,
      text: 'Vroege vlucht, geen stress. De chauffeur stond stipt voor de deur en het busje had ruim plek voor al onze koffers. Aanrader!',
    },
    {
      id: 3,
      name: 'Lisette Janssen',
      role: 'Vaste klant',
      rating: 5,
      text: 'Betrouwbaar, schoon en vriendelijk. Of het nu vroeg is of laat — Taxi Compleet staat altijd voor je klaar. Nooit meer een andere taxi!',
    },
  ],

  about: {
    story: 'Taxi Compleet Maastricht is uw vertrouwde taxipartner in Maastricht en de wijde omgeving. Wij verzorgen brandschoon en comfortabel vervoer voor particulieren en bedrijven. Met meerdere wagens — waaronder een ruime bus — zijn wij klaar voor elke rit, groot of klein.',
    mission: 'Onze missie is simpel: u zorgeloos en op tijd van A naar B brengen. Dat doen wij met vriendelijke, ervaren chauffeurs die de omgeving als hun broekzak kennen. Kwaliteit en betrouwbaarheid staan daarbij altijd voorop.',
    image: 'https://c625951.ssl.cf3.rackcdn.com/website/4853476/Canva_-_Black_Mercedes_Benz_Coupe.jpg',
    values: [
      'Altijd op tijd, afspraak is afspraak',
      'Schone en goed onderhouden voertuigen',
      'Vriendelijke en ervaren chauffeurs',
      '24/7 bereikbaar voor u klaar',
    ],
  },
};
