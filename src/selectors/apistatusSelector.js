import {createSelector} from 'reselect';

export const apiStatusSelector = createSelector(
  state =>state.get('api'),
  apiStatus=> {
    return apiStatus;
  });