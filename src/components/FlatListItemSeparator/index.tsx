/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export const FlatListItemSeparator = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          height: 1,
          backgroundColor: '#000',
          width: '80%',
        }}
      />
    </View>
  );
};
