export const config = {
  basePath: '/preview/global-taxi-heerlen',
  id: 'global-taxi-heerlen',
  name: 'Global Taxi Heerlen',
  tagline: 'Uw betrouwbare taxipartner in Heerlen & omgeving',
  description:
    'Global Taxi Heerlen is een jong, dynamisch taxibedrijf met meer dan 10 jaar ervaring in de taxibranche. Vervoersveiligheid, vertrouwde service en vervoerscomfort staan centraal.',

  colors: {
    dark: '#1a1a1a',
    gray: '#3d3d3d',
    accent: '#f5c800',
    accentHover: '#e0b500',
    lightGray: '#f2f2f2',
    midGray: '#e0e0e0',
    text: '#1a1a1a',
    textLight: '#5a5a5a',
  },

  contact: {
    address: 'Heerlen, Limburg',
    phone: '045-5212525',
    phoneTel: '+31455212525',
    email: 'info@globaltaxi.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    {
      label: 'Diensten',
      path: '/diensten',
      dropdown: [
        { label: 'Airport service', path: '/diensten/airport-service' },
        { label: 'Particulier vervoer', path: '/diensten/particulier-vervoer' },
        { label: 'Hotelvervoer', path: '/diensten/hotelvervoer' },
        { label: 'Vervoer op maat', path: '/diensten/vervoer-op-maat' },
      ],
    },
    { label: 'Over ons', path: '/over-ons' },
    { label: 'Neem contact met ons op', path: '/contact' },
  ],

  hero: {
    title: 'Snel, veilig en comfortabel',
    subtitle:
      'Global Taxi Heerlen staat voor Vervoersveiligheid, vertrouwde service en vervoerscomfort. Ervaren, gediplomeerde en vriendelijke chauffeurs staan 24/7 voor u klaar.',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop',
    cta: 'Boek een rit',
    ctaLink: '/#boeken',
    ctaSecondary: 'Bel ons nu',
    ctaSecondaryLink: 'tel:+31455212525',
  },

  features: [
    {
      icon: '🛡️',
      title: 'Vervoersveiligheid',
      description: 'Uw veiligheid staat bij ons altijd op de eerste plaats. Volledig verzekerd, professioneel gereden.',
    },
    {
      icon: '⭐',
      title: 'Vertrouwde service',
      description: 'Meer dan 10 jaar ervaring in de taxibranche. U kunt altijd op ons rekenen.',
    },
    {
      icon: '💺',
      title: 'Vervoerscomfort',
      description: 'Comfortabele, goed onderhouden voertuigen voor een ontspannen rit.',
    },
    {
      icon: '🕐',
      title: '24/7 beschikbaar',
      description: 'Dag en nacht bereikbaar voor al uw ritten. Bel ons op 045-5212525.',
    },
  ],

  services: [
    {
      id: 'airport-service',
      name: 'Airport service',
      path: '/diensten/airport-service',
      description:
        'Ontspannen naar Schiphol, Eindhoven, Brussel of Düsseldorf. Vaste prijzen, vluchtmonitoring en altijd op tijd.',
      icon: '✈️',
      features: ['Vaste all-in prijs', 'Vlucht monitoring', 'Grote bagage welkom', '24/7 beschikbaar'],
      airports: ['Schiphol Amsterdam', 'Eindhoven Airport', 'Brussel Zaventem', 'Düsseldorf Airport', 'Frankfurt Airport'],
    },
    {
      id: 'particulier-vervoer',
      name: 'Particulier vervoer',
      path: '/diensten/particulier-vervoer',
      description:
        'Van uw deur tot de bestemming. Voor dagelijkse ritten, sociale evenementen of medische afspraken.',
      icon: '🚗',
      features: ['Deur-tot-deur service', 'Vriendelijke chauffeurs', 'Comfortabele voertuigen', 'Eerlijke tarieven'],
    },
    {
      id: 'hotelvervoer',
      name: 'Hotelvervoer',
      path: '/diensten/hotelvervoer',
      description:
        'Professioneel vervoer van en naar hotels in Heerlen en omgeving. Ideaal voor zakelijke gasten en toeristen.',
      icon: '🏨',
      features: ['Stipt op tijd', 'Nette presentatie', 'Zakelijk & privé', 'Vaste hotelpartner'],
    },
    {
      id: 'vervoer-op-maat',
      name: 'Vervoer op maat',
      path: '/diensten/vervoer-op-maat',
      description:
        'Een op maat gemaakte vervoersoplossing voor elk evenement, dagje uit of speciale gelegenheid.',
      icon: '🎯',
      features: ['Maatwerk traject', 'Groepsvervoer mogelijk', 'Evenementen & uitjes', 'Flexibele planning'],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Jolanda Hermans',
      role: 'Vaste klant',
      rating: 5,
      text: 'Al jaren rij ik met Global Taxi Heerlen. Altijd vriendelijk, op tijd en voor een eerlijke prijs. Echt een aanrader!',
    },
    {
      id: 2,
      name: 'Mark Gielen',
      role: 'Airport transfer',
      rating: 5,
      text: 'Vroeg vliegtuig naar Schiphol, geen enkel probleem. Chauffeur stond stipt op tijd voor de deur en ik was ruim op tijd.',
    },
    {
      id: 3,
      name: 'Patricia Vossen',
      role: 'Hotelvervoer',
      rating: 5,
      text: 'Netjes, professioneel en discreet. Voor onze zakelijke gasten regelen wij altijd Global Taxi Heerlen. Top service!',
    },
  ],

  about: {
    title: 'Over Global Taxi Heerlen',
    story:
      'Global Taxi Heerlen is een jong dynamisch taxibedrijf met 10 jaar ervaring in de taxibranche. Wij staan voor Vervoersveiligheid, vertrouwde service en vervoerscomfort. Om dit waar te kunnen maken beschikken wij over ervaren, gediplomeerde en vriendelijke chauffeurs.',
    mission:
      'Wij willen iedere klant het beste taxivervoer in Heerlen en omgeving bieden. Dat betekent: op tijd, comfortabel, eerlijk geprijsd en altijd met een glimlach.',
    values: [
      'Vervoersveiligheid staat voorop',
      'Betrouwbaar en punctueel',
      'Transparante tarieven',
      'Vriendelijke, gediplomeerde chauffeurs',
    ],
    image:
      'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=1200&h=800&fit=crop',
  },
};
