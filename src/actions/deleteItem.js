import { makeActionCreator } from '../utility';
export const DELETE_ITEM = 'DECREASE_ITEM';
export const deleteItem = makeActionCreator(DELETE_ITEM,'id');
