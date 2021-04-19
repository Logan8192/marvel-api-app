import { Container, Content, Spinner, Text } from 'native-base';
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL, PUBLIC_KEY, HASH } from '@env';
import HeaderSearchBar from '../components/HeaderSearchBar';
import Card from '../components/Card';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  attributionText: {
    color: 'gray',
    alignSelf: 'center',
  },
});

export default function CharacterSearchScreen() {
  const navigation = useNavigation();
  const defaultCharacters: Character[] = [];

  const [charactersData, setCharactersData]: [
    Character[],
    (characters: Character[]) => void,
  ] = useState(defaultCharacters);

  const [isLoading, setLoading] = useState(false);
  const [isResultsEmpty, setResultsEmpty] = useState(false);
  const [isAttributionVisible, setAttributionVisible] = useState(false);

  function searchCharacters(criteria: String) {
    setResultsEmpty(false);
    setAttributionVisible(false);
    setLoading(true);
    setCharactersData([]);
    axios
      .get(`${API_URL}/characters`, {
        params: {
          ts: 1,
          nameStartsWith: criteria,
          apikey: PUBLIC_KEY,
          hash: HASH,
        },
      })
      .then((res) => {
        if (res.data.data.results.length === 0) {
          setResultsEmpty(true);
        } else {
          setAttributionVisible(true);
          setCharactersData(res.data.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <HeaderSearchBar handleSubmit={searchCharacters} />
      <Content>
        {isLoading ? <Spinner color="red" testID="loadingSpinner" /> : null}
        {isResultsEmpty ? <Text>No characters found.</Text> : null}
        {charactersData.map((character) => (
          <TouchableOpacity
            key={character.id}
            delayPressIn={500}
            onPressIn={() =>
              navigation.navigate('CharacterDetails', {
                character: character,
              })
            }>
            <Card
              name={character.name}
              imageUrl={[
                character.thumbnail.path,
                '.',
                character.thumbnail.extension,
              ].join('')}
            />
          </TouchableOpacity>
        ))}
      </Content>
      {isAttributionVisible ? (
        <Text style={styles.attributionText}>
          Data provided by Marvel. © 2021 MARVEL
        </Text>
      ) : null}
    </Container>
  );
}
