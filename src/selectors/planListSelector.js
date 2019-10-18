import {createSelector} from 'reselect';

export const planListSelector = createSelector(
  state =>state.get('planList'),
  planList=> {
    return planList;
  });

export const itemPlanSelector = (id) => (state) => {
  const entry = planListSelector(state).find(item=>{
    return item.get('id').toString() === id;
  });
  if (entry) {
    return entry.toJS();
  } else {
    return null;
  }
};