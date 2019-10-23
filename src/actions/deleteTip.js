import { makeActionCreator } from '../utility';
export const DELETE_TIP = 'DELETE_TIP';
export const deleteTip = makeActionCreator(DELETE_TIP,'id');