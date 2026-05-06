import type { ErwinConfig } from './types';

export const config: ErwinConfig = {
  basePath: '/preview/schoonmaakbedrijf-erwin',
  id: 'schoonmaakbedrijf-erwin',
  name: 'Schoonmaakbedrijf Erwin',
  tagline: 'Professioneel Glazenwassen in Zuid-Limburg',
  description: 'Uw specialist voor glazenwassen, schilderwerk en glas zetten in Geleen en omgeving. Al actief sinds 2009 — vakmanschap dat u kunt vertrouwen.',
  kvk: '14110743',
  opgericht: '2009',
  werkgebied: ['Geleen', 'Sittard', 'Beek', 'Stein', 'Born', 'Schinnen', 'Susteren', 'Maastricht', 'Heerlen', 'Roermond'],

  colors: {
    primary: '#1D4ED8',
    primaryHover: '#1E3A8A',
    primaryDark: '#1e3a8a',
    primaryLight: '#DBEAFE',
    text: '#0F172A',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Geleen, Zuid-Limburg',
    phone: '+31 6 00 00 00 00',
    email: 'info@schoonmaakbedrijf-erwin.nl',
    whatsapp: '+31600000000',
    hours: {
      weekday: '07:00 - 18:00',
      weekend: 'Op afspraak',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Afspraak', path: '/afspraak' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Kristalhelder Schone',
    highlight: 'Ramen & Gevel',
    subtitle: 'Professioneel glazenwassen voor particulieren en bedrijven in Geleen en omgeving. Meer dan 15 jaar vakmanschap — snel, netjes en voor een eerlijke prijs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
    cta: 'Afspraak Maken',
    ctaLink: '/afspraak',
    ctaSecondary: 'Bekijk Diensten',
    ctaSecondaryLink: '/diensten',
  },

  features: [
    {
      icon: '🪟',
      title: '15+ Jaar Ervaring',
      description: 'Opgericht in 2009 en sindsdien de vertrouwde glazenwasser in Zuid-Limburg. Vakmanschap dat u kunt zien.',
    },
    {
      icon: '💧',
      title: 'Osmosewater Techniek',
      description: 'Wij werken met gezuiverd osmosewater en een telescoopsysteem. Geen kalk, geen strepen — gegarandeerd kristalhelder resultaat.',
    },
    {
      icon: '📋',
      title: 'KvK Geregistreerd',
      description: 'Schoonmaakbedrijf Erwin is officieel ingeschreven bij de Kamer van Koophandel (KvK 14110743). Betrouwbaar en professioneel.',
    },
    {
      icon: '📍',
      title: 'Lokale Vakman',
      description: 'Gevestigd in Geleen en actief in de hele regio Zuid-Limburg. Snel ter plaatse, persoonlijk contact.',
    },
  ],

  services: [
    {
      id: 'glazenwassen-particulier',
      name: 'Glazenwassen Particulier',
      description: 'Uw ramen professioneel gewassen — van kleine tussenwoning tot vrijstaande villa. Wij werken met osmosewater voor een streepvrij, glashelder resultaat zonder gebruik van chemische middelen.',
      priceLabel: 'Vanaf €15',
      icon: '🏠',
      features: [
        'Binnen én buiten wassen',
        'Osmosewater — geen kalk of strepen',
        'Kozijnen en dorpels mee schoongemaakt',
        'Eenmalig of periodiek abonnement',
        'Alle woningtypes: tussen-, hoek- en vrijstaand',
      ],
    },
    {
      id: 'glazenwassen-zakelijk',
      name: 'Glazenwassen Zakelijk',
      description: 'Een professionele uitstraling begint bij schone ramen. Voor kantoren, winkelpanden, horeca en andere bedrijfspanden verzorgen wij regelmatig en betrouwbaar het glazenwaswerk.',
      priceLabel: 'Op offerte',
      icon: '🏢',
      features: [
        'Kantoren, winkels en horeca',
        'Vaste reinigingsschema op maat',
        'Factuurafhandeling',
        'Flexibel buiten openingstijden',
        'Gevelreiniging mogelijk',
      ],
    },
    {
      id: 'schilderwerk',
      name: 'Schilderwerk',
      description: 'Naast glazenwassen verzorgen wij ook binnen- en buitenschilderwerk voor particulieren. Van een frisse woonkamer tot het schilderen van kozijnen, deuren en gevelelementen.',
      priceLabel: 'Op offerte',
      icon: '🎨',
      features: [
        'Binnenschilderwerk: muren, plafonds, deuren',
        'Buitenschilderwerk: kozijnen, luiken, hekken',
        'Grondige voorbereiding en afwerking',
        'Hoogwaardige verf- en materiaalgebruik',
        'Nette oplevering met beschermfolie',
      ],
    },
    {
      id: 'glas-zetten',
      name: 'Glas Zetten & Schoonmaak',
      description: 'Gebroken ruit? Wij verzorgen het zetten van glas voor ramen en deuren. Ook voor algemeen schoonmaakwerk bij particulieren bent u bij ons aan het juiste adres.',
      priceLabel: 'Op offerte',
      icon: '🔨',
      features: [
        'Gebroken glas vervangen',
        'Enkelvoudig en dubbelglas',
        'Snel en vakkundig geplaatst',
        'Algemeen schoonmaakwerk',
        'Klein timmerwerk rondom glas',
      ],
    },
    {
      id: 'zonnepanelen',
      name: 'Zonnepanelen Reinigen',
      description: 'Vuile zonnepanelen leveren tot 25% minder energie op. Wij reinigen uw panelen met osmosewater — veilig, grondig en zonder krassen — zodat u maximaal rendement behoudt.',
      priceLabel: 'Vanaf €35',
      icon: '☀️',
      features: [
        'Reiniging met osmosewater',
        'Geen krasrisico op panelen',
        'Verhoogd zonne-rendement',
        'Veilige werkwijze op dak',
        'Te combineren met glazenwasbeurt',
      ],
    },
    {
      id: 'abonnement',
      name: 'Onderhoudsabonnement',
      description: 'Ontzorging het hele jaar door. Kies een vaste frequentie en wij plannen automatisch de afspraken in. Nooit meer denken aan uw ramen — wij zorgen ervoor.',
      priceLabel: 'Vast tarief',
      icon: '📅',
      features: [
        'Keuze: elke 4, 6 of 8 weken',
        'Vaste prijs per beurt',
        'Automatisch ingepland',
        'Geen contractverplichting',
        'Altijd dezelfde vertrouwde vakman',
      ],
    },
  ],

  about: {
    title: 'Over Schoonmaakbedrijf Erwin',
    story: 'Schoonmaakbedrijf Erwin is op 1 februari 2009 opgericht en heeft sindsdien tientallen tevreden klanten in de regio Zuid-Limburg bediend. Als eenmanszaak staat Erwin zelf altijd voor u klaar — geen onderaannemers, maar direct contact met de vakman die uw werk uitvoert.',
    mission: 'Onze aanpak is eenvoudig: eerlijk werk voor een eerlijke prijs. We komen op de afgesproken tijd, werken netjes en verlaten uw terrein altijd schoner dan we het aantroffen. Dat is geen belofte — dat is gewoon hoe het hoort.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop',
    values: [
      'Al meer dan 15 jaar vakmanschap',
      'Persoonlijk contact — altijd dezelfde vakman',
      'Eerlijke prijzen zonder verborgen kosten',
      'Streepvrij resultaat of wij komen terug',
      'KvK-geregistreerd & betrouwbaar',
      'Werkgebied heel Zuid-Limburg',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Ria Janssen',
      role: 'Particuliere klant, Geleen',
      rating: 5,
      text: 'Erwin wast al jaren mijn ramen. Altijd op tijd, altijd netjes en de ramen zijn altijd streepvrij schoon. Echt een betrouwbare vakman waar je op kunt rekenen.',
    },
    {
      id: 2,
      name: 'Marco Peters',
      role: 'Ondernemer, Sittard',
      rating: 5,
      text: 'Voor ons kantoorpand komt Erwin elke maand. Professioneel, snel en de factuur klopt altijd. Ideaal als je het gewoon goed geregeld wilt hebben.',
    },
    {
      id: 3,
      name: 'Ingrid van den Berg',
      role: 'Woningeigenaar, Beek',
      rating: 5,
      text: 'Na de eerste keer was ik al overtuigd. Hij deed ook de kozijnen mee en gebruikte die osmosewatertechniek — nooit meer strepen. Aanrader!',
    },
  ],

  werkwijze: {
    title: 'Zo Werkt Het',
    description: 'In vier eenvoudige stappen verzorgen wij uw glazenwasklus — van aanvraag tot kristalhelder resultaat.',
    steps: [
      {
        icon: '📞',
        title: 'Afspraak Inplannen',
        description: 'Bel, app of vul het formulier in. Wij nemen binnen 24 uur contact op om een afspraak te maken die u uitkomt.',
      },
      {
        icon: '🔍',
        title: 'Vrijblijvende Inspectie',
        description: 'Bij grotere klussen komen wij eerst langs voor een gratis inspectie en een heldere prijsopgave zonder verrassingen.',
      },
      {
        icon: '🪟',
        title: 'Vakkundig Uitvoeren',
        description: 'Wij werken met osmosewater en professioneel materiaal voor een streepvrij resultaat. Kozijnen en dorpels worden standaard meegenomen.',
      },
      {
        icon: '✅',
        title: 'Controle & Afrekenen',
        description: 'Na afloop inspecteert u het werk samen met Erwin. Betalen kan contant, per Tikkie of op factuur.',
      },
    ],
  },
};
