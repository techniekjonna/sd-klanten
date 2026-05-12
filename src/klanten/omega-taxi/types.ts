export interface NavLink {
  label: string;
  path: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TariefRegel {
  omschrijving: string;
  tarief: string;
}

export interface TariefCategorie {
  titel: string;
  regels: TariefRegel[];
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface OmegaTaxiConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  colors: {
    primary: string;
    primaryLight: string;
    accent: string;
    accentHover: string;
    text: string;
    background: string;
  };
  contact: {
    address: string;
    phone: string;
    phoneDisplay: string;
    phone2: string;
    phoneDisplay2: string;
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
  tarieven: TariefCategorie[];
  testimonials: Testimonial[];
  services: {
    taxi: { title: string; description: string; items: string[] };
    zakelijk: { title: string; description: string; items: string[] };
    airport: { title: string; description: string; items: string[] };
  };
}
