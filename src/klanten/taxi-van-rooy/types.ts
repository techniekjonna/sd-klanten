export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  slug: string;
  icon: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
}

export interface Feature {
  icon: string;
  stat: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface Airport {
  name: string;
  city: string;
  distance: string;
}

export interface BookingFormState {
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: number;
  returnTrip: boolean;
}

export interface TaxiVanRooyConfig {
  basePath: string;
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  logo: string;
  colors: {
    primary: string;
    primaryDark: string;
    dark: string;
    text: string;
    background: string;
    surface: string;
  };
  contact: {
    address: string;
    city: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    hours: string;
  };
  navigation: NavLink[];
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    image: string;
  };
  features: Feature[];
  services: Service[];
  airports: Airport[];
  testimonials: Testimonial[];
  about: {
    title: string;
    description: string;
    image: string;
    stats: { label: string; value: string }[];
  };
}
