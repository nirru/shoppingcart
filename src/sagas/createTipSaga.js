import {takeLatest, call, apply} from 'redux-saga/effects';
import { SET_CREATE_TIP} from '../actions';
import fetch from 'isomorphic-fetch';
import {history} from '../helper/history';


function * createMyTip({item}) {
  let formData = new FormData();
  for (let [key, value] of Object.entries(item)) {
    formData.append(key,value);
  }
  const response = yield call(fetch,`${process.env.API_URL}createTips`,{
    method:'post',
    body: formData,
  });
  const data = yield apply(response, response.json);
  if (data.status){
    alert('Tips created successfully');
    history.goBack();
  }

}

export function* createTipSaga() {
  yield takeLatest(SET_CREATE_TIP, createMyTip);
}