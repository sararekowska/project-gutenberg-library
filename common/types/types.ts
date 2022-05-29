export type Book = {
  agents: {
    id: number;
    person: string;
  }[];
  bookshelves: string[];
  description: string;
  downloads: number;
  id: number;
  languages: string[];
  license: string;
  resources: {
    id: number;
    type: string;
    uri: string;
  }[];
  subjects: string[];
  title: string;
  type: string;
};

export type Resource = {
  id: number;
  type: string;
  uri: string;
};
