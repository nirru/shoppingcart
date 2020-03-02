import {takeLatest,put} from 'redux-saga/effects';
import {GET_CART_ITEMS, setCartItems} from '../actions';
import {setApiFetchingStatus} from '../actions/api';
import {API_FETCHED, API_FETCHING} from '../actions/common';
import {PRODUCT} from '../dummy/product';


function * fetchCart() {
  yield put(setApiFetchingStatus(API_FETCHING));
  // const data = {status:true,data:PRODUCT};
  yield put(setApiFetchingStatus(API_FETCHED));
  yield put(setCartItems(PRODUCT));
}

export function* fetchCartSaga() {
  yield takeLatest(GET_CART_ITEMS, fetchCart);
}