import type { HousmansConfig } from './types';

export const config: HousmansConfig = {
  basePath: '/preview/taxibedrijf-housmans',
  id: 'taxibedrijf-housmans',
  name: 'Taxibedrijf Housmans',
  tagline: 'Betrouwbaar taxivervoer in Echt & omgeving',
  description: 'Taxibedrijf Housmans verzorgt al jaren betrouwbaar en betaalbaar taxivervoer vanuit Echt. Van luchthaventritten tot zorgvervoer — wij zijn er voor u.',

  colors: {
    primary: '#0F2044',
    primaryDark: '#080F22',
    accent: '#F97316',
    accentHover: '#EA6C0A',
    text: '#0F172A',
  },

  contact: {
    address: 'Peijerstraat 116',
    city: '6101 GH Echt',
    phone: '+31619799173',
    phoneDisplay: '06-19 799 173',
    email: 'info@taxibedrijfhousmans.nl',
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
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw taxi in Echt & omgeving',
    subtitle: 'Snel, veilig en persoonlijk vervoer. Vaste tarieven, geen verrassingen. Dag en nacht beschikbaar.',
    image: 'https://images.unsplash.com/photo-1553522991-f2f16b8f04ea?w=1920&h=1080&fit=crop',
    cta: 'Rit Berekenen',
    ctaLink: '/#boeken',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description: 'Of het nu vroeg in de ochtend of laat in de nacht is — Taxibedrijf Housmans rijdt altijd voor u.',
    },
    {
      icon: '💶',
      title: 'Vaste Tarieven',
      description: 'Geen rijdende meter. Vooraf weet u exact wat de rit kost. Eerlijk en transparant.',
    },
    {
      icon: '🚗',
      title: 'Nette Voertuigen',
      description: 'Wij rijden in goed onderhouden en comfortabele voertuigen voor een aangename rit.',
    },
    {
      icon: '📍',
      title: 'Lokale Kennis',
      description: 'Als Echtenaar kennen wij de regio op ons duimpje. Altijd de snelste route.',
    },
  ],

  tarieven: [
    {
      titel: 'Basistarieven',
      regels: [
        { omschrijving: 'Starttarief', tarief: '€ 3,50' },
        { omschrijving: 'Prijs per km (dag — 06:00–22:00)', tarief: '€ 2,25' },
        { omschrijving: 'Prijs per km (nacht — 22:00–06:00)', tarief: '€ 2,85' },
        { omschrijving: 'Wachttarief per uur', tarief: '€ 32,00' },
      ],
    },
    {
      titel: 'Populaire Ritten',
      regels: [
        { omschrijving: 'Echt → Sittard station', tarief: 'Vanaf € 18,00' },
        { omschrijving: 'Echt → Eindhoven Airport', tarief: 'Vanaf € 70,00' },
        { omschrijving: 'Echt → Maastricht Aachen Airport', tarief: 'Vanaf € 35,00' },
        { omschrijving: 'Echt → Schiphol Airport', tarief: 'Vanaf € 155,00' },
        { omschrijving: 'Ziekenhuisvervoer (enkele reis)', tarief: 'Vanaf € 15,00' },
      ],
    },
    {
      titel: 'Overig',
      regels: [
        { omschrijving: 'Groepsvervoer', tarief: 'Op aanvraag' },
        { omschrijving: 'Zakelijk (maandfactuur)', tarief: 'Op aanvraag' },
        { omschrijving: 'Evenementen & feesten', tarief: 'Op aanvraag' },
      ],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Ria Janssen',
      rating: 5,
      text: 'Altijd keurig op tijd en een nette auto. Ik bel geen andere taxi meer. Vriendelijke chauffeur ook!',
    },
    {
      id: 2,
      name: 'Tom Geraedts',
      rating: 5,
      text: 'Voor mijn vluchten vanuit Eindhoven is Housmans mijn vaste keuze. Vaste prijs, geen gedoe, altijd aanwezig.',
    },
    {
      id: 3,
      name: 'Lies Peeters',
      rating: 5,
      text: 'Zorgvervoer naar het ziekenhuis in Roermond. Super vriendelijk en geduldig. Echt een aanrader!',
    },
  ],
};
