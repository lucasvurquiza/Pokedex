/* eslint-disable react-native/no-inline-styles */
import {FlatListItemSeparator} from 'components/FlatListItemSeparator';
import {LogoFavourite} from 'components/LogoFavourite';
import PokemonShow from 'components/PokemonShow';
import React from 'react';
import {FlatList, View} from 'react-native';
import useListFavouritesStore from 'stores/listFavourites';
import {POKE_API} from 'utils/urls';

export const Favourites = () => {
  const favourites = useListFavouritesStore(state => state.listFavourites);

  const renderItem = ({item}: any) => (
    <PokemonShow name={item?.name} url={item?.url} />
  );

  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favourites}
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
        onEndReachedThreshold={0.4}
        ListHeaderComponent={LogoFavourite}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};
