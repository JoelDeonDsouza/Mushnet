export interface SearchEngine {
  id: string;
  name: string;
  url: string;
  category: 'traditional' | 'privacy' | 'ai';
}

export type SearchMode = 'search' | 'analyze';
