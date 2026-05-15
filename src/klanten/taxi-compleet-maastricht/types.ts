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
  icon: string;
  features?: string[];
}

export interface Airport {
  name: string;
  country: string;
  flag: string;
  time: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  rating: number;
  text: string;
}

export interface TaxiCompleetConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    primaryHover: string;
    accent: string;
    text: string;
    background: string;
    lightBg: string;
  };
  contact: {
    address: string;
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
    subtitle: string;
    image: string;
  };
  features: Feature[];
  services: Service[];
  airports: Airport[];
  serviceArea: string[];
  testimonials: Testimonial[];
  about: {
    story: string;
    mission: string;
    image: string;
    values: string[];
  };
}
