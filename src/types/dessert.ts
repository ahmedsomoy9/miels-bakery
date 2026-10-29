export interface DessertItem {
  id: string;
  name: string;
  tagline: string;
  category: 'Tiramisu' | 'Brownie' | 'Gift Box' | 'Special';
  description: string;
  tastingNotes: string[];
  features: string[];
  image: string;
  isAuthenticPhoto: boolean;
  typewrittenNote?: string;
  badge?: string;
  accentColor: string;
}

export interface TiramisuLayer {
  id: string;
  name: string;
  subname: string;
  description: string;
  tastingNote: string;
  color: string;
  heightOffset: number;
}
