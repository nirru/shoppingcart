import {takeLatest, put, select} from 'redux-saga/effects';
import {GET_POOL_LIST, GET_POOL_SEARCH, GET_USER_SEARCH, setPoolList} from '../actions';
import {poolListSelector} from '../selectors';
import {fromJS} from 'immutable';


function * fetchPool() {
  const response = yield fetch(`${process.env.API_URL}/getPoolList`);
  const data = yield response.json();
  // console.log(data);
  yield put(setPoolList(data));
}

function * searchPool({search,pool}) {
  let filterPool = fromJS(pool).filter(item => {
    return item.get('pool_name').toString().toLowerCase().includes(search)
        || item.get('no_of_deduction_or_members').toString().toLowerCase().includes(search)
        || item.get('total_amount').toString().toLowerCase().includes(search)
        || item.get('reason').toString().toLowerCase().toLowerCase().includes(search);
  });
  const data = {status: true, message: 'Get All Pool', data: filterPool};
  yield put(setPoolList(data));
}

export function* fetchPoolSaga() {
  yield takeLatest(GET_POOL_LIST, fetchPool);
}

export function* searchPoolSaga() {
  yield takeLatest(GET_POOL_SEARCH, searchPool);
}