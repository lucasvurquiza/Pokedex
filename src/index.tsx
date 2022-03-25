import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BottomTab} from 'routes/BottomTab';
import useListFavouritesStore from 'stores/listFavourites';

export const App = () => {
  const addFavouriteList = useListFavouritesStore(
    state => state.removeOrAddArrayInListFavourites,
  );

  useEffect(() => {
    const getValuesAsync = async () => {
      const value = await AsyncStorage.getItem('@favourite_list');
      if (value !== null) {
        addFavouriteList(JSON.parse(value));
      }
    };
    getValuesAsync();
  }, [addFavouriteList]);

  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
  // return <ListPokemons />;
};
