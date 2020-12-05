import {call, delay, takeLatest, put} from 'redux-saga/effects';
import * as actionTypes from '../redux/actions/actionTypes';

import initData from '../networking/initData';
import {
  fetchTypesFailed,
  fetchTypesSuccessed,
  hideLoading,
  showLoading,
} from '../redux/actions';

function* fetchTypes() {
  try {
    yield put(showLoading());
    const response = yield call(initData);
    const {type} = response;
    yield put(fetchTypesSuccessed(type));
  } catch (error) {
    yield put(fetchTypesFailed(error));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* watchFetchTypes() {
  yield takeLatest(actionTypes.FETCH_TYPES, fetchTypes);
}

export default watchFetchTypes;
