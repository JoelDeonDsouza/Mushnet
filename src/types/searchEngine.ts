export type SearchEngine = {
  id: string;
  name: string;
  url: string;
  category: 'traditional' | 'privacy' | 'ai';
  ai?: boolean;
  privateFriendly?: boolean;
};
