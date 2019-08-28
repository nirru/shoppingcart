import {takeLatest,put} from 'redux-saga/effects';
import {setUserList} from '../actions';
import {GET_USER_LIST} from '../actions/getUserList';

function * fetchUsers() {
  const response = yield fetch(`${process.env.API_URL}/users`);
  const data = yield response.json();
  yield put(setUserList(data));
}

export function* fetchUserSaga() {
  yield takeLatest(GET_USER_LIST, fetchUsers);
}