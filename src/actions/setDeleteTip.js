import { makeActionCreator } from '../utility';
export const SET_DELETE_TIP = 'SET_DELETE_TIP';
export const setDeleteTip = makeActionCreator(SET_DELETE_TIP,'id');