export const config = {
  basePath: '/preview/taxi-quaaden',
  id: 'taxi-quaaden',
  name: 'Taxi Quaaden',
  tagline: 'Zakelijk vervoer, luchthaventransfers & chauffeursdiensten',
  description: 'Taxi Quaaden voorziet in de vraag naar kwalitatief zakelijk personenvervoer in het Zuid-Limburgse Heuvelland. Professioneel, discreet en altijd op tijd.',

  colors: {
    primary: '#0F2557',
    primaryHover: '#0A1A3E',
    accent: '#B8965A',
    accentHover: '#A07A3E',
    text: '#1A1A2E',
    background: '#FFFFFF',
    light: '#F0F4FF',
    navy: '#0F2557',
    navyLight: '#1A3578',
    gold: '#B8965A',
  },

  logo: 'https://www.taxiquaaden.nl/uploads/NnEz9Qw3/305x0_144x0/Logo_blauw_Quaaden.JPG',

  contact: {
    address: 'Ringweg 23, 6271 AJ Gulpen',
    phone: '0438505737',
    phoneDisplay: '043 850 5737',
    email: 'info@taxiquaaden.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Onze dienstverlening', path: '/diensten' },
    { label: 'Over ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Taxi Quaaden',
    subtitle: 'Kwalitatief zakelijk personenvervoer in het Zuid-Limburgse Heuvelland. Professioneel, stipt en persoonlijk.',
    image: 'https://images.unsplash.com/photo-1562505917-87228ac7cae7?q=80&w=2342&auto=format&fit=crop',
  },

  features: [
    {
      icon: '🏆',
      title: 'Topkwaliteit',
      description: 'Wij rijden in luxe, goed onderhouden voertuigen voor het ultieme rijcomfort.',
    },
    {
      icon: '🤝',
      title: 'Betrouwbaar',
      description: 'Afspraak is afspraak. U kunt altijd op ons rekenen, dag en nacht.',
    },
    {
      icon: '🎩',
      title: 'Professioneel',
      description: 'Verzorgde, ervaren chauffeurs met kennis van het Zuid-Limburgse Heuvelland.',
    },
    {
      icon: '✈️',
      title: 'Luchthavens',
      description: 'Comfortabele transfers naar alle grote luchthavens in de regio.',
    },
  ],

  services: [
    {
      id: 'zakelijk-vervoer',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel en discreet vervoer voor bedrijven en executives. Stipt, comfortabel en representatief.',
      icon: '💼',
      features: ['Vaste chauffeur mogelijk', 'Factuur op bedrijfsnaam', 'Tijdig & discreet', 'Ruime voertuigen'],
    },
    {
      id: 'luchthaven-transfer',
      name: 'Luchthaventransfer',
      description: 'Ontspannen naar Schiphol, Eindhoven, Düsseldorf, Brussel of Frankfurt. Vluchtmonitoring inbegrepen.',
      icon: '✈️',
      features: ['Vlucht monitoring', 'Ruime bagage opslag', 'Vaste all-in prijs', 'Vroeg of laat — altijd'],
    },
    {
      id: 'chauffeursdienst',
      name: 'Chauffeursdienst',
      description: 'Persoonlijke chauffeur voor evenementen, dagjes uit of speciale gelegenheden. Op maat, naar wens.',
      icon: '🎩',
      features: ['Op maat gepland', 'Evenementen & gala\'s', 'Dag- of avondritten', 'Persoonlijke service'],
    },
    {
      id: 'particulier-vervoer',
      name: 'Particulier Vervoer',
      description: 'Van A naar B in Zuid-Limburg. Betrouwbaar, comfortabel en vriendelijk — voor elke gelegenheid.',
      icon: '🚗',
      features: ['Korte & lange ritten', 'Zorgvervoer mogelijk', 'Contant & pin', 'Vriendelijke chauffeurs'],
    },
  ],

  airports: [
    { name: 'Schiphol Amsterdam', flag: '🇳🇱', time: '±2u 15min' },
    { name: 'Eindhoven Airport', flag: '🇳🇱', time: '±50 min' },
    { name: 'Düsseldorf Airport', flag: '🇩🇪', time: '±1u' },
    { name: 'Brussel Zaventem', flag: '🇧🇪', time: '±1u 45min' },
    { name: 'Frankfurt Airport', flag: '🇩🇪', time: '±2u 15min' },
    { name: 'Keulen Bonn Airport', flag: '🇩🇪', time: '±1u 30min' },
  ],

  serviceArea: ['Gulpen', 'Maastricht', 'Valkenburg', 'Heerlen', 'Sittard', 'Vaals'],

  about: {
    title: 'Over Taxi Quaaden',
    story: 'Taxi Quaaden is gevestigd in Gulpen, in het hart van het Zuid-Limburgse Heuvelland. Al jaren voorzien wij particulieren en bedrijven van kwalitatief en betrouwbaar personenvervoer. Of het nu gaat om een zakelijke afspraak, een luchthaventransfer of een chauffeursdienst voor een bijzondere gelegenheid — wij staan voor u klaar.',
    mission: 'Onze missie is eenvoudig: elk traject zo comfortabel, stipt en professioneel mogelijk maken. Wij kennen de regio als geen ander en zetten onze ervaring dagelijks in om u de beste reiservaring te bieden.',
    image: 'https://images.unsplash.com/photo-1639385049779-5e34414d1682?q=80&w=2340&auto=format&fit=crop',
    values: [
      'Kwaliteit en comfort staan centraal',
      'Betrouwbaar en altijd op tijd',
      'Discreet en professioneel',
      'Persoonlijke aandacht voor iedere klant',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Dhr. Janssen',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Al jaren rij ik met Taxi Quaaden voor zakelijke afspraken. Altijd punctueel, nette voertuigen en een prettige chauffeur. Absoluut een aanrader.',
    },
    {
      id: 2,
      name: 'Mevr. Willems',
      role: 'Luchthaventransfer',
      rating: 5,
      text: 'Voor onze luchthaventransfers schakelen wij altijd Taxi Quaaden in. Ze zijn op tijd, volgen de vlucht op en zorgen dat je ontspannen aankomt.',
    },
    {
      id: 3,
      name: 'Dhr. Hermans',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Vriendelijke service, comfortabele auto en eerlijke prijs. Wat meer kan je wensen? Taxi Quaaden kent de regio als geen ander.',
    },
  ],
};
