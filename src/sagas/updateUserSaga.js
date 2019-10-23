import {takeLatest, call, apply} from 'redux-saga/effects';
import {SET_UPDATE_USER} from '../actions';
import fetch from 'isomorphic-fetch';
import {history} from '../helper/history';


function * updateMyUser({user}) {
  console.log(user);
  const {id,file,active,...rest} = user;
  // console.log(id);
  let formData = new FormData();
  for (let [key, value] of Object.entries(rest)) {
    // console.log(`${key}: ${value}`);
    formData.append(key,value);
  }

  // console.log(profile_picture);
  const response = yield call(fetch,`${process.env.API_URL}updateUserDetailByAdmin/${id}`,{
    method:'post',
    body: formData,
    // headers: new Headers({
    //   'Content-Type': 'application/json',
    // }),
  });
  const data = yield apply(response, response.json);
  // console.log(data);
  if (data.status){
    // yield put(updatePlan(data));
    alert('User update successfully');
    history.goBack();
  }else {
    alert(data.message);
  }

}

export function* updateUserSaga() {
  yield takeLatest(SET_UPDATE_USER, updateMyUser);
}