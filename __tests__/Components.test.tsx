import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '~components/Card';

describe('Cards', () => {
  it('Should render with the name and image of the item', () => {
    const nameProp = 'Galactus';
    const imageProp = 'http.image';
    const { getAllByText, getByTestId } = render(
      <Card name={nameProp} imageUrl={imageProp} />,
    );
    expect(getAllByText(nameProp)).toHaveLength(1);
    expect(getByTestId('itemImage').props).toMatchObject({
      source: { uri: imageProp },
    });
  });
});
