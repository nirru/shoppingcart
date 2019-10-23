import {createSelector} from 'reselect';

export const statisticsListSelector = createSelector(
  state =>state.get('statisticsList'),
  statistics=> {
    return statistics;
  });

