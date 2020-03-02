import { makeActionCreator } from '../utility';
export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const getCartItems = makeActionCreator(GET_CART_ITEMS,'items');
