/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pokemon from 'api/Pokemon';
import {FavouriteType, TResults} from 'utils/types';
import {POKE_API} from 'utils/urls';
import {firstLetterUpper} from 'utils/utils';
import useListFavouritesStore from 'stores/listFavourites';

const PokemonShow = (props: TResults) => {
  const addFavourite = useListFavouritesStore(
    state => state.addInListFavourites,
  );
  const removeFavourite = useListFavouritesStore(
    state => state.removeOrAddArrayInListFavourites,
  );
  const favourites = useListFavouritesStore(state => state.listFavourites);
  const {name, url} = props;
  const pokemonId = url.replace(`${POKE_API}pokemon/`, '').replace('/', '');
  const pokemonImage = Pokemon.getImagePokemon(pokemonId);
  const contains = favourites.some((item: FavouriteType) => item.name === name);

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${hue}, 100%, 75%)`;
    return randomColor;
  };

  const clickedFavourite = async () => {
    if (contains) {
      removeFavourite(favourites.filter(item => item.name !== name));
      await AsyncStorage.setItem(
        '@favourite_list',
        JSON.stringify(favourites.filter(item => item.name !== name)),
      );
      return;
    } else {
      addFavourite({name, url});
      await AsyncStorage.setItem('@favourite_list', JSON.stringify(favourites));
      return;
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
        {contains ? (
          <Icon name="star" size={35} color="#FFD700" />
        ) : (
          <Icon name="star-o" size={35} color="#000000" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default memo(PokemonShow);
