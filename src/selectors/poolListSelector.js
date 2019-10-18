import {createSelector} from 'reselect';

export const poolListSelector = createSelector(
  state =>state.get('poolList'),
  poolList=> {
    return poolList;
  });

export const itemPoolSelector = (id) => (state) => {
  const entry = poolListSelector(state).find(item=>{
    return item.get('id').toString() === id;
  });
  if (entry) {
    return entry.toJS();
  } else {
    return null;
  }
};