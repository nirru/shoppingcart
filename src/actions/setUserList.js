import { makeActionCreator } from '../utility';
export const SET_USER_LIST = 'SET_USER_LIST';
export const setUserList = makeActionCreator(SET_USER_LIST,'users');
