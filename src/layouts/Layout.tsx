import { Container, Icon } from 'native-base';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharactersScreens from '~screens/CharactersScreens';
import ComicsScreens from '~screens/comicsScreens';

export default function Layout() {
  const Tab = createBottomTabNavigator();

  return (
    <Container>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#d32f2f',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Characters"
          component={CharactersScreens}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                type="MaterialIcons"
                name="group"
                style={{ color: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Comics"
          component={ComicsScreens}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon type="FontAwesome" name="book" style={{ color: color }} />
            ),
          }}
        />
      </Tab.Navigator>
    </Container>
  );
}
