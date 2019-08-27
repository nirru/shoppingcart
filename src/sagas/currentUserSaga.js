import { take, put, call, apply  } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  GET_CURRENT_USER_INFO,
  setCurrentUser
} from './../actions';
import {history} from '../helper/history';
import {SET_CURRENT_USER} from '../actions';
import {takeLatest} from 'redux-saga/effects';

export function* currentUserSaga() {
  console.log('jjjjjjjjj');
  // const { user } =
  yield take(GET_CURRENT_USER_INFO);
  yield takeLatest(SET_CURRENT_USER, fetchUser);
}

function* fetchUser({user}) {

  const response = yield call(fetch,`${process.env.API_URL}/adminLogin`,{
    method:'post',
    body: JSON.stringify(user),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  console.log('dfdfdfd');
  const data = yield apply(response, response.json);
  yield put(setCurrentUser(data));
  console.log(data);
  if (data.status)
    yield call(history.push, '/');
}
