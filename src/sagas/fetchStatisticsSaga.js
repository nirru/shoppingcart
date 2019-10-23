import {takeLatest,put} from 'redux-saga/effects';
import {GET_STATISTICS_LIST, setStatisticsList} from '../actions';


function * fetchStatistics() {
  const response = yield fetch(`${process.env.API_URL}/getStatistics`);
  const data = yield response.json();
  yield put(setStatisticsList(data));
}

export function* fetchStatisticsSaga() {
  yield takeLatest(GET_STATISTICS_LIST, fetchStatistics);
}