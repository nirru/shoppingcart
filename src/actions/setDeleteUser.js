import { makeActionCreator } from '../utility';
export const SET_DELETE_USER = 'SET_DELETE_USER';
export const setDeleteUser = makeActionCreator(SET_DELETE_USER,'id');