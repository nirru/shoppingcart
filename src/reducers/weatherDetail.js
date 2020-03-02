import { createReducer } from './../utility';
import {
  SET_WEATHER_DETAIL,
} from '../actions';

import {
  fromJS
} from 'immutable';

export const weatherDetail = createReducer(null, {
  [SET_WEATHER_DETAIL](state,{city}) {
    return fromJS(city);
  },

});