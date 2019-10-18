import { createReducer } from './../utility';
import {
  DELETE_PLAN,
  SET_PLAN_LIST,
  ADD_PLAN,
} from '../actions';

import {
  fromJS
} from 'immutable';

export const planList = createReducer(null, {
  [SET_PLAN_LIST](state,{item}) {
    return fromJS(item.data);
  },
  [ADD_PLAN](state,{item}) {
    if (state.find(detail=> {
      console.log(detail)
      return detail.id === item.id;
    })) {
      return state.update(detail=>detail.id === item.id,item);
    }else {
      return state.push(item);
    }
  },

  [DELETE_PLAN](state,{id}){
    console.log(id);
    return state.filter(a => a.get('id') !== id);
  }

});