import type { KnolConfig } from './types';

export const config: KnolConfig = {
  basePath: '/preview/taxibedrijf-knol',
  id: 'taxibedrijf-knol',
  name: 'Taxibedrijf Knol',
  tagline: 'Betrouwbaar taxivervoer in Brunssum & omgeving',
  description: 'Taxibedrijf Knol B.V. verzorgt al jaren personen- en zakelijk vervoer in en rondom Brunssum. Stap in, leun achterover en laat ons u veilig op uw bestemming brengen.',

  colors: {
    primary: '#F97316',
    primaryHover: '#EA6C0A',
    primaryLight: '#FFF7ED',
    dark: '#1C1C2E',
    text: '#111827',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Trichterweg 111, 6446 AR Brunssum',
    phone: '0455230194',
    phoneDisplay: '045 – 523 01 94',
    email: 'info@taxibedrijfknol.nl',
    hours: {
      weekday: '07:00 – 22:00',
      weekend: '08:00 – 22:00',
      note: 'Buiten kantoortijden op afspraak',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw vertrouwde taxi in',
    highlight: 'Brunssum',
    subtitle: 'Knol staat klaar voor al uw ritten — van deur tot deur, op tijd en met een glimlach.',
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=1920&h=1080&fit=crop',
  },

  features: [
    {
      icon: '⏱️',
      title: 'Altijd op tijd',
      description: 'Wij rijden strak op schema. U hoeft niet te wachten — wij staan klaar.',
    },
    {
      icon: '🗺️',
      title: 'Regio kennis',
      description: 'Jarenlange ervaring in Brunssum en de wijde omgeving van Zuid-Limburg.',
    },
    {
      icon: '🛡️',
      title: 'Veilig & verzekerd',
      description: 'Gecertificeerde chauffeurs, goed onderhouden voertuigen en volledige verzekering.',
    },
    {
      icon: '📞',
      title: '24/7 bereikbaar',
      description: 'Dag en nacht kunt u ons bellen voor een rit, ook buiten reguliere tijden.',
    },
  ],

  services: [
    {
      id: 'straattaxi',
      name: 'Straattaxi',
      description: 'Snel een taxi nodig? Bel ons en wij staan binnen de kortste keren voor uw deur. Lokale ritten in Brunssum en omgeving.',
      priceLabel: 'Vaste tarieven',
      icon: '🚖',
      features: ['Directe beschikbaarheid', 'Vaste lage tarieven', 'Kort en lang afstand', 'Cash & pin'],
    },
    {
      id: 'airport',
      name: 'Vliegveld Transfer',
      description: 'Comfortabele transfers naar Maastricht Aachen Airport, Eindhoven, Düsseldorf en Schiphol. Op tijd, geen stress.',
      priceLabel: 'Vanaf vaste prijs',
      icon: '✈️',
      features: ['Alle grote luchthavens', 'Ruime kofferruimte', 'Vluchttracking', 'Vroegboekkorting'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Betrouwbaar en discreet zakelijk vervoer voor uw medewerkers of gasten. Facturatie op rekening mogelijk.',
      priceLabel: 'Op maat',
      icon: '💼',
      features: ['Maandelijkse factuur', 'Vaste chauffeur mogelijk', 'Representatieve auto', 'Altijd op tijd'],
    },
    {
      id: 'zorgvervoer',
      name: 'Zorgvervoer',
      description: 'Vervoer naar het ziekenhuis, kliniek of revalidatiecentrum. Rustig, geduldig en betrouwbaar voor mensen die extra zorg nodig hebben.',
      priceLabel: 'WMO mogelijk',
      icon: '🏥',
      features: ['Zorgvuldig & geduldig', 'Rolstoel vervoer', 'WMO-vervoer', 'Vaste vertrektijden'],
    },
  ],

  about: {
    title: 'Over Taxibedrijf Knol',
    story: 'Taxibedrijf Knol B.V. is een vertrouwd taxibedrijf gevestigd in Brunssum, in het hart van Zuid-Limburg. Al jarenlang verzorgen wij personen- en zakelijk vervoer voor particulieren, bedrijven en zorginstellingen in de regio. Ons team kent de wegen van Brunssum en omgeving als geen ander.',
    mission: 'Wij geloven dat goed taxivervoer meer is dan iemand van A naar B brengen. Het gaat om veiligheid, punctualiteit en een vriendelijk gezicht achter het stuur. Die missie draagt elk lid van ons team elke dag met zich mee.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop',
    founded: 'Brunssum',
    values: [
      'Betrouwbaarheid staat voorop',
      'Klant is altijd welkom',
      'Veiligheid boven alles',
      'Eerlijke, vaste tarieven',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Henk van den Berg',
      role: 'Vaste klant, Brunssum',
      rating: 5,
      text: 'Al jaren rij ik met Knol naar het vliegveld. Altijd stipt op tijd, vriendelijke chauffeurs en een nette auto. Ik vertrouw het volledig.',
    },
    {
      id: 2,
      name: 'Ria Janssen',
      role: 'Zorgvervoer klant',
      rating: 5,
      text: 'Voor mijn ritten naar het ziekenhuis gebruik ik altijd Taxibedrijf Knol. Ze zijn geduldig, helpen je in en uit de auto en zijn altijd op tijd.',
    },
    {
      id: 3,
      name: 'Mark Peeters',
      role: 'Zakelijk klant',
      rating: 5,
      text: 'Wij sturen onze klanten altijd met Knol. Professioneel, discreet en nooit te laat. Een absolute aanrader voor zakelijk vervoer.',
    },
  ],
};
