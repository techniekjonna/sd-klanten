export const config = {
  basePath: '/preview/taxi-centrale-service',
  id: 'taxi-centrale-service',
  name: 'Taxi Centrale Service',
  shortName: 'TCS',
  tagline: 'Veilig, stipt en persoonlijk taxivervoer',
  description: 'Taxi Centrale Service (T.C.S.) is uw betrouwbare taxibedrijf in Kerkrade en de Parkstad Limburg regio. Dag en nacht bereikbaar voor lokaal en zakelijk vervoer, evenementen en luchthavenstransfers.',

  colors: {
    primary: '#0D2447',
    primaryHover: '#0a1c38',
    accent: '#F59E0B',
    accentHover: '#D97706',
    light: '#EEF3FF',
    text: '#0D1B2A',
    background: '#FFFFFF',
    dark: '#060E1C',
    muted: '#64748B',
  },

  contact: {
    address: 'Locht 75/A, 6466GT Kerkrade',
    phone: '+31455741133',
    phoneDisplay: '045 574 1133',
    email: 'info@taxicentraleservice.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Vliegvelden', path: '/vliegvelden' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    subtitle: 'Uw betrouwbare taxibedrijf in Kerkrade en de regio Parkstad Limburg. Dag en nacht voor u klaar — lokaal, zakelijk en luchthaventritten.',
    image: 'https://images.unsplash.com/photo-1733135030294-a947f125abf4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Bereikbaar',
      description: 'Dag en nacht voor u beschikbaar. Geen enkel tijdstip is te vroeg of te laat voor TCS.',
    },
    {
      icon: '📍',
      title: 'Regio Kerkrade',
      description: 'Kerkrade, Heerlen, Landgraaf en heel Parkstad Limburg — wij kennen de regio als onze broekzak.',
    },
    {
      icon: '✈️',
      title: 'Luchthaventritten',
      description: 'Van Kerkrade naar Maastricht, Düsseldorf, Schiphol en meer. Vluchtmonitoring inbegrepen.',
    },
    {
      icon: '💼',
      title: 'Zakelijk & Privé',
      description: 'Professioneel zakelijk vervoer en comfortabele privéritten voor elk doel en elke gelegenheid.',
    },
  ],

  services: [
    {
      id: 'lokaal',
      name: 'Lokaal Taxivervoer',
      description: 'Snel en comfortabel vervoer door Kerkrade en de regio. Voor dagelijkse ritten, ziekenhuisbezoeken, stations en meer.',
      icon: '🚕',
      features: ['Kerkrade & omgeving', 'Direct beschikbaar', 'Vaste en eerlijke prijzen', '24/7 bereikbaar'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel en discreet zakelijk taxivervoer voor bedrijven, vergaderingen en zakenreizen in heel Zuid-Limburg.',
      icon: '💼',
      features: ['Factuur op bedrijfsnaam', 'Vaste chauffeur op aanvraag', 'Stipte tijdsplanning', 'Discreet en professioneel'],
    },
    {
      id: 'evenementen',
      name: 'Evenementen & Horeca',
      description: 'Naar festivals, concerten, restaurants of feesten — wij brengen u veilig heen en terug zonder zorgen over parkeren.',
      icon: '🎉',
      features: ['Groepsvervoer mogelijk', 'Avond- en nachtritten', 'Retour beschikbaar', 'Geen parkeerstress'],
    },
    {
      id: 'luchthaven',
      name: 'Luchthavenvervoer',
      description: 'Ontspannen naar alle grote luchthavens in de regio. Vluchtmonitoring inbegrepen, zodat u altijd op tijd vertrekt.',
      icon: '✈️',
      features: ['Vaste all-in prijzen', 'Vluchtmonitoring', 'Ruime bagageruimte', 'Grensstreek specialist'],
    },
  ],

  serviceArea: ['Kerkrade', 'Heerlen', 'Landgraaf', 'Brunssum', 'Simpelveld', 'Voerendaal', 'Nuth', 'Vaals'],

  airports: [
    { name: 'Maastricht Aachen Airport', country: 'Nederland', flag: '🇳🇱', time: '±20 min' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±55 min' },
    { name: 'Keulen/Bonn Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u 10min' },
    { name: 'Brussel Zaventem', country: 'België', flag: '🇧🇪', time: '±1u 45min' },
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±1u 15min' },
    { name: 'Amsterdam Schiphol', country: 'Nederland', flag: '🇳🇱', time: '±2u 30min' },
  ],

  pricing: {
    startRate: 3.50,
    kmRate: 2.40,
    waitRate: 0.55,
    note: 'Luchthavenprijzen zijn vaste all-in tarieven. Geen toeslagen voor bagage of vluchtvertraging. Vaste prijs op aanvraag mogelijk.',
  },

  testimonials: [
    {
      id: 1,
      name: 'Loes Schrijvers',
      role: 'Vaste klant, Kerkrade',
      rating: 5,
      text: 'TCS brengt mij al jarenlang naar mijn afspraken in het ziekenhuis. Altijd op tijd, vriendelijk en voor een eerlijke prijs. Echt een topbedrijf uit Kerkrade!',
    },
    {
      id: 2,
      name: 'Frank Beckers',
      role: 'Zakelijke rit naar Düsseldorf',
      rating: 5,
      text: 'Voor mijn zakelijke ritten naar Düsseldorf gebruik ik altijd TCS. Punctueel, schone auto en de chauffeur kent de weg perfect — ook over de grens.',
    },
    {
      id: 3,
      name: 'Annelies Hermans',
      role: 'Luchthaventrip, Brussel',
      rating: 5,
      text: 'Vliegtuig vertraagd? Geen probleem bij TCS! Ze volgden mijn vlucht en stonden gewoon klaar. Aanrader voor iedereen die zorgeloos wil reizen.',
    },
  ],

  about: {
    story: 'Taxi Centrale Service (T.C.S.) is gevestigd aan de Locht in Kerkrade en bedient dagelijks reizigers in de hele Parkstad Limburg regio. Als lokaal bedrijf in de grensstreek met Duitsland en België kennen wij de regio door en door. Van een korte rit binnen Kerkrade tot een uitgebreide luchthavenstransfer — wij regelen het snel en persoonlijk.',
    mission: 'Wij geloven in eerlijk taxivervoer: duidelijke tarieven, een vriendelijke chauffeur en geen verrassingen. Geen callcenter, gewoon direct contact met uw TCS-chauffeur. Dat is hoe wij al jaren het vertrouwen van onze klanten verdienen.',
    values: [
      'Altijd stipt en betrouwbaar',
      'Directe communicatie zonder tussenpersonen',
      'Eerlijke en transparante tarieven',
      'Specialist in de grensregio Kerkrade',
      'Persoonlijke aandacht voor elke klant',
    ],
    image: 'https://images.unsplash.com/photo-1750753115312-856044f9987e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};
