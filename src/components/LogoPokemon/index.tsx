/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import {POKEMON_LOGO} from 'utils/urls';

export const LogoPokemon = () => {
  return (
    <View>
      <Image
        source={{uri: POKEMON_LOGO}}
        style={{flex: 1, aspectRatio: 3.0, resizeMode: 'contain'}}
      />
    </View>
  );
};
