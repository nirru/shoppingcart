import { makeActionCreator } from '../utility';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const setActiveUser = makeActionCreator(SET_ACTIVE_USER,'id','active');
