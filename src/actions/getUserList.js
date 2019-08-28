import { makeActionCreator } from '../utility';
export const GET_USER_LIST = 'GET_USER_LIST';
export const getUserList = makeActionCreator(GET_USER_LIST,'id');
