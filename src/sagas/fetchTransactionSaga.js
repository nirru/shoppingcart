import {takeLatest,put} from 'redux-saga/effects';
import {
  GET_TRANSACTION_LIST,
  GET_TRANSACTION_SEARCH,
  GET_USER_SEARCH,
  setTransactionList,
  setUserList
} from '../actions';
import {fromJS} from 'immutable';


function * fetchTransaction() {
  const response = yield fetch(`${process.env.API_URL}/getTransactionHistory`);
  const data = yield response.json();
  console.log(data);
  yield put(setTransactionList(data));
}

function * searchTransaction({search,transactions}) {
  // const user1 = yield select(userListSelector);
  const abc = fromJS(transactions).filter(item=> {
    return item.get('name').toLowerCase().includes(search)
      || item.get('transaction_amount').toString().toLowerCase().includes(search)
      || item.get('transaction_message').toString().toLowerCase().includes(search)
      || item.get('pool_id').toString().toLowerCase().includes(search)
      || item.get('plan_id').toString().toLowerCase().includes(search)
      || item.get('user_id').toString().toLowerCase().includes(search)
      || item.get('history_id').toString().toLowerCase().includes(search);
  });
  const data = {status: true, message: 'Get all users', data: abc};
  yield put(setTransactionList(data));
}

export function* fetchTransactionSaga() {
  yield takeLatest(GET_TRANSACTION_LIST, fetchTransaction);
}

export function* searchTransactionSaga() {
  yield takeLatest(GET_TRANSACTION_SEARCH, searchTransaction);
}