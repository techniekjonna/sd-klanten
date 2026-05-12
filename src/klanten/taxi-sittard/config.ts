export const config = {
  basePath: '/preview/taxi-sittard',
  id: 'taxi-sittard',
  name: 'Taxi Sittard',
  tagline: 'Hoge service, lage prijs',
  description: 'Betrouwbaar taxivervoer in en rondom Sittard-Geleen. 24/7 beschikbaar voor ritten, luchthavens, zakelijk vervoer en rolstoelvervoer.',

  colors: {
    primary: '#0f2044',
    primaryHover: '#162d5e',
    accent: '#3db8e4',
    accentHover: '#2da8d4',
    text: '#0f2044',
    background: '#ffffff',
  },

  logo: 'https://taxisittard.com/images/taxi_sittard_logo_horizontal.png',

  contact: {
    address: 'Irisstraat 39, Sittard, Nederland',
    region: 'Sittard - Geleen, Netherlands',
    phone: '+31619055159',
    phoneDisplay: '(0031)-619055159',
    email: 'info@taxisittard.com',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Taxi Tarieven', path: '/tarieven' },
    { label: 'Zakelijk Vervoer', path: '/zakelijk' },
    { label: 'Luchthavenvervoer', path: '/luchthaven' },
    { label: 'Rolstoeltaxi Sittard', path: '/rolstoeltaxi' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=1920&h=1080&fit=crop',
  },

  features: [
    {
      icon: '⚡',
      title: 'Snel ter plaatse',
      description: 'Binnen 15 minuten bij u in Sittard, Geleen en omgeving.',
    },
    {
      icon: '🕐',
      title: '24/7 beschikbaar',
      description: 'Dag en nacht rijden wij. Geen rit is te vroeg of te laat.',
    },
    {
      icon: '💰',
      title: 'Vaste tarieven',
      description: 'Transparante prijzen zonder verrassingen achteraf.',
    },
    {
      icon: '✈️',
      title: 'Luchthaven specialist',
      description: 'Vaste all-in prijzen naar Schiphol, Eindhoven, Brussel en meer.',
    },
  ],

  services: [
    {
      id: 'taxi',
      name: 'Taxirit',
      description: 'Snel en comfortabel van A naar B in de regio Sittard-Geleen en heel Zuid-Limburg.',
      icon: '🚕',
      features: ['Lokaal & regionaal', 'Vaste prijs op aanvraag', 'Comfortabele voertuigen', '24/7 beschikbaar'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel vervoer voor bedrijven. Factuur op naam, vaste chauffeur en stipte planning.',
      icon: '💼',
      features: ['Factuur op bedrijfsnaam', 'Vaste chauffeur mogelijk', 'Stipt en discreet', 'Maandelijkse afrekening'],
    },
    {
      id: 'luchthaven',
      name: 'Luchthaven Transfer',
      description: 'Ontspannen naar het vliegveld. All-in vaste prijs, vluchtmonitoring en ruime kofferruimte.',
      icon: '✈️',
      features: ['Vaste all-in prijs', 'Vlucht monitoring', 'Grote bagage welkom', 'Op tijd gegarandeerd'],
    },
    {
      id: 'rolstoel',
      name: 'Rolstoeltaxi',
      description: 'Aangepast vervoer voor rolstoelgebruikers. Hulpvaardig, geduldig en volledig uitgerust.',
      icon: '♿',
      features: ['Rolstoel aangepast voertuig', 'Hulp bij in/uitstappen', 'Zorgvervoer mogelijk', 'Discreet en respectvol'],
    },
  ],

  airports: [
    { name: 'Schiphol Amsterdam', country: 'Nederland', flag: '🇳🇱', time: '±2u', price: 'v.a. €195' },
    { name: 'Eindhoven Airport', country: 'Nederland', flag: '🇳🇱', time: '±45min', price: 'v.a. €75' },
    { name: 'Brussel Zaventem', country: 'België', flag: '🇧🇪', time: '±1u30', price: 'v.a. €120' },
    { name: 'Düsseldorf Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u', price: 'v.a. €95' },
    { name: 'Keulen/Bonn Airport', country: 'Duitsland', flag: '🇩🇪', time: '±1u15', price: 'v.a. €105' },
    { name: 'Frankfurt Airport', country: 'Duitsland', flag: '🇩🇪', time: '±2u', price: 'v.a. €195' },
  ],

  pricing: {
    startRate: 3.00,
    kmRate: 2.20,
    waitRate: 0.50,
    note: 'Vaste prijs altijd op aanvraag. Luchthaventarieven zijn all-in.',
  },

  serviceArea: ['Sittard', 'Geleen', 'Born', 'Beek', 'Stein', 'Heerlen', 'Maastricht', 'Roermond'],

  testimonials: [
    {
      id: 1,
      name: 'Linda Janssen',
      role: 'Vaste klant',
      rating: 5,
      text: 'Al jaren rijd ik met Taxi Sittard naar het vliegveld. Altijd op tijd, nette auto en vriendelijke chauffeur. Echt een aanrader!',
    },
    {
      id: 2,
      name: 'Mohammed Al-Rashid',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Voor ons bedrijf het beste taxibedrijf in de regio. Betrouwbaar, professioneel en de factuurafhandeling gaat vlekkeloos.',
    },
    {
      id: 3,
      name: 'Ria Dormans',
      role: 'Zorgvervoer',
      rating: 5,
      text: 'Heel vriendelijk en geduldig voor mijn moeder in de rolstoel. Ze wordt altijd goed geholpen. Fijn dat zoiets nog bestaat.',
    },
  ],

  about: {
    story: 'Taxi Sittard is al jarenlang dé vertrouwde taxiservice in de regio Sittard-Geleen. Met een vloot van goed onderhouden voertuigen en ervaren chauffeurs bieden wij vervoer voor elk doel: van een korte rit naar de stad tot een luchthaventrip naar het buitenland.',
    values: ['Altijd op tijd', 'Eerlijke vaste prijzen', '24/7 bereikbaar', 'Vriendelijk en discreet'],
  },
};
