import create from 'zustand';
import {FavouriteType, StateZustand} from 'utils/types';

const useListFavouritesStore = create<StateZustand>(set => ({
  listFavourites: [],
  addInListFavourites: (favourite: FavouriteType) => {
    set(state => ({listFavourites: [...state.listFavourites, favourite]}));
  },
  removeOrAddArrayInListFavourites: (favourites: FavouriteType[]) => {
    set(() => ({listFavourites: favourites}));
  },
}));

export default useListFavouritesStore;
