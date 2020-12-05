import {put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../redux/actions/actionTypes';

import getListProductByCate from '../networking/getListProductByCate';
import {
  getMoreListProductsFailed,
  getMoreListProductsSuccessed,
} from '../redux/actions';

function* getMoreProduct({idType, page}) {
  try {
    const response = yield getListProductByCate(idType, page);
    yield put(getMoreListProductsSuccessed(response));
  } catch (error) {
    yield put(getMoreListProductsFailed(error));
  }
}

function* watchGetMoreListProduct() {
  yield takeLatest(actionTypes.GET_MORE_LIST_PRODUCTS, getMoreProduct);
}

export default watchGetMoreListProduct;
