import { Container, Icon } from 'native-base';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharactersScreens from '../screens/CharactersScreens';

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
      </Tab.Navigator>
    </Container>
  );
}
