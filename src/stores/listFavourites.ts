import create from 'zustand';
import {persist} from 'zustand/middleware';
import {FavouriteType, StateZustand} from 'utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useListFavouritesStore = create<StateZustand>(
  persist(
    (set, get) => ({
      listFavourites: [],
      addInListFavourites: (favourite: FavouriteType) => {
        set(() => ({listFavourites: [...get().listFavourites, favourite]}));
      },
      removeOrAddArrayInListFavourites: (favourites: FavouriteType[]) => {
        set(() => ({listFavourites: favourites}));
      },
    }),
    {
      name: '@favourites_list',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default useListFavouritesStore;
