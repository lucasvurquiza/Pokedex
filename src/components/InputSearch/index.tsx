/* eslint-disable react-native/no-inline-styles */
import Pokemon from 'api/Pokemon';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import useListByNameStore from 'stores/listByName';

export const InputSearch = () => {
  const listByName = useListByNameStore(state => state.listByName);
  const addInListByName = useListByNameStore(state => state.addInListByName);
  const removeListByName = useListByNameStore(state => state.removeListByName);
  const [pokemonName, setPokemonName] = useState('');

  const fetchPokemonByName = async () => {
    const response = await Pokemon.getPokemonByName(pokemonName);
    addInListByName(response);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
          <TextInput
            onChangeText={name => setPokemonName(name)}
            value={pokemonName}
            placeholder="Digite o nome do Pokémon"
          />
        </View>
        <View
          style={{
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => fetchPokemonByName()}>
            <Icon name="search" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {listByName.length !== 0 && (
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#000000',
            backgroundColor: '#CCCCFF',
          }}
          onPress={() => removeListByName()}>
          <Text
            style={{
              margin: 10,
              color: '#000000',
            }}>
            Limpar Busca
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
