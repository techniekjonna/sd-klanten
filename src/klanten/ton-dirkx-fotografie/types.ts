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
  priceLabel?: string;
  icon: string;
  features?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface OpeningsHours {
  maandag: string;
  dinsdag: string;
  woensdag: string;
  donderdag: string;
  vrijdag: string;
  zaterdag: string;
}

export interface TonDirkxConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;

  colors: {
    primary: string;
    primaryHover: string;
    primaryDark: string;
    primaryLight: string;
    text: string;
    background: string;
  };

  contact: {
    address: string;
    phone: string;
    mobile: string;
    email: string;
    hours: OpeningsHours;
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

  about: {
    title: string;
    story: string;
    mission: string;
    image: string;
    values: string[];
  };

  testimonials: Testimonial[];
}
