import {takeLatest,put} from 'redux-saga/effects';
import {GET_SURVEY_LIST, setSurveyList} from '../actions';


function * fetchSurvey() {
  const response = yield fetch(`${process.env.API_URL}/getSurvey`);
  const data = yield response.json();
  yield put(setSurveyList(data));
}

export function* fetchSurveySaga() {
  yield takeLatest(GET_SURVEY_LIST, fetchSurvey);
}