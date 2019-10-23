import {takeLatest, put,call, apply} from 'redux-saga/effects';
import {deleteUser, SET_DELETE_USER,} from '../actions';
import fetch from 'isomorphic-fetch';


function * deleteMyUser({id}) {
  console.log(id);
  const response = yield call(fetch,`${process.env.API_URL}deleteUser/${1}`,{
    method:'post',
    body: JSON.stringify({isDeleted:1}),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const data = yield  apply(response, response.json);
  console.log(data);
  if (data.status){
    yield put(deleteUser(id));
  }
}

export function* deleteUserSaga() {
  yield takeLatest(SET_DELETE_USER, deleteMyUser);
}