import { takeLatest, call, put, all } from 'redux-saga/effects';
import { notification } from 'antd';
import history from '../../../services/history';
import { api } from '../../../services';
import { signInSuccess, signFailure } from './actions';
import { SIGN_OUT, SIGN_IN_REQUEST } from './types';

function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, 'auth', {
      username,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token.token}`;

    yield put(signInSuccess(token, user));

    window.location.href = '/students';
  } catch (err) {
    if (err.response) {
      notification.open({
        message: 'Opsss!',
        description: err.response.data.message,
      });
    } else {
      notification.open({
        message: 'Opsss!',
        description: 'Houve um erro. Por favor, verifique!',
      });
    }

    yield put(signFailure());
  }
}

function setToken({ payload }) {
  if (!payload || !payload.auth.token) return;

  const { token } = payload.auth.token;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_OUT, signOut),
]);
