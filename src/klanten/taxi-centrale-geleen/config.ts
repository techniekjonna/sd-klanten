export const config = {
  basePath: '/preview/taxi-centrale-geleen',
  id: 'taxi-centrale-geleen',
  name: 'Taxi Centrale Geleen',
  tagline: 'Regio Westelijke Mijnstreek',
  description: 'Taxi Centrale Geleen verzorgt betrouwbaar en comfortabel taxivervoer in de regio Westelijke Mijnstreek. 24/7 beschikbaar voor ritten in en rondom Sittard, Geleen en omstreken.',

  colors: {
    primary: '#F5C518',
    primaryHover: '#d4a800',
    accent: '#F5C518',
    text: '#111111',
    background: '#FFFFFF',
    dark: '#111111',
    darkSurface: '#1e1e1e',
    darkBorder: '#2a2a2a',
    gray: '#888888',
  },

  contact: {
    address: 'Romeinse Weg 59',
    city: '6135 JA Sittard',
    phone: '+31061769108',
    phoneDisplay: '06 176 91087',
    email: 'info@taxisittard-geleen.nl',
    kvk: '57148562',
    kiwa: 'P91562',
    btw: 'NL852457789B01',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Bestellen', path: '/bestellen' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Airport Service', path: '/airport-service' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw betrouwbare taxi in',
    highlight: 'Westelijke Mijnstreek',
    subtitle: 'Comfortabel, punctueel en betaalbaar taxivervoer voor particulieren en bedrijven. 24 uur per dag, 7 dagen per week.',
    image: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=1920&h=1080&fit=crop',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description: 'Dag en nacht bereikbaar voor uw rit. Geen tijdstip is te vroeg of te laat.',
    },
    {
      icon: '✈️',
      title: 'Airport Transfers',
      description: 'Vaste vluchtprijzen naar Schiphol, Eindhoven, Brussel en meer.',
    },
    {
      icon: '💼',
      title: 'Zakelijk Vervoer',
      description: 'Professioneel en discreet zakelijk vervoer met factuur op bedrijfsnaam.',
    },
    {
      icon: '👥',
      title: 'Groepsvervoer',
      description: 'Ruime voertuigen voor groepen. Ideaal voor uitjes en evenementen.',
    },
  ],

  services: [
    {
      id: 'particulier',
      name: 'Particulier Vervoer',
      description: 'Persoonlijk en comfortabel taxivervoer voor uw dagelijkse ritten. Van arts tot station, wij brengen u veilig op de bestemming.',
      icon: '🚕',
      features: ['Korte en lange ritten', 'Vaste prijs op aanvraag', 'Betaling per pin of contant', '24/7 beschikbaar'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Vertrouwelijk en professioneel zakelijk taxivervoer. Ideaal voor zakenrelaties, congressen en vergaderingen.',
      icon: '💼',
      features: ['Factuur op naam', 'Vaste chauffeur mogelijk', 'Stipte tijdsplanning', 'Representatieve voertuigen'],
    },
    {
      id: 'airport',
      name: 'Airport Service',
      description: 'Zorgeloos naar het vliegveld. Wij monitoren uw vlucht en staan klaar bij aankomst of vertrek.',
      icon: '✈️',
      features: ['Vluchtmonitoring', 'Alle Europese luchthavens', 'Grote bagage welkom', 'Vaste all-in prijs'],
    },
    {
      id: 'groep',
      name: 'Groepsvervoer',
      description: 'Voor uitjes, evenementen of groepsreizen. Ruime, comfortabele voertuigen voor meerdere passagiers.',
      icon: '👥',
      features: ['Voertuigen tot 8 personen', 'Bagageruimte aanwezig', 'Vooraf vaste prijs', 'Flexibele planning'],
    },
  ],

  airports: [
    { name: 'Schiphol Amsterdam', country: 'Nederland', flag: '🇳🇱', time: '±2u 15min' },
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±50min' },
    { name: 'Brussel Zaventem', country: 'België', flag: '🇧🇪', time: '±1u 45min' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u 10min' },
    { name: 'Keulen/Bonn Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u 30min' },
    { name: 'Frankfurt Airport', country: 'Duitsland', flag: '🇩🇪', time: '±2u 30min' },
  ],

  pricing: [
    { label: 'Starttarief', value: '€ 3,25' },
    { label: 'Per kilometer', value: '€ 2,40' },
    { label: 'Wachttijd per minuut', value: '€ 0,55' },
    { label: 'Nacht / feestdag toeslag', value: '+25%' },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Jolanda Meertens',
      role: 'Vaste klant',
      rating: 5,
      text: 'Al jaren rij ik met Taxi Centrale Geleen naar het ziekenhuis. Altijd stipt op tijd, vriendelijk en betrouwbaar. Zou ze iedereen aanraden!',
    },
    {
      id: 2,
      name: 'Rob Hermans',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Voor onze zakenreizen gebruiken wij al 3 jaar deze taxi. Professioneel, discreet en de factuurafhandeling is vlekkeloos.',
    },
    {
      id: 3,
      name: 'Sandra Lemmens',
      role: 'Airport transfer',
      rating: 5,
      text: 'Vroeg vliegtuig, geen stress. De chauffeur stond stipt op tijd en bracht me ruim op tijd naar Schiphol. Top service!',
    },
  ],

  serviceArea: ['Sittard', 'Geleen', 'Born', 'Beek', 'Stein', 'Elsloo', 'Urmond', 'Munstergeleen', 'Limbricht', 'Guttecoven'],
};
