import create from 'zustand';
import {ResponseType, StateZustandByName} from 'utils/types';

const useListByNameStore = create<StateZustandByName>(set => ({
  listByName: [],
  addInListByName: (searchByName: ResponseType[]) => {
    set(() => ({listByName: searchByName}));
  },
  removeListByName: () => {
    set(() => ({listByName: []}));
  },
}));

export default useListByNameStore;
