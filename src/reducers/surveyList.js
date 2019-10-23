import { createReducer } from './../utility';
import { SET_SURVEY_LIST,
} from '../actions';

import {
  fromJS
} from 'immutable';

export const surveyList = createReducer(null, {
  [SET_SURVEY_LIST](state,{item}) {
    return fromJS(item.data);
  },


});