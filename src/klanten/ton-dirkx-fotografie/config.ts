import type { TonDirkxConfig } from './types';

export const config: TonDirkxConfig = {
  basePath: '/preview/ton-dirkx-fotografie',
  id: 'ton-dirkx-fotografie',
  name: 'Fotografie Ton Dirkx',
  tagline: "Voor de foto's met een persoonlijke tint",
  description: "Professionele fotografie in Sittard. Van officiële pasfoto's tot huwelijksreportages — altijd met vakmanschap en persoonlijke aandacht.",
  logo: 'https://tondirkx.nl/wp-content/uploads/2018/11/logo_ton-dirkx.jpg',

  colors: {
    primary: '#3e8c28',
    primaryHover: '#2f6a1e',
    primaryDark: '#1a4d0e',
    primaryLight: '#e8f5e2',
    text: '#1a2e14',
    background: '#ffffff',
  },

  contact: {
    address: 'Paardestraat 16, 6131 HC Sittard',
    phone: '046-451 77 27',
    mobile: '06-21 80 11 66',
    email: 'info@tondirkx.nl',
    hours: {
      maandag: 'Gesloten',
      dinsdag: '08:45 – 18:00',
      woensdag: '08:45 – 18:00',
      donderdag: '08:45 – 19:00',
      vrijdag: '08:45 – 18:00',
      zaterdag: '09:30 – 17:00',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Fotografie & Diensten', path: '/diensten' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: "Voor de foto's met een",
    highlight: 'persoonlijke tint',
    subtitle: "Officiële pasfoto's zonder afspraak, prachtige fotolijsten, 3D foto's in crystal en professionele reportages. Al meer dan 10 jaar uw vakkundige fotograaf in Sittard.",
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&h=1080&fit=crop',
    cta: 'Bekijk Onze Diensten',
    ctaLink: '/diensten',
    ctaSecondary: 'Neem Contact Op',
    ctaSecondaryLink: '/contact',
  },

  features: [
    {
      icon: '📸',
      title: 'Zonder Afspraak',
      description: "Voor pasfoto's bent u altijd welkom zonder afspraak. Snel, professioneel en klaar terwijl u wacht.",
    },
    {
      icon: '🏆',
      title: 'RDW Gecertificeerd',
      description: 'Officieel gecertificeerd voor digitale verlening van rijbewijzen. Uw foto\'s voldoen altijd aan alle eisen.',
    },
    {
      icon: '📍',
      title: 'Ook Op Locatie',
      description: "Wij komen ook naar u toe. Fotoreportages en pasfoto's op uw gewenste locatie (op afspraak).",
    },
    {
      icon: '❤️',
      title: 'Persoonlijke Aandacht',
      description: 'Ton en Marjo staan voor u klaar met persoonlijk advies en vakkundige service voor elk type fotografie.',
    },
  ],

  services: [
    {
      id: 'pasfoto',
      name: "Pasfoto's",
      description: "Officiële pasfoto's voor alle paspoorten, rijbewijzen en visa — zonder afspraak en direct klaar. Snel, vakkundig en RDW gecertificeerd.",
      priceLabel: "4 foto's voor €12",
      icon: '🪪',
      features: [
        'Zonder afspraak welkom',
        "Officiële pasfoto's",
        'Alle paspoorten & Visa',
        "Sollicitatiefoto's",
        "Digitale pasfoto's",
        'Snel en vakkundig',
        'Ook op locatie (op afspraak)',
        'RDW gecertificeerd (digitale verlenging rijbewijs)',
      ],
    },
    {
      id: 'fotolijsten',
      name: 'Fotolijsten',
      description: 'Geef uw mooiste herinneringen een mooi plekje aan de muur. Wij bieden een ruim assortiment fotolijsten in diverse maten, stijlen en materialen.',
      icon: '🖼️',
      features: [
        'Ruim assortiment',
        'Diverse maten en stijlen',
        'Professioneel advies',
        'Foto op canvas, metaal en plexiglas',
        'Persoonlijke benadering',
      ],
    },
    {
      id: 'crystal',
      name: '3D Foto in Crystal',
      description: 'Laat uw favoriete foto driedimensionaal graveren in een prachtig kristallen blok. Een uniek en onvergetelijk cadeau voor elke gelegenheid.',
      icon: '💎',
      features: [
        'Uniek handgemaakt cadeau',
        'Diverse formaten kristal',
        '3D gravure technologie',
        'Geschikt voor alle gelegenheden',
        'Inclusief geschenkverpakking',
      ],
    },
    {
      id: 'reportage',
      name: 'Reportage',
      description: "Professionele fotoreportages voor uw huwelijk, begrafenis, familiefoto's, bedrijfsreportages en meer. Zowel in de studio als op locatie mogelijk.",
      icon: '📷',
      features: [
        'Huwelijksreportage',
        "Familiefoto's",
        'Bedrijfsreportage',
        'Begrafenisreportage',
        'In studio of op locatie',
        'Professionele nabewerking',
      ],
    },
  ],

  about: {
    title: 'Over Fotografie Ton Dirkx',
    story: 'In april 2011 openden Ton en Marjo Dirkx hun fotostudio aan de Paardestraat 16 in Sittard. Vanuit een passie voor fotografie en een hart voor de buurt bouwden zij Fotografie Ton Dirkx uit tot een vertrouwd gezicht in Stadbroek. Met meer dan 10 jaar ervaring kennen wij het vak van binnen en buiten.',
    mission: "Onze missie is eenvoudig: elke klant de foto's bezorgen die écht bij hen passen — met een persoonlijke tint. Of het nu gaat om een officiële pasfoto, een bijzonder cadeau of een onvergetelijke reportage, wij zetten altijd dat stapje extra voor u.",
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop',
    values: [
      'Vakmanschap en precisie',
      'Persoonlijk contact',
      'Eerlijk en transparant',
      'Al meer dan 10 jaar betrouwbaar in Sittard',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Sandra M.',
      rating: 5,
      text: "Super vriendelijke service! Pasfoto's waren binnen 5 minuten klaar en van uitstekende kwaliteit. Ik kom hier altijd terug.",
    },
    {
      id: 2,
      name: 'Henk V.',
      rating: 5,
      text: 'Ton heeft onze bruiloft prachtig vastgelegd. De foto\'s zijn geweldig en hij had echt oog voor de bijzondere momenten. Aanrader!',
    },
    {
      id: 3,
      name: 'Familie de Jong',
      rating: 4,
      text: 'Een 3D foto in crystal laten maken als cadeau voor opa. Hij was er zo blij mee! Mooie kwaliteit en de service was top.',
    },
  ],
};
