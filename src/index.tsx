import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from 'routes/BottomTab';
// import {ListPokemons} from 'screens/ListPokemons';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
  // return <ListPokemons />;
};
