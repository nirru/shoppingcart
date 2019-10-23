import {takeLatest,put} from 'redux-saga/effects';
import {GET_POOL_DETAIL, setPoolDetail} from '../actions';


function * fetchPoolDetail({id}) {
  const response = yield fetch(`${process.env.API_URL}/poolDetails/${id}`);
  const data = yield response.json();
  yield put(setPoolDetail(data));
}

export function* fetchPoolDetailSaga() {
  yield takeLatest(GET_POOL_DETAIL, fetchPoolDetail);
}