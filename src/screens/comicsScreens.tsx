import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ComicSearchScreen from '~screens/ComicsSearchScreen';
import ComicDetailsScreen from '~screens/ComicsDetailsScreen';

export default function ComicsScreens() {
  const ComicsStack = createStackNavigator<ComicsStackParamList>();

  return (
    <ComicsStack.Navigator>
      <ComicsStack.Screen
        name="ComicSearch"
        component={ComicSearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <ComicsStack.Screen
        name="ComicDetails"
        component={ComicDetailsScreen}
        options={{
          headerStyle: { backgroundColor: '#d32f2f' },
          headerTitle: 'Comic Details',
          headerTintColor: 'white',
        }}
      />
    </ComicsStack.Navigator>
  );
}
