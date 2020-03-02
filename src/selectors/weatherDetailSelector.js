import {createSelector} from 'reselect';

export const weatherDetailSelector = createSelector(
  state =>state.get('weatherDetail'),
  weatherDetail=> {
    console.log(weatherDetail);
    return weatherDetail;
  });