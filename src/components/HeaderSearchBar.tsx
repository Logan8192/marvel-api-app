import React, { useState } from 'react';
import { Header as NBHeader, Icon, Item, Input } from 'native-base';
import { StyleSheet } from 'react-native';

interface Props {
  handleSubmit: (text: string) => void;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d32f2f',
  },
});

export default function HeaderSearchBar({ handleSubmit }: Props) {
  const [value, setValue] = useState('');

  return (
    <NBHeader
      searchBar
      rounded
      androidStatusBarColor="#d32f2f"
      style={styles.header}>
      <Item testID="searchBar">
        <Icon name="ios-search" />
        <Input
          value={value}
          onChangeText={(text) => setValue(text)}
          clearButtonMode="always"
          placeholder="Search"
          onSubmitEditing={() => handleSubmit(value)}
        />
        <Icon type="MaterialIcons" name="clear" onPress={() => setValue('')} />
      </Item>
    </NBHeader>
  );
}
