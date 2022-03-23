export type TResults = {
  name: string;
  url: string;
};

export type TAllPokemons = {
  count?: number;
  next?: string;
  previous?: string | null;
  results?: Array<TResults>;
};

export type TItem = {
  item: TResults;
};
