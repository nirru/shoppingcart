import {takeLatest,put} from 'redux-saga/effects';
import {GET_TIP_LIST, GET_TIP_SEARCH, GET_USER_SEARCH, setTipList, setUserList} from '../actions';
import {fromJS} from 'immutable';


function * fetchTip() {
  const response = yield fetch(`${process.env.API_URL}/getTips`);
  const data = yield response.json();
  console.log(data);
  yield put(setTipList(data));
}

function * searchTip({search,tip}) {
  // const user1 = yield select(userListSelector);
  const abc = fromJS(tip).filter(item=> {
    return item.get('tips_title').toLowerCase().includes(search)
      || item.get('tips_description').toLowerCase().includes(search)
      || item.get('tips_id').toString().toLowerCase().includes(search);
  });
  const data = {status: true, message: 'Get all Tips', data: abc};
  yield put(setTipList(data));
}

export function* fetchTipSaga() {
  yield takeLatest(GET_TIP_LIST, fetchTip);
}

export function* searchTipSaga() {
  yield takeLatest(GET_TIP_SEARCH, searchTip);
}