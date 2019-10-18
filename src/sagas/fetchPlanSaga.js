import {takeLatest,put} from 'redux-saga/effects';
import {GET_PLAN_LIST, setPlanList} from '../actions';


function * fetchPlan() {
  const response = yield fetch(`${process.env.API_URL}/listSubscriptionPlan`);
  const data = yield response.json();
  yield put(setPlanList(data));
}

export function* fetchPlanSaga() {
  yield takeLatest(GET_PLAN_LIST, fetchPlan);
}