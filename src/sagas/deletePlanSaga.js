import {takeLatest, put,call, apply} from 'redux-saga/effects';
import {deletePlan, SET_DELETE_PLAN,} from '../actions';
import fetch from 'isomorphic-fetch';


function * deleteMyPlan({id}) {
  const response = yield call(fetch,`${process.env.API_URL}deleteSubscriptionPlan`,{
    method:'post',
    body: JSON.stringify({id:id}),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const data = yield apply(response, response.json);
  if (data.status){
    yield put(deletePlan(id));
  }
}

export function* deletePlanSaga() {
  yield takeLatest(SET_DELETE_PLAN, deleteMyPlan);
}