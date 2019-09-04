import { take, put, call, apply  } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {setCurrentUser} from '../actions';
import {history} from '../helper/history';

function* enableUser({id}) {
  const response = yield call(fetch,`${process.env.API_URL}/activeDeactiveUserAccount`,{
    method:'post',
    body: JSON.stringify(id),
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