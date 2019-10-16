import {takeLatest,call} from 'redux-saga/effects';
import {SET_ACTIVE_USER} from '../actions/setActiveUser';

function * activeUser({id,active}) {
  const response = yield call(fetch,`${process.env.API_URL}activeDeactiveUserAccount/${id}`,{
    method:'post',
    body: JSON.stringify({'is_account_active':active}),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  if (response.status !== 200 ){
    alert('Something went wrong, please try again');
  }
  // console.log(data);
  // const items = yield select(userListSelector);
  // console.log(items);
  // yield put(setActiveUser(items));
}

export function* activeUserSaga() {
  yield takeLatest(SET_ACTIVE_USER, activeUser);
}