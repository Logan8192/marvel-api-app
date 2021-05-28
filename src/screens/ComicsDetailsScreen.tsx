import { RouteProp, useRoute } from '@react-navigation/core';
import { Container, Content, H2, Text } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  comicImage: {
    height: 500,
  },

  info: {
    padding: 5,
    margin: 3,
    textAlign: 'justify',
  },

  attributionText: {
    color: 'gray',
    textAlign: 'center',
  },

  comicName: {
    padding: 5,
    textAlign: 'center',
  },
});

type ComicScreenRouteProp = RouteProp<ComicsStackParamList, 'ComicDetails'>;

export default function ComicDetailsScreen() {
  const route = useRoute<ComicScreenRouteProp>();
  return (
    <Container>
      <Content>
        <Image
          style={styles.comicImage}
          source={{
            uri: [
              route.params.comic.thumbnail.path,
              '.',
              route.params.comic.thumbnail.extension,
            ].join(''),
          }}
        />
        <H2 style={styles.comicName}>{route.params.comic.title}</H2>
        <Text style={styles.info}>{route.params.comic.description}</Text>
      </Content>
      <Text style={styles.attributionText}>
        Data provided by Marvel. © 2021 MARVEL
      </Text>
    </Container>
  );
}
