import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListPokemons} from 'screens/ListPokemons';
import {Favourites} from 'screens/Favourites';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pokemons"
      screenOptions={{
        tabBarActiveBackgroundColor: 'rgba(255, 224, 49, 0.5)',
        tabBarInactiveBackgroundColor: 'rgba(255, 224, 49, 0.5)',
      }}>
      <Tab.Screen
        name="Pokemons"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="search" size={20} color={color} />
          ),
          tabBarActiveTintColor: '#396BBA',
          tabBarInactiveTintColor: '#000000',
        }}
        component={ListPokemons}
      />
      <Tab.Screen
        name="Favourites"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="align-justify" size={20} color={color} />
          ),
          tabBarActiveTintColor: '#396BBA',
          tabBarInactiveTintColor: '#000000',
        }}
        component={Favourites}
      />
    </Tab.Navigator>
  );
};
