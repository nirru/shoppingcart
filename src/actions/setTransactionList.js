import { makeActionCreator } from '../utility';
export const SET_TRANSACTION_LIST = 'SET_TRANSACTION_LIST';
export const setTransactionList = makeActionCreator(SET_TRANSACTION_LIST,'item');
