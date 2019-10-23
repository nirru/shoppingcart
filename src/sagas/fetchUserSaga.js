import {takeLatest,put,select} from 'redux-saga/effects';
import {GET_USER_SEARCH, setUserList} from '../actions';
import {GET_USER_LIST} from '../actions/getUserList';
import {fromJS} from 'immutable';

function * fetchUsers() {
  const response = yield fetch(`${process.env.API_URL}/users`);
  const data = yield response.json();
  // console.log(data);
  yield put(setUserList(data));
}
function * searchUsers({search,users}) {
  // const user1 = yield select(userListSelector);
  const abc = fromJS(users).filter(item=> {
    return item.get('email').toLowerCase().includes(search)
      || item.get('first_name').toLowerCase().includes(search)
      || item.get('last_name').toLowerCase().includes(search)
      || item.get('date_of_birth').toLowerCase().includes(search);
  });
  const data = {status: true, message: 'Get all users', data: abc};
  yield put(setUserList(data));
}



export function* fetchUserSaga() {
  yield takeLatest(GET_USER_LIST, fetchUsers);
}

export function* searchUserSaga() {
  yield takeLatest(GET_USER_SEARCH, searchUsers);
}