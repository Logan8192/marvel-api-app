import React from 'react';
import { Header as NBHeader, Body, Title } from 'native-base';

interface HeaderProps {
  titleText: String;
}

export default function Header({ titleText }: HeaderProps) {
  return (
    <NBHeader>
      <Body>
        <Title>{titleText}</Title>
      </Body>
    </NBHeader>
  );
}
