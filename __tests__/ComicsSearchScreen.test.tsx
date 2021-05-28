import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import ComicsScreens from '~screens/comicsScreens';

jest.useFakeTimers();

describe('Character search screen', () => {
  it('Should render correctly', () => {
    const { getAllByPlaceholderText } = render(
      <NavigationContainer>
        <ComicsScreens />,
      </NavigationContainer>,
    );
    expect(getAllByPlaceholderText('Search')).toHaveLength(1);
  });
});
