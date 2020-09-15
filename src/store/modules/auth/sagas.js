import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { login, password } = payload;

    const response = yield call(api.post, '', {
      login,
      password,
      path: 'v1/PhpLogin/login',
      device: '5d9cee363fbbf286',
      provider: null,
      role: 1,
    });

    const { token, uuid } = response.data.data;

    yield put(signInSuccess(token, uuid));
  } catch (err) {
    Alert.alert(
      'Ops',
      err?.response?.data?.error ||
        'Parece que não encontramos seu documento em nossos registros.'
    );
    yield put(signFailure());
  }
}

export function signOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
