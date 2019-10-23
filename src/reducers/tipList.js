import { createReducer } from './../utility';
import {
  DELETE_TIP,
  SET_TIP_LIST,
} from '../actions';

import {
  fromJS
} from 'immutable';

export const tipList = createReducer(null, {
  [SET_TIP_LIST](state,{item}) {
    return fromJS(item.data);
  },
  [DELETE_TIP](state,{id}){
    return state.filter(a => a.get('tips_id') !== id);
  }

});