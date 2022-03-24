import React from 'react';
import {FavouritesProvider} from 'context/Favourites/FavouritesProvider';
import {ListPokemons} from 'screens/ListPokemons';

export const App = () => {
  return (
    <FavouritesProvider>
      <ListPokemons />
    </FavouritesProvider>
  );
};
