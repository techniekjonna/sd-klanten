import type { SjabloonConfig } from './types';

export const config: SjabloonConfig = {
  basePath: '/preview/dm-taxi-parkstad',
  id: 'dm-taxi-parkstad',
  name: 'D&M Taxi Parkstad',
  tagline: 'Betrouwbaar taxivervoer in Parkstad & omgeving',
  description: 'D&M Taxi Parkstad verzorgt professioneel en punctueel taxivervoer in de Parkstad-regio. Van Heerlen tot Kerkrade, van het ziekenhuis tot het vliegveld — wij zijn er voor u.',

  colors: {
    primary: '#1B3F6E',
    primaryHover: '#142F54',
    primaryLight: '#EEF4FB',
    text: '#1A2332',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Jonkheerstraat 1, Landgraaf',
    phone: '+31455700300',
    email: 'info@dmtaxiparkstad.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Ritten', path: '/ritten' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw taxi in',
    highlight: 'Parkstad',
    subtitle: 'Snel, veilig en comfortabel vervoer door heel de Parkstad-regio. Vaste tarieven, vriendelijke chauffeurs en 24/7 beschikbaar.',
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=1920&h=1080&fit=crop',
    cta: 'Direct Boeken',
    ctaLink: '/contact',
    ctaSecondary: 'Bel Ons Nu',
    ctaSecondaryLink: '/contact',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description: 'Dag en nacht voor u klaar. Of het vroeg ochtend of diep in de nacht is — wij rijden altijd voor u.',
    },
    {
      icon: '📍',
      title: 'Heel Parkstad',
      description: 'Heerlen, Landgraaf, Kerkrade, Brunssum, Nuth en omliggende gemeenten — wij kennen de regio op onze duim.',
    },
    {
      icon: '💶',
      title: 'Vaste Tarieven',
      description: 'Afgesproken prijs is uw eindprijs. Geen meter, geen verrassingen — transparant en eerlijk.',
    },
    {
      icon: '🚖',
      title: 'Nette Voertuigen',
      description: "Goed onderhouden, ruime en schone auto's voor een comfortabele rit naar uw bestemming.",
    },
  ],

  services: [
    {
      id: 'lokaal',
      name: 'Lokaal Vervoer',
      description: 'Van deur tot deur door heel Parkstad. Snel en betrouwbaar voor dagelijkse ritten, boodschappen, bezoeken of een avondje uit.',
      priceLabel: 'Vaste prijs op aanvraag',
      icon: '🏙️',
      features: ['Heerlen, Kerkrade, Landgraaf & meer', 'Particulier en zakelijk', 'Avond- en nachtritten', 'Rolstoeltoegankelijk op aanvraag'],
    },
    {
      id: 'ziekenhuis',
      name: 'Ziekenhuisvervoer',
      description: 'Comfortabel en rustig vervoer naar het ziekenhuis of medische instelling. Wij wachten op u en brengen u veilig thuis.',
      priceLabel: 'Vaste prijs op aanvraag',
      icon: '🏥',
      features: ['Atrium MC Heerlen', 'Zuyderland Heerlen & Brunssum', 'Wachten en terugrijden', 'Hulpbehoevende passagiers welkom'],
    },
    {
      id: 'vliegveld',
      name: 'Vliegveldvervoer',
      description: 'Stressvrij naar Maastricht-Aachen, Eindhoven, Schiphol of Düsseldorf. Wij volgen uw vlucht live mee.',
      priceLabel: 'Vaste prijs op aanvraag',
      icon: '✈️',
      features: ['Maastricht-Aachen Airport', 'Eindhoven & Schiphol', 'Düsseldorf & Keulen-Bonn', 'Vluchttracking inbegrepen'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Professioneel en discreet vervoer voor bedrijven. Maandelijkse facturatie, vaste chauffeurs en stipt op tijd.',
      priceLabel: 'Op maat — vraag offerte',
      icon: '💼',
      features: ['Maandfacturatie voor bedrijven', 'Vaste chauffeur op aanvraag', 'Luchthaventritten zakelijk', 'Groepsvervoer & evenementen'],
    },
  ],

  about: {
    title: 'Over D&M Taxi Parkstad',
    story: 'D&M Taxi Parkstad staat al jaren voor betrouwbaar en persoonlijk taxivervoer in de Parkstad-regio. Vanuit Landgraaf rijden wij dagelijks voor particulieren en bedrijven door heel Zuid-Limburg. Onze kracht zit in korte lijnen, eerlijke prijzen en chauffeurs die weten wat service echt betekent.',
    mission: 'Wij geloven dat goed vervoer meer is dan van A naar B komen. Het gaat om vertrouwen, stiptheid en een prettige rit. Daarom staan onze chauffeurs altijd voor u klaar — of het nu vroeg in de ochtend is of laat in de nacht.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&h=800&fit=crop',
    values: [
      'Altijd op tijd',
      'Eerlijke vaste tarieven',
      'Vriendelijk en discreet',
      'Kennis van de regio',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Riet Janssen',
      role: 'Particuliere klant, Heerlen',
      rating: 5,
      text: 'Voor mijn ziekenhuisbezoeken gebruik ik D&M Taxi. Ze zijn er altijd op tijd, wachten geduldig en brengen me veilig thuis. Fijn en betrouwbaar!',
    },
    {
      id: 2,
      name: 'Kevin Meertens',
      role: 'Zakelijke klant, Kerkrade',
      rating: 5,
      text: 'Al onze vliegveldritten gaan via D&M. Netjes, punctueel en ze volgen de vlucht mee. Precies wat je nodig hebt voor zakenreizen.',
    },
    {
      id: 3,
      name: 'Anja Willems',
      role: 'Particuliere klant, Landgraaf',
      rating: 5,
      text: 'Vriendelijke chauffeur, schone auto en een eerlijke prijs vooraf. Wat wil je nog meer? Ik boek ze altijd voor een avondje uit.',
    },
  ],
};
