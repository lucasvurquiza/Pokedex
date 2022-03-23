/* eslint-disable react-native/no-inline-styles */
import Pokemon from 'api/Pokemon';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TItem} from 'utils/types';
import {POKE_API} from 'utils/urls';
import {firstLetterUpper} from 'utils/utils';

export const PokemonShow = (props: TItem) => {
  const {name, url} = props.item;
  const pokemonId = url.replace(`${POKE_API}pokemon/`, '').replace('/', '');

  return (
    <View
      style={{
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{uri: Pokemon.getImagePokemon(pokemonId)}}
      />
      <Text>{firstLetterUpper(name)}</Text>
    </View>
  );
};
