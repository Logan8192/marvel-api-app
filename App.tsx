import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './src/layouts/Layout';

const App = () => {
  return (
    <NavigationContainer>
      <Layout />
    </NavigationContainer>
  );
};

export default App;
