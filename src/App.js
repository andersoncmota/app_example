import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './Routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#111" />
      <Routes />
    </>
  );
};

export default App;
