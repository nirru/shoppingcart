import {createSelector} from 'reselect';

export const planListSelector = createSelector(
  state =>state.get('planList'),
  planList=> {
    return planList;
  });

export const itemPlanSelector = (id) => (state) => {
  // console.log(id);
  // console.log(planListSelector(state));
  const entry = planListSelector(state).find(item=>{
    // console.log(item.toJS());
    console.log(item.get('id'));
    return item.get('id').toString() === id;
  });
  console.log(entry.toJS());
  if (entry) {
    return entry.toJS();
  } else {
    return null;
  }
};