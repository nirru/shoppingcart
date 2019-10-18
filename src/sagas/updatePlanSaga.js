import {takeLatest, call, apply} from 'redux-saga/effects';
import {SET_UPDATE_PLAN} from '../actions';
import fetch from 'isomorphic-fetch';
import {history} from '../helper/history';


function * updateMyPlan(item) {
  console.log(item.plan);
  const {id,...rest} = item.plan;
  const response = yield call(fetch,`${process.env.API_URL}/updateSubscriptionPlan/${item.plan.id}`,{
    method:'post',
    body: JSON.stringify(rest),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const data = yield apply(response, response.json);
  console.log(data);
  if (data.status){
    // yield put(updatePlan(data));
    alert('Plan update successfully');
    history.goBack();
  }else {
    alert(data.message);
  }

}

export function* updatePlanSaga() {
  yield takeLatest(SET_UPDATE_PLAN, updateMyPlan);
}