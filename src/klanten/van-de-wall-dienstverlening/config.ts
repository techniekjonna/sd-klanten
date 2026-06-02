import type { SjabloonConfig } from './types';

export const config: SjabloonConfig = {
  basePath: '/preview/van-de-wall-dienstverlening',
  id: 'van-de-wall-dienstverlening',
  name: 'Vandewall Dienstverlening',
  tagline: 'Comfort, klasse & betrouwbaarheid',
  description:
    'Vandewall Dienstverlening biedt premium taxivervoer en zakelijke ritten in en rondom Maastricht. Wij rijden in stijl — uw comfort is onze prioriteit.',

  colors: {
    primary: '#B8972A',
    primaryHover: '#9A7D22',
    primaryLight: '#F7F0DC',
    text: '#1A1209',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Maastricht, Nederland',
    phone: '+31 6 52 065 065',
    email: 'info@vptaxi.nl',
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

  hero: {
    title: 'Uw premium',
    highlight: 'taxidienst',
    subtitle:
      'Comfortabel, stipt en professioneel vervoer in en rondom Maastricht. Wij zorgen dat u altijd op tijd en in stijl aankomt.',
    image: 'https://www.vandewalldienstverlening.nl/img/mainsfr01_xl.jpg',
    cta: 'Rit Boeken',
    ctaLink: '/contact',
    ctaSecondary: 'Onze Diensten',
    ctaSecondaryLink: '/diensten',
  },

  features: [
    {
      icon: '✦',
      title: 'Luxe & Comfort',
      description:
        'Rijd in stijl met onze luxe voertuigen. Elke rit is een ervaring die u bijblijft.',
    },
    {
      icon: '⏱',
      title: 'Altijd Op Tijd',
      description:
        'Punctualiteit is onze standaard. Wij halen u op wanneer u het heeft afgesproken.',
    },
    {
      icon: '💼',
      title: 'Zakelijk Vervoer',
      description:
        'Maak van uw reistijd werktijd. Wifi, privacy en rust — ideaal voor de zakenman.',
    },
    {
      icon: '✈',
      title: 'Luchthaven Transfers',
      description:
        'Van deur tot gate, zonder stress. Wij volgen uw vlucht en zijn er altijd op tijd.',
    },
  ],

  services: [
    {
      id: 'taxivervoer',
      name: 'Taxivervoer',
      description:
        'Comfortabele en betrouwbare taxi voor al uw verplaatsingen in en rondom Maastricht. Of het nu een ziekenhuisbezoek, avondje uit of dagje weg is.',
      priceLabel: 'Prijs op aanvraag',
      icon: '🚗',
      features: [
        'Comfortabele luxe voertuigen',
        'Vriendelijke chauffeurs',
        'Stipte service',
        'Betaling per pin of cash',
      ],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description:
        'Professioneel vervoer voor de zakelijke markt. Wij zorgen dat u ontspannen en op tijd arriveert op uw bestemming.',
      priceLabel: 'Maatwerk tarief',
      icon: '💼',
      features: [
        'Vaste zakelijke tarieven',
        'Factuurmogelijkheid',
        'Wifi in de wagen',
        'Discrete en professionele chauffeurs',
      ],
    },
    {
      id: 'luchthaven',
      name: 'Luchthaventrip',
      description:
        'Stressvrij naar Maastricht Aachen Airport, Eindhoven, Schiphol of andere luchthavens. Wij volgen uw vlucht live.',
      priceLabel: 'Vaste luchthavenprijzen',
      icon: '✈',
      features: [
        'Vluchtvolgservice',
        'Ruimte voor koffers',
        'Vroege en late ritten mogelijk',
        'Terugrit boekbaar',
      ],
    },
    {
      id: 'koeriersdienst',
      name: 'Koeriersdienst',
      description:
        'Spoedpakket of important document? Wij bezorgen snel, veilig en discreet op elk gewenst adres.',
      priceLabel: 'Prijs op aanvraag',
      icon: '📦',
      features: [
        'Snelle levering',
        'Track & trace op aanvraag',
        'Regio Maastricht en omgeving',
        'Spoedbezorging mogelijk',
      ],
    },
  ],

  about: {
    title: 'Over Vandewall Dienstverlening',
    story:
      'Vandewall Dienstverlening is een gerenommeerd taxibedrijf gevestigd in Maastricht. Met jarenlange ervaring in het vervoer van particulieren en zakelijke klanten, hebben wij een reputatie opgebouwd die gebaseerd is op vertrouwen, kwaliteit en persoonlijke aandacht. Elke rit wordt behandeld met de grootst mogelijke zorg.',
    mission:
      'Onze missie is eenvoudig: u comfortabel, veilig en op tijd naar uw bestemming brengen. Wij geloven dat vervoer meer is dan van A naar B gaan — het gaat om de ervaring onderweg. Dat is waarom wij investeren in de best mogelijke voertuigen en de vriendelijkste chauffeurs.',
    image: 'https://www.vandewalldienstverlening.nl/img/mainsfr04_xl.jpg',
    values: [
      'Kwaliteit & comfort in alles wat wij doen',
      'Stiptheid en betrouwbaarheid',
      'Persoonlijke en discrete service',
      '24/7 beschikbaar voor u',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Thomas B.',
      role: 'Zakenreiziger',
      rating: 5,
      text: 'Al jarenlang mijn vaste taxi voor vluchten en zakelijke ritten. Altijd stipt, altijd netjes. Kan ik niet genoeg aanbevelen.',
    },
    {
      id: 2,
      name: 'Anita V.',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Vriendelijke chauffeur, luxe wagen en altijd op tijd. Voor mijn wekelijkse ziekenhuisrit vertrouw ik alleen op Vandewall.',
    },
    {
      id: 3,
      name: 'Marco D.',
      role: 'Ondernemer',
      rating: 5,
      text: 'Professioneel, discreet en betrouwbaar. Precies wat je nodig hebt als je klanten wilt imponeren met je vervoersarrangement.',
    },
  ],
};
