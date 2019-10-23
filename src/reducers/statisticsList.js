import { createReducer } from './../utility';
import {
  SET_STATISTICS_LIST,
} from '../actions';

import {
  fromJS
} from 'immutable';

export const statisticsList = createReducer(null, {
  [SET_STATISTICS_LIST](state,{item}) {
    return fromJS(item.data);
  },
});