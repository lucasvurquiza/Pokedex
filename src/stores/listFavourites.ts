import create from 'zustand';
import {FavouriteType, StateZustand} from 'utils/types';

const useListFavouritesStore = create<StateZustand>(set => ({
  listFavourites: [],
  addInListFavourites: (favourite: FavouriteType) => {
    set(state => ({listFavourites: [...state.listFavourites, favourite]}));
  },
}));

export default useListFavouritesStore;
