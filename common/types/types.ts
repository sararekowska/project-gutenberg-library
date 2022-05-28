export type Book = {
  agents: {
    id: number;
    person: string;
  }[];
  id: number;
  resources: {
    id: number;
    type: string;
    uri: string;
  }[];
  subjects: string[];
  title: string;
};
