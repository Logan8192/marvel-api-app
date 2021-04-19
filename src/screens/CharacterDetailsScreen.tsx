import { RouteProp, useRoute } from '@react-navigation/core';
import { Container, Content, H2, Text } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardImage: {
    height: 300,
    flex: 1,
  },

  description: {
    padding: 5,
    margin: 3,
    textAlign: 'justify',
  },

  attributionText: {
    color: 'gray',
    textAlign: 'center',
  },

  characterName: {
    padding: 5,
    textAlign: 'center',
  },
});

type ProfileScreenRouteProp = RouteProp<
  CharactersStackParamList,
  'CharacterDetails'
>;

export default function CharacterDetailsScreen() {
  const route = useRoute<ProfileScreenRouteProp>();
  return (
    <Container>
      <Content>
        <Image
          style={styles.cardImage}
          source={{
            uri: [
              route.params.character.thumbnail.path,
              '.',
              route.params.character.thumbnail.extension,
            ].join(''),
          }}
        />
        <H2 style={styles.characterName}>{route.params.character.name}</H2>
        <Text style={styles.description}>
          {route.params.character.description}
        </Text>
      </Content>
      <Text style={styles.attributionText}>
        Data provided by Marvel. © 2021 MARVEL
      </Text>
    </Container>
  );
}
