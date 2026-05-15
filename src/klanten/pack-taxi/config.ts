import type { PackTaxiConfig } from './types';

export const config: PackTaxiConfig = {
  basePath: '/preview/pack-taxi',
  id: 'pack-taxi',
  name: 'Pack Taxi',
  tagline: 'Betrouwbaar rijden door Heerlen en omgeving',
  description: 'Pack Taxi Heerlen biedt comfortabel, punctueel en betaalbaar taxivervoer in Heerlen en omgeving. Van luchthaventrip tot dagelijks vervoer — u rijdt altijd in stijl.',

  colors: {
    primary: '#1A1A2E',
    primaryHover: '#16213E',
    primaryLight: '#EEEEF5',
    accent: '#C9A84C',
    text: '#1A1A2E',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Heerlen, Limburg',
    phone: '06-122 111 95',
    whatsapp: '+31612211195',
    email: 'info@pack-taxi.nl',
    hours: {
      weekday: '24/7 beschikbaar',
      weekend: '24/7 beschikbaar',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Luchthaven', path: '/luchthaven' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw betrouwbare taxi in',
    highlight: 'Heerlen',
    subtitle: 'Comfortabel, op tijd en voor een vaste prijs. Pack Taxi brengt u veilig van A naar B — dag en nacht, 7 dagen per week.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop',
    cta: 'Direct Boeken',
    ctaLink: '/#boeken',
    ctaSecondary: 'Bekijk Tarieven',
    ctaSecondaryLink: '/tarieven',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description: 'Dag en nacht, ook in het weekend en op feestdagen. Wij zijn er altijd voor u.',
    },
    {
      icon: '💳',
      title: 'Pin Betaling',
      description: 'Betaal gemakkelijk met pin of contant. Factuur mogelijk voor zakelijke klanten.',
    },
    {
      icon: '📍',
      title: 'Vaste Prijs',
      description: 'Geen verrassingen achteraf. Vraag vooraf een vaste prijs op voor uw rit.',
    },
    {
      icon: '🚘',
      title: 'Luxe Voertuigen',
      description: 'Wij rijden in comfortabele Mercedes-voertuigen voor een aangename reis.',
    },
  ],

  services: [
    {
      id: 'stadsrit',
      name: 'Stadsrit Heerlen',
      description: 'Snel en comfortabel door Heerlen en directe omgeving. Ideaal voor dagelijks woon-werkverkeer, avondjes uit of ziekenhuisbezoeken.',
      priceLabel: 'Vanaf €8',
      icon: '🏙️',
      features: ['Direct beschikbaar', 'Vaste of metertarief', 'Ruime voertuigen', 'Bagage welkom'],
    },
    {
      id: 'luchthaven',
      name: 'Luchthaven Transfer',
      description: 'Wij brengen u op tijd naar Eindhoven, Maastricht, Düsseldorf en andere luchthavens. Vluchttracking inbegrepen.',
      priceLabel: 'Vaste prijs',
      icon: '✈️',
      features: ['Alle luchthavens', 'Vluchttracking', 'Bagage hulp', 'Op tijd gegarandeerd'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel vervoer voor bedrijven en zakelijke reizigers. Maandelijkse facturering mogelijk.',
      priceLabel: 'Op aanvraag',
      icon: '💼',
      features: ['Factuurrijden', 'Vaste chauffeur', 'Representatief', 'Rijtijdregistratie'],
    },
    {
      id: 'uitje',
      name: 'Dagje Uit & Evenementen',
      description: 'Concerten, bruiloften, evenementen of een dagje weg? Wij rijden u zorgeloos heen en terug.',
      priceLabel: 'Op aanvraag',
      icon: '🎉',
      features: ['Heen en terug', 'Wacht op locatie', 'Groepsvervoer', 'Flexibele tijden'],
    },
  ],

  airports: [
    { name: 'Maastricht Aachen Airport', city: 'Beek', duration: '±20 min', price: 'Vaste prijs' },
    { name: 'Eindhoven Airport', city: 'Eindhoven', duration: '±50 min', price: 'Vaste prijs' },
    { name: 'Düsseldorf Airport', city: 'Düsseldorf', duration: '±45 min', price: 'Vaste prijs' },
    { name: 'Köln Bonn Airport', city: 'Keulen', duration: '±60 min', price: 'Vaste prijs' },
    { name: 'Amsterdam Schiphol', city: 'Amsterdam', duration: '±2u 30 min', price: 'Vaste prijs' },
  ],

  about: {
    title: 'Over Pack Taxi',
    story: 'Pack Taxi is een betrouwbaar taxibedrijf gevestigd in Heerlen. Wij zijn er voor iedereen: van de student die snel naar het station moet tot de zakenreiziger die stipt op het vliegveld moet zijn. Met moderne Mercedes-voertuigen en vriendelijke chauffeurs zorgen wij voor een rit die u bijblijft.',
    mission: 'Onze missie is simpel: u veilig, comfortabel en op tijd op uw bestemming krijgen. Of het nu gaat om een rit naar de supermarkt, het ziekenhuis of de luchthaven — bij Pack Taxi staat u altijd centraal.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=800&fit=crop',
    values: [
      'Stiptheid & betrouwbaarheid',
      'Transparante vaste prijzen',
      'Klantvriendelijke service',
      '24/7 bereikbaar',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Sandra van den Berg',
      role: 'Vaste klant',
      rating: 5,
      text: 'Altijd op tijd, vriendelijke chauffeur en een nette auto. Ik rij al jaren met Pack Taxi naar Eindhoven Airport en ben nooit teleurgesteld.',
    },
    {
      id: 2,
      name: 'Mark Janssen',
      role: 'Zakelijke reiziger',
      rating: 5,
      text: 'Professioneel bedrijf. De chauffeur was er al 5 minuten vroeg, hielp met de koffers en kende de weg perfect. Aanrader!',
    },
    {
      id: 3,
      name: 'Familie Houben',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Hele fijne rit naar onze bruiloft. Op tijd, schone auto en heel vriendelijk. De vaste prijs was ook heel eerlijk. Top service!',
    },
  ],
};
