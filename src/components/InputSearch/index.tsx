/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const InputSearch = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#888',
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 50,
      }}>
      <View style={{flex: 4}}>
        <TextInput onChangeText={() => console.log('helo')} />
      </View>
      <View
        style={{
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => console.log('clicou')}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
