import { makeActionCreator } from '../utility';
export const GET_TRANSACTION_LIST = 'GET_TRANSACTION_LIST';
export const getTransactionList = makeActionCreator(GET_TRANSACTION_LIST,'item');