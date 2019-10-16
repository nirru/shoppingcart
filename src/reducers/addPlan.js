import { createReducer } from './../utility';
import { ADD_PLAN_DETAILS } from '../actions';
export const appPlan = createReducer([], {
  [ADD_PLAN_DETAILS](state,{item}) {
    if (state.find(detail=>detail.id === item.id)) {
      return state.update(detail=>detail.id === item.id,item);
    } else {
      return state.push(item);
    }
  }
});