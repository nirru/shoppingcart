import {createSelector} from 'reselect';

export const poolDetailSelector = createSelector(
  state =>state.get('poolDetail'),
  poolDetail=> {
    console.log(poolDetail);
    return poolDetail;
  });