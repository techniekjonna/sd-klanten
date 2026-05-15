import type { GrootveldConfig } from './types';

export const config: GrootveldConfig = {
  basePath: '/preview/grootveld',
  id: 'grootveld',
  name: 'Grootveld',
  tagline: 'Takel- en Taxibedrijf',
  description: 'Takel- en Taxibedrijf Grootveld B.V. staat dag en nacht voor u klaar. Of u nu snel en veilig naar uw bestemming wil of hulp nodig heeft na een pech of ongeval — wij regelen het.',

  colors: {
    primary: '#1A5C38',
    primaryHover: '#145030',
    primaryLight: '#D1FAE5',
    text: '#1A2B1E',
    background: '#FFFFFF',
    amber: '#D97706',
  },

  contact: {
    address: 'Grootveld 12, 8900 AB Leeuwarden',
    phone: '+31 58 123 45 67',
    email: 'info@grootveld-taxi.nl',
    hours: {
      weekday: '00:00 – 24:00',
      weekend: '00:00 – 24:00',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw specialist in\ntaxi & takelservice',
    subtitle: 'Van de weg naar uw bestemming, of van pech naar veiligheid — Grootveld staat 24/7 voor u klaar in Noord-Nederland.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop',
    cta: 'Rit Berekenen',
    ctaLink: '/contact',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description: 'Dag en nacht, 365 dagen per jaar. Ook in het weekend en op feestdagen staan wij voor u klaar.',
    },
    {
      icon: '📍',
      title: 'Vaste Tarieven',
      description: 'Geen verrassingen achteraf. U weet van tevoren exact wat de rit of takelservice kost.',
    },
    {
      icon: '🚗',
      title: 'Modern Wagenpark',
      description: 'Comfortabele en goed onderhouden voertuigen voor taxivervoer én professioneel takelmaterieel.',
    },
    {
      icon: '🛡️',
      title: 'Gecertificeerd & Verzekerd',
      description: 'Volledig gediplomeerd en verzekerd voor alle soorten vervoer en bergingen.',
    },
  ],

  services: [
    {
      id: 'taxi',
      name: 'Taxivervoer',
      description: 'Betrouwbaar personenvervoer voor particulieren en bedrijven. Van de deur tot de bestemming, comfortabel en op tijd.',
      priceLabel: 'Vaste prijs',
      icon: '🚕',
      features: [
        'Luchthaven- en treinstation transfers',
        'Zakelijk vervoer op rekening',
        'Zorgvervoer en rolstoeltaxi',
        'Groepsvervoer (max. 8 personen)',
        'Vooraf vaste prijsafspraak',
      ],
    },
    {
      id: 'takel',
      name: 'Takelservice',
      description: 'Snelle en professionele hulp bij pech, ongelukken of vastgereden voertuigen. Wij bergen uw auto veilig en snel.',
      priceLabel: 'Op aanvraag',
      icon: '🚛',
      features: [
        'Pechverhelping op locatie',
        'Berging na aanrijding of ongeluk',
        'Afslepen naar garage naar keuze',
        'Motorrijwiel en bestelwagen',
        'Snel ter plaatse (gem. 30 min.)',
      ],
    },
    {
      id: 'luchthaven',
      name: 'Luchthaven Transfer',
      description: 'Stressvrij van huis naar Schiphol, Eindhoven, Groningen Airport of een andere luchthaven. Op tijd, gegarandeerd.',
      priceLabel: 'Vaste prijs',
      icon: '✈️',
      features: [
        'Alle Nederlandse luchthavens',
        'Gratis wachttijd bij vertraging',
        'Ruime bagageruimte',
        'Vroege en late vluchten',
        'Online boeken mogelijk',
      ],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Betrouwbaar vervoer voor uw medewerkers en gasten. Maandelijkse facturatie en vaste contactpersoon.',
      priceLabel: 'Maatwerk',
      icon: '💼',
      features: [
        'Contractvervoer met factuur',
        'Vaste chauffeur op aanvraag',
        'Vervoer naar vergaderingen en events',
        'Discreet en professioneel',
        'Rapportage op aanvraag',
      ],
    },
  ],

  about: {
    title: 'Over Grootveld',
    story: 'Takel- en Taxibedrijf Grootveld B.V. is al decennialang een vertrouwd gezicht in Noord-Nederland. Wat begon als een kleinschalig familiebedrijf is uitgegroeid tot een professioneel bedrijf dat dagelijks honderden ritten verzorgt en klaarstaat bij pech en bergingen.',
    mission: 'Onze kracht zit in de combinatie van taxi en takelservice onder één dak. Dat betekent dat wij niet alleen u veilig naar uw bestemming brengen, maar ook uw voertuig kunnen bergen als dat nodig is. Altijd met vaste tarieven en persoonlijk contact.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
    values: [
      'Betrouwbaarheid in alles wat we doen',
      'Vaste tarieven, geen verrassingen',
      '24/7 bereikbaar voor noodsituaties',
      'Persoonlijk en klantgericht',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Henk Visser',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Na een lekke band midden in de nacht was Grootveld binnen 25 minuten ter plaatse. Vriendelijk, professioneel en eerlijk geprijsd. Echt een aanrader!',
    },
    {
      id: 2,
      name: 'Sandra de Boer',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Wij laten al onze medewerkers vervoeren door Grootveld. Altijd op tijd, schone auto\'s en een vaste chauffeur. Ideaal voor ons als bedrijf.',
    },
    {
      id: 3,
      name: 'Arjan Meijer',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Van Leeuwarden naar Schiphol voor een vroege vlucht — geen enkel probleem. Grootveld was op tijd, auto was schoon en de prijs was vooraf duidelijk afgesproken.',
    },
  ],
};
