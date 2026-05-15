export interface NavLink {
  label: string;
  path: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface TariefRegel {
  omschrijving: string;
  tarief: string;
}

export interface TariefGroep {
  titel: string;
  regels: TariefRegel[];
}

export interface HousmansConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;

  colors: {
    primary: string;
    primaryDark: string;
    accent: string;
    accentHover: string;
    text: string;
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
  tarieven: TariefGroep[];
  testimonials: Testimonial[];
}
