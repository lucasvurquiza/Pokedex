/* eslint-disable react-native/no-inline-styles */
import Pokemon from 'api/Pokemon';
import React, {memo} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {TResults} from 'utils/types';
import {POKE_API} from 'utils/urls';
import {firstLetterUpper} from 'utils/utils';

const PokemonShow = (props: TResults) => {
  const {name, url} = props;
  const pokemonId = url.replace(`${POKE_API}pokemon/`, '').replace('/', '');
  const pokemonImage = Pokemon.getImagePokemon(pokemonId);

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${hue}, 100%, 75%)`;
    return randomColor;
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: getRandomPastelColor(),
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
      }}>
      <Image
        style={{
          width: 70,
          height: 70,
          borderWidth: 1,
          margin: 10,
        }}
        source={{uri: pokemonImage}}
      />
      <Text>{firstLetterUpper(name)}</Text>
    </TouchableOpacity>
  );
};

export default memo(PokemonShow);
