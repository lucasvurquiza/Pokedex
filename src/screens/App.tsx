/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Pokemon from 'api/Pokemon';
import {TAllPokemons} from 'utils/types';
import PokemonShow from 'components/PokemonShow';
import {Loading} from 'components/Loading';
import {POKE_API} from 'utils/urls';

const App = () => {
  const [pokemons, setPokemons] = useState<TAllPokemons>({});
  const [pokemonOffset, setPokemonOffset] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setLoading(true);
      const response: TAllPokemons = await Pokemon.getAllPokemons();
      setPokemons(response);
      const offset = response?.next?.replace(`${POKE_API}pokemon`, '');
      setPokemonOffset(offset || '');
      setLoading(false);
    };
    fetchAllPokemons();
  }, []);

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
          }}>
          <Loading />
        </View>
      ) : (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={pokemons?.results}
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
            onEndReached={loadMoreOnEnd}
            onEndReachedThreshold={0.4}
            ListFooterComponent={renderFooter}
          />
        </View>
      )}
    </>
  );
};

export default App;
