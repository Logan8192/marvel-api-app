import React from 'react';
import { Button, Footer as NBFooter, FooterTab, Icon, Text } from 'native-base';

export default function Footer() {
  return (
    <NBFooter>
      <FooterTab>
        <Button vertical>
          <Icon type="MaterialIcons" name="group" />
          <Text>Characters</Text>
        </Button>
        <Button vertical>
          <Icon type="Ionicons" name="settings" />
          <Text>Settings</Text>
        </Button>
      </FooterTab>
    </NBFooter>
  );
}
