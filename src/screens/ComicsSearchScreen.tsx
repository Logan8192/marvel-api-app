import { Container, Content, Spinner, Text } from 'native-base';
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL, PUBLIC_KEY, HASH } from '@env';
import HeaderSearchBar from '~components/HeaderSearchBar';
import Card from '~components/Card';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  attributionText: {
    color: 'gray',
    alignSelf: 'center',
  },
});

export default function ComicsSearchScreen() {
  const navigation = useNavigation();
  const defaultComics: Comic[] = [];

  const [comicsData, setComicsData]: [
    Comic[],
    (comics: Comic[]) => void,
  ] = useState(defaultComics);

  const [isLoading, setLoading] = useState(false);
  const [isResultsEmpty, setResultsEmpty] = useState(false);
  const [isAttributionVisible, setAttributionVisible] = useState(false);

  function searchCharacters(criteria: String) {
    setResultsEmpty(false);
    setAttributionVisible(false);
    setLoading(true);
    setComicsData([]);
    axios
      .get(`${API_URL}/comics`, {
        params: {
          ts: 1,
          titleStartsWith: criteria,
          apikey: PUBLIC_KEY,
          hash: HASH,
        },
      })
      .then((res) => {
        if (res.data.data.results.length === 0) {
          setResultsEmpty(true);
        } else {
          setAttributionVisible(true);
          setComicsData(res.data.data.results);
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
        {isResultsEmpty ? <Text>No comics found.</Text> : null}
        {comicsData.map((comic) => (
          <TouchableOpacity
            key={comic.id}
            delayPressIn={500}
            onPressIn={() =>
              navigation.navigate('ComicDetails', {
                comic: comic,
              })
            }>
            <Card
              name={comic.title}
              imageUrl={[
                comic.thumbnail.path,
                '.',
                comic.thumbnail.extension,
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
