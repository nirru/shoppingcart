import { makeActionCreator } from '../utility';
export const GET_TRANSACTION_SEARCH = 'GET_TRANSACTION_SEARCH';
export const getTransactionSearch = makeActionCreator(GET_TRANSACTION_SEARCH,'search','transactions');
