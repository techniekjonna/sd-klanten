import type { SjabloonConfig } from './types';

export const config: SjabloonConfig = {
  basePath: '/preview/onetaxi-zuidlimburg',
  id: 'onetaxi-zuidlimburg',
  name: 'OneTaxi Zuid-Limburg',
  tagline: 'Snel, betrouwbaar en persoonlijk taxivervoer in Zuid-Limburg',
  description: 'OneTaxi Zuid-Limburg verzorgt betrouwbaar taxivervoer in de regio Zuid-Limburg. Van een rit naar het vliegveld tot dagelijkse ritten — wij staan voor u klaar.',

  colors: {
    primary: '#FFB800',
    primaryHover: '#E5A600',
    primaryLight: '#FFF8E1',
    text: '#111111',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Kampstraat 34, 6413 ED Heerlen',
    phone: '+31 6 47 72 72 47',
    email: 'info@onetaxi-zuidlimburg.com',
    hours: {
      weekday: '06:00 – 20:00',
      weekend: 'Za 06:00–15:30 | Zo gesloten',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Reserveren', path: '/reserveren' },
    { label: 'Vliegveld', path: '/vliegveld' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw taxi in',
    highlight: 'Zuid-Limburg',
    subtitle: 'Snel geboekt, altijd op tijd. OneTaxi brengt u comfortabel naar elke bestemming — van deur tot deur.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop',
    cta: 'Direct Reserveren',
    ctaLink: '/reserveren',
    ctaSecondary: 'Bekijk Tarieven',
    ctaSecondaryLink: '/tarieven',
  },

  features: [
    {
      icon: '⏱️',
      title: 'Altijd Op Tijd',
      description: 'Wij zijn er op het afgesproken moment. Betrouwbaarheid en punctualiteit staan bij ons centraal.',
    },
    {
      icon: '✈️',
      title: 'Vliegveld Transfer',
      description: 'Comfortabel naar Maastricht Aachen Airport, Eindhoven of Düsseldorf. Geen stress, geen gedoe.',
    },
    {
      icon: '💶',
      title: 'Vaste Tarieven',
      description: 'Geen verrassingen achteraf. Onze tarieven zijn transparant — u weet van tevoren wat u betaalt.',
    },
    {
      icon: '📱',
      title: 'Eenvoudig Boeken',
      description: 'Online reserveren of bellen: het is allebei snel en makkelijk. Wij bevestigen uw rit direct.',
    },
  ],

  services: [
    {
      id: 'straat-taxi',
      name: 'Straattaxi',
      description: 'Voor dagelijkse ritten in en rondom Heerlen en de rest van Zuid-Limburg. Snel, comfortabel en betaalbaar.',
      priceLabel: 'Vanaf €4,15 starttarief',
      icon: '🚕',
      features: ['Deur-tot-deur service', 'Directe beschikbaarheid', 'Vaste km-prijs €3,05', 'Betalen per pin of contant'],
    },
    {
      id: 'vliegveld',
      name: 'Vliegveld Transfer',
      description: 'Stressvrij naar het vliegveld. Wij brengen u op tijd naar MST, Eindhoven of Düsseldorf Airport.',
      priceLabel: 'Vaste prijs — op aanvraag',
      icon: '✈️',
      features: ['Vluchttracking', 'Ruime kofferruimte', 'Vroege en late ritten', 'Alle grote vliegvelden'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Representatief en punctueel vervoer voor zakelijke afspraken. Comfortabel reizen zonder parkeerstress.',
      priceLabel: 'Maatwerk tarief',
      icon: '💼',
      features: ['Representatieve auto', 'Vaste chauffeur op aanvraag', 'Factuurmogelijkheid', 'Altijd op tijd'],
    },
    {
      id: 'retour',
      name: 'Retourrit',
      description: 'Heen én terug geregeld. Boek een retourrit en rij zorgeloos op en neer naar uw bestemming.',
      priceLabel: 'Combinatiedeal',
      icon: '🔄',
      features: ['Heen- en terugrit', 'Zelfde chauffeur', 'Flexibele retourtijd', 'Voordelig tarief'],
    },
  ],

  about: {
    title: 'Over OneTaxi Zuid-Limburg',
    story: 'OneTaxi Zuid-Limburg is uw lokale taxibedrijf gevestigd in Heerlen. Vanuit onze thuisbasis rijden wij dagelijks door heel Zuid-Limburg. Wij kennen de regio als geen ander en zorgen voor een vlotte, prettige rit — of het nu gaat om een ritje naar het station of een lange vliegveldrit.',
    mission: 'Onze missie is simpel: u comfortabel en op tijd van A naar B brengen. Of u nu naar het vliegveld moet, een zakelijke afspraak heeft of gewoon een betrouwbare taxi nodig heeft — u kunt altijd op ons rekenen.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop',
    values: [
      'Altijd op tijd — gegarandeerd',
      'Transparante, eerlijke prijzen',
      'Vriendelijke en ervaren chauffeurs',
      'Vliegveldspecialist in Zuid-Limburg',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Sandra K.',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Geweldige service! De chauffeur stond precies op tijd en was erg vriendelijk. Ik boek altijd via OneTaxi voor mijn vliegveldritten.',
    },
    {
      id: 2,
      name: 'Mark V.',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Al een jaar mijn vaste taxibedrijf voor zakelijke ritten. Altijd punctueel, nette auto en prettig contact. Absolute aanrader.',
    },
    {
      id: 3,
      name: 'Familie Janssen',
      role: 'Vliegveld transfer',
      rating: 5,
      text: 'Hebben ons naar Düsseldorf Airport gebracht. Ruime auto, op tijd en fijne rit. Zo wil je een vakantie beginnen!',
    },
  ],
};
