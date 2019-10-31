import {takeLatest, call, apply} from 'redux-saga/effects';
import {SET_UPDATE_TIP} from '../actions';
import fetch from 'isomorphic-fetch';
import {history} from '../helper/history';


function * updateMyTip({tip}) {
  console.log(tip);
  const {tips_id,file,...rest} = tip;
  // console.log(tips_id);
  console.log(rest);
  let formData = new FormData();
  for (let [key, value] of Object.entries(rest)) {
    // console.log(`${key}: ${value}`);
    formData.append(key,value);
  }

  // console.log(profile_picture);
  const response = yield call(fetch,`${process.env.API_URL}updateTips/${tips_id}`,{
    method:'post',
    body: formData,
  });
  const data = yield apply(response, response.json);
  console.log(data);
  if (data.status){
    // yield put(updatePlan(data));
    alert('Tips update successfully');
    history.goBack();
  }else {
    alert(data.message);
  }

}

export function* updateTipSaga() {
  yield takeLatest(SET_UPDATE_TIP, updateMyTip);
}