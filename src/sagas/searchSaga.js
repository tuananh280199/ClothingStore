import {delay, put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../redux/actions/actionTypes';

import searchProduct from '../networking/searchProduct';
import {filterTaskFailed, filterTaskSuccessed} from '../redux/actions';

function* filterProduct({keyword}) {
  try {
    yield delay(500);
    const response = yield searchProduct(keyword);
    yield put(filterTaskSuccessed(response));
  } catch (error) {
    yield put(filterTaskFailed(error));
  }
}

function* watchFilterProduct() {
  yield takeLatest(actionTypes.FILTER_TASK, filterProduct);
}

export default watchFilterProduct;
