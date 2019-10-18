import {takeLatest,put} from 'redux-saga/effects';
import { GET_TRANSACTION_LIST,  setTransactionList} from '../actions';


function * fetchTransaction() {
  const response = yield fetch(`${process.env.API_URL}/getTransactionHistory`);
  const data = yield response.json();
  console.log(data);
  yield put(setTransactionList(data));
}

export function* fetchTransactionSaga() {
  yield takeLatest(GET_TRANSACTION_LIST, fetchTransaction);
}