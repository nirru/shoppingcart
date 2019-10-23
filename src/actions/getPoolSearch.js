import { makeActionCreator } from '../utility';
export const GET_POOL_SEARCH = 'GET_POOL_SEARCH';
export const getPoolSearch = makeActionCreator(GET_POOL_SEARCH,'search','pool');
