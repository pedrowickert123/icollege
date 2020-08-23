import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_FAILURE,
  SIGN_OUT,
} from './types';

export function signInRequest(username, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { username, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}
