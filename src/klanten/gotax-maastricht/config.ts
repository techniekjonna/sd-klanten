import type { SjabloonConfig } from './types';

export const config: SjabloonConfig = {
  basePath: '/preview/gotax-maastricht',
  id: 'gotax-maastricht',
  name: 'GoTax Maastricht',
  tagline: 'Luxe taxi service in Maastricht & omstreken',
  description: 'Rijd in stijl met GoTax Maastricht. Van luchthaventritten tot zakelijke ritten — wij brengen u comfortabel en op tijd op uw bestemming.',

  colors: {
    primary: '#C9A84C',
    primaryHover: '#B8962E',
    primaryLight: '#F5EED6',
    text: '#1A1A1A',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Maastricht, Limburg',
    phone: '+31 43 123 4567',
    email: 'info@gotaxmaastricht.nl',
    hours: {
      weekday: '24/7 beschikbaar',
      weekend: '24/7 beschikbaar',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw luxe taxi',
    highlight: 'in Maastricht',
    subtitle: 'Professionele chauffeurs, premium voertuigen en onberispelijke service. Altijd op tijd, altijd in stijl.',
    image: 'https://images.unsplash.com/photo-1482029255085-35a4a48b7084?q=80&w=3131&auto=format&fit=crop',
    cta: 'Direct Boeken',
    ctaLink: '/contact',
    ctaSecondary: 'Onze Diensten',
    ctaSecondaryLink: '/diensten',
  },

  features: [
    {
      icon: '🎩',
      title: 'Premium Comfort',
      description: 'Rijd in onze luxe voertuigen zoals de Bentley Flying Spur voor een onvergetelijke ervaring.',
    },
    {
      icon: '⏱️',
      title: 'Altijd Op Tijd',
      description: 'Punctualiteit is onze prioriteit. Wij zijn er wanneer u ons nodig heeft, dag en nacht.',
    },
    {
      icon: '👔',
      title: 'Professionele Chauffeurs',
      description: 'Onze gecertificeerde chauffeurs zijn discreet, vriendelijk en kennen de regio als hun broekzak.',
    },
    {
      icon: '🌍',
      title: 'Alle Bestemmingen',
      description: 'Van Maastricht naar Schiphol, Brussel, Düsseldorf of waar u ook heen wilt — wij rijden u.',
    },
  ],

  services: [
    {
      id: 'luchthaven',
      name: 'Luchthavenvervoer',
      description: 'Comfortabel en stressvrij naar Schiphol, Eindhoven, Brussel of Düsseldorf. Vluchtvolging inbegrepen.',
      priceLabel: 'Vanaf €85',
      icon: '✈️',
      features: ['Vluchtvolging', 'Ruime bagageruimte', 'Retour mogelijk', 'Alle luchthavens'],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description: 'Indruk maken begint bij de aankomst. Onze zakelijke service is discreet, punctueel en professioneel.',
      priceLabel: 'Op maat',
      icon: '💼',
      features: ['Vaste chauffeur', 'Factuur mogelijk', 'WiFi beschikbaar', 'Vertrouwelijk'],
    },
    {
      id: 'evenement',
      name: 'Evenementen & Gala',
      description: 'Bruiloften, galadiensten of VIP-evenementen — maak uw entree onvergetelijk in een premium voertuig.',
      priceLabel: 'Vanaf €120',
      icon: '🥂',
      features: ['Bentley beschikbaar', 'Rode loper service', 'Decoratie op maat', 'Flexibele tijden'],
    },
    {
      id: 'dagtocht',
      name: 'Dagtochten & Tours',
      description: 'Ontdek Limburg, de Ardennen of laat u rondrijden door een chauffeur die de streek kent.',
      priceLabel: 'Vanaf €150/dag',
      icon: '🗺️',
      features: ['Volledige dag', 'Persoonlijke route', 'Meerdere stops', 'Regiokennis'],
    },
  ],

  about: {
    title: 'Over GoTax Maastricht',
    story: 'GoTax Maastricht is opgericht vanuit een passie voor premium vervoer en gastvrijheid. Wij geloven dat een taxirit meer kan zijn dan alleen van A naar B komen — het is een ervaring. Onze vloot van luxevoertuigen, waaronder de iconische Bentley, staat garant voor comfort en klasse.',
    mission: 'Onze missie is simpel: elke klant behandelen als een VIP. Of u nu een luchthaventry boekt, een zakelijke vergadering bijwoont of een speciale gelegenheid viert — wij zorgen dat u in stijl aankomt. Discreet, betrouwbaar en altijd met een glimlach.',
    image: 'https://images.unsplash.com/photo-1631107452534-b8f9868a8b20?q=80&w=2348&auto=format&fit=crop',
    values: [
      'Luxe & comfort als standaard',
      'Stiptheid zonder compromis',
      'Persoonlijke aandacht',
      'Discreet & professioneel',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Thomas van den Berg',
      role: 'CEO, Maastricht',
      rating: 5,
      text: 'GoTax heeft mij al tientallen keren naar Schiphol gebracht. Altijd op tijd, stille Bentley, perfecte service. Absolute aanrader voor zakelijk gebruik.',
    },
    {
      id: 2,
      name: 'Sophie Janssen',
      role: 'Bruid, Valkenburg',
      rating: 5,
      text: 'Voor onze bruiloft hebben we GoTax ingehuurd en het was magisch. De auto was prachtig versierd en de chauffeur was zo attent. Dank jullie wel!',
    },
    {
      id: 3,
      name: 'Marc Leclercq',
      role: 'Zakenman, Brussel',
      rating: 5,
      text: 'Als ik in Maastricht ben, gebruik ik altijd GoTax. Professionele chauffeurs die Frans en Duits spreken — ideaal voor internationale gasten.',
    },
  ],
};
