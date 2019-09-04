import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {SET_USER_LIST} from '../actions';

export const userList = createReducer(null, {
  [SET_USER_LIST]:(state,action)=> {
    // console.log(action);
    return fromJS(action.users);
  }
});
