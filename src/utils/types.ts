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

export type FavouriteType = {
  name: string;
  url: string;
};

export type StateZustand = {
  listFavourites: FavouriteType[];
  addInListFavourites: (favourite: FavouriteType) => void;
};
