import type { SjabloonConfig } from './types';

export const config: SjabloonConfig = {
  basePath: '/preview/taxibedrijf-renierkens',
  id: 'taxibedrijf-renierkens',
  name: 'Taxibedrijf Renierkens',
  tagline: 'Betrouwbaar taxivervoer in Zuid-Limburg',
  description:
    'Taxibedrijf Renierkens B.V. verzorgt al meer dan 28 jaar betrouwbaar en comfortabel taxivervoer in de regio Zuid-Limburg. Van particuliere ritten en luchthavens tot zorgvervoer en zakelijke contracten — wij brengen u veilig op uw bestemming.',

  colors: {
    primary: '#1A5C38',
    primaryHover: '#144A2D',
    primaryLight: '#E8F5EE',
    accent: '#C8963E',
    text: '#1A2B1F',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Haegerhofstraat 45 K, 6269 DP Margraten',
    phone: '045 532 7470',
    email: 'info@taxibedrijfrenierkens.nl',
    kvk: '14055655',
    hours: {
      weekday: '24/7 bereikbaar',
      weekend: '24/7 bereikbaar',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw Betrouwbare Taxi in',
    highlight: 'Zuid-Limburg',
    subtitle:
      'Al 28 jaar de vertrouwde taxipartner in Eijsden-Margraten, Maastricht en omgeving. Professioneel, punctueel en persoonlijk.',
    image:
      'https://images.unsplash.com/photo-1748791121611-188c7f4734ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cta: 'Bel direct: 045 532 7470',
    ctaLink: '/contact',
    ctaSecondary: 'Bekijk Diensten',
    ctaSecondaryLink: '/diensten',
  },

  features: [
    {
      icon: 'shield',
      title: 'Betrouwbaar',
      description:
        'Al meer dan 28 jaar rijden wij met vaste chauffeurs. Afspraak is afspraak — u staat nooit voor een verrassing.',
    },
    {
      icon: 'badge',
      title: 'TX-Keurmerk',
      description:
        'Gecertificeerd taxibedrijf met het officiële TX-Keurmerk. Veiligheid en professionaliteit gegarandeerd.',
    },
    {
      icon: 'map',
      title: 'Regio Expert',
      description:
        'Wij kennen Zuid-Limburg als geen ander. Van Margraten tot Maastricht, Geleen en alle dorpen daartussen.',
    },
    {
      icon: 'clock',
      title: '24/7 Beschikbaar',
      description:
        'Dag en nacht, zeven dagen per week bereikbaar voor uw rit. Vroege vluchten of late avondritten — wij zijn er.',
    },
  ],

  services: [
    {
      id: 'particulier-vervoer',
      name: 'Particulier Vervoer',
      description:
        'Voor dagelijkse ritten, uitstapjes of speciale gelegenheden. Wij brengen u comfortabel en op tijd naar uw bestemming in en rondom Zuid-Limburg.',
      priceLabel: 'Op aanvraag',
      icon: 'car',
      features: [
        'Ritten door heel Zuid-Limburg',
        'Vaste, vertrouwde chauffeurs',
        'Ruime en schone voertuigen',
        'Vooraf vaste ritprijs',
      ],
    },
    {
      id: 'luchthavenvervoer',
      name: 'Luchthavenvervoer',
      description:
        'Stressvrij naar Maastricht Aachen Airport, Brussel-Zaventem, Düsseldorf of Schiphol. Wij monitoren uw vlucht en passen de ophaaltijd aan bij vertragingen.',
      priceLabel: 'Vast tarief',
      icon: 'plane',
      features: [
        'Maastricht, Brussel, Düsseldorf, Schiphol',
        'Vluchtmonitoring inbegrepen',
        'Ruimte voor koffers en bagage',
        'Tijdig aanwezig, gegarandeerd',
      ],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      description:
        'Betrouwbaar en respectvol vervoer voor mensen met een zorgvraag. Geschikt voor ziekenhuisbezoek, dagbehandeling en regulier zorgvervoer via contract.',
      priceLabel: 'Contracttarief',
      icon: 'heart',
      features: [
        'WMO- en zorgcontracten',
        'Geduldige, opgeleide chauffeurs',
        'Rolstoelvervoer mogelijk',
        'Vaste vertrektijden op aanvraag',
      ],
    },
    {
      id: 'zakelijk-contract',
      name: 'Zakelijk & Contract',
      description:
        'Voor bedrijven en instellingen die structureel taxivervoer nodig hebben. Maatwerk contracten met vaste tarieven, centrale facturatie en prioriteitsservice.',
      priceLabel: 'Maatwerk',
      icon: 'briefcase',
      features: [
        'Maandelijkse factuur',
        'Vaste contactpersoon',
        'Prioriteit bij boekingen',
        'Rapportage op aanvraag',
      ],
    },
  ],

  about: {
    title: 'Over Taxibedrijf Renierkens',
    story:
      'Taxibedrijf Renierkens B.V. is opgericht in het hart van het Heuvelland en rijdt al meer dan 28 jaar door de wegen van Zuid-Limburg. Vanuit Margraten bedienen wij de regio Eijsden-Margraten, Maastricht, Geleen en alles daartussen. Wat begon als een lokaal taxibedrijf is uitgegroeid tot een begrip in de regio — bekend om punctualiteit, vriendelijkheid en eerlijke tarieven.',
    mission:
      'Onze missie is eenvoudig: u veilig, comfortabel en op tijd bij uw bestemming brengen. Wij geloven in persoonlijk contact, vaste chauffeurs die u kennen, en transparantie over tarieven. Geen verrassingen, geen gedoe — gewoon een goede rit.',
    image:
      'https://images.unsplash.com/photo-1530675669163-6f4c0f2bafd5?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    values: [
      'Stiptheid en betrouwbaarheid',
      'Persoonlijke aandacht voor elke passagier',
      'Eerlijke en transparante tarieven',
      'Veiligheid boven alles',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Marianne Theunissen',
      role: 'Vaste klant uit Maastricht',
      rating: 5,
      text: 'Al jaren rij ik met Renierkens naar het vliegveld. Altijd op tijd, vriendelijke chauffeur en een nette auto. Geen stress op de vroege ochtend — precies wat ik nodig heb.',
    },
    {
      id: 2,
      name: 'Huub Janssen',
      role: 'Zakelijke klant, Geleen',
      rating: 5,
      text: 'Voor onze medewerkers die geen auto hebben is Renierkens de vaste partner. Betrouwbaar, professioneel en de factuur klopt altijd. Een fijn bedrijf om mee samen te werken.',
    },
    {
      id: 3,
      name: 'Ria Kessels',
      role: 'Zorgklant uit Eijsden',
      rating: 5,
      text: 'De chauffeur haalt mij elke week op voor mijn behandeling. Hij is altijd vriendelijk, heeft geduld en helpt mij in en uit de auto. Dat geeft zo veel rust.',
    },
  ],
};
