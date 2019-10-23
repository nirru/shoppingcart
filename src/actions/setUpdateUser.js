import { makeActionCreator } from '../utility';
export const SET_UPDATE_USER = 'SET_UPDATE_USER';
export const setUpdateUser = makeActionCreator(SET_UPDATE_USER,'user');