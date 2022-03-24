import {createContext} from 'react';
import {TResults} from 'utils/types';

interface IFavouritesContext {
  setListFavourites: (pokemon: Array<TResults>) => void;
  listFavourites: Array<TResults>;
}

export const FavouritesContext = createContext({} as IFavouritesContext);
