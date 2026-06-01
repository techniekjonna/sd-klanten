import type { SjabloonConfig } from './types';

export const config: SjabloonConfig = {
  basePath: '/preview/visser-driving-services',
  id: 'visser-driving-services',
  name: 'Visser Driving Services',
  tagline: 'Gecertificeerde directiechauffeurs door heel Nederland',
  description: 'Visser Driving Services levert gecertificeerde directiechauffeurs voor de private en publieke sector. Discreet, punctueel en 365 dagen per jaar beschikbaar.',

  colors: {
    primary: '#1A1A1A',
    primaryHover: '#2D2D2D',
    primaryLight: '#F5F3EF',
    text: '#1A1A1A',
    background: '#FFFFFF',
    accent: '#C9A84C',
  },

  contact: {
    address: 'Maastricht, Nederland',
    phone: '+31430000000',
    phoneDisplay: '+31 43 000 0000',
    email: 'info@visserdrivingservices.com',
    hours: {
      weekday: '24/7 beschikbaar',
      weekend: '24/7 beschikbaar',
    },
  },

  navigation: [
    { label: 'De Essentie', path: '/de-essentie' },
    { label: 'Service', path: '/diensten' },
    { label: 'Veiligheid', path: '/veiligheid' },
    { label: 'Cliëntèle', path: '/clientele' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Gecertificeerde',
    highlight: 'Directiechauffeurs',
    subtitle: 'Gedrevenheid, vakmanschap & integriteit — voor de private en publieke sector door heel Nederland.',
    image: 'https://images.unsplash.com/photo-1618418721668-0d1f72aa4bab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cta: 'Rit Aanvragen',
    ctaLink: '/contact',
    ctaSecondary: 'Meer Informatie',
    ctaSecondaryLink: '/de-essentie',
  },

  features: [
    {
      icon: '🎖️',
      title: 'Gecertificeerd',
      description: 'CCV-D1, CCV-D2 en CORTEX SRO-D3 gecertificeerde chauffeurs voor de hoogste standaard.',
    },
    {
      icon: '🔒',
      title: 'Discreet & Veilig',
      description: 'Absolute discretie en veiligheid staan centraal in elk traject dat wij voor u rijden.',
    },
    {
      icon: '🕐',
      title: '365 Dagen',
      description: 'Dag en nacht beschikbaar, 365 dagen per jaar. Wij zijn er altijd wanneer u ons nodig heeft.',
    },
    {
      icon: '🌍',
      title: 'Heel Nederland',
      description: 'Van Maastricht tot Amsterdam — wij opereren door het gehele land voor u.',
    },
  ],

  services: [
    {
      id: 'directie-chauffeur',
      name: 'Directiechauffeur',
      description: 'Professionele en gecertificeerde directiechauffeurs voor uw dagelijks vervoer. Stijlvol, punctueel en discreet.',
      priceLabel: 'Op aanvraag',
      icon: '🚘',
      features: ['Gecertificeerde chauffeur', 'Luxe voertuigen', 'Tijdig & betrouwbaar', 'Volledige discretie'],
    },
    {
      id: 'zakelijk-vervoer',
      name: 'Zakelijk Vervoer',
      description: 'Representatief vervoer voor executives, bestuurders en VIP-gasten. Wij begrijpen de waarde van uw tijd.',
      priceLabel: 'Op aanvraag',
      icon: '💼',
      features: ['Maatwerkoplossingen', 'Vaste chauffeur mogelijk', 'Privé & publieke sector', 'Landelijke dekking'],
    },
    {
      id: 'luchthaven-vervoer',
      name: 'Luchthavenvervoer',
      description: 'Comfortabel en stipt vervoer naar en van alle grote Nederlandse en Europese luchthavens.',
      priceLabel: 'Op aanvraag',
      icon: '✈️',
      features: ['Alle luchthavens', 'Vluchttracking', 'Ruim op tijd aanwezig', 'Bagagehulp inbegrepen'],
    },
    {
      id: 'evenementen',
      name: 'Evenementen & Events',
      description: 'Representatief vervoer voor gala\'s, conferenties, staatsbezoeken en overige bijzondere gelegenheden.',
      priceLabel: 'Op aanvraag',
      icon: '🏛️',
      features: ["Staatsbezoeken & gala's", 'Grotere delegaties', 'Coördinatie mogelijk', 'Volledig op maat'],
    },
  ],

  about: {
    title: 'Over Visser Driving Services',
    story: 'Visser Driving Services is opgericht vanuit een passie voor professioneel chauffeursdiensten op het hoogste niveau. Wij leveren gecertificeerde directiechauffeurs aan de private en publieke sector door heel Nederland, met als uitvalsbasis Maastricht.',
    mission: 'Onze missie is het leveren van all-encompassing support aan onze cliënten. Wij begrijpen de waarde van uw tijd en anticiperen op uw behoeften — zodat u zich volledig kunt richten op wat écht belangrijk is.',
    image: 'https://images.unsplash.com/photo-1629820408206-e9fc918abf63?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    values: [
      'Gedrevenheid & vakmanschap',
      'Integriteit & discretie',
      'Punctualiteit & betrouwbaarheid',
      'Maatwerk voor elke cliënt',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'J. van der Berg',
      role: 'CEO, Privé Sector',
      rating: 5,
      text: 'Uitzonderlijk professioneel. De chauffeur was altijd stipt aanwezig en de discretie was onberispelijk. Een absolute aanrader voor directievervoer.',
    },
    {
      id: 2,
      name: 'M. Hendricks',
      role: 'Overheidsinstelling',
      rating: 5,
      text: 'Voor onze staatsbezoeken vertrouwen wij al jaren op Visser Driving Services. De kwaliteit en betrouwbaarheid zijn consistent uitstekend.',
    },
    {
      id: 3,
      name: 'R. Janssen',
      role: 'Managing Director',
      rating: 5,
      text: 'Stijlvol, discreet en altijd op tijd. Visser Driving Services begrijpt precies wat wij als bedrijf nodig hebben. Topkwaliteit.',
    },
  ],
};
