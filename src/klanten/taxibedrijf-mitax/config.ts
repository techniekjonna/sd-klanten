import type { MitaxConfig } from './types';

export const config: MitaxConfig = {
  basePath: '/preview/taxibedrijf-mitax',
  id: 'taxibedrijf-mitax',
  name: 'Taxibedrijf Mitax',
  tagline: 'Uw betrouwbare taxi in Urmond & omgeving',
  description: 'Taxibedrijf Mitax verzorgt snel, veilig en betaalbaar taxivervoer vanuit Urmond. Van ziekenhuisrit tot vliegveldtransfer — wij zijn er voor u.',

  colors: {
    navy: '#1B3A6B',
    navyDark: '#122B52',
    orange: '#E85D04',
    orangeHover: '#C94D00',
    bg: '#FFFFFF',
    bgLight: '#F4F7FC',
    text: '#1A202C',
    muted: '#6B7280',
  },

  contact: {
    address: 'Kanaalweg 17',
    city: 'Urmond',
    phone: '+31464370000',
    phoneDisplay: '046 - 437 0000',
    email: 'info@taxibedrijfmitax.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Boek een Rit', path: '/boeken' },
  ],

  hero: {
    title: 'Snel & Betrouwbaar Taxivervoer',
    subtitle: 'Taxibedrijf Mitax rijdt voor u vanuit Urmond door heel Zuid-Limburg en daarbuiten. Vaste tarieven, vriendelijke chauffeurs, 24/7 beschikbaar.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop',
    cta: 'Boek Uw Rit',
    ctaLink: '/boeken',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Bereikbaar',
      description: 'Dag en nacht klaar voor u. Of het vroeg in de ochtend of laat in de nacht is — Mitax is altijd beschikbaar.',
    },
    {
      icon: '💶',
      title: 'Vaste Tarieven',
      description: 'Geen meter, geen verrassingen. Vooraf weet u precies wat de rit kost. Eerlijk en transparant.',
    },
    {
      icon: '🚗',
      title: 'Moderne Voertuigen',
      description: 'Wij rijden in schone, goed onderhouden wagens. Comfortabel en veilig voor elke rit.',
    },
    {
      icon: '📍',
      title: 'Heel Zuid-Limburg',
      description: 'Vanuit Urmond rijden wij door Sittard-Geleen, Maastricht, Stein en de gehele regio.',
    },
  ],

  tarieven: [
    {
      titel: 'Basistarieven',
      regels: [
        { omschrijving: 'Starttarief', tarief: '€ 3,00' },
        { omschrijving: 'Per km (dag — 07:00–22:00)', tarief: '€ 2,20' },
        { omschrijving: 'Per km (nacht — 22:00–07:00)', tarief: '€ 2,85' },
        { omschrijving: 'Wachttarief per uur', tarief: '€ 30,00' },
        { omschrijving: 'Reserveringstoeslag', tarief: '€ 2,00' },
      ],
    },
    {
      titel: 'Vaste Ritten',
      regels: [
        { omschrijving: 'Ziekenhuis Zuyderland', tarief: 'Vanaf € 12,00' },
        { omschrijving: 'Station Sittard', tarief: 'Vanaf € 10,00' },
        { omschrijving: 'Maastricht Aachen Airport', tarief: 'Vanaf € 35,00' },
        { omschrijving: 'Eindhoven Airport', tarief: 'Vanaf € 60,00' },
        { omschrijving: 'Schiphol Airport', tarief: 'Vanaf € 145,00' },
      ],
    },
    {
      titel: 'Zakelijk & Groep',
      regels: [
        { omschrijving: 'Zakelijk account (maandfactuur)', tarief: 'Op aanvraag' },
        { omschrijving: 'Groepsvervoer (minibus)', tarief: 'Op aanvraag' },
        { omschrijving: 'Evenementenvervoer', tarief: 'Op aanvraag' },
        { omschrijving: 'Dagje uit (retour)', tarief: 'Op aanvraag' },
      ],
    },
  ],

  diensten: [
    {
      id: 'lokaal',
      icon: '🏙️',
      title: 'Lokaal & Regionaal',
      description: 'Van deur tot deur door Urmond, Sittard-Geleen, Stein, Maastricht en de rest van Zuid-Limburg. Snel, punctueel en vertrouwd.',
      items: [
        'Ritten door de hele regio',
        'Ziekenhuisvervoer en medische ritten',
        'Avond- en nachtvervoer',
        'Rolstoeltoegankelijk op aanvraag',
        'Kinderzitje beschikbaar',
        '24/7 beschikbaar',
      ],
    },
    {
      id: 'vliegveld',
      icon: '✈️',
      title: 'Vliegveld Transfers',
      description: 'Stressvrij naar het vliegveld. Wij volgen uw vlucht live en houden rekening met vertragingen. Ruimte voor koffers en bagage.',
      items: [
        'Maastricht Aachen Airport',
        'Eindhoven Airport',
        'Schiphol Amsterdam',
        'Düsseldorf & Keulen Airport',
        'Vluchttracking inbegrepen',
        'Vroegboekkorting beschikbaar',
      ],
    },
    {
      id: 'zakelijk',
      icon: '💼',
      title: 'Zakelijk Vervoer',
      description: 'Professioneel vervoer voor bedrijven. Vaste chauffeurs, maandelijkse facturatie en discrete service voor uw medewerkers en relaties.',
      items: [
        'Maandelijkse factuur voor bedrijven',
        'Vaste en vertrouwde chauffeurs',
        'Representatieve voertuigen',
        'Groepsvervoer voor teams',
        'Evenementen en congressen',
        'Snel inplannen via telefoon of mail',
      ],
    },
    {
      id: 'uitjes',
      icon: '🎉',
      title: 'Uitjes & Evenementen',
      description: 'Zorgeloos op stap voor een feestje, dagje uit of bijzondere gelegenheid. Wij zorgen dat u veilig en op tijd aankomt.',
      items: [
        'Trouwvervoer & jubilea',
        'Stapavonden & feesten',
        'Dagtrips en recreatieve uitjes',
        'Retour ook mogelijk',
        'Groepen tot 8 personen',
        'Decoratie op aanvraag',
      ],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Lena Janssen',
      rating: 5,
      text: 'Altijd op tijd en ontzettend vriendelijk. Gebruik Mitax al jaren voor mijn ziekenhuisbezoeken. Echt een aanrader voor iedereen in de regio!',
    },
    {
      id: 2,
      name: 'Rob Meertens',
      rating: 5,
      text: 'Vaste prijs naar Schiphol, chauffeur was er vroeg en het was een relaxte rit. Geen gedoe, geen stress. Precies wat je nodig hebt.',
    },
    {
      id: 3,
      name: 'Anita Willems',
      rating: 5,
      text: 'Nette auto, vriendelijke chauffeur en een eerlijke prijs. Ik bel Mitax altijd als ik een taxi nodig heb in Urmond en omgeving.',
    },
  ],

  about: {
    title: 'Over Taxibedrijf Mitax',
    story: 'Taxibedrijf Mitax is gevestigd aan de Kanaalweg in Urmond en rijdt al jaren betrouwbaar taxivervoer door heel Zuid-Limburg. Ons bedrijf is klein genoeg voor persoonlijke aandacht en groot genoeg om altijd voor u klaar te staan.',
    mission: 'Onze missie is simpel: u veilig, comfortabel en op tijd van A naar B brengen. Wij geloven in eerlijke vaste tarieven, vriendelijke service en een schone auto. Dat is de Mitax belofte.',
    values: [
      'Stiptheid en betrouwbaarheid',
      'Eerlijke vaste tarieven',
      'Persoonlijke en vriendelijke service',
      'Schone en veilige voertuigen',
    ],
    image: 'https://images.unsplash.com/photo-1518563172008-e56c5dfbaef6?w=1200&h=800&fit=crop',
  },
};
