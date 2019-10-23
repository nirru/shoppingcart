import { makeActionCreator } from '../utility';
export const GET_STATISTICS_LIST = 'GET_POOL_LIST';
export const getStatisticsList = makeActionCreator(GET_STATISTICS_LIST,'item');