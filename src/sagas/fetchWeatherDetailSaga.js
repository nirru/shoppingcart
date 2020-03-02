import {takeLatest,put} from 'redux-saga/effects';
import {apiFetching, GET_WEATHER_DETAIL, setWeatherDetail} from '../actions';
import {setApiFetchingStatus} from '../actions/api';
import {API_FETCHED, API_FETCHING} from '../actions/common';


function * fetchWeatherDetail({city}) {
  yield put(setApiFetchingStatus(API_FETCHING));
  const response = yield fetch(`${process.env.API_URL}weather?city=${city}`);
  const data = yield response.json();
  yield put(setApiFetchingStatus(API_FETCHED));
  yield put(setWeatherDetail(data));
}

export function* fetchWeatherDetailSaga() {
  yield takeLatest(GET_WEATHER_DETAIL, fetchWeatherDetail);
}