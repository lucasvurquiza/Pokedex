import React, {useState} from 'react';
import {TResults} from 'utils/types';
import {FavouritesContext} from './FavouritesContext';

export const FavouritesProvider: React.FC = ({children}) => {
  const [listFavourites, setListFavourites] = useState<Array<TResults>>([]);

  return (
    <FavouritesContext.Provider value={{listFavourites, setListFavourites}}>
      {children}
    </FavouritesContext.Provider>
  );
};
