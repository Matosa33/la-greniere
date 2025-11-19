export interface Wine {
  id: string;
  name: string;
  vintage?: string;
  appellation: string;
  type: 'Red' | 'White' | 'Rose';
  description: string;
  tastingNotes: string;
  // Pour les vins sans assemblage précis % dans le texte, on peut le laisser optionnel ou vide
  blend?: { name: string; percentage?: number }[]; 
  soil?: string;
  aging?: string;
  production: string;
  critic?: string;
  score?: string;
  image: string;
  tag: 'Icon' | 'Classic' | 'Innovation';
  technicalSheetUrl?: string; 
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface StatData {
  name: string;
  value: number;
  fill?: string;
  [key: string]: any;
}