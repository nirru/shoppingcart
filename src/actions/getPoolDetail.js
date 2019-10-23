import { makeActionCreator } from '../utility';
export const GET_POOL_DETAIL = 'GET_POOL_DETAIL';
export const getPoolDetail = makeActionCreator(GET_POOL_DETAIL,'id');
