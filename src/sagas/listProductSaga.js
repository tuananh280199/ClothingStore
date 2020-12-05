import {delay, put, select, takeEvery, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../redux/actions/actionTypes';

import getListProductByCate from '../networking/getListProductByCate';
import {
  fetchListProductsFailed,
  fetchListProductsSuccessed,
  hideLoading,
  showLoading,
} from '../redux/actions';

function* fetchListProduct({idType, page}) {
  try {
    yield put(showLoading());
    const response = yield getListProductByCate(idType, page);
    yield put(fetchListProductsSuccessed(response));
  } catch (error) {
    yield put(fetchListProductsFailed(error));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* watchFetchListProduct() {
  yield takeEvery(actionTypes.FETCH_LIST_PRODUCTS, fetchListProduct);
}

export default watchFetchListProduct;
