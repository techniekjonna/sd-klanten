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
  role?: string;
  rating: number;
  text: string;
}

export interface KnolConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    dark: string;
    text: string;
    background: string;
  };
  contact: {
    address: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    hours: {
      weekday: string;
      weekend: string;
      note: string;
    };
  };
  navigation: NavLink[];
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    image: string;
  };
  features: Feature[];
  services: Service[];
  about: {
    title: string;
    story: string;
    mission: string;
    image: string;
    values: string[];
    founded: string;
  };
  testimonials: Testimonial[];
}
