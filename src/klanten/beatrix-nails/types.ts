export interface NavLink {
  label: string;
  path: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface NailServiceItem {
  name: string;
  duration: string;
}

export interface NailServiceGroup {
  groupName: string;
  items: NailServiceItem[];
  collapsible?: boolean;
}

export interface NailCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  groups: NailServiceGroup[];
  standaloneItems?: NailServiceItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface BeatrixConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    darkPink: string;
    lightPink: string;
    text: string;
    background: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: {
      maandag: string;
      dinsdag: string;
      woensdag: string;
      donderdag: string;
      vrijdag: string;
      zaterdag: string;
      zondag: string;
    };
  };
  navigation: NavLink[];
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    images: string[];
    cta: string;
    ctaLink: string;
    ctaSecondary: string;
    ctaSecondaryLink: string;
  };
  features: Feature[];
  serviceCategories: NailCategory[];
  about: {
    title: string;
    story: string;
    mission: string;
    image: string;
    galleryImages: string[];
    values: string[];
  };
  testimonials: Testimonial[];
}
