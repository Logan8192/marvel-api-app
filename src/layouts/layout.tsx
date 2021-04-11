import { Content } from 'native-base';
import React, { ReactNode } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header titleText="Characters" />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
