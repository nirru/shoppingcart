import {createSelector} from 'reselect';

export const surveyListSelector = createSelector(
  state =>state.get('surveyList'),
  surveyList=> {
    return surveyList;
  });

