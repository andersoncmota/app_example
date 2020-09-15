import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import api from './services/api';
import apiInterceptor from './services/apiInterceptor';

import App from './App';

apiInterceptor(api, store);

function Index() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default Index;
