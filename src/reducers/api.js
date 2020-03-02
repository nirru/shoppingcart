import { fromJS} from 'immutable';
import { API_STATUS} from '../actions/common';
import {createReducer} from '../utility';

export const api = createReducer(null, {
  [API_STATUS]:(state,action) => {
    console.log(action.label);
    return action.label;
  },

});
