import { createReducer } from './../utility';
import {
  SET_CART_ITEMS,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY, DELETE_ITEM, SET_ITEM_QUANTITY
} from '../actions';

import {
  fromJS
} from 'immutable';

export const cartItems = createReducer(null, {
  [SET_CART_ITEMS](state,{items}) {
    return fromJS(items);
  },
  [INCREASE_ITEM_QUANTITY](state,{id,originalPrice}) {

    const index = state.findIndex(a => a.get('id') === id);
    return state
      .update(index,b => b.update('quantity',q=>q+1))
      .update(index,b => b.update('price',q=> {
        const price = b.get('quantity') * parseFloat(originalPrice);
        return price;
      }));
  },
  [DECREASE_ITEM_QUANTITY](state,{id,originalPrice}) {
    const index = state.findIndex(a => a.get('id') === id);
    const value = state.get(index).get('quantity');
    if (value === 1) {
      return state.filter(a => a.get('id') !== id);
    }
    return state
      .update(index,b => b.update('quantity',q=>q-1))
      .update(index,b => b.update('price',q=> {
        const price = b.get('quantity') * parseFloat(originalPrice);
        return price;
      }));
  },
  [SET_ITEM_QUANTITY](state,{id,quantity,originalPrice,size,color}) {
    console.log(id,quantity,originalPrice);
    const index = state.findIndex(a => a.get('id') === id);
    return state
      .update(index,b => b.update('quantity',q=>parseInt(quantity)))
      .update(index,b => b.update('price',q=> {
        const price = parseFloat(quantity) * parseFloat(originalPrice);
        return price;
      }))
      .update(index,b => b.update('size',q=>size))
      .update(index,b => b.update('color',q=>color));
  },
  [DELETE_ITEM](state,{id}) {
    return state.filter(a => a.get('id') !== id);
  }
});