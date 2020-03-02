import {  put } from 'redux-saga/effects';



import {increaseItemQuantity} from '../actions';

// export function* handleIncreaseItemQuantity({id}) {
//   yield put(setItemQuantityFetchStatus(FETCHING));
//   yield put(setItemQuantityFetchStatus(FETCHED));
//   yield put(increaseItemQuantity(id));
// }

// export function* handleDecreaseItemQuantity({id, local}) {
//   yield put(setItemQuantityFetchStatus(FETCHED));
// }


export function* itemQuantitySaga() {
  yield [
    // takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity),
    // takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity)
  ];
}