import { createReducer } from './../utility';
import {
  SET_POOL_DETAIL,
} from '../actions';

import {
  fromJS
} from 'immutable';

export const poolDetail = createReducer(null, {
  [SET_POOL_DETAIL](state,{item}) {
    return fromJS(item);
  },

});