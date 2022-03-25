/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import {FAVOURITES_LOGO} from 'utils/urls';

export const LogoFavourite = () => {
  return (
    <View>
      <Image
        source={{uri: FAVOURITES_LOGO}}
        style={{flex: 1, aspectRatio: 5.0, resizeMode: 'contain'}}
      />
    </View>
  );
};
