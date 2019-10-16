import {takeLatest, call, apply} from 'redux-saga/effects';
import {SET_ADD_PLAN} from '../actions';
import fetch from 'isomorphic-fetch';
import {history} from '../helper/history';


function * addMyPlan({item}) {
  const response = yield call(fetch,`${process.env.API_URL}/createSubscriptionPlan`,{
    method:'post',
    body: JSON.stringify(item),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const data = yield apply(response, response.json);
  console.log(data);
  if (data.status){
    // yield put(updatePlan(data));
    alert('Plan created successfully');
    history.goBack();
  }

}

export function* createPlanSaga() {
  yield takeLatest(SET_ADD_PLAN, addMyPlan);
}