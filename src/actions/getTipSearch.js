import { makeActionCreator } from '../utility';
export const GET_TIP_SEARCH = 'GET_TIP_SEARCH';
export const getTipSearch = makeActionCreator(GET_TIP_SEARCH,'search','tip');
