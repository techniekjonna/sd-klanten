export const config = {
  basePath: '/preview/taxi-comfort-maastricht',
  id: 'taxi-comfort-maastricht',
  name: 'Taxi Comfort Maastricht',
  tagline: 'Comfortabel en betrouwbaar vervoer in Maastricht en omgeving',
  description: 'Taxi Comfort Maastricht is een familiebedrijf dat al jaren zorgt voor comfortabel en betrouwbaar taxivervoer in Maastricht en de wijde omgeving. Persoonlijk contact, moderne voertuigen en altijd op tijd.',

  colors: {
    primary: '#1A3A6B',
    primaryHover: '#142D55',
    primaryLight: '#E8EEF8',
    accent: '#C9972A',
    accentLight: '#FBF3E2',
    text: '#0F1C3A',
    background: '#FFFFFF',
  },

  logo: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/tcm_logo_300.png',

  contact: {
    address: 'Maastricht en omgeving',
    phone: '+31 43 000 0000',
    phoneDisplay: '043 000 0000',
    email: 'info@taxicomfortmaastricht.nl',
    whatsapp: '+31430000000',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Vacatures', path: '/vacatures' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Taxi Comfort',
    highlight: 'Maastricht',
    subtitle: 'Uw betrouwbare taxipartner in Maastricht en omgeving. Comfortabel, persoonlijk en altijd op tijd.',
    image: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/Taxi-Comfort-Maastricht_09_600.jpg',
    cta: 'Direct boeken',
    ctaLink: '/contact',
    ctaSecondary: 'Bel ons nu',
    ctaSecondaryLink: '/contact',
  },

  photos: {
    team1: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/Taxi-Comfort-Maastricht_03_600.jpg',
    team2: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/Taxi-Comfort-Maastricht_08_600.jpg',
    car1: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/Taxi-Comfort-Maastricht_09_600.jpg',
    car2: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/Taxi-Comfort-Maastricht_07_600.jpg',
    car3: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/Taxi-Comfort-Maastricht_05_600.jpg',
    car4: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/Taxi-Comfort-Maastricht_11_600.jpg',
  },

  serviceArea: [
    'Maastricht', 'Valkenburg', 'Sittard', 'Heerlen', 'Gulpen',
    'Meerssen', 'Beek', 'Stein', 'Geleen',
  ],

  features: [
    {
      icon: '👨‍👩‍👧',
      title: 'Familiebedrijf',
      description: 'Als familiebedrijf kennen wij onze klanten persoonlijk. U bent geen nummer, maar een vertrouwde gast.',
    },
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description: 'Dag en nacht bereikbaar voor uw ritaanvraag. Vroege vluchten of late aankomsten — wij zijn er.',
    },
    {
      icon: '🚗',
      title: 'Comfortabele Voertuigen',
      description: 'Moderne, schone voertuigen voor een aangename reis. Uw comfort staat centraal.',
    },
    {
      icon: '📍',
      title: 'Regio Maastricht',
      description: 'Wij kennen de regio als onze broekzak. Van centrum tot de meest afgelegen adressen.',
    },
  ],

  services: [
    {
      id: 'persoonlijk',
      name: 'Persoonlijk Vervoer',
      description: 'Van deur tot deur in alle comfort. Of het nu gaat om een uitje, doktersbezoek of zakelijke afspraak.',
      icon: '🧑‍💼',
      priceLabel: 'Op aanvraag',
      features: ['Deur-tot-deur service', 'Vaste chauffeur mogelijk', 'Ruime bagageruimte', 'Luchtige en stille auto'],
    },
    {
      id: 'luchthaven',
      name: 'Luchthavenvervoer',
      description: 'Stressvrij naar Eindhoven, Düsseldorf, Brussel, Keulen of Schiphol. Op tijd en zonder zorgen.',
      icon: '✈️',
      priceLabel: 'Vaste prijzen',
      features: ['Alle luchthavens', 'Vluchttijden bijhouden', 'Gratis wachttijd bij vertraging', 'Ruim voor bagage'],
    },
    {
      id: 'zorg',
      name: 'Zorgvervoer',
      description: 'Speciaal vervoer voor ziekenhuisbezoeken, revalidatie en andere medische afspraken. Met geduld en zorg.',
      icon: '🏥',
      priceLabel: 'Op aanvraag',
      features: ['Geduldige chauffeurs', 'Rolstoelvriendelijk overleg', 'Terugrit reserveren', 'Begeleiding mogelijk'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel vervoer voor bedrijven en zakelijke reizigers. Discreet, punctueel en representatief.',
      icon: '💼',
      priceLabel: 'Zakelijk tarief',
      features: ['Factuurmogelijkheid', 'Vaste tariefafspraken', 'Op maat planning', 'Representatieve uitstraling'],
    },
  ],

  about: {
    title: 'Over Taxi Comfort Maastricht',
    story: 'Taxi Comfort Maastricht is een familiebedrijf met hart voor de klant. Wij geloven dat goed vervoer meer is dan van A naar B rijden — het gaat om vertrouwen, gemak en een warm welkom. Onze chauffeurs kennen Maastricht en de Limburgse regio als geen ander.',
    mission: 'Ons doel is simpel: u zorgeloos en comfortabel op uw bestemming krijgen. Of u nu een ritje naar het station boekt of een vlucht van Schiphol haalt — wij zorgen dat alles klopt.',
    image: 'https://taxicomfortmaastricht.nl/wp-content/uploads/2019/01/Taxi-Comfort-Maastricht_03_600.jpg',
    values: [
      'Persoonlijk en betrokken',
      'Altijd op tijd',
      'Eerlijke tarieven',
      'Veiligheid voorop',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Anita van den Berg',
      role: 'Vaste klant',
      rating: 5,
      text: 'Al jaren rij ik met Taxi Comfort Maastricht naar het vliegveld. Altijd stipt, vriendelijk en een schone auto. Ik zou nooit anders willen.',
    },
    {
      id: 2,
      name: 'Gerard Houben',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Voor mijn zakelijke afspraken in de regio is dit mijn vaste taxibedrijf. Professioneel, discreet en altijd betrouwbaar.',
    },
    {
      id: 3,
      name: 'Sofie Janssen',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Mijn moeder gebruikt de taxi voor haar ziekenhuisbezoeken. Ze wordt altijd persoonlijk geholpen en voelt zich op haar gemak. Heel fijn!',
    },
  ],

  vacatures: [
    {
      id: 'chauffeur',
      title: 'Taxichauffeur (part-time / full-time)',
      description: 'Wij zijn op zoek naar vriendelijke en ervaren taxichauffeurs voor ons team in Maastricht. Flexibele diensten, marktconform salaris.',
      requirements: ['Rijbewijs B', 'Taxicertificaat (of bereid te behalen)', 'Goede kennis regio Maastricht', 'Klantvriendelijk en representatief'],
    },
  ],
};
