import type { SjabloonConfig } from './types';

export const config: SjabloonConfig & {
  contact: {
    address: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    hours: { weekday: string; weekend: string };
  };
  serviceArea: string[];
  kvk: string;
  btw: string;
} = {
  basePath: '/preview/taxi-frans',
  id: 'taxi-frans',
  name: 'TaxiFrans',
  tagline: 'de goedkoopste',
  description: 'Betrouwbaar en betaalbaar taxivervoer in Maastricht en omgeving. Van airport transfers tot Europa-ritten — 24 uur per dag, 7 dagen per week bereikbaar.',

  colors: {
    primary: '#1C2C6E',
    primaryHover: '#152255',
    primaryLight: '#EFF2FB',
    text: '#0D1A40',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Clavecymbelstraat 106 F, 6217 CZ Maastricht',
    phone: '+31433628877',
    phoneDisplay: '+31 (0)43 362 88 77',
    email: 'info@taxifrans.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '7 dagen per week',
    },
  },

  serviceArea: ['Maastricht', 'Sittard', 'Heerlen', 'Valkenburg', 'Gulpen', 'Luik', 'Schiphol', 'Brussel'],

  kvk: '14111487',
  btw: '068239579B3',

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Europa Service', path: '/europa' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Snel, veilig en',
    highlight: 'voordelig rijden',
    subtitle: 'Taxivervoer door heel Maastricht en Limburg. Airport transfers, zorgvervoer, zakelijke ritten en Europa-service — altijd betrouwbaar en op tijd.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
    cta: 'Boek een rit',
    ctaLink: '/contact',
    ctaSecondary: 'Bel direct',
    ctaSecondaryLink: '/contact',
  },

  features: [
    {
      icon: '💰',
      title: 'De Goedkoopste',
      description: 'Eerlijke tarieven zonder verborgen kosten. Wij zijn en blijven de meest voordelige keuze in de regio.',
    },
    {
      icon: '🕐',
      title: '24/7 Bereikbaar',
      description: 'Dag en nacht, weekend of feestdag — onze chauffeurs staan altijd voor u klaar.',
    },
    {
      icon: '✈️',
      title: 'Airport Transfers',
      description: 'Tijdig naar Schiphol, Brussel, Düsseldorf of Eindhoven. Geen stress over parkeren of vertragingen.',
    },
    {
      icon: '🌍',
      title: 'Europa-Service',
      description: 'Ritten door heel Europa. Van Maastricht naar Parijs, Berlijn of Barcelona — comfortabel en voordelig.',
    },
  ],

  services: [
    {
      id: 'taxi-service',
      name: 'Taxi Service',
      description: 'Lokaal taxivervoer door Maastricht en de regio. Snel ophalen, vriendelijke chauffeur, eerlijke prijs.',
      priceLabel: 'Op aanvraag',
      icon: '🚕',
      features: ['Maastricht & omgeving', 'Binnen 15 minuten', 'Online boeken', 'Groepsvervoer mogelijk'],
    },
    {
      id: 'airport-taxi',
      name: 'Airport Taxi',
      description: 'Stress-vrij naar het vliegveld. Wij halen u op tijd thuis op en brengen u comfortabel naar de luchthaven.',
      priceLabel: 'Vaste prijs',
      icon: '✈️',
      features: ['Schiphol, Brussel, Eindhoven', 'Vaste tarieven', 'Vlucht-tracking', 'Gratis wacht bij vertraging'],
    },
    {
      id: 'europa-service',
      name: 'Europa Service',
      description: 'Lange-afstandsritten door heel Europa. Comfortabele voertuigen, ervaren chauffeurs, gunstige tarieven.',
      priceLabel: 'Op maat',
      icon: '🌍',
      features: ['Heel Europa', 'Ruime voertuigen', 'Airconditioning', 'Meerdere tussenstops mogelijk'],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      description: 'Vervoer voor mensen met een zorgvraag. Met zorg en aandacht naar het ziekenhuis of revalidatiecentrum.',
      priceLabel: 'Passende tarief',
      icon: '❤️',
      features: ['Rolstoel-vriendelijk', 'Geduldig & behulpzaam', 'Ziekenhuis & specialist', 'Vergoeding mogelijk'],
    },
  ],

  about: {
    title: 'Over TaxiFrans',
    story: 'TaxiFrans is al jarenlang een vertrouwde naam in Maastricht en Limburg. Opgericht door Frans C. Ritzerfeld bieden wij betaalbaar en betrouwbaar taxivervoer — van de gewone stads-taxi tot ritten door heel Europa. Ons motto "de goedkoopste" is niet zomaar een slogan: wij geloven dat goed vervoer voor iedereen bereikbaar moet zijn.',
    mission: 'Wij rijden voor iedereen. Van de student die naar het station moet tot de zakenreiziger op weg naar Brussel — elke klant verdient een vriendelijke, veilige en voordelige rit. Met 24-uurs service en een volledig vergund bedrijf (vergunning P-78231) kunt u altijd op ons rekenen.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=800&fit=crop',
    values: [
      'Eerlijke en transparante tarieven',
      'Altijd op tijd, altijd betrouwbaar',
      'Vriendelijke en ervaren chauffeurs',
      'Volledig vergund — vergunning P-78231',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Hanneke V.',
      role: 'Vaste klant Maastricht',
      rating: 5,
      text: 'Al jaren rij ik met TaxiFrans naar het vliegveld. Altijd op tijd, vriendelijke chauffeur en de prijs klopt écht. Aanrader!',
    },
    {
      id: 2,
      name: 'Marco B.',
      role: 'Zakelijk klant',
      rating: 5,
      text: 'Voor mijn zakenreizen naar Brussel gebruik ik altijd TaxiFrans. Betrouwbaar, op tijd en voor een eerlijke prijs. Niet meer weg te denken.',
    },
    {
      id: 3,
      name: 'Els de W.',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Mijn moeder gaat regelmatig naar het ziekenhuis. TaxiFrans rijdt haar altijd met zoveel geduld en zorg. Geweldig bedrijf.',
    },
  ],
};
