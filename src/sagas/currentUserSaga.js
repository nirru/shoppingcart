import { take, put, call, apply  } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  GET_CURRENT_USER_INFO,
  setCurrentUser
} from './../actions';
import {history} from '../helper/history';
import {takeLatest} from 'redux-saga/effects';

export function* currentUserSaga() {
  // const { user } =
  // yield take(GET_CURRENT_USER_INFO);
  yield takeLatest(GET_CURRENT_USER_INFO, fetchUser);
}

function* fetchUser({user}) {
  const response = yield call(fetch,`${process.env.API_URL}/adminLogin`,{
    method:'post',
    body: JSON.stringify(user),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const data = yield apply(response, response.json);
  yield put(setCurrentUser(data));
  if (data.status){
    localStorage.setItem('USER',JSON.stringify(data));
    yield call(history.push, '/');
  }
}