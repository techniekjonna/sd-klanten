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

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  rating: number;
  text: string;
}
