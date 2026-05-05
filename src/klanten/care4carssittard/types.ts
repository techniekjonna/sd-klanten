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

export interface Care4CarsConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    text: string;
    background: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: {
      weekdays: string;
      friday: string;
      weekend: string;
    };
  };
  navigation: NavLink[];
  hero: {
    title: string;
    titleSub: string;
    subtitle: string;
    image: string;
    cta: string;
    ctaLink: string;
    ctaSecondary: string;
    ctaSecondaryLink: string;
  };
  werkzaamheden: {
    id: string;
    title: string;
    short: string;
    full: string;
    icon: string;
  }[];
  werkwijze: {
    icon: string;
    title: string;
    description: string;
  }[];
}
