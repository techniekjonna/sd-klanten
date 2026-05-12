export interface NavLink {
  label: string;
  path: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TarifRegel {
  omschrijving: string;
  tarief: string;
}

export interface TarifGroep {
  titel: string;
  regels: TarifRegel[];
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface MitaxConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;

  colors: {
    navy: string;
    navyDark: string;
    orange: string;
    orangeHover: string;
    bg: string;
    bgLight: string;
    text: string;
    muted: string;
  };

  contact: {
    address: string;
    city: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    hours: {
      weekday: string;
      weekend: string;
    };
  };

  navigation: NavLink[];

  hero: {
    title: string;
    subtitle: string;
    image: string;
    cta: string;
    ctaLink: string;
  };

  features: Feature[];
  tarieven: TarifGroep[];
  testimonials: Testimonial[];

  diensten: {
    id: string;
    icon: string;
    title: string;
    description: string;
    items: string[];
  }[];

  about: {
    title: string;
    story: string;
    mission: string;
    values: string[];
    image: string;
  };
}
