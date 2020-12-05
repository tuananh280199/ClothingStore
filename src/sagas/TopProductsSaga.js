import {call, delay, put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../redux/actions/actionTypes';

import initData from '../networking/initData';
import {
  fetchTopProductsFailed,
  fetchTopProductsSuccessed,
  hideLoading,
  showLoading,
} from '../redux/actions';

function* fetchTopProduct() {
  try {
    yield put(showLoading());
    const response = yield call(initData);
    const {product} = response;
    yield put(fetchTopProductsSuccessed(product));
  } catch (error) {
    yield put(fetchTopProductsFailed(error));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* watchFetchTopProduct() {
  yield takeLatest(actionTypes.FETCH_TOP_PRODUCTS, fetchTopProduct);
}

export default watchFetchTopProduct;
