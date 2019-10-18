import {takeLatest,put} from 'redux-saga/effects';
import { GET_POOL_LIST, setPoolList} from '../actions';


function * fetchPool() {
  const response = yield fetch(`${process.env.API_URL}/getPoolList`);
  const data = yield response.json();
  yield put(setPoolList(data));
}

export function* fetchPoolSaga() {
  yield takeLatest(GET_POOL_LIST, fetchPool);
}