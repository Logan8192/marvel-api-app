import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterSearchScreen from './CharacterSearchScreen';
import CharacterDetailsScreen from './CharacterDetailsScreen';

export default function CharactersScreens() {
  const CharactersStack = createStackNavigator<CharactersStackParamList>();

  return (
    <CharactersStack.Navigator>
      <CharactersStack.Screen
        name="CharacterSearch"
        component={CharacterSearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <CharactersStack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
        options={{
          headerStyle: { backgroundColor: '#d32f2f' },
          headerTitle: 'Character Details',
          headerTintColor: 'white',
        }}
      />
    </CharactersStack.Navigator>
  );
}
