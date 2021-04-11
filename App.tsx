import React from 'react';
import { Container } from 'native-base';
import Layout from './src/layouts/layout';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Container>
      <Layout>
      </Layout>
    </Container>
  );
};

export default App;
