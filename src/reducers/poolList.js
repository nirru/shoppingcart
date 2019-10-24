import { createReducer } from './../utility';
import {
  SET_POOL_LIST,
} from '../actions';

import {
  fromJS
} from 'immutable';

export const poolList = createReducer(null, {
  [SET_POOL_LIST](state,{item}) {
    // console.log(state);
    return fromJS(item.data);
  },
  // [ADD_PLAN](state,{item}) {
  //   if (state.find(detail=> {
  //     console.log(detail)
  //     return detail.id === item.id;
  //   })) {
  //     return state.update(detail=>detail.id === item.id,item);
  //   }else {
  //     return state.push(item);
  //   }
  // },
  //
  // [DELETE_PLAN](state,{id}){
  //   console.log(id);
  //   return state.filter(a => a.get('id') !== id);
  // }

});