/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Pokemon from 'api/Pokemon';
import {TAllPokemons} from 'utils/types';
import PokemonShow from 'components/PokemonShow';
import {Loading} from 'components/Loading';
import {POKE_API} from 'utils/urls';
import {FlatListItemSeparator} from 'components/FlatListItemSeparator';
import {LogoPokemon} from 'components/LogoPokemon';
import {InputSearch} from 'components/InputSearch';
import useListByNameStore from 'stores/listByName';

export const ListPokemons = () => {
  const [pokemons, setPokemons] = useState<TAllPokemons>({});
  const [pokemonOffset, setPokemonOffset] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const listByName = useListByNameStore(state => state.listByName);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      if (listByName.length === 0) {
        setLoading(true);
        const response: TAllPokemons = await Pokemon.getAllPokemons();
        setPokemons(response);
        const offset = response?.next?.replace(`${POKE_API}pokemon`, '');
        setPokemonOffset(offset || '');
        setLoading(false);
        return;
      } else {
        return;
      }
    };
    fetchAllPokemons();
  }, [listByName]);

  const loadMoreOnEnd = async () => {
    setIsRefreshing(true);
    const response: TAllPokemons = await Pokemon.getLoadMorePokemons(
      pokemonOffset,
    );
    setPokemons(prevState => ({
      count: response.count,
      next: response.next,
      previous: response.previous,
      results: prevState?.results?.concat(response?.results || []),
    }));
    const offset = response?.next?.replace(`${POKE_API}pokemon`, '');
    setPokemonOffset(offset || '');
    setIsRefreshing(false);
  };

  const renderFooter = () => {
    if (!isRefreshing) {
      return null;
    }
    return (
      <View style={{marginTop: 10}}>
        <Loading />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <LogoPokemon />
        <InputSearch />
      </View>
    );
  };

  const renderItem = ({item}: any) => (
    <PokemonShow name={item?.name} url={item?.url} />
  );

  return (
    <>
      {loading ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <Loading />
        </View>
      ) : (
        <View style={{backgroundColor: '#FFFFFF'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={listByName.length !== 0 ? listByName : pokemons?.results}
            keyExtractor={pokemon =>
              pokemon.url.replace(`${POKE_API}pokemon/`, '').replace('/', '')
            }
            renderItem={renderItem}
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            contentInset={{bottom: 10}}
            onEndReached={loadMoreOnEnd}
            onEndReachedThreshold={0.4}
            ListFooterComponent={renderFooter}
            ListHeaderComponent={renderHeader}
            ItemSeparatorComponent={FlatListItemSeparator}
          />
        </View>
      )}
    </>
  );
};
