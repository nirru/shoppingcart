import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {SET_USER_LIST, SET_ACTIVE_USER, DELETE_USER} from '../actions';

export const userList = createReducer(null, {
  [SET_USER_LIST]:(state,action)=> {
    // console.log(action);
    return fromJS(action.users);
  },
  [SET_ACTIVE_USER]:(state,action)=> {
    const index = state .get('data').findIndex(a => a.get('id') === action.id);
    const arry = state.get('data').update(index,b => b.update('is_account_active',q=> q === 1 ? 0 : 1));
    const result = {
      status:state.get(status),
      message:state.get('message'),
      data:arry
    };
    return fromJS(result);
  },
  [DELETE_USER](state,{id}){
    // console.log(state);
    const arry = state .get('data').filter(a => {
      // console.log(a);
      return a.get('id') !== id;
    });
    const result = {
      status:state.get(status),
      message:state.get('message'),
      data:arry
    };
    return fromJS(result);
  }

});
