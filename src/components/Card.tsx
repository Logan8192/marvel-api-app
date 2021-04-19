import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card as NBCard, CardItem, Body, Text } from 'native-base';

interface Props {
  name: string;
  imageUrl: string;
}

const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    flex: 1,
  },
});

export default function Card({ name, imageUrl }: Props) {
  return (
    <NBCard>
      <CardItem>
        <Body>
          <Text>{name}</Text>
        </Body>
      </CardItem>
      <CardItem cardBody>
        <Image
          testID="itemImage"
          style={styles.cardImage}
          source={{ uri: imageUrl }}
        />
      </CardItem>
    </NBCard>
  );
}
