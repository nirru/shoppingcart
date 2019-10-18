import {createSelector} from 'reselect';

export const transactionListSelector = createSelector(
  state =>state.get('transactionList'),
  poolList=> {
    return poolList;
  });

export const itemPoolSelector = (id) => (state) => {
  const entry = transactionListSelector(state).find(item=>{
    return item.get('id').toString() === id;
  });
  if (entry) {
    return entry.toJS();
  } else {
    return null;
  }
};