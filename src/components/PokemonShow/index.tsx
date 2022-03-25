/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pokemon from 'api/Pokemon';
import {FavouriteType, TResults} from 'utils/types';
import {POKE_API} from 'utils/urls';
import {firstLetterUpper} from 'utils/utils';
import useListFavouritesStore from 'stores/listFavourites';

const PokemonShow = (props: TResults) => {
  const addFavourite = useListFavouritesStore(
    state => state.addInListFavourites,
  );
  const favourites = useListFavouritesStore(state => state.listFavourites);
  const {name, url} = props;
  const pokemonId = url.replace(`${POKE_API}pokemon/`, '').replace('/', '');
  const pokemonImage = Pokemon.getImagePokemon(pokemonId);

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${hue}, 100%, 75%)`;
    return randomColor;
  };

  const clickedFavourite = () => {
    const contains = favourites.some(
      (item: FavouriteType) => item.name === name,
    );
    if (contains) {
      console.log('Já está aqui colega');
      return;
    } else {
      addFavourite({name, url});
    }
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
      <TouchableOpacity
        onPress={() => clickedFavourite()}
        style={{
          position: 'absolute',
          right: 10,
        }}>
        <Icon name="star" size={35} color="#A3A300" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default memo(PokemonShow);
