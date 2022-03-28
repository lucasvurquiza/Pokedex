import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from 'routes/BottomTab';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};
