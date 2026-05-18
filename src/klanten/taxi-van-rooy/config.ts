import type { TaxiVanRooyConfig } from './types';

export const config: TaxiVanRooyConfig = {
  basePath: '/preview/taxi-van-rooy',
  id: 'taxi-van-rooy',
  name: 'Taxi Van Rooy',
  fullName: 'Taxicentrale - Rolstoel- en Groepsvervoer Cor van Rooy B.V.',
  tagline: 'U heeft vervoer nodig? Wij regelen dat!',
  description:
    'Taxi Van Rooy is uw betrouwbare taxicentrale in Landgraaf. Van rolstoelvervoer tot groepsvervoer door heel Europa — wij zorgen voor veilig, comfortabel en punctueel vervoer.',
  logo: 'https://taxivanrooy.nl/wp-content/uploads/2017/11/Taxi-van-Rooy-logo.png',

  colors: {
    primary: '#FFD600',
    primaryDark: '#E6C000',
    dark: '#111111',
    text: '#1A1A1A',
    background: '#FFFFFF',
    surface: '#F8F8F8',
  },

  contact: {
    address: 'Ampèrestraat 6',
    city: '6372 BB Landgraaf',
    phone: '+31455311494',
    phoneDisplay: '045 - 531 14 94',
    email: 'centrale@taxivanrooy.nl',
    hours: '24/7 bereikbaar',
  },

  navigation: [
    { label: 'Home', path: '/' },
    {
      label: 'Diensten',
      path: '/diensten',
      children: [
        { label: 'Taxivervoer', path: '/diensten/taxivervoer' },
        { label: 'Groepsvervoer', path: '/diensten/groepsvervoer' },
        { label: 'Rolstoelvervoer', path: '/diensten/rolstoelvervoer' },
        { label: 'Medisch vervoer', path: '/diensten/medisch-vervoer' },
        { label: 'Directievervoer', path: '/diensten/directievervoer' },
        { label: 'Airportservice', path: '/diensten/airportservice' },
      ],
    },
    {
      label: 'Over ons',
      path: '/over-ons',
      children: [
        { label: 'Over Taxi Van Rooy', path: '/over-ons' },
        { label: 'Werken bij', path: '/werken-bij' },
      ],
    },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'U heeft vervoer nodig?',
    titleHighlight: 'Wij regelen dat!',
    subtitle:
      'Taxi Van Rooy — uw betrouwbare taxicentrale in Landgraaf. 24/7 bereikbaar voor taxi, groepsvervoer, rolstoelvervoer en meer.',
    image:
      'https://images.unsplash.com/photo-1628947733273-cdae71c9bfd3?q=80&w=1470&auto=format&fit=crop',
  },

  features: [
    {
      icon: '🕐',
      stat: '24/7',
      label: 'Altijd bereikbaar',
      description: 'Dag en nacht, 365 dagen per jaar voor u klaar.',
    },
    {
      icon: '🌍',
      stat: 'Heel Europa',
      label: 'Groepsvervoer',
      description: 'Wij rijden door heel Europa met groepen van elke omvang.',
    },
    {
      icon: '♿',
      stat: '100%',
      label: 'Rolstoeltoegankelijk',
      description: 'Speciaal uitgeruste voertuigen voor rolstoelgebruikers.',
    },
    {
      icon: '🏆',
      stat: '40+ jaar',
      label: 'Directievervoer',
      description: 'Meer dan 40 jaar ervaring in directievervoer op hoog niveau.',
    },
  ],

  services: [
    {
      id: 'taxivervoer',
      slug: 'taxivervoer',
      icon: '🚕',
      name: 'Taxivervoer',
      shortDescription:
        'Betrouwbaar en comfortabel taxivervoer voor particulieren en zakelijke klanten, 24/7 beschikbaar in de regio Landgraaf en omstreken.',
      description:
        'Taxi Van Rooy biedt professioneel taxivervoer voor elke gelegenheid. Of u nu naar het station, ziekenhuis, of een zakelijke afspraak moet — wij zijn er altijd voor u. Onze chauffeurs kennen de regio op hun duimpje en zorgen voor een vlotte en comfortabele rit.',
      features: [
        '24/7 beschikbaar',
        'Vaste, transparante tarieven',
        'Punctuele chauffeurs',
        'Moderne, comfortabele voertuigen',
        'Vooruit reserveren mogelijk',
        'Zakelijk factureren mogelijk',
      ],
      image:
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=800&fit=crop',
    },
    {
      id: 'groepsvervoer',
      slug: 'groepsvervoer',
      icon: '🚌',
      name: 'Groepsvervoer',
      shortDescription:
        'Groepsvervoer door heel Europa — voor uitstapjes, evenementen, teamreizen en meer. Capaciteit voor groepen van elke omvang.',
      description:
        'Met Taxi Van Rooy kunt u zorgeloos met een groep op reis door heel Europa. Wij beschikken over ruime voertuigen en bussen voor grote gezelschappen. Of het nu gaat om een bedrijfsuitje, schoolreis, sportclub of familiedag — wij regelen het van A tot Z.',
      features: [
        'Heel Europa bereikbaar',
        'Capaciteit van 8 tot 50+ personen',
        'Airconditioning en comfort',
        'Ervaren reischauffeurs',
        'Flexibele ophaal- en afzetlocaties',
        'Vaste prijs op aanvraag',
      ],
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop',
    },
    {
      id: 'rolstoelvervoer',
      slug: 'rolstoelvervoer',
      icon: '♿',
      name: 'Rolstoelvervoer',
      shortDescription:
        'Speciaal uitgerust rolstoelvervoer met zorg en aandacht voor mensen met een beperking. Veilig en waardig vervoer.',
      description:
        'Wij begrijpen dat vervoer voor mensen met een beperking meer vereist dan alleen een auto. Onze speciaal uitgeruste voertuigen met rolstoeltoegankelijke instap en bevestigingssystemen zorgen voor veilig transport. Onze chauffeurs zijn getraind in het omgaan met kwetsbare passagiers.',
      features: [
        'Rolstoeltoegankelijke voertuigen',
        'Veilige rolstoelbevestiging',
        'Getrainde en zorgzame chauffeurs',
        'Hulp bij in- en uitstappen',
        'Deur-tot-deur service',
        'WMO-vervoer mogelijk',
      ],
      image:
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=800&fit=crop',
    },
    {
      id: 'medisch-vervoer',
      slug: 'medisch-vervoer',
      icon: '🏥',
      name: 'Medisch vervoer',
      shortDescription:
        'Betrouwbaar vervoer naar ziekenhuizen, klinieken en revalidatiecentra. Discreet, punctueel en met persoonlijke aandacht.',
      description:
        'Voor medische afspraken is betrouwbaar vervoer essentieel. Taxi Van Rooy verzorgt vervoer naar en van ziekenhuizen, poliklinieken, fysiotherapeuten en andere zorginstellingen. Wij wachten op u en brengen u veilig terug naar huis.',
      features: [
        'Vervoer naar alle zorginstellingen',
        'Chauffeur wacht indien gewenst',
        'Terugbrengservice',
        'Rolstoelvervoer inbegrepen',
        'Discrete en vriendelijke service',
        'Zorgverzekering mogelijk',
      ],
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    },
    {
      id: 'directievervoer',
      slug: 'directievervoer',
      icon: '👔',
      name: 'Directievervoer',
      shortDescription:
        'Meer dan 40 jaar specialist in directievervoer voor bestuurders en executives. Stijlvol, discreet en punctueel.',
      description:
        'Al meer dan 40 jaar is Taxi Van Rooy de vertrouwde partner voor directievervoer. Wij begrijpen dat zakelijke reizigers hoge eisen stellen aan punctualiteit, discretie en comfort. Onze representatieve chauffeurs en voertuigen zorgen voor een perfecte eerste en laatste indruk.',
      features: [
        '40+ jaar ervaring',
        'Representatieve chauffeurs',
        'Vloot luxe voertuigen',
        'Absolute discretie gegarandeerd',
        'On-time performance 99%',
        'Persoonlijke vaste chauffeur mogelijk',
      ],
      image:
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&h=800&fit=crop',
    },
    {
      id: 'airportservice',
      slug: 'airportservice',
      icon: '✈️',
      name: 'Airportservice',
      shortDescription:
        'Stressvrij naar en van het vliegveld. Vluchttracking, gratis wachttijd en representatief ophalen met naambordje.',
      description:
        'Begin en eindig uw reis zorgeloos met de airportservice van Taxi Van Rooy. Wij volgen uw vlucht realtime en passen de ophaalrijd automatisch aan bij vertragingen. Op het vliegveld staat een chauffeur met uw naambordje klaar bij de aankomsthal.',
      features: [
        'Vluchttracking inbegrepen',
        'Gratis wachttijd bij vertraging',
        'Ophalen met naambordje',
        'Alle grote vliegvelden',
        'Ruime bagagecapaciteit',
        'Vroeg- en nachtritten mogelijk',
      ],
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop',
    },
  ],

  airports: [
    { name: 'Maastricht Aachen Airport', city: 'Maastricht', distance: '25 km' },
    { name: 'Eindhoven Airport', city: 'Eindhoven', distance: '75 km' },
    { name: 'Düsseldorf Airport', city: 'Düsseldorf', distance: '85 km' },
    { name: 'Schiphol Amsterdam', city: 'Amsterdam', distance: '220 km' },
    { name: 'Köln Bonn Airport', city: 'Keulen', distance: '95 km' },
    { name: 'Brussels Airport', city: 'Brussel', distance: '130 km' },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Henk Vermeulen',
      location: 'Landgraaf',
      rating: 5,
      text: 'Al jaren gebruik ik Taxi Van Rooy voor mijn vervoer naar het ziekenhuis. Altijd op tijd, altijd vriendelijk. De chauffeurs denken mee en helpen waar nodig. Echt een topbedrijf!',
    },
    {
      id: 2,
      name: 'Marieke Theunissen',
      location: 'Heerlen',
      rating: 5,
      text: 'Wij hebben Taxi Van Rooy ingeschakeld voor ons bedrijfsuitje naar Brussel. Alles was perfect geregeld — een luxe bus, vriendelijke chauffeur en precies op tijd. Zeker een aanrader!',
    },
    {
      id: 3,
      name: 'Cor Peters',
      location: 'Kerkrade',
      rating: 5,
      text: 'Voor mijn vliegtuigreis naar Schiphol ben ik al een paar keer met Taxi Van Rooy gegaan. Ze volgen de vlucht op en staan altijd klaar bij aankomst. Geen stress, gewoon goed geregeld.',
    },
  ],

  about: {
    title: 'Over Taxi Van Rooy',
    description:
      'Taxicentrale Cor van Rooy B.V. is een familiebedrijf gevestigd in Landgraaf, Zuid-Limburg. Al decennialang verzorgen wij betrouwbaar vervoer voor particulieren, bedrijven en zorginstellingen in de regio en daarbuiten. Onze kracht ligt in persoonlijk contact, vakkennis en de passie voor het vak.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop',
    stats: [
      { label: 'Jaar ervaring', value: '40+' },
      { label: 'Tevreden klanten', value: '10.000+' },
      { label: 'Gereden km', value: '1M+' },
      { label: 'Landen bereikt', value: '20+' },
    ],
  },
};
