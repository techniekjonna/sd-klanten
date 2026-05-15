export interface NavLink {
  label: string;
  path: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceLabel?: string;
  icon: string;
  features?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  rating: number;
  text: string;
}

export interface Airport {
  name: string;
  city: string;
  duration: string;
  price: string;
}

export interface PackTaxiConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    accent: string;
    text: string;
    background: string;
  };
  contact: {
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    hours: {
      weekday: string;
      weekend: string;
    };
  };
  navigation: NavLink[];
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    image: string;
    cta: string;
    ctaLink: string;
    ctaSecondary: string;
    ctaSecondaryLink: string;
  };
  features: Feature[];
  services: Service[];
  airports: Airport[];
  about: {
    title: string;
    story: string;
    mission: string;
    image: string;
    values: string[];
  };
  testimonials: Testimonial[];
}
