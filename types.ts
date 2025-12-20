export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  category: 'hair' | 'nails' | 'makeup' | 'academy';
  isAcademy?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  span?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}