/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

export const LogoPokemon = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../../assets/images/pokemon.png')}
        style={{
          width: '90%',
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};
