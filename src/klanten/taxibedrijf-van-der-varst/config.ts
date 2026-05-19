import type { VanDerVarstConfig } from './types';

export const config: VanDerVarstConfig = {
  basePath: '/preview/taxibedrijf-van-der-varst',
  id: 'taxibedrijf-van-der-varst',
  name: 'Van der Varst',
  tagline: 'Betrouwbaar taxivervoer in Echt en omgeving',
  description: 'Taxibedrijf Van der Varst is al meer dan 35 jaar uw vertrouwde partner voor taxivervoer in Echt en de regio Midden-Limburg. Professioneel, stipt en persoonlijk.',
  founded: 1987,

  colors: {
    primary: '#1B4F8A',
    primaryHover: '#163F6E',
    accent: '#F59E0B',
    accentHover: '#D97706',
    light: '#EFF6FF',
    text: '#1E293B',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Bellweg 19, 6101 XA Echt',
    phone: '+310475541929',
    phoneDisplay: '0475 - 541 929',
    email: 'taxivarst@home.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Bestellen', path: '/bestellen' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Taxibedrijf',
    highlight: 'Van der Varst',
    subtitle: 'Ruim 35 jaar betrouwbaar taxivervoer in Echt en omgeving. Altijd op tijd, altijd comfortabel — 24/7 voor u beschikbaar.',
    image: 'https://images.unsplash.com/photo-1519566657253-e37fbcf36dfb?q=80&w=1200&auto=format&fit=crop',
    cta: 'Direct Bestellen',
    ctaLink: '/bestellen',
    ctaSecondary: 'Bekijk Diensten',
    ctaSecondaryLink: '/diensten',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description: 'Dag en nacht voor u klaar. Of het vroeg in de ochtend is of laat in de nacht — wij rijden altijd.',
    },
    {
      icon: '📅',
      title: 'Opgericht in 1987',
      description: 'Meer dan 35 jaar ervaring in taxivervoer. Een naam die staat voor betrouwbaarheid in Echt en omgeving.',
    },
    {
      icon: '👥',
      title: '49 Professionals',
      description: 'Ons team van gediplomeerde chauffeurs zorgt voor een veilige en comfortabele rit naar uw bestemming.',
    },
    {
      icon: '🗺️',
      title: 'Regionaal & Nationaal',
      description: 'Van een ritje in Echt tot een rit naar Schiphol of Brussel — wij brengen u overal.',
    },
  ],

  services: [
    {
      id: 'personenvervoer',
      name: 'Personenvervoer',
      description: 'Comfortabel en betrouwbaar vervoer voor particulieren. Of het nu gaat om een avondje uit, doktersbezoek of treinstation — wij rijden u.',
      icon: '🚕',
      features: ['Punctueel en betrouwbaar', 'Deur-tot-deur service', 'Comfortabele voertuigen', 'Vriendelijke chauffeurs'],
    },
    {
      id: 'luchthaven',
      name: 'Luchthaventritten',
      description: 'Zorgeloos naar Schiphol, Eindhoven, Düsseldorf, Brussel of Charleroi. Wij volgen uw vlucht live mee.',
      icon: '✈️',
      features: ['Vluchtvolging inbegrepen', 'Vroeg of laat — geen probleem', 'Ruime kofferruimte', 'Vaste en eerlijke prijs'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Representatief en stipt vervoer voor uw zakelijke afspraken. Facturatie op rekening mogelijk.',
      icon: '💼',
      features: ['Maandelijkse factuur', 'Vaste vaste chauffeurs', 'Tijdige bevestiging', 'Op maat gemaakte afspraken'],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      description: 'Zorgvuldig vervoer naar ziekenhuis, specialist of behandelcentrum. Met extra aandacht voor passagiers die extra zorg nodig hebben.',
      icon: '🏥',
      features: ['Geduldig en attent', 'Rolstoelvriendelijk', 'Aangepaste voertuigen mogelijk', 'Begeleidingspersoon welkom'],
    },
    {
      id: 'groepsvervoer',
      name: 'Groepsvervoer',
      description: 'Groot gezelschap? Geen probleem. Wij organiseren vervoer voor groepen voor uitjes, bedrijfsuitstapjes of evenementen.',
      icon: '🚌',
      features: ['Meerdere voertuigen beschikbaar', 'Coördinatie op maat', 'Comfortabele busjes', 'Op aanvraag'],
    },
    {
      id: 'treinstation',
      name: 'Stationstransfers',
      description: 'Transfer van en naar station Echt-Susteren, Sittard, Roermond of andere stations in de regio.',
      icon: '🚉',
      features: ['Directe verbinding', 'Flexibele tijden', 'Koffers meenemen', 'Vaste prijs'],
    },
  ],

  about: {
    title: 'Ruim 35 jaar uw vertrouwde taxi in Echt',
    story: 'Taxibedrijf Van der Varst werd opgericht in 1987 in Echt, en is sindsdien uitgegroeid tot één van de meest betrouwbare taxibedrijven in Midden-Limburg. Met een team van 49 professionele chauffeurs zorgen wij dagelijks voor comfortabel en veilig vervoer van onze klanten.',
    mission: 'Onze missie is simpel: u veilig, comfortabel en op tijd naar uw bestemming brengen. We werken met moderne, goed onderhouden voertuigen en chauffeurs die hun vak verstaan. Persoonlijk contact staat bij ons centraal — u bent geen nummer, maar een gewaardeerde klant.',
    image: 'https://images.unsplash.com/photo-1501191830500-0513b5d594cd?q=80&w=1200&auto=format&fit=crop',
    values: [
      'Betrouwbaarheid als fundament',
      'Veiligheid staat voorop',
      'Stipt en punctueel',
      'Persoonlijke aandacht',
      'Eerlijke tarieven',
    ],
  },

  tarieven: [
    { omschrijving: 'Starttarief', tarief: '€ 3,50' },
    { omschrijving: 'Per kilometer (dag)', tarief: '€ 2,20' },
    { omschrijving: 'Per kilometer (nacht)', tarief: '€ 2,75' },
    { omschrijving: 'Wachttijd per uur', tarief: '€ 35,00' },
    { omschrijving: 'Echt → Schiphol (v.a.)', tarief: '€ 195,00' },
    { omschrijving: 'Echt → Eindhoven Airport (v.a.)', tarief: '€ 85,00' },
    { omschrijving: 'Echt → Düsseldorf (v.a.)', tarief: '€ 110,00' },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Marianne Janssen',
      role: 'Vaste klant uit Echt',
      rating: 5,
      text: 'Al jaren maak ik gebruik van Van der Varst voor mijn ritten naar het ziekenhuis. Altijd op tijd, altijd vriendelijk. Ik zou nooit ergens anders naartoe gaan.',
    },
    {
      id: 2,
      name: 'Rob Hendrikx',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Voor zakelijke ritten is Van der Varst onmisbaar. Betrouwbaar, professioneel en de factuurafhandeling gaat altijd vlekkeloos.',
    },
    {
      id: 3,
      name: 'Sandra Peters',
      role: 'Particuliere klant uit Roermond',
      rating: 5,
      text: 'Vroege vlucht van Schiphol gepakt en Van der Varst heeft me perfect gebracht. Ze volgden zelfs mijn vlucht — topservice!',
    },
    {
      id: 4,
      name: 'Gerard Claessens',
      role: 'Klant uit Susteren',
      rating: 5,
      text: 'Vriendelijke chauffeurs en nette auto\'s. Ik bel al meer dan 10 jaar bij Van der Varst voor al mijn taxiritten.',
    },
  ],

  serviceArea: [
    'Echt', 'Susteren', 'Sittard', 'Geleen', 'Roermond', 'Stein',
    'Beek', 'Maasbracht', 'Born', 'Urmond', 'Herten', 'Montfort',
  ],
};
