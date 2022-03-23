/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Pokemon from 'api/Pokemon';
import {TAllPokemons} from 'utils/types';
import {PokemonShow} from 'components/PokemonShow';

const App = () => {
  const [pokemons, setPokemons] = useState<TAllPokemons>();

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const response: TAllPokemons = await Pokemon.getAllPokemons();
      setPokemons(response);
    };
    fetchAllPokemons();
  }, []);

  return (
    <View>
      <FlatList
        data={pokemons?.results}
        keyExtractor={pokemon => pokemon.name}
        renderItem={PokemonShow}
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};

export default App;
