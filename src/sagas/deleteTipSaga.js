import {takeLatest, put,call, apply} from 'redux-saga/effects';
import { deleteTip, SET_DELETE_TIP,} from '../actions';
import fetch from 'isomorphic-fetch';


function * deleteMyTip({id}) {
  const response = yield call(fetch,`${process.env.API_URL}deleteTips`,{
    method:'post',
    body: JSON.stringify({tips_id:id}),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const data = yield apply(response, response.json);
  if (data.status){
    yield put(deleteTip(id));
  }
}

export function* deleteTipSaga() {
  yield takeLatest(SET_DELETE_TIP, deleteMyTip);
}