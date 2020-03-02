import { makeActionCreator } from '../utility';
export const SET_ITEM_QUANTITY = 'SET_ITEM_QUANTITY';
export const setItemQuantity = makeActionCreator(SET_ITEM_QUANTITY,'id','quantity','originalPrice','size','color');
