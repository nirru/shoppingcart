import {createSelector} from 'reselect';

export const weatherDetailSelector = createSelector(
  state =>state.get('weatherDetail'),
  weatherDetail=> {
    return weatherDetail;
  });