import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content as ContentNative } from 'native-base';

import Header from '../header';
import { colors } from '../../styles';

export const Content = (props) => (
  <Container style={{ flex: 1 }}>
    {!props.noHeader && <Header {...props} />}
    <ContentNative style={{ flex: 1 }} {...props} />
  </Container>
);
