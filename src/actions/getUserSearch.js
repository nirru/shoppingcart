import { makeActionCreator } from '../utility';
export const GET_USER_SEARCH = 'GET_USER_SEARCH';
export const getUserSearch = makeActionCreator(GET_USER_SEARCH,'search','users');
