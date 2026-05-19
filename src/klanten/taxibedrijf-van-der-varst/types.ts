export interface VanDerVarstConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  founded: number;

  colors: {
    primary: string;
    primaryHover: string;
    accent: string;
    accentHover: string;
    light: string;
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
    };
  };

  navigation: { label: string; path: string }[];

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

  features: { icon: string; title: string; description: string }[];

  services: {
    id: string;
    name: string;
    description: string;
    icon: string;
    features: string[];
  }[];

  about: {
    title: string;
    story: string;
    mission: string;
    image: string;
    values: string[];
  };

  tarieven: {
    omschrijving: string;
    tarief: string;
  }[];

  testimonials: {
    id: number;
    name: string;
    role: string;
    rating: number;
    text: string;
  }[];

  serviceArea: string[];
}
