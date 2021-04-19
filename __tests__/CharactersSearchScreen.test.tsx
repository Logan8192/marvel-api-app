import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CharactersScreens from '../src/screens/CharactersScreens';

jest.useFakeTimers();

describe('Character search screen', () => {
  it('Should render correctly', () => {
    const { getAllByPlaceholderText } = render(
      <NavigationContainer>
        <CharactersScreens />,
      </NavigationContainer>,
    );
    expect(getAllByPlaceholderText('Search')).toHaveLength(1);
  });
});
