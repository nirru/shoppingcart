import {createSelector} from 'reselect';

export const cartItemSelector = createSelector(
  state =>state.get('cartItems'),
  cartItems=> {
    return cartItems;
  });