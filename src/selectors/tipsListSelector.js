import {createSelector} from 'reselect';

export const tipListSelector = createSelector(
  state =>state.get('tipList'),
  tipList=> {
    return tipList;
  });

