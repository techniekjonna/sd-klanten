import type { OmegaTaxiConfig } from './types';

export const config: OmegaTaxiConfig = {
  basePath: '/preview/omega-taxi',
  id: 'omega-taxi',
  name: 'Omega Taxi',
  tagline: 'Betrouwbaar taxivervoer vanuit Sittard & omgeving',
  description: 'Omega Taxi staat voor punctueel, veilig en comfortabel vervoer. Of u nu naar het vliegveld moet, een zakelijke afspraak heeft of een ziekenhuisrit nodig heeft — wij rijden voor u.',
  logo: 'https://www.omegataxi.nl/wp-content/uploads/2024/06/logo_double-2.png',

  colors: {
    primary: '#3A3A3A',
    primaryLight: '#5A5A5A',
    accent: '#F5C842',
    accentHover: '#E0B030',
    text: '#FFFFFF',
    background: '#2E2E2E',
  },

  contact: {
    address: 'Sittard, Limburg',
    phone: '+31462600600',
    phoneDisplay: '046-2 600 600',
    phone2: '+31620070606',
    phoneDisplay2: '06 - 2007 06 06',
    email: 'info@omegataxi.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Taxi Service', path: '/taxi-service' },
    { label: 'Zakelijke Service', path: '/zakelijke-service' },
    { label: 'Airport Service', path: '/airport-service' },
    { label: 'Bestellen & Contact', path: '/bestellen' },
  ],

  hero: {
    title: 'Uw betrouwbare taxi in Sittard',
    subtitle: 'Altijd op tijd, professioneel en comfortabel. Vaste tarieven voor particulieren en zakelijk — 24/7 beschikbaar.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&h=1080&fit=crop',
    cta: 'Direct Bestellen',
    ctaLink: '/bestellen',
  },

  features: [
    {
      icon: '⏱️',
      title: 'Altijd Op Tijd',
      description: 'Punctualiteit staat bij ons centraal. Wij volgen uw vlucht of afspraak op de voet en zijn altijd op tijd aanwezig.',
    },
    {
      icon: '🔒',
      title: 'Vaste Tarieven',
      description: 'U weet vooraf precies wat de rit kost. Geen verborgen kosten, geen verrassingen — altijd eerlijk en transparant.',
    },
    {
      icon: '👔',
      title: 'Professionele Chauffeurs',
      description: 'Onze gediplomeerde chauffeurs zijn vriendelijk, discreet en kennen de regio als geen ander.',
    },
    {
      icon: '🚗',
      title: 'Comfortabele Voertuigen',
      description: 'Rij mee in moderne, goed onderhouden voertuigen voor een comfortabele en veilige rit.',
    },
  ],

  tarieven: [
    {
      titel: 'Basistarieven',
      regels: [
        { omschrijving: 'Starttarief', tarief: '€ 3,50' },
        { omschrijving: 'Prijs per km (dag — 06:00–22:00)', tarief: '€ 2,35' },
        { omschrijving: 'Prijs per km (nacht — 22:00–06:00)', tarief: '€ 3,00' },
        { omschrijving: 'Wachttarief per uur', tarief: '€ 35,00' },
        { omschrijving: 'Reserveringstoeslag', tarief: '€ 2,50' },
      ],
    },
    {
      titel: 'Vaste Ritten',
      regels: [
        { omschrijving: 'Naar Schiphol Airport', tarief: 'Vanaf € 150,00' },
        { omschrijving: 'Naar Eindhoven Airport', tarief: 'Vanaf € 65,00' },
        { omschrijving: 'Naar Maastricht Aachen Airport', tarief: 'Vanaf € 40,00' },
        { omschrijving: 'Stationsrit Sittard (binnen 10 km)', tarief: 'Vanaf € 15,00' },
        { omschrijving: 'Ziekenhuisvervoer (enkele reis)', tarief: 'Vanaf € 15,00' },
      ],
    },
    {
      titel: 'Zakelijk & Groepsvervoer',
      regels: [
        { omschrijving: 'Zakelijk account (maandelijks factureren)', tarief: 'Op aanvraag' },
        { omschrijving: 'Groepsvervoer (minibus)', tarief: 'Op aanvraag' },
        { omschrijving: 'Chauffeursdiensten (dagdeel/dag)', tarief: 'Op aanvraag' },
        { omschrijving: 'Evenementen & feesten', tarief: 'Op aanvraag' },
      ],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Henk Janssen',
      rating: 5,
      text: 'Al jaren gebruik ik Omega Taxi voor mijn vluchten. Altijd stipt op tijd, vriendelijke chauffeur en een nette auto. Aanrader!',
    },
    {
      id: 2,
      name: 'Sandra Peeters',
      rating: 5,
      text: 'Voor mijn ziekenhuisbezoeken vertrouw ik op Omega Taxi. Betrouwbaar, vriendelijk en altijd op tijd. Fijn bedrijf!',
    },
    {
      id: 3,
      name: 'Marc Willems',
      rating: 5,
      text: 'Zakelijk gebruik ik Omega Taxi regelmatig. Professioneel, discreet en altijd bereikbaar. Precies wat je nodig hebt.',
    },
  ],

  services: {
    taxi: {
      title: 'Taxi Service',
      description: 'Of het nu gaat om een rit naar het station, een bezoek aan vrienden of een avondje uit — Omega Taxi staat altijd voor u klaar. Wij rijden door heel Sittard-Geleen en omgeving.',
      items: [
        'Particulier vervoer door de regio',
        'Ziekenhuisvervoer en medische ritten',
        'Rolstoeltoegankelijk vervoer',
        'Avond- en nachtritten',
        'Vaste vaste tarieven, geen meter',
        '24/7 beschikbaar, ook in het weekend',
      ],
    },
    zakelijk: {
      title: 'Zakelijke Service',
      description: 'Omega Taxi is de betrouwbare partner voor zakelijk vervoer. Met een maandelijkse factuur, vaste chauffeurs en discrete service bent u altijd professioneel onderweg.',
      items: [
        'Maandelijks factureren voor bedrijven',
        'Vaste chauffeurs op aanvraag',
        'Chauffeursdiensten per dagdeel of dag',
        'Groepsvervoer voor teams & evenementen',
        'Representatief en discreet',
        'Vlot boeken via telefoon of e-mail',
      ],
    },
    airport: {
      title: 'Airport Service',
      description: 'Stress-vrij naar het vliegveld. Wij volgen uw vlucht live en houden rekening met vertragingen. Lekker achterover leunen terwijl wij voor u rijden.',
      items: [
        'Schiphol, Eindhoven, Maastricht-Aachen',
        'Düsseldorf, Keulen, Brussel en meer',
        'Vluchttracking — vertragingen geen probleem',
        'Ruime bagageruimte',
        'Retourritten met vaste prijs',
        'Vroeg boeken = lagere prijs gegarandeerd',
      ],
    },
  },
};
